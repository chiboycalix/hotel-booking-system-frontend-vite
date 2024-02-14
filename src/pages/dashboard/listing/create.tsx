import React from 'react'
import { Button, Input, Loader } from '../../../components';
import UploadIcon from '../../../assets/images/upload-icon.svg'
import { createListing } from '../../../api/listing';
import { useMutation } from '@tanstack/react-query';

const CreateListing = () => {
  const fileInputRef = React.useRef<any>(null);
  const [successMessage, setSuccessMessage] = React.useState("")
  const [imageFile, setImageFile] = React.useState(null)
  const [listing, setListing] = React.useState({
    roomImage: "",
    roomName: "",
    roomLocation: "",
    roomBedType: "",
    roomPrice: ""
  })
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: any = useMutation({
    mutationFn: createListing, onSuccess({ data }) {
      console.log(data, 'datadata')
      setSuccessMessage(data.message || "Listing created successfully")
    }
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData();
    const roomImage = imageFile
    const roomName = listing.roomName
    const roomLocation = listing.roomLocation
    const roomBedType = listing.roomBedType
    const roomPrice = listing.roomPrice

    formData.append('roomImage', imageFile as any);
    formData.append('roomName', roomName);
    formData.append('roomLocation', roomLocation);
    formData.append('roomBedType', roomBedType);
    formData.append('roomPrice', roomPrice);

    mutate({
      roomImage: roomImage,
      roomName: roomName,
      roomLocation: roomLocation,
      roomBedType:roomBedType,
      roomPrice: roomPrice,
    })
  }
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setListing({
      ...listing,
      [name]: value
    })
  }

  const handleUploadImage = (event: any) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      setImageFile(file)
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  }

  return (
    <div className='w-full px-2 sm:px-10 h-fit pb-12'>
      <p className='mt-5 font-bold'>Create Listing:</p>
      
      <form className='w-full flex flex-col mt-10' onSubmit={handleFormSubmit}>
        <div className={`w-full h-32 min-[375px]:h-48 sm:h-72 md:h-96 flex flex-col justify-center items-center mb-6 rounded relative`}
          style={{ backgroundImage: `url(${imageSrc})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center', objectFit: 'cover' }}>
          <div className='absolute w-full h-full top-0 left-0 bg-black opacity-20'></div>
          <input type="file" className='absolute hidden cursor-pointer' ref={fileInputRef} onChange={handleUploadImage} name="roomImage" />
          <img src={UploadIcon} alt={UploadIcon} className='absoulte cursor-pointer z-10' onClick={handleIconClick} />
        </div>
        {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mb-4">
        {error?.response?.data?.message}
      </div>}
      {isSuccess && <div className="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700 mt-4">
        {successMessage}
      </div>}

        <div className='flex flex-col sm:flex-row w-full gap-4 mb-10'>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomName" className='text-sm font-bold'>Room Name:</label>
            </div>
            <Input onChange={handleChange} type="text" placeHolder="" value={listing.roomName} id="roomName" name="roomName" />
          </div>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomLocation" className='text-sm font-bold'>City:</label>
            </div>
            <Input onChange={handleChange} type="text" placeHolder="" value={listing.roomLocation} id="roomLocation" name="roomLocation" />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row w-full gap-4'>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomBedType" className='text-sm font-bold'>Bed Type:</label>
            </div>
            <Input onChange={handleChange} type="text" placeHolder="" value={listing.roomBedType} id="roomBedType" name="roomBedType" />
          </div>
          <div className='basis-6/12'>
            <div className='mb-2'>
              <label htmlFor="roomPrice" className='text-sm font-bold'>Price:</label>
            </div>
            <Input onChange={handleChange} type="text" placeHolder="" value={listing.roomPrice} id="roomPrice" name="roomPrice" />
          </div>
        </div>

        <div className='mt-14 w-40 flex justify-center items-center m-auto'>
          <Button onClick={() => null} variant='primary'>{isLoading ? <Loader /> : 'Create Listing'}</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateListing