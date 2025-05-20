// src/layouts/MainLayout.tsx
import { FloatingNav } from '@/components/ui/floating-navbar';
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 Chatbot App
      </footer>
    </div>
  );
}