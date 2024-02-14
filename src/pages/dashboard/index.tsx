// import { Line } from 'react-chartjs-2';


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map((label) => label),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Dashboard = () => {

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 justify-between text-white sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-md bg-orange py-8 px-6">
          <p>20</p>
          <p>New Booking</p>
        </div>
        <div className="rounded-md bg-blue py-8 px-6">
          <p>30</p>
          <p>Schedule Room</p>
        </div>
        <div className="rounded-md bg-green py-8 px-6">
          <p>25</p>
          <p>Check In</p>
        </div>
        <div className="rounded-md bg-danger-color py-8 px-6">
          <p>12</p>
          <p>Check Out</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 shadow-listing-card rounded grid grid-cols-1 gap-20 lg:grid-cols-3">
        <div className="text-center">
          <p>Available Room Today</p>
          <p className="text-blue text-xl font-bold">120</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="h-2 rounded-full bg-blue" style={{ width: '45%' }}></div>
          </div>
          <p className="opacity-25">Total 500 Room</p>
        </div>
        <div className="text-center">
          <p>Sold Out Room Today</p>
          <p className="text-green text-xl font-bold">240</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="h-2 rounded-full bg-green" style={{ width: '85%' }}></div>
          </div>
          <p className="opacity-25">Total 500 Room</p>
        </div>
        <div className="text-center">
          <p>Cancelling Room Today</p>
          <p className="text-danger-color text-xl font-bold">02</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="h-2 rounded-full bg-danger-color" style={{ width: '2%' }}></div>
          </div>
          <p className="opacity-25">Total 500 Room</p>
        </div>
      </div>
    <div className="flex flex-col gap-4 mt-8">
      <div className="bg-white shadow-listing-card basis-2/4 p-4 rounded">
      {/* <Line options={[]} data={data} /> */}

      </div>
      <div className="bg-white shadow-listing-card flex-1 p-4 rounded">2</div>
    </div>
    </div>
  )
}

export default Dashboard