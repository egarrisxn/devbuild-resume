'use client';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error | null;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <p className="pt-2 text-2xl font-semibold">Something went wrong!</p>
      <br />
      <button
        onClick={reset}
        className="rounded-lg border-2 bg-blue-500 px-8 shadow-lg"
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
