'use client';

import '../../styles/info.css';
import { motion } from 'framer-motion';

export default function InfoPage() {
  return (
    <motion.div
      className="info-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Game Information
      </motion.h1>

      <motion.ul
        className="info-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <li><strong>🎯 Objective:</strong> Choose a character and climb the ranks to become the strongest hero or villain.</li>
        <li><strong>🎮 Game Modes:</strong> Story Mode, Free Battle, Tournament, Hero Hunt (Garou's path).</li>
        <li><strong>🗺 Levels:</strong> From City Z alleyways to alien motherships — 10 unique stages.</li>
        <li><strong>💥 Power System:</strong> Level up with every fight — unlock special attacks and transformation stages.</li>
        <li><strong>⚙️ Difficulty:</strong> Easy, Normal, Hero, Monster, and God Tier (for real bosses only 😈).</li>
      </motion.ul>

      <motion.p
        className="info-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        More features will be added soon. Train hard and become unstoppable!
      </motion.p>
    </motion.div>
  );
}