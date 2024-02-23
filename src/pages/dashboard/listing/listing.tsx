import WarnIconRed from '../../../assets/images/danger-icon.svg'
import { Button, Loader, Modal } from '../../../components'
import { IListing } from '../../../interface/listing'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../routes'
import Actions from '../../../components/actions'

interface IListingCardProps {
  listing: IListing;
  handleEditListing: (listing: IListing) => void
  handleDeleteListing: (listing: IListing) => void
  setIsVisible: (isVisible: boolean) => void
  isDeleteListingLoading: boolean
  isDeleteListingError: boolean
  isVisible: boolean;
  deleteListingError: any;
}

const ListingCard = (props: IListingCardProps) => {
  const navigate = useNavigate()
  const { listing, isVisible, setIsVisible, deleteListingError, handleEditListing, handleDeleteListing, isDeleteListingLoading, isDeleteListingError } = props
  const handleBookListing = (listing: IListing) => {
    navigate(ROUTES.BOOK_LISTING, {
      state: {
        listing
      }
    })
  }

  return (
    <div className='flex md:flex-row flex-col shadow-listing-card p-4 rounded border-2 hover:border-primary-color cursor-pointer mb-10'>
      <div className='flex gap-4 basis-12/12 sm:basis-10/12 md:flex-row flex-col'>
        <div className='w-full h-full lg:w-96 bg-primary-color lg:h-52 rounded'>
          <img
            src={listing.roomImage}
            className="block w-full h-full object-cover rounded"
            alt="Listing pic"
          />
        </div>
        <div className='flex flex-row justify-between py-4 md:flex-col'>
          <div>
            <h1 className='text-black font-bold text-xl mb-4'>{listing.roomName}</h1>
            <p className='text-secondary text-sm'>{listing.location}</p>
          </div>
          <p className='text-3xl text-primary-color font-bold'>${listing.roomPrice} <span className='text-sm text-black'>/ Night</span></p>
        </div>
      </div>
      <div className='basis-2/12 flex md:flex-col flex-row justify-between items-end py-4 gap-6 sm:gap-0'>
        <Actions onUpdate={handleEditListing} recordToUpdate={listing} isVisible={isVisible} setIsVisible={setIsVisible}/>
        <div className='sm:w-40 w-32'>
          <Button onClick={() => handleBookListing(listing)} variant="primary">
            Book now
          </Button>
        </div>
      </div>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(!isVisible)}>
        <div className='flex flex-col justify-center items-center px-20 py-4 max-[490px]:px-10 max-[400px]:px-2 max-[400px]:py-2'>
          {isDeleteListingError && <div
            className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mb-4 w-full text-center">
            {deleteListingError?.response?.data.data?.error}
          </div>}
          {/* {isDeleteListingSuccess && <div className="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700 mt-4">
            {successMessage}
          </div>} */}
          <img src={WarnIconRed} alt={WarnIconRed} className='w-14' />
          <p className='font-bold text-md mt-6'>Delete This Room ?</p>
          <p className='mt-2 text-xs text-secondary'>Are you sure, You want to delete this Room?</p>
          <div className='w-52 flex gap-4 mt-8'>
            <Button onClick={() => handleDeleteListing(listing)} variant='danger'>{isDeleteListingLoading ? <Loader /> : 'Yes'}</Button>
            <Button onClick={() => setIsVisible(!isVisible)} variant='primary'>No</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ListingCard