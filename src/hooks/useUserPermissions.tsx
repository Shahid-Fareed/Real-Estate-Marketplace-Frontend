import { useState, useEffect } from 'react';

interface AuthUser {
    user_permissions: {
        title: string;
    }[];
}

const useUserPermissions = (): string[] | null => {
    const [permissions, setPermissions] = useState<string[] | null>(null);

    useEffect(() => {
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            const parsedUser: AuthUser[] = JSON.parse(authUser);
            const permissionTitles = parsedUser[0]?.user_permissions?.map((permission) => permission.title) || null;
            setPermissions(permissionTitles);
        }
    }, []);

    return permissions;
};

export default useUserPermissions;
