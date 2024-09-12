import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import SidebarItem from "@/components/sidebar-item"

interface IProps {
  className?: string
}

const Sidebar: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/logo.png" height={40} width={40} alt="logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Kichir Michir
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SidebarItem
          label="Leaderboard"
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SidebarItem label="Quests" iconSrc="/quests.svg" href="/quests" />
        <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop" />
      </div>
    </div>
  )
}

export default Sidebar
