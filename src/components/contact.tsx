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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Logika do obsługi wysyłki
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

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ amount: 0.3 }}
        className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
      >
        Masz pytania? Skontaktuj się ze mną za pomocą formularza poniżej.
      </motion.p>

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
                className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 max-w-lg w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Twój e-mail"
                value={form.email}
                onChange={handleChange}
                className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 max-w-lg w-full"
              />
              <Textarea
                name="message"
                placeholder="Twoja wiadomość"
                value={form.message}
                onChange={handleChange}
                className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 max-w-lg w-full"
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="mt-4 bg-gray-700 hover:bg-gray-600 flex items-center gap-2 px-6 py-3 text-lg"
                >
                  <Send size={18} />
                  Wyślij
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
