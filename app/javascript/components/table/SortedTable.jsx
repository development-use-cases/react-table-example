import React, { useState, useEffect } from "react";

import Body from "./Body";
import Header from "./Header";

const displaySorting = (sorting) => {
  if (sorting == "desc") {
    return "▼";
  } else if (sorting == "asc") {
    return "▲";
  } else if (sorting == null) {
    return "";
  } else {
    throw new Error(`Unsupported argument ${sorting}!`);
  }
};

const ColumnName = ({ label, sorting, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={() => onClick(label)}>
    {label} {displaySorting(sorting)}
  </span>
);

const nextSorting = (sorting) => {
  const nextAfter = {
    "asc": "desc",
    "desc": null,
    [null]: "asc"
  };
  return nextAfter[sorting];
};

const SortedTable = ({ getData }) => {
  const [sorting, setSorting] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setSorting(
      columns.map((columnLabel) => ({ label: columnLabel, sorting: null }))
    );
  }, [columns]);

  useEffect(() => {
    getData([]).then(data => {
      setColumns(Object.keys(data[0]));
      setRows(data);
    });
  }, [getData]);

  useEffect(() => {
    getData(sorting).then(data => {
      setRows(data);
    });
  }, [sorting]);

  const changeSorting = (columnLabel) => {
    let newSorting = sorting.filter(({ label }) => label != columnLabel);
    newSorting.unshift({
      label: columnLabel,
      sorting: nextSorting(sorting.find(({ label }) => label == columnLabel).sorting)
    });
    setSorting(newSorting);
  };

  const columnNames = columns.map((col) => (
    <ColumnName {...sorting.find(({ label }) => label == col)} onClick={changeSorting} />
  ));

  return (
    <table>
      <Header columns={columnNames} />
      <Body columns={columns} data={rows} />
    </table>
  );
};

export default SortedTable;
