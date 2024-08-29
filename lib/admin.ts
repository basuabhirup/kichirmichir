import { auth } from "@clerk/nextjs/server"

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  return userId === process.env.ADMIN_USER_ID
}
