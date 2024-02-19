import React from 'react';
import { Card } from 'flowbite-react';
import { FaReact } from 'react-icons/fa';
import {
  SiAxios, SiEslint, SiLinkedin, SiRedux, SiTailwindcss, SiVite,
} from 'react-icons/si';

export default function AboutPage() {
  const techstack = [
    {
      id: 0,
      name: 'Vite',
      icon: <SiVite />,
      url: 'https://vitejs.dev/',
    },
    {
      id: 1,
      name: 'React',
      icon: <FaReact />,
      url: 'https://react.dev/',
    },
    {
      id: 2,
      name: 'Tailwind',
      icon: <SiTailwindcss />,
      url: 'https://tailwindcss.com/',
    },
    {
      id: 3,
      name: 'Redux Toolkit',
      icon: <SiRedux />,
      url: 'https://redux-toolkit.js.org/',
    },
    {
      id: 4,
      name: 'Flowbite React',
      icon: <img src="https://www.flowbite-react.com/favicon.svg" className="h-5" alt="flowbite react logo" />,
      url: 'https://www.flowbite-react.com/',
    },
    {
      id: 5,
      name: 'axios',
      icon: <SiAxios />,
      url: 'https://axios-http.com/',
    },
    {
      id: 6,
      name: 'ESLint',
      icon: <SiEslint />,
      url: 'https://eslint.org/',
    },
  ];
  return (
    <main className="bg-forum-background dark:bg-forum-dark-background min-h-screen p-4">
      <Card>
        <section className="text-xl items-center justify-center flex flex-row border-b border-b-gray-500 pb-4 dark:border-b-white dark:text-white">
          <h2>
            About
          </h2>
        </section>
        <section>
          <img src="/logo.webp" className="h-20 mx-auto p-4" alt="Forum website logo" />
          <p className="dark:text-white">
            This is a forum app built with React and Redux.
            It is a simple forum app where users can create threads, comment on threads,
            and vote on threads and comments.
            It is built with the intention of learning and practicing React and Redux on
            {' '}
            <a
              href="https://www.dicoding.com/academies/418-menjadi-react-web-developer-expert"
              className="underline"
            >
              Dicoding React Expert Class.
            </a>
            <h3 className="font-bold text-xl underline py-4">
              Technologies used:
            </h3>
            <span>
              {
                techstack.map((tech) => (
                  <a
                    key={tech.id}
                    href={tech.url}
                    className="flex flex-row gap-1.5 items-center pb-1.5 w-fit"
                  >
                    {tech.icon}
                    <p>
                      {tech.name}
                    </p>
                  </a>
                ))
              }
            </span>
          </p>
        </section>
        <section className="flex flex-row justify-center">
          &copy;2024 Dimas Alfiansyah
          {' '}
          <a
            href="https://www.linkedin.com/in/dimasalfiansyah/"
            aria-label="Dimas Alfiansyah's Linkedin Profile"
          >
            <SiLinkedin />
          </a>
        </section>
      </Card>
    </main>
  );
}
