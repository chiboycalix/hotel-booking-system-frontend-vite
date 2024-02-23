import { Link, useLocation, useNavigate } from 'react-router-dom'
import Avatar from '../../../../assets/images/avatar.png'
import { Divider } from '../../../../components'
import { ROUTES } from '../../../../routes'

const SettingsLinks = ({ link }: { link: { label: string, path: string } }) => {
  const { pathname } = useLocation();

  return (<li className={`mb-8 cursor-pointer flex items-center gap-4 ${pathname.split('/')[2] === link.path ? 'text-primary-color': ''}`}>
    <Link to={`${ROUTES.SETTING}/${link.path}`}>{link.label}</Link>
  </li>)
}

const Sidebar = () => {
  const navigate = useNavigate()
  const links = [
    { id: 1, label: 'Personal Information', path: 'personal-information' },
    { id: 2, label: 'Employees Management', path: 'employees-management' },
    { id: 3, label: "Booking Opening", path: 'booking-opening' },
    { id: 4, label: "Login & Password", path: 'login-and-password' },
    { id: 5, label: "Language & Region", path: 'language-and-region' }]
  
    const handleLogout = () => {
      localStorage.clear()
      navigate("/login")
    }

  return (
    <div className='bg-white p-6 shadow-listing-card rounded basis-5/12'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Avatar} alt="Avatar" className='w-40 h-40 rounded-full' />
        <div className='mt-2 mb-10'>
          <h1>Hope Furaletter</h1>
          <p className='text-xs opacity-25'>Customer ID : 4578963210</p>
        </div>
      </div>
      <Divider />
      <div className='mt-10'>
        <ul>
          {
            links.map((link) => <SettingsLinks key={link.id} link={link} />)
          }
        </ul>
      </div>
      <div className='mt-20'>
        <a href="#" onClick={handleLogout}>Logout</a>
      </div>
    </div>
  )
}

export default Sidebar