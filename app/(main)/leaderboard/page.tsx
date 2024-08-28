import FeedWrapper from "@/components/feed-wrapper"
import StickyWrapper from "@/components/sticky-wrapper"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import UserProgress from "@/components/user-progress"
import { getTopTenUsers, getUserProgress } from "@/db/queries"
import Image from "next/image"
import { redirect } from "next/navigation"

const LeaderboardPage = async () => {
  const userProgress = await getUserProgress()
  const topTenUsers = await getTopTenUsers()

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
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Leaderboard
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners in the community
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {topTenUsers.map((userProgress, index) => (
            <div
              key={userProgress.userId}
              className="flex items-center w-full px-4 py-2 rounded-xl hover:bg-gray-200/50"
            >
              <p className="font-bold text-lime-700 mr-4">{index + 1}</p>
              <Avatar className="border bg-green-500 size-12 ml-3 mr-6">
                <AvatarImage
                  className="object-cover"
                  src={userProgress.userImageSrc}
                />
              </Avatar>
              <p className="font-bold text-neutral-800 flex-1">
                {userProgress.userName}
              </p>
              <p className="text-muted-foreground">{userProgress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  )
}

export default LeaderboardPage
