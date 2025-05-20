// src/layouts/AuthLayout.tsx
import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="bg-neutral-900 p-8 rounded shadow-md">{children}</div>
    </div>
  );
}