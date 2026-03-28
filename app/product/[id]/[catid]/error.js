'use client';

export default function Error({ error, reset }) {
  return (
    <div className="text-center py-20">
      <p className="text-red-500 mb-4">Something went wrong!</p>
      
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}

