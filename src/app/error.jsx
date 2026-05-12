'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('App crashed with error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6 text-center">
      <div className="bg-error-container text-on-error-container p-6 rounded-2xl shadow-lg border border-error/20 max-w-sm w-full">
        <h2 className="text-lg font-bold mb-2">ആപ്പിൽ ഒരു തടസ്സം നേരിട്ടു!</h2>
        <p className="text-sm opacity-90 mb-4">(Something went wrong)</p>
        
        {/* Technical error display */}
        <div className="bg-black/10 p-3 rounded-lg text-left overflow-x-auto mb-4">
          <p className="text-xs font-mono font-bold text-error break-words">
            {error.message || 'Unknown Error'}
          </p>
        </div>

        <button
          onClick={() => reset()}
          className="bg-error text-on-error px-4 py-2 rounded-xl font-bold text-sm w-full active:scale-95 transition-transform"
        >
          വീണ്ടും ശ്രമിക്കുക (Try Again)
        </button>
      </div>
    </div>
  );
}
