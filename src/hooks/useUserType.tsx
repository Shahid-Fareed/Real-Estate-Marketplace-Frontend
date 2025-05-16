import { useState, useEffect } from 'react';

const useUserType = (): string | null => {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      const parsedUser = JSON.parse(authUser);
      const userType = parsedUser[0]?.user_type || null;
      setUserType(userType);
    }
  }, []);

  return userType;
};

export default useUserType;
