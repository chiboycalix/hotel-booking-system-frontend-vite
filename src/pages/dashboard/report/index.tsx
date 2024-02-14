import Table from "../../../components/table";
import { IReport } from "../../../interface/report";

const Report = () => {
  const columns = [
    { key: 'dateOrder', title: 'Date' },
    { key: 'bookedRoom', title: 'Booked Room' },
    { key: 'standard', title: 'Standard' },
    { key: 'deluxe', title: 'Deluxe' },
    { key: 'accessible', title: 'Accessible' },
    { key: 'totalIncome', title: 'Total Income' }
  ];

  const data = [
    {
      id: 1,
      dateOrder: "2024-01-02",
      totalIncome: 90000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 2,
      dateOrder: 30,
      totalIncome: 140000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      },
    },
    {
      id: 3,
      dateOrder: 30,
      totalIncome: 39000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 4,
      dateOrder: 30,
      totalIncome: 27000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 5,
      dateOrder: 30,
      totalIncome: 3000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 6,
      dateOrder: 30,
      totalIncome: 33000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 7,
      dateOrder: 30,
      totalIncome: 15000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 8,
      dateOrder: 30,
      totalIncome: 80000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 9,
      dateOrder: 30,
      totalIncome: 14000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    },
    {
      id: 10,
      dateOrder: 30,
      totalIncome: 70000,
      bookedRoomDetails: {
        total: 20,
        standard: 10,
        deluxe: 5,
        accessible: 5
      }
    }
  ];

  const reports = data.map((report: IReport) => {
    const reportTableRecord = {
      ...report,
      dateOrder: (<div>
        <p>01 December, 2023</p>
      </div>),
      bookedRoom: (<div>
        <p className="text-blue">{report.bookedRoomDetails.total} Rooms</p>
      </div>),
      standard: (
        <p>{report.bookedRoomDetails.standard}</p>
      ),
      deluxe: (
        <p>0{report.bookedRoomDetails.deluxe}</p>
      ),
      accessible: (
        <p>0{report.bookedRoomDetails.accessible}</p>
      ),
      totalIncome: (<p className="text-success-color">${report.totalIncome}</p>)
    }
    return reportTableRecord;
  }
  )

  return <Table data={reports} columns={columns} />
}

export default Report