import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { Loader } from "lucide-react"

const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex items-center justify-between bg-green-500 border-b fixed top-0 w-full z-50">
      <MobileSidebar />

      <div className="ms-auto pt-2 px-0 mr-0">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </nav>
  )
}

export default MobileHeader
