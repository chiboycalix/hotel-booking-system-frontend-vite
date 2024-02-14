import React from 'react'
import ListViewIcon from '../../../assets/images/row-view-icon-colored.svg'
import GridViewIcon from '../../../assets/images/grid-view-icon.svg'
import PlusIcon from '../../../assets/images/plus-icon.svg'
import ListingCard from './listing'
import { Button } from '../../../components'
import { IUseListingMutation, deleteListing, getAllListings } from '../../../api/listing'
import { useMutation } from '@tanstack/react-query'
import { ROUTES } from '../../../routes'
import { useNavigate } from 'react-router-dom'
import { IListing } from '../../../interface/listing'

const Listing = () => {
  const navigate = useNavigate()
  const [listings, setListings] = React.useState<IListing[]>([])
  const [isVisible, setIsVisible] = React.useState(false)

  const { mutate, isLoading, isError }: IUseListingMutation = useMutation({
    mutationFn: getAllListings, onSuccess({ data }) {
      setListings(data.data)
    }
  });
  const { mutate: deleteListingMutation, isLoading: isDeleteListingLoading, isError: isDeleteListingError, isSuccess: isDeleteListingSuccess, error: deleteListingError }: any = useMutation({
    mutationFn: deleteListing, onSuccess({ data }) {
      console.log(data, 'datadata')
    }
  });

  React.useEffect(() => {
    mutate({})
  }, [mutate, isDeleteListingSuccess])

  const handleEditListing = (listing: IListing) => {
    navigate(`${ROUTES.UPDATE_LISTING}`, {
      state: {
        listing: listing
      }
    })
  }

  const handleDeleteListing = (listing: IListing) => {
    deleteListingMutation({ ...listing })
    setIsVisible(false)
  }
  return (
    <div className='min-h-screen'>
      <div className='flex justify-between'>
        <div className='flex gap-4 basis-5/12 md:basis-10/12'>
          <img src={ListViewIcon} alt={ListViewIcon} className='w-5' />
          <img src={GridViewIcon} alt={GridViewIcon} className='w-5' />
        </div>
        <div className='basis-7/12 lg:basis-2/12 md:basis-4/12'>
          <Button onClick={() => navigate(ROUTES.CREATE_LISTING)} variant="primary" Icon={PlusIcon} hasIconPrefix>
            Add new Room
          </Button>
        </div>
      </div>
      <div className='w-full mt-8'>
        {!isLoading && !isError && listings?.map((listing: IListing) => {
          return <ListingCard
            key={listing.roomImage}
            listing={listing}
            handleEditListing={handleEditListing}
            handleDeleteListing={handleDeleteListing}
            isDeleteListingLoading={isDeleteListingLoading}
            isDeleteListingError={isDeleteListingError}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            deleteListingError={deleteListingError}
          />
        })}
      </div>

    </div>
  )
}

export default Listing