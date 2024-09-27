'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Custom hook to get and track the current URL hash
export const useHash = () => {
  const [hash, setHash] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Function to extract and set the hash
    const updateHash = () => {
      setHash(window.location.hash);
    };

    // Update the hash when pathname or search params change
    updateHash();

    // Add event listener for native hashchange event
    window.addEventListener('hashchange', updateHash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, [pathname, searchParams]);

  // Return the current hash value
  return hash;
};
