"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLiked = localStorage.getItem("liked");
    if (isLiked) setLiked(true);

    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data.count))
      .catch(() => setLikes(0));
  }, []);

  const handleLike = async () => {
    if (liked) return;

    setLiked(true);
    setLikes((prev) => prev + 1);
    localStorage.setItem("liked", "true");

    await fetch("/api/likes", {
      method: "POST",
    });
  };

  const handleReset = () => {
    localStorage.removeItem("liked");
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
