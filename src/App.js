import { useEffect, useState } from "react";
import "./styles.css";
import SearchInput from "./SearchInput";
import Table from "./Table";
import Button from "./Button";

const api = ` https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`;

export default function App() {
  const [list, setList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const limit = 10;
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const appData = async () => {
      const data = await fetch(api, {
        method: "GET"
      });
      const userData = await data.json();
      setList(userData);
    };
    appData();
  }, []);

  const filterItem = list.filter(
    (user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.email.toLowerCase().includes(searchInput.toLowerCase()) ||
      user.role.toLowerCase().includes(searchInput.toLowerCase())
  );

  function paginatedData(pageNumber, limit) {
    let lastIndex = limit * pageNumber;
    let startIndex = lastIndex - limit;
    return filterItem.slice(startIndex, lastIndex);
  }

  const paginatedDataArray = paginatedData(pageNumber, limit);

  return (
    <div className="App">
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <Table data={paginatedDataArray} list={list} setList={setList} />
      <Button
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        limit={limit}
        length={filterItem.length}
      />
    </div>
  );
}
