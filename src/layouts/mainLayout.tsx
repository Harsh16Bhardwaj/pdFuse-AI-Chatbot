// src/layouts/MainLayout.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FloatingNav } from '@/components/ui/floating-navbar';
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <Footer></Footer>
    </div>
  );
}