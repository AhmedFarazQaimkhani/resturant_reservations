// Icons
import { SvgIcons } from './SvgIcons';

interface FilterProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const FilterButton = ({ onClick }: FilterProps) => {
  return (
    <button className="btn btn-primary" type="button" onClick={onClick}>
      <span className="svg-icon svg-icon-muted svg-icon-2">
        <SvgIcons icon="filter" />
      </span>
      <span>Filter</span>
    </button>
  );
};
