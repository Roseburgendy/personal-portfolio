import { useEffect, useState } from "react";
import { FlowerLoader } from "./FlowerLoader";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []); // Remove onComplete from dependencies

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      {/* Typing animation */}
      <h3
        className="mb-4 text-4xl font-bold"
        style={{ color: "var(--accent)" }}
      >
        {text} <span className="animate-blink ml-1">|</span>
      </h3>

      <FlowerLoader spin petals={12} />
    </div>
  );
};