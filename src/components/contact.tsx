"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, X, Paperclip, CircleCheck, CircleX } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { contactLocales } from "@/locales/contact";
import { Input } from "@/components/ui/aceternity-input";
import { Label } from "@/components/ui/aceternity-label";
import { HoverEffectWrapper } from "@/components/ui/hover-effect-wrapper";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-[2px]", className)}>
    {children}
  </div>
);

export default function Contact() {
  const { language } = useLanguage();
  const t = contactLocales[language];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<{
    title: string;
    description: string;
    success: boolean;
  }>({ title: "", description: "", success: true });

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

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("lang", language);
    files.forEach((file) => formData.append("attachments", file));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setDialogContent({
          title: t.successMessage,
          description: "",
          success: true,
        });
        setForm({ name: "", email: "", message: "" });
        setFiles([]);
      } else {
        setDialogContent({
          title: t.errorMessage,
          description: data.error || "",
          success: false,
        });
      }
    } catch {
      setDialogContent({
        title: t.errorMessage,
        description: "",
        success: false,
      });
    } finally {
      setLoading(false);
      setIsDialogOpen(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 max-w-3xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold tracking-tight"
      >
        {t.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
        className="text-base text-muted-foreground mt-2"
      >
        {t.description}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
        className="mx-auto mt-10 w-full max-w-lg space-y-4 sm:space-y-5"
      >
        <LabelInputContainer>
          <Label htmlFor="name">{t.namePlaceholder}</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={t.nameExample}
            value={form.name}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="email">{t.emailPlaceholder}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t.emailExample}
            value={form.email}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">{t.messagePlaceholder}</Label>
          <HoverEffectWrapper>
            <textarea
              id="message"
              name="message"
              placeholder={t.messageExample}
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="w-full rounded-md border-none bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition duration-300"
            />
          </HoverEffectWrapper>
        </LabelInputContainer>

        <HoverEffectWrapper>
          <div className="relative z-10 flex flex-col items-start space-y-2 border border-border p-3 rounded-lg bg-card w-full focus-within:ring-2 focus-within:ring-ring transition duration-300">
            <label
              htmlFor="fileInput"
              className="flex items-center space-x-2 cursor-pointer text-sm text-muted-foreground"
            >
              <Paperclip size={16} />
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
              <ul className="space-y-1 w-full">
                {files.map((file) => (
                  <li
                    key={file.name}
                    className="flex justify-between items-center px-2 py-1 bg-muted rounded"
                  >
                    <span className="text-sm text-foreground">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-muted-foreground hover:text-destructive transition"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </HoverEffectWrapper>

        <Button
          type="submit"
          disabled={loading}
          className="bg-brand text-white hover:bg-brand-hover"
        >
          {loading ? t.sending : t.submit}
          <Send size={16} className="inline ml-2" />
        </Button>

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent asChild>
            <HoverEffectWrapper className="bg-card border border-border text-foreground shadow-xl w-full max-w-md">
              <div className="p-6 rounded-lg bg-card">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-lg flex items-center gap-2">
                    {dialogContent.success ? (
                      <CircleCheck className="text-emerald-500" />
                    ) : (
                      <CircleX className="text-destructive" />
                    )}
                    {dialogContent.title}
                  </AlertDialogTitle>
                  {dialogContent.description && (
                    <AlertDialogDescription className="text-sm text-muted-foreground mt-2">
                      {dialogContent.description}
                    </AlertDialogDescription>
                  )}
                </AlertDialogHeader>

                <AlertDialogFooter className="pt-6">
                  <Button
                    onClick={() => setIsDialogOpen(false)}
                    className="w-full bg-brand text-white hover:bg-brand-hover"
                  >
                    {t.close}
                  </Button>
                </AlertDialogFooter>
              </div>
            </HoverEffectWrapper>
          </AlertDialogContent>
        </AlertDialog>
      </motion.form>
    </section>
  );
}
