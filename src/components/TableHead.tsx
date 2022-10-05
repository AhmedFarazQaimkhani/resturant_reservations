/* eslint-disable no-nested-ternary */
// Packages
import { useState } from 'react';
import SvgIcons from './SvgIcons';

export const TableHead = ({ columns, handleSorting }: any) => {
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  // Sorts on change
  const handleSortingChange = (sortable: boolean, accessor: any) => {
    if (!sortable) return;
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }: any) => {
          const cl = sortable
            ? sortField === accessor && order === 'asc'
              ? 'up'
              : sortField === accessor && order === 'desc'
              ? 'down'
              : 'default'
            : '';
          return (
            <th
              key={accessor}
              onClick={() => handleSortingChange(sortable, accessor)}
              className={cl}
            >
              <span className="thead-label">{label}</span>
              {sortable ? (
                sortField === accessor && order === 'asc' ? (
                  <span className="svg-sort">
                    <SvgIcons icon="sortup" />
                  </span>
                ) : sortField === accessor && order === 'desc' ? (
                  <span className="svg-sort">
                    <SvgIcons icon="sortdown" />
                  </span>
                ) : (
                  <span className="svg-sort">
                    <SvgIcons icon="defaultsort" />
                  </span>
                )
              ) : (
                ''
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
