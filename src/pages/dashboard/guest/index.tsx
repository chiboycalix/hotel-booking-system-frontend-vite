import Table from '../../../components/table';
import { IGuest } from '../../../interface/user';
import Avatar from '../../../assets/images/avatar.png';

const Guest = () => {
  const columns = [
    { key: 'name', title: 'Guest' },
    { key: 'dateOrder', title: 'Date Order' },
    { key: 'room', title: 'Room' },
    { key: 'checkIn', title: 'Check In' },
    { key: 'checkOut', title: 'Check Out' },
    { key: 'status', title: 'Status' }
  ];

  const data = [
    {
      id: 1,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "active",
    },
    {
      id: 2,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "Inactive",
    },
    {
      id: 3,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "active",
    },
    {
      id: 4,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "Inactive",
    },
    {
      id: 5,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "active",
    },
    {
      id: 6,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "Inactive",
    },
    {
      id: 7,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "active",
    },
    {
      id: 8,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "Inactive",
    },
    {
      id: 9,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "active",
    },
    {
      id: 10,
      name: "chinonso",
      dateOrder: 30,
      room: 33,
      checkIn: "software enigneer",
      checkOut: "Go",
      status: "Inactive",
    }
  ];

  const users = data.map((user: IGuest) => {
    const userTableRecord = {
      ...user,
      name: (<div className='flex gap-1'>
        <div>
          <img src={Avatar} alt={Avatar} className='w-10 rounded-full' />
        </div>
        <div>
          <p>Igwe Chinonso</p>
          <p className='text-xs opacity-25'>#AB-23-2023</p>
        </div>
      </div>),
      dateOrder: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      room: (<div>
        <p>Standard</p>
        <p className='text-xs opacity-25'>Room 201</p>
      </div>),
      checkIn: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      checkOut: (<div>
        <p>20th Oct. 2023</p>
        <p className='text-xs opacity-25'>Sunday, 9:50AM</p>
      </div>),
      status: (<div>{user.status === 'active' ? <p className='text-success-color'>active</p> : <p className='text-secondary-color'>inactive</p>}</div>)
    }
    return userTableRecord;
  }
  )

  return <Table data={users} columns={columns} hasCheckBox/>
}

export default Guest;