import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-white-900 md:text-4xl dark:text-white">
          Something's missing.
        </p>
        <p className="mb-8 text-lg font-light text-white-500 dark:text-gray-400">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{' '}
        </p>
        <Link
          href="/"
          className="hover:underline bg-primary text-white lg:bg-white lg:text-gray-800 font-bold rounded-full my-2 py-3 px-8 shadow-lg transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
