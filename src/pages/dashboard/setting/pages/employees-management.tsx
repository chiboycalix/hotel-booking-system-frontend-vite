import PlusIcon from '../../../../assets/images/plus-icon.svg'
import { Button } from "../../../../components"

const EmployeesManagement = () => {
  return (
    <div>
      <div className='flex gap-4 items-center justify-between mb-8'>
          <h1 className='basis-8/12'>Employees</h1>
          <div className='basis-4/12'>
            <Button onClick={() => null} variant="primary" Icon={PlusIcon} hasIconPrefix>
              Add Employees
            </Button>
          </div>
        </div>
        <div className="bg-white p-6 shadow-listing-card rounded ">
        EmployeesManagement
        </div>
    </div>
  )
}

export default EmployeesManagement