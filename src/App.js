import { useState, useEffect } from "react";
import "./App.css";
import UserTable from "./UserTable.js/UserTable";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState({ column: "API", direction: "asc" });

  const getData = () => {
    axios
      .get("https://api.publicapis.org/entries")
      // .then(result => result.json())
      .then((response) => {
        setData(response.data.entries);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    onSortMethod();
  }, [sort]);
  const onSortMethod = () => {
    setData([
      ...data.sort((a, b) => {
        if (a[sort.column] < b[sort.column]) {
          return sort.direction === "asc" ? -1 : 1;
        } else if (a[[sort.column]] > b[sort.column]) {
          return sort.direction === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      }),
    ]);
  };
  const onSort = (value) => {
    if (value !== sort.column) {
      setSort({
        column: value,
        direction: "asc",
      });
    } else if ((value === sort.column) & (sort.direction === "asc")) {
      setSort({
        column: value,
        direction: "dsc",
      });
    } else {
      setSort({
        column: value,
        direction: "asc",
      });
    }
  };

  return (
    <div className="App">
      <h1>Table demo</h1>
      <UserTable data={data} onSort={onSort} />
    </div>
  );
}
