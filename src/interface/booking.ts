export interface IBooking {
  id: number;
  roomDetails: {
    roomType: string;
    roomNumber: number;
    roomImage: string;
  };
  dateOrder: string;
  guestDetails: {
    guestName: string;
    guestImage: string;
    guestNumber: string;
  };
  checkIn: string;
  checkOut: string;
}
