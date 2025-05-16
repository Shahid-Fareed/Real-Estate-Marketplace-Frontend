import { useState, useEffect } from 'react';

interface AuthUser {
    role: {
        id: number;
        title: string;
    }[];
}

const useUserRole = (): string | null => {
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            const parsedUser: AuthUser[] = JSON.parse(authUser);
            const roleTitle = parsedUser[0]?.role[0]?.title || null;
            setUserRole(roleTitle);
        }
    }, []);

    return userRole;
};

export default useUserRole;
