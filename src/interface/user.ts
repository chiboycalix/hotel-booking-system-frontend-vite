export interface IGuest {
  id: number;
  name: string | React.ReactNode;
  dateOrder: number | React.ReactNode;
  room: number | React.ReactNode;
  checkIn: string | React.ReactNode;
  checkOut: string | React.ReactNode;
  status: string | React.ReactNode;
}
