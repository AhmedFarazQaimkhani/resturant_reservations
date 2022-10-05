// Packages
import { useState, useEffect } from 'react';
import { Column } from '../common/interfaces';

// Utils
import { getNestedProperty } from '../utils/getNestedProperty';

// Sort data asc as default
const getDefaultSorting = (defaultTableData: any, columns: Column[]) => {
  const sorted = [...defaultTableData].sort((a, b) => {
    const filterColumn = columns.filter((column: any) => column.sortbyOrder);

    // Merge all array objects into single object and extract accessor and sortbyOrder keys
    const { accessor = 'id', sortbyOrder = 'asc' } = Object.assign(
      {},
      ...filterColumn
    );

    if (getNestedProperty(a, accessor) === null) return 1;
    if (getNestedProperty(b, accessor) === null) return -1;
    if (
      getNestedProperty(a, accessor) === null &&
      getNestedProperty(b, accessor) === null
    )
      return 0;

    const ascending = getNestedProperty(a, accessor)
      .toString()
      .localeCompare(getNestedProperty(b, accessor).toString(), 'en', {
        numeric: true,
      });

    return sortbyOrder === 'asc' ? ascending : -ascending;
  });
  return sorted;
};

// Custom Hook to sort data
export const useSortableTable = (data: any, columns: Column[]) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const defaultSortData = getDefaultSorting(data, columns);
    setTableData(defaultSortData as []);
  }, [data, columns]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (getNestedProperty(a, sortField) === null) return 1;
        if (getNestedProperty(b, sortField) === null) return -1;
        if (
          getNestedProperty(a, sortField) === null &&
          getNestedProperty(b, sortField) === null
        )
          return 0;
        return (
          getNestedProperty(a, sortField)
            .toString()
            .localeCompare(getNestedProperty(b, sortField).toString(), 'en', {
              numeric: true,
            }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  return [tableData, handleSorting];
};
