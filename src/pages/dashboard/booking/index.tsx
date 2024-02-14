import Table from '../../../components/table';
import { IBooking } from '../../../interface/booking';
import RoomOne from '../../../assets/images/rooms/room-one.jpeg';
import RoomTwo from '../../../assets/images/rooms/room-two.jpeg';
import RoomThree from '../../../assets/images/rooms/room-three.jpeg';
import RoomFour from '../../../assets/images/rooms/room-four.jpeg';
import RoomFive from '../../../assets/images/rooms/room-five.jpeg';
import RoomSix from '../../../assets/images/rooms/room-six.jpg';
import Avatar from '../../../assets/images/avatar.png';

const Booking = () => {
  const columns = [
    { key: 'roomDetails', title: 'Room Details' },
    { key: 'dateOrder', title: 'Date Order' },
    { key: 'guestDetails', title: 'Guest Details' },
    { key: 'checkIn', title: 'Check In' },
    { key: 'checkOut', title: 'Check Out' },
  ];

  const data = [
    {
      id: 1,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomOne
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 2,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomTwo
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 3,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomThree
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 4,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomFour
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 5,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomFive
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 6,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomSix
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 7,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomThree
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 8,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomOne
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 9,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomFour
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    },
    {
      id: 10,
      roomDetails: {
        roomType: 'Standard',
        roomNumber: 102,
        roomImage: RoomTwo
      },
      dateOrder: "2024-01-01",
      guestDetails: {
        guestName: "Igwe Chinonso",
        guestImage: Avatar,
        guestNumber: "#AB-23-2023 "
      },
      checkIn: "2024-01-03",
      checkOut: "2024-01-04",
    }
  ];

  const rooms = data.map((room: IBooking) => {
    const roomTableRecord = {
      ...room,
      roomDetails: (<div className='flex gap-2'>
        <img src={room.roomDetails.roomImage} alt="" className='w-20 h-10 rounded-md' />
        <div className=''>
          <p>{room.roomDetails.roomType}</p>
          <p className='text-xs opacity-25'>Room: {room.roomDetails.roomNumber}</p>
        </div>
      </div>),
      guestDetails: (<div className='flex gap-2'>
        <img src={Avatar} alt={Avatar} className='w-10 rounded-full' />
        <div>
          <p>{room.guestDetails.guestName}</p>
          <p className='text-xs opacity-25'>{room.guestDetails.guestNumber}</p>
        </div>
      </div>),
      dateOrder: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      checkIn: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      checkOut: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
    }
    return roomTableRecord;
  }
  )

  return <Table data={rooms} columns={columns} hasCheckBox />
}

export default Booking