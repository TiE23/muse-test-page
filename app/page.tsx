import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 dark:bg-black">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-10 shadow-sm dark:bg-zinc-900">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Hello, world!
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is a simple static site built with Next.js, TypeScript, and
          Tailwind CSS, ready for GitHub Pages.
        </p>
        <div className="mt-8">
          <Link
            href="/lorem"
            className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Go to Lorem Ipsum page →
          </Link>
        </div>
      </div>
    </main>
  );
}
