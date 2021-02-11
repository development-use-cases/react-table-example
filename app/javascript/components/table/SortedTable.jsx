import React, { useState, useEffect } from "react";

import Body from "./Body";
import Header from "./Header";

const ColumnName = ({ label, sorting, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={() => onClick(label)}>
    {label} {sorting == "asc" ? "▼" : "▲"}
  </span>
);

const opposite = (sorting) => (sorting === "asc" ? "desc" : "asc");

const SortedTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    setSorting(
      columns.map((columnLabel) => ({ label: columnLabel, sorting: "asc" }))
    );
  }, [columns]);

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
  };

  const columnNames = sorting.map((col) => (
    <ColumnName {...col} onClick={changeSorting} />
  ));

  return (
    <table>
      <Header columns={columnNames} />
      <Body columns={columns} data={data} />
    </table>
  );
};

export default SortedTable;
