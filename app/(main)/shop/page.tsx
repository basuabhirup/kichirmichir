import FeedWrapper from "@/components/feed-wrapper"
import StickyWrapper from "@/components/sticky-wrapper"
import UserProgress from "@/components/user-progress"
import { getUserProgress } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"
import { Items } from "./items"
import { Quests } from "@/components/quests"

const ShopPage = async () => {
  const userProgress = await getUserProgress()

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  const { activeCourse, hearts, points } = userProgress

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={activeCourse}
          hearts={hearts}
          points={points}
          hasActiveSubscription={false}
        />
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="shop.svg" alt="Shop" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={hearts}
            points={points}
            hasActiveSubscription={false}
          />
        </div>
      </FeedWrapper>
    </div>
  )
}

export default ShopPage
