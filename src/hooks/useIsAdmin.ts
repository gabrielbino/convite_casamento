import { useState, useEffect } from 'react';

export function useIsAdmin(): boolean {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const flag = localStorage.getItem('isAdmin');
    setIsAdmin(flag === 'true');
  }, []);

  return isAdmin;
}
