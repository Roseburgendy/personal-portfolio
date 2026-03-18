import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 1500);
          setTimeout(onComplete, 2500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(10px)",
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "var(--bg)" }}
        >
          {/* Static Blobs Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            <div
              className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full blur-[120px]"
              style={{ background: "var(--accent)" }}
            />
            <div
              className="absolute bottom-[-15%] right-[-15%] w-[60vw] h-[60vw] rounded-full blur-[120px]"
              style={{ background: "#E85D75", opacity: 0.1 }}
            />
          </div>

          <div className="relative flex flex-col items-center max-w-lg w-full px-8">
            {/* Custom Icon Growth Animation */}
            <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {/* Base / Pot (Dark Brown) */}
                <motion.path
                  d="M40,120 C40,170 70,190 100,190 C130,190 160,170 160,120 C160,120 145,120 145,120 C145,150 125,165 100,165 C75,165 55,150 55,120 L40,120 Z"
                  fill="#3D2317"
                  initial={{ y: 40, opacity: 0, scale: 0.7 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                />

                {/* Stem / Center Sprout */}
                <motion.path
                  d="M100,165 L100,110"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />

                {/* Left Petal (Blue) */}
                <motion.path
                  d="M100,145 C70,145 45,115 45,85 C45,55 70,45 85,65 C90,75 100,95 100,145"
                  fill="#A8C5D1"
                  style={{ originX: "100px", originY: "145px" }}
                  initial={{ scale: 0, opacity: 0, rotate: -30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                />

                {/* Right Petal (Brown) */}
                <motion.path
                  d="M100,145 C130,145 155,115 155,85 C155,55 130,45 115,65 C110,75 100,95 100,145"
                  fill="#3D2317"
                  style={{ originX: "100px", originY: "145px" }}
                  initial={{ scale: 0, opacity: 0, rotate: 30 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    delay: 1.3,
                    duration: 1.5,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                />

                {/* Top Petal (Orange) */}
                <motion.path
                  d="M100,130 C100,130 70,90 70,60 C70,30 95,20 100,20 C105,20 130,30 130,60 C130,90 100,130 100,130"
                  fill="#F27D26"
                  style={{ originX: "100px", originY: "130px" }}
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.6,
                    duration: 1.8,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                />
              </svg>

              {/* Center Glow */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: 2, duration: 2.5 }}
                className="absolute w-32 h-32 rounded-full blur-[60px] -z-10"
                style={{ background: "var(--accent)" }}
              />
            </div>

            {/* Brand Text */}
            <div className="text-center space-y-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="space-y-2"
              >
                <h1
                  className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
                  style={{ color: "var(--text)" }}
                >
                  WANG YE
                </h1>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-[1px] w-8" style={{ background: "var(--text)", opacity: 0.3 }} />
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.6em]"
                    style={{ color: "var(--accent)" }}
                  >
                    Creative Technologist
                  </p>
                  <div className="h-[1px] w-8" style={{ background: "var(--text)", opacity: 0.3 }} />
                </div>
              </motion.div>

              <div className="space-y-3">
                <div className="h-[1px] w-full relative overflow-hidden rounded-full" style={{ background: "var(--text)", opacity: 0.3 }}>
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "var(--accent)",
                      originX: 0,
                      scaleX: progress / 100,
                    }}
                  />
                </div>

                <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text)", opacity: 0.6 }}>
                  <span>Initializing</span>
                  <motion.span>{progress}%</motion.span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Meta */}
          <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              className="flex flex-col space-y-1"
            >
              <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text)", opacity: 0.5 }}>
                Portfolio
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--text)", opacity: 0.5 }}>
                2026
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              className="text-[9px] font-bold uppercase tracking-widest"
              style={{ color: "var(--text)", opacity: 0.5 }}
            >
              © YE Wang
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};