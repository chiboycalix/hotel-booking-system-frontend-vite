import { Outlet } from "react-router-dom"
import { ROUTES } from "../routes"
import { useRedirect } from "../hooks/useRedirect"
import Header from "./Header"
import Sidebar from "./Sidebar"
// import { useInactivity } from "../hooks/useInactivity"
// const WARN_TIME = 10000
// const LOGOUT_TIME = 15000

const Layout = () => {
  useRedirect(ROUTES.DASHBOARD, ROUTES.HOME)
  // const { showWarningMessage, setShowWarningMessage} = useInactivity({ warnTime: WARN_TIME, logoutTime: LOGOUT_TIME })
  return (
    <div className="flex relative w-screen">
      <div className="fixed top-0 left-0 w-52">
        <Sidebar />
      </div>
      <div className="w-full">
        <div className="relative ml-12 sm:ml-52">
          <Header />
        </div>

        <div className="bg-content-bg p-4 ml-12 sm:ml-52 relative mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout