// Components
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

// Hooks
import { useSortableTable } from '../hooks/useSortableHook';

const Table = ({ data, columns }: any) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <table className="table">
      <TableHead {...{ columns, handleSorting }} />
      <TableBody {...{ columns, tableData }} />
    </table>
  );
};

export default Table;
