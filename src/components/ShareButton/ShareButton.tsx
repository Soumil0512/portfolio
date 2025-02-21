"use client";

import { FaShareAlt } from "react-icons/fa";

export default function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: "Soumil Sarkar",
      text: "Soumil Sarkar's Portfolio",
      url: window.location.origin,
    };

    if (navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <button onClick={handleShare} className="text-3xl hover:text-accent">
      <FaShareAlt />
    </button>
  );
}
