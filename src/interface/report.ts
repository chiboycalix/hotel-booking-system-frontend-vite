export interface IReport {
    id: number,
    dateOrder: string|React.ReactNode,
    bookedRoomDetails: {
      total: number,
      standard: number,
      deluxe: number,
      accessible: number
    },
    totalIncome: number
}