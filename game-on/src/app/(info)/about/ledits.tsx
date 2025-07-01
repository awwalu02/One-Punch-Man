'use client';

import '../../styles/about.css';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        About the Game
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Welcome to the <strong>One Punch Man Game</strong> — a fan-made experience inspired by the legendary anime and manga!
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Choose from a roster of heroes and villains. Train, fight, and rise through the ranks to become the strongest. Whether you&apos;re a fan of Saitama&apos;s chill vibe or Garou&apos;s raw intensity, this game has something for every fighter.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <em>“100 push-ups, 100 sit-ups, 100 squats, and a 10km run… every single day!”</em> — Saitama
      </motion.p>
    </motion.div>
  );
}