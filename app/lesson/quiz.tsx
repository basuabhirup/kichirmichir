"use client"

import { challengeOptions, challenges } from "@/db/schema"
import { useState } from "react"
import { Header } from "./header"

interface IProps {
  initialPercentage: number
  initialHearts: number
  initialLessonId: number
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean
    challengeOptions: (typeof challengeOptions.$inferSelect)[]
  })[]
  userSubscription: any
}

export const Quiz: React.FC<IProps> = ({
  initialPercentage,
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  userSubscription,
}) => {
  const [hearts, setHearts] = useState<number>(initialHearts)
  const [percentage, setPercentage] = useState<number>(initialPercentage)
  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  )
}
