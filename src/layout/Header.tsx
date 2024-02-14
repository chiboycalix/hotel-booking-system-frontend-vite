import React from 'react'
import { Divider, Input } from '../components'
import SearchIcon from '../assets/images/search.svg';
import MoreIcon from '../assets/images/more.svg'
import Avatar from '../assets/images/avatar.png'
import { useNavigate } from 'react-router-dom';

const UserAvatar = () => {
  return <div className='my-4 flex gap-2'>
    <img src={Avatar} alt={Avatar} className='w-10 rounded-full' />
    <div className=''>
      <p className='text-sm'>Igwe Chinonso</p>
      <p className='text-xs text-secondary-color'>HR Manager</p>
    </div>
  </div>
}

const Header = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = React.useState(false)
  const handleOpenMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div className="h-20 bg-white shadow-header flex items-center justify-between px-4 gap-4 fixed z-10 sm:w-[calc(100%-13rem)] w-[calc(100%-3rem)]">
      <div className='basis-1/12'>
        <p className='sm:hidden'>Dash</p>
        <p className='hidden sm:inline-block'>Dashboard</p>
      </div>
      <div className='basis-10/12 sm:2/4'>
        <Input isSearchInput placeHolder="Search here" onChange={() => null} type="text" name="search" id="search" Icon={SearchIcon} hasIconPostfix />
      </div>
      <div className='basis-1/12 flex justify-end relative'>
        <img src={MoreIcon} alt={MoreIcon} onClick={handleOpenMenu} className='cursor-pointer' />
        {showMenu && <div className='absolute top-10 right-0 z-10 w-64 p-2 bg-white border border-horizontal-line-color rounded'>
          <ul className='w-full'>
            <UserAvatar />
            <Divider />
            <li className='my-2 cursor-pointer' onClick={handleLogout}>Logout</li>
          </ul>
        </div>}
      </div>

    </div>
  )
}

export default Header