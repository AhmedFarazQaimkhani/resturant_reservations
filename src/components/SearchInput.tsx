interface SearchInputProps {
  tooltipMessage: string;
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput = ({
  tooltipMessage,
  setSearchedValue,
}: SearchInputProps) => {
  return (
    <div>
      <span className="w-100 form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="Search"
          data-toggle="tooltip"
          data-placement="top"
          title={tooltipMessage}
          onChange={(e) => setSearchedValue(e.target.value)}
          className="form-control"
          id="search"
          aria-describedby="searchBlock"
          placeholder="Search"
        />
      </span>
    </div>
  );
};
