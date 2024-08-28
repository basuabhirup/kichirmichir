"use client"

import { refillHearts } from "@/actions/user-progress"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTransition } from "react"
import { toast } from "sonner"

const POINTS_TO_REFILL = 10

interface IProps {
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const Items: React.FC<IProps> = ({
  hearts,
  points,
  hasActiveSubscription,
}) => {
  const [pending, startTransition] = useTransition()

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return

    startTransition(() => {
      refillHearts()
        .then()
        .catch(() => toast.error("Oops! Something went wrong!"))
    })
  }

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="Heart" width={60} height={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill Hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 && "full"}
          {hearts < 5 && (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  )
}
