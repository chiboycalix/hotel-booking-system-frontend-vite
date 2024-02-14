
import EditIcon from '../../assets/images/edit-icon.svg'
import DeleteIcon from '../../assets/images/delete-icon.svg'

interface IActions {
  onUpdate: (recordToUpdate: any) => void;
  recordToUpdate?: any;
  setIsVisible: (isVisible: boolean) => void;
  isVisible?: boolean;
}
const Actions = ({ onUpdate, setIsVisible, recordToUpdate, isVisible }: IActions) => {
  return (
    <div className='flex gap-4'>
      <div className='flex gap-2 cursor-pointer' onClick={() => onUpdate(recordToUpdate)}>
        <img src={EditIcon} alt={EditIcon} className='w-4' />
        <p className='text-success-color text-sm'>Edit</p>
      </div>
      <div className='flex gap-2 cursor-pointer' onClick={() => setIsVisible(!isVisible)}>
        <img src={DeleteIcon} alt={DeleteIcon} className='w-3' />
        <p className='text-sm text-red-600'>Delete</p>
      </div>
    </div>
  )
}

export default Actions;