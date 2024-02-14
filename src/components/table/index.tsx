import { useState } from 'react';
import Actions from '../actions';

interface ITable {
  data: any[];
  columns: { key: string; title: string }[];
  hasCheckBox?: boolean;
}
const Table = ({ data, columns, hasCheckBox }: ITable) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedRows(selectAll ? [] : data.map((row: any) => row.id));
  };

  const handleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId: any) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };



  return (
    <>
      <div className='flex justify-end w-full py-6'>
        {
          selectedRows.length > 0 ? <Actions onUpdate={() => null} setIsVisible={() => null} /> : null
        }

      </div>
      <div className="overflow-x-auto bg-white flex flex-col">
        <table className="min-w-full border-none border-collapse">
          <thead>
            <tr>
              {
                hasCheckBox && <th className="border-b p-4 text-left py-4">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className='accent-primary-color w-4 h-4'
                  />
                </th>
              }

              {columns.map((column: any) => (
                <th key={column.key} className="border-b p-4 text-left">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row: any) => (
              <tr key={row.id} className='text-left'>
                {
                  hasCheckBox && <td className="border-b p-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => handleSelectRow(row.id)}
                      className='accent-primary-color w-4 h-4'
                    />
                  </td>
                }

                {columns.map((column: any) => (
                  <td key={column.key} className="border-b p-4">
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
};

export default Table;
