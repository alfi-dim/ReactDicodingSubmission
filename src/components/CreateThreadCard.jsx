'use client';

import React from 'react';
import { Button } from 'flowbite-react';
import { MdForum } from 'react-icons/md';

export default function CreateThreadCard() {
  return (
    <main className="sm:max-w-xl h-fit max-w-sm gap-4 sm:gap-1.5 mx-auto grid sm:grid-cols-2 items-center bg-white p-4 rounded-xl dark:bg-forum-dark-primary">
      <h5 className="text-2xl sm:text-left text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Top Threads
      </h5>
      <span className="flex sm:justify-end justify-center">
        <Button href="home/thread/new" className="max-w-fit">
          Create Thread
          <MdForum className="ml-2" />
        </Button>
      </span>
    </main>
  );
}
