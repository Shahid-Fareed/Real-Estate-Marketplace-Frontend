import { useEffect, useState } from "react";

type UserType = "super_admin" | "agency_admin" | "agency_user" | "admin_user";

const useUserCheck = (): UserType | null => {
  const [userCheck, setUserCheck] = useState<UserType | null>(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authUser");

    if (authToken) {
      const parsedToken = JSON.parse(authToken);
      const isAdmin = parsedToken[0].is_admin === 1;
      const userType = parsedToken[0].user_type;

      if (isAdmin && userType === "admin") {
        setUserCheck("super_admin");
      } else if (isAdmin && userType === "agency") {
        setUserCheck("agency_admin");
      } else if (!isAdmin && userType === "agency") {
        setUserCheck("agency_user");
      } else if (!isAdmin && userType === "admin") {
        setUserCheck("admin_user");
      }
    }
  }, []);

  return userCheck;
};

export default useUserCheck;
