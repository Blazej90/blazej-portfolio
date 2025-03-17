"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Paperclip, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { contactLocales } from "@/locales/contact";

export default function Contact() {
  const { language } = useLanguage();
  const t = contactLocales[language];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const removeFile = (fileName: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    files.forEach((file) => formData.append("attachments", file));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setStatus(t.successMessage);
        setForm({ name: "", email: "", message: "" });
        setFiles([]);
      } else {
        setStatus(t.errorMessage + data.error);
      }
    } catch {
      setStatus(t.errorMessage);
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
        {t.title}
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
            <CardTitle className="text-xl">{t.formTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <Input
                type="text"
                name="name"
                placeholder={t.namePlaceholder}
                value={form.name}
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder={t.emailPlaceholder}
                value={form.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder={t.messagePlaceholder}
                value={form.message}
                onChange={handleChange}
              />

              <div className="flex flex-col items-start space-y-2 border border-gray-600 p-2 rounded-lg hover:bg-gray-800 transition w-full">
                <label
                  htmlFor="fileInput"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Paperclip size={18} />
                  <span>{t.attachment}</span>
                </label>

                <input
                  id="fileInput"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />

                {files.length > 0 && (
                  <ul className="mt-2 space-y-1 w-full">
                    {files.map((file) => (
                      <li
                        key={file.name}
                        className="flex justify-between items-center px-2 py-1 bg-gray-800 rounded-lg"
                      >
                        <span className="text-sm">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(file.name)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          <X size={16} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button
                type="submit"
                className="mt-4 bg-gray-700 hover:bg-gray-600 flex items-center gap-2 px-6 py-3 text-lg"
              >
                {loading ? t.sending : t.submit} <Send size={18} />
              </Button>

              {status && <p className="mt-4 text-sm text-gray-300">{status}</p>}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
