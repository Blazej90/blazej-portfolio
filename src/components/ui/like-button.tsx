"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { footerLocales } from "@/locales/footer";

export default function LikeButton() {
  const { language } = useLanguage();
  const t = footerLocales[language];
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const res = await fetch("/api/likes");
        const data = await res.json();
        if (res.ok) {
          setLikes(data.count);
        }
      } catch (error) {
        console.error("Błąd pobierania lajków:", error);
      }

      if (localStorage.getItem("liked")) {
        setLiked(true);
      }
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (liked) return;

    setLiked(true);
    localStorage.setItem("liked", "true");

    try {
      const res = await fetch("/api/likes", {
        method: "POST",
      });

      if (res.ok) {
        setLikes((prev) => prev + 1);
        triggerConfetti();
      }
    } catch (error) {
      console.error("Błąd przy wysyłaniu lajka:", error);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#4F46E5", "#6366F1", "#818CF8", "#A5B4FC"],
      scalar: 0.8,
      zIndex: 9999,
    });
  };

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        onClick={handleLike}
        className="inline-flex items-center justify-center gap-2 min-w-[220px]"
      >
        <motion.span
          initial={false}
          animate={liked ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={liked ? "text-brand" : "text-muted-foreground"}
        >
          <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
        </motion.span>
        <span>{likes}</span>
        <span>{t.likes}</span>
      </Button>

      {process.env.NODE_ENV === "development" && (
        <button
          onClick={() => {
            localStorage.removeItem("liked");
            setLiked(false);
            setLikes(0);
          }}
          className="block text-xs text-muted-foreground hover:text-destructive underline underline-offset-4 transition mx-auto"
        >
          Reset Like (dev only)
        </button>
      )}
    </div>
  );
}
