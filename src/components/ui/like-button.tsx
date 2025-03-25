"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = localStorage.getItem("likes");
    if (isLiked) setLiked(true);

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
    };

    fetchLikes();
  }, []);

  const handleLike = async () => {
    if (liked) return;

    setLiked(true);
    localStorage.setItem("likes", "true");

    try {
      const res = await fetch("/api/likes", {
        method: "POST",
      });

      if (res.ok) {
        setLikes((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Błąd przy wysyłaniu lajka:", error);
    }
  };

  const handleReset = async () => {
    localStorage.removeItem("likes");
    setLiked(false);
    setLikes(0);
  };

  return (
    <div className="space-y-2">
      <HoverBorderGradient
        as="button"
        onClick={handleLike}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base min-w-[220px] text-white transition"
      >
        <motion.div
          initial={false}
          animate={liked ? { scale: [1, 1.4, 1] } : {}}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-red-500"
        >
          <FaHeart className="w-5 h-5" />
        </motion.div>
        <span className="text-white">{likes}</span>
      </HoverBorderGradient>

      {process.env.NODE_ENV === "development" && (
        <button
          onClick={handleReset}
          className="block text-xs text-gray-400 hover:text-red-400 underline underline-offset-4 transition mx-auto"
        >
          Reset Like (dev only)
        </button>
      )}
    </div>
  );
}
