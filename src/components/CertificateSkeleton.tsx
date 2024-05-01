import { DivProps } from "@/lib/types"
import { Skeleton } from "./ui/skeleton"
import { cn } from "@/lib/utils"

export const CertificateSkeleton = ({className}:DivProps) => {
    return (
        <div className={cn("flex flex-col items-center space-x-4 border-indigo-500/40 rounded-2xl px-3 py-7 space-y-7 w-[40rem] shadow-xl shadow-indigo-500/40 border-t-2 ",className)}>
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[30rem]" />
            <Skeleton className="h-4 w-[30rem]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[30rem]" />
            <Skeleton className="h-4 w-[30rem]" />
            <Skeleton className="h-4 w-[30rem]" />
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <Skeleton className="h-4 w-[15rem]" />
            <Skeleton className="h-4 w-[7.5rem]" />
          </div>
        </div>
      )
}