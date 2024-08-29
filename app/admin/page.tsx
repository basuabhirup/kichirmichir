import { isAdmin } from "@/lib/admin"
import { redirect } from "next/navigation"
import dynamic from "next/dynamic"

const App = dynamic(() => import("./app"), { ssr: false })

const AdminPage = () => {
  if (!isAdmin()) {
    redirect("/")
  }
  return <App />
}

export default AdminPage
