import { getUser } from "@/helpers/GetUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProtectedLayout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Or redirect to login page
  }

  if (!user.isLoggedIn) {
    return router.push("/login");
  }

  return children;
};

export default ProtectedLayout;
