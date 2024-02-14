import { NavLink, useLocation } from "react-router-dom";
import Logo from '../assets/images/Logo.svg';

import DashboardIcon from '../assets/images/dashboard.svg'
import DashboardColoredIcon from '../assets/images/dashbaord-colored.svg'

import ListingIcon from '../assets/images/listing.svg'
import ListingColoredIcon from '../assets/images/listing-colored.svg'

import GuestIcon from '../assets/images/guest.svg'
import GuestColoredIcon from '../assets/images/guest-colored.svg'

import RoomIcon from '../assets/images/room.svg'
import RoomColoredIcon from '../assets/images/room-colored.svg'

import BookingIcon from '../assets/images/bookings.svg'
import BookingColoredIcon from '../assets/images/booking-colored.svg'

import ReportIcon from '../assets/images/report.svg'
import ReportColoredIcon from '../assets/images/report-colored.svg'

import SettingIcon from '../assets/images/settings.svg'
import SettingColoredIcon from '../assets/images/setting-colored.svg'


import { Divider } from '../components';
interface Route {
  id: number
  name: string;
  path: string;
  icon?: string;
  iconColored?: string;
}
const routes: Route[] = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    icon: DashboardIcon,
    iconColored: DashboardColoredIcon
  },
  {
    id: 2,
    name: 'Listing',
    path: '/listing',
    icon: ListingIcon,
    iconColored: ListingColoredIcon
  },
  {
    id: 3,
    name: 'Guest',
    path: '/guest',
    icon: GuestIcon,
    iconColored: GuestColoredIcon
  },
  {
    id: 4,
    name: 'Room',
    path: '/room',
    icon: RoomIcon,
    iconColored: RoomColoredIcon
  },
  {
    id: 5,
    name: 'Booking',
    path: '/booking',
    icon: BookingIcon,
    iconColored: BookingColoredIcon
  },
  {
    id: 6,
    name: 'Report',
    path: '/report',
    icon: ReportIcon,
    iconColored: ReportColoredIcon
  },
  {
    id: 7,
    name: 'Setting',
    path: '/setting',
    icon: SettingIcon,
    iconColored: SettingColoredIcon
  }
]
const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-white w-12 min-h-screen shadow-sidebar px-4
                    sm:w-full">
      <div className='w-full h-20 bg-white flex justify-center items-center cursor-pointer'>
        <img src={Logo} alt="Logo" className='w-5' />
      </div>
      <Divider />
      <ul className='mt-10 w-full'>
        {
          routes.map((route) => {
            return <li key={route.id} className='mb-14 cursor-pointer'>
              <NavLink to={route.path} 
                className={`cursor-pointer flex items-center gap-4 ${pathname.split('/')[1] === route.path.split('/')[1] ? 'text-primary-color': ''}`}><img src={pathname === route.path ? route.iconColored : route.icon } alt={pathname === route.path ? route.iconColored : route.icon} className='w-5' />
                <span className="hidden
                                 sm:inline-flex">
                  {route.name}
                </span>
              </NavLink>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar