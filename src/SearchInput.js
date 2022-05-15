const SearchInput = (props) => {
  const { searchInput, setSearchInput } = props;
  return (
    <div className="search-container">
      <input
        className="searchInput"
        type="text"
        placeholder="Search by name, email or role"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
