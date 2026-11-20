'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function DoorConfiguratorError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Door Configurator Error:', error);
  }, [error]);

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="text-6xl mb-4">🚪</div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Door Configurator Unavailable
        </h2>
        <p className="text-gray-400 mb-6">
          We&apos;re having trouble loading the door configurator. This might be a
          temporary issue.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-500 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
