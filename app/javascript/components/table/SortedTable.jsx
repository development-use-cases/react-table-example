import React, { useState, useEffect } from "react";

import Body from "./Body";
import Header from "./Header";

const ColumnName = ({ label, sorting, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={() => onClick(label)}>
    {label} {sorting === "asc" ? "▼" : "▲"}
  </span>
);

const sortingFunction = (sorting) => (a, b) => {
  for (let order of sorting) {
    if (a[order.label] === b[order.label]) {
      return 0;
    }

    if (a[order.label] < b[order.label]) {
      return sorting == "asc" ? -1 : 1;
    }

    return sorting == "asc" ? 1 : -1;
  }
};

const opposite = (sorting) => (sorting === "asc" ? "desc" : "asc");

const SortedTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setSorting(
      columns.map((columnLabel) => ({ label: columnLabel, sorting: "asc" }))
    );
  }, [columns]);

  useEffect(() => {
    setRows(data.slice());
  }, [data]);

  const changeSorting = (columnLabel) => {
    let newSorting = sorting.map((column) =>
      column.label === columnLabel
        ? {
            label: column.label,
            sorting: opposite(column.sorting),
          }
        : column
    );
    setSorting(newSorting);
    let newRows = rows.sort(sortingFunction(newSorting));
    setRows(newRows);
  };

  const columnNames = sorting.map((col) => (
    <ColumnName {...col} onClick={changeSorting} />
  ));

  return (
    <table>
      <Header columns={columnNames} />
      <Body columns={columns} data={rows} />
    </table>
  );
};

export default SortedTable;
