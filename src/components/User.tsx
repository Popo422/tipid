import { BiMoney } from "react-icons/bi";
import { Skeleton } from "@/components/ui/skeleton";
`use client`;

const User = () => {
  return (
    <div className="w-full h-full px-2">
      <div className="flex  justify-center">
        <Skeleton className="p-5 rounded-full" />
        <div className="flex flex-col gap-3 w-full px-5">
          <Skeleton className="h-3 w-full rounded-full" />
          <Skeleton className="h-3 w-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default User;
