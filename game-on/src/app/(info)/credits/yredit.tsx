'use client';

import '../../styles/credits.css';
import { motion } from 'framer-motion';

export default function CreditsPage() {
  return (
    <motion.div
      className="credits-container"
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
        Game Credits
      </motion.h1>

      <motion.ul
        className="credits-list"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <li><strong>🎨 Characters:</strong> Saitama, Genos, Garou, Tatsumaki, and Sonic — property of ONE & Yusuke Murata (One Punch Man)</li>
        <li><strong>🛠 Developer:</strong> Awwalu – Full Stack Web Designer</li>
        <li><strong>🎓 Mentor:</strong> Abdul-Design – For guidance and support</li>
        <li><strong>📚 Framework:</strong> Built using Next.js with React and CSS</li>
        <li><strong>🧪 Special Thanks:</strong> Anime fans, web dev learners, and anyone chasing greatness</li>
      </motion.ul>

      <motion.p
        className="credit-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
      >
        This is a fan-made project created for learning, testing, and leveling up. No copyright infringement intended.
      </motion.p>
    </motion.div>
  );
}