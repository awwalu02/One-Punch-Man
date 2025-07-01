'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex space-x-6">
      <Link href="/">Home</Link>
      <Link href="/characters">Characters</Link>
      <Link href="/info">Info</Link>
      <Link href="/about">About</Link>
      <Link href="/credits">Credits</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}