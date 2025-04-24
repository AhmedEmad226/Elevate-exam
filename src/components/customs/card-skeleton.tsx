import { Skeleton } from "../ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="w-[330px] h-[292px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
