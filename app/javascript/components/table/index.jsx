import React, { useState, useEffect } from "react";

import Body from "./Body";
import Header from "./Header";
import SortingArrow from "./SortingArrow";

const ColumnName = ({ label, sorting, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={() => onClick(label)}>
    {label} <SortingArrow order={sorting} />
  </span>
);

const nextSorting = (order) => {
  const nextAfter = {
    "asc": "desc",
    "desc": null,
    [null]: "asc"
  };
  return nextAfter[order];
};

const Table = ({ getData }) => {
  const [sorting, setSorting] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);

  useEffect(() => {
    setSorting(
      columns.map(label => ({ label, sorting: null }))
    );
  }, [columns]);

  useEffect(() => {
    getData().then(data => {
      setColumns(Object.keys(data[0]));
      setRows(data);
    });
  }, []);

  useEffect(() => {
    let sortingAsObject = {};
    sorting.forEach(({ label, sorting }) => {
      if (sorting != null) {
        sortingAsObject[label] = sorting;
      }
    });
    getData(sortingAsObject).then(data => {
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

  useEffect(() => {
    const byLabel = (value) => ({ label }) => label === value;

    let newColumnHeaders = columns.map(columnName => {
      return (
        <ColumnName
          {...sorting.find(byLabel(columnName))}
          onClick={changeSorting}
        />
      );
    });
    setColumnHeaders(newColumnHeaders);
  }, [sorting]);


  return (
    <table>
      <Header columns={columnHeaders} />
      <Body columns={columns} data={rows} />
    </table>
  );
};

export default Table;
