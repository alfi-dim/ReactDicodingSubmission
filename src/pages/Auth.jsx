import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthPage() {
  return (
    <main className="min-h-screen p-10 bg-forum-background dark:bg-forum-dark-background">
      <section className="w-full justify-center items-center flex flex-col">
        <img src="/logo.webp" alt="Forum App logo" className="h-28 mx-auto" />
        <h1 className="text-2xl font-bold dark:text-white leading-10">
          Forum App
        </h1>
        <Outlet />
      </section>
    </main>
  );
}
