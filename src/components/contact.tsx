"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("✅ Wiadomość wysłana pomyślnie!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Błąd: " + data.error);
      }
    } catch (error) {
      setStatus("❌ Nie udało się wysłać wiadomości. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="text-4xl font-bold text-gray-200"
      >
        Kontakt
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ amount: 0.3 }}
        className="mt-8"
      >
        <Card className="bg-gray-900 text-white shadow-lg rounded-lg p-6 border-0">
          <CardHeader>
            <CardTitle className="text-xl">Formularz kontaktowy</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <Input
                type="text"
                name="name"
                placeholder="Twoje imię"
                value={form.name}
                onChange={handleChange}
                className="max-w-lg w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Twój e-mail"
                value={form.email}
                onChange={handleChange}
                className="max-w-lg w-full"
              />
              <Textarea
                name="message"
                placeholder="Twoja wiadomość"
                value={form.message}
                onChange={handleChange}
                className="max-w-lg w-full"
              />
              <Button
                type="submit"
                className="mt-4 bg-gray-700 hover:bg-gray-600 flex items-center gap-2 px-6 py-3 text-lg"
                disabled={loading}
              >
                {loading ? "Wysyłanie..." : "Wyślij"} <Send size={18} />
              </Button>
              {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
