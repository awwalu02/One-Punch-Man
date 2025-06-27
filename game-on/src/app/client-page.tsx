'use client';

import './styles/home.css';
import { motion } from 'framer-motion';
import Link from 'next/link'

export const metadata = {
  title:'Home'
}
export default function clientpage() {
  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to the One Punch Man Game
      </motion.h1>
      <motion.p
  className="home-tagline"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Choose your hero. Conquer the world. Become unstoppable.
</motion.p>


<div className="character-strip">
  {['saitama', 'genos', 'garou', 'sonic', 'tatsumaki'].map((char) => (
    <motion.img
      key={char}
      src={`/${char}.png`}
      alt={char}
      className="character-img"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  ))}
</div>

      
<motion.div
  className="cta-buttons"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  viewport={{ once: true }}
>
  <Link href="/characters"><button className="home-btn">Explore Characters</button></Link>
  <button className="home-btn">Start Game</button>
</motion.div>
    </div>
  );
}