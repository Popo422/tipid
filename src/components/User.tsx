"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "@/context/SessionContext";
import { validateRequest } from "@/helpers/ValidateRequest";
import { useEffect, useState } from "react";

const User = () => {
  const [activeUser, setActiveUser] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useSession();
  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/fetchUser", {
          method: "POST",
          body: JSON.stringify(user),
        });
        const currentUser = await response.json();
        setActiveUser(currentUser);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.error("Error fetching user:", e);
      }
    };
    getUser();
  }, [user]);
  return (
    <div className="h-full w-full px-2">  
      {loading ? (
        <div className="flex  justify-center">
          <div className="flex w-full flex-col gap-3 px-5">
            <Skeleton className="h-3 w-full rounded-full" />
            <Skeleton className="h-3 w-full rounded-full" />
          </div>
          <Skeleton className="rounded-full p-5" />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="flex w-full flex-col gap-3 px-5">
            <span className="rounded bg-green-500 p-1 text-center text-xs text-white">{`${activeUser?.firstName} ${activeUser?.lastName}`}</span>
            <span className="text-center text-xs text-blue-500">{`${activeUser?.email}`}</span>
          </div>
          <div className="item-center flex h-full">
            <img
              height={35}
              width={35}
              src={activeUser?.image}
              alt="user-img"
              className="rounded-full border"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
