// Interfaces
import { Column } from '../common/interfaces';

// Utils
import { getPropByString } from '../utils/getPropByString';

interface TableBodyProps {
  tableData: any;
  columns: Column[];
}
export const TableBody = ({ tableData, columns }: TableBodyProps) => {
  return (
    <tbody>
      {tableData.map((data: any) => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor, renderCell }: Column) => {
              const tData = getPropByString(data, accessor);
              return (
                <td key={accessor}>
                  {/* this displays default data */}
                  {accessor && !renderCell && tData}

                  {/* this displays custom data */}
                  {accessor && renderCell && renderCell(data)}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
