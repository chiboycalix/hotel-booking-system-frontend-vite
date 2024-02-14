import { useLocation } from 'react-router-dom';
import { useDecodeJwt } from '../../../hooks/useDecodeJwt';
import MailIcon from '../../../assets/images/mail-icon.svg'
import PhoneIcon from '../../../assets/images/phone-icon.svg'
import LocationIcon from '../../../assets/images/location-icon.svg'
import { Button } from '../../../components';

const BookListing = () => {
  const location = useLocation();
  const { user } = useDecodeJwt();
  console.log({ user })
  console.log(location.state, "loc")
  return (
    <div className='flex flex-col justify-between gap-4 md:flex-row h-full py-10'>
      <div className='basis-3/12 bg-white shadow-listing-card pb-10'>
        <div className='relative w-full h-40 bg-primary-color flex items-center justify-center'>
          <div className='w-40 h-40 bg-slate-600 absolute rounded-full top-20 border-4 border-white'></div>
        </div>
        <div className='mt-24 flex flex-col justify-center'>
          <p className='text-center font-bold text-2xl'>Chiboy Calix</p>
          <p className='text-center text-md text-secondary'>#SC-28-2023</p>
        </div>

        <ul className='flex flex-col mt-10 w-full px-8'>
          <li className='flex flex-col items-center gap-2 mb-8 min-[440px]:flex-row min-[440px]:mb-4'>
            <div className='w-8 h-8 bg-primary-color rounded-full flex justify-center items-center'>
              <img src={MailIcon} alt={MailIcon} className='w-3' />
            </div>
            <div>
              <p className='text-sm text-center min-[440px]:text-left'>igwechinonso77@gmail.com</p>
            </div>
          </li>

          <li className='flex flex-col items-center gap-2 mb-8 min-[440px]:flex-row min-[440px]:mb-4'>
            <div className='w-8 h-8 bg-primary-color rounded-full flex justify-center items-center'>
              <img src={PhoneIcon} alt={PhoneIcon} className='w-3' />
            </div>
            <div>
              <p className='text-sm text-center min-[440px]:text-left'>+234 81 658 42442</p>
            </div>
          </li>

          <li className='flex flex-col items-center gap-2 mb-8 min-[440px]:flex-row min-[440px]:mb-4'>
            <div className='w-8 h-8 bg-primary-color rounded-full flex justify-center items-center'>
              <img src={LocationIcon} alt={LocationIcon} className='w-3' />
            </div>
            <div>
              <p className='text-sm text-center min-[440px]:text-left'>20 Injun Joe Circle, United States</p>
            </div>
          </li>
        </ul>
      </div>

      <div className='basis-9/12 bg-white shadow-listing-card p-10'>
        <div className='flex flex-col justify-between items-center mb-4  min-[440px]:flex-row'>
          <p className='font-bold'>Current Booking</p>
          <p className='text-danger text-sm'>Cancel Room</p>
        </div>
        <div className='mt-10'>
          <div className='flex flex-col justify-between items-center mb-4  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Room Name: </p>
            <p className='text-sm text-primary-color'>Executive Standard Room</p>
          </div>
          <div className='flex flex-col justify-between items-center mb-4  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Booking ID: </p>
            <p className='text-sm text-primary-color'>#SC-28-2023</p>
          </div>
          <div className='flex flex-col justify-between items-center mb-4  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Room Capacity: </p>
            <p className='text-sm text-primary-color'>04-05 Persons</p>
          </div>
          <div className='flex flex-col justify-between items-center mb-4  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Bed Type: </p>
            <p className='text-sm text-primary-color'>Double Bed</p>
          </div>
          <div className='flex flex-col justify-between items-center mb-8  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Booking Date: </p>
            <p className='text-sm text-primary-color'>Jan 14th - 20th, 2023</p>
          </div>
          <div className='flex flex-col mb-8'>
            <p className='font-bold text-sm'>Room Images: </p>
            <div className='flex flex-col lg:flex-row gap-4 mt-4'>
              <div className='w-12/12 lg:w-11/12 h-40 rounded-md'>
              <img src={location.state.listing.roomImage} alt="" className='h-full w-full rounded-md'/>
              </div>
              <div className='w-12/12 lg:w-11/12 h-40 rounded-md'>
              <img src={location.state.listing.roomImage} alt="" className='h-full w-full rounded-md'/>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between items-center mb-8  min-[440px]:flex-row'>
            <p className='font-bold text-sm'>Facilities: </p>
            <p className='text-sm text-primary-color'>Ac, shower, Double bed, Towel, Bathroom, TV, Wifi</p>
          </div>

          <div className='flex w-12/12 xl:w-4/12 mx-auto mt-4'>
            <Button onClick={() => null} variant='primary'>Confirm Booking</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookListing