'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Something went wrong!
          </h1>
          <p className="text-gray-400 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          {error.digest && (
            <p className="text-gray-500 text-sm mb-6">
              Error ID: {error.digest}
            </p>
          )}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={reset}
              className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-500 transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
