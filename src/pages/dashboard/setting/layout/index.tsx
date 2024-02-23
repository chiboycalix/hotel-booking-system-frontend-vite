
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"
import { useRedirect } from "../../../../hooks/useRedirect"
import { ROUTES } from "../../../../routes"


const Layout = () => {
  useRedirect(ROUTES.SETTING, `${ROUTES.SETTING}/personal-information`)
  return (
    <div className='flex gap-4 items-start'>
      <Sidebar />
      <div className='basis-8/12'>
        <div className='basis-7/12'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout