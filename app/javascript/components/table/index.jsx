import React, { useState, useEffect } from "react";

import Body from "./Body";
import Header from "./Header";
import ColumnName from "./ColumnName";
import changeOrder from "./changeOrder";
import arrayToObject from "./arrayToObject";

const byLabel = (value) => ({ label }) => label === value;
const rejectByLabel = (value) => ({ label }) => label !== value;

const initialSorting = (columns) => columns.map(label => ({ label, order: null }));

const Table = ({ getData }) => {
  const [sorting, setSorting] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [columnHeaders, setColumnHeaders] = useState([]);

  useEffect(() => {
    setSorting(initialSorting(columns));
  }, [columns]);

  useEffect(() => {
    getData().then(data => {
      setColumns(Object.keys(data[0]));
      setRows(data);
    });
  }, []);

  useEffect(() => {
    getData(arrayToObject(sorting)).then(data => {
      setRows(data);
    });
  }, [sorting]);

  const changeSorting = (label) => {
    let currentOrder = sorting.find(byLabel(label)).order;
    let newSorting = sorting.filter(rejectByLabel(label));
    newSorting.unshift({
      label, order: changeOrder(currentOrder)
    });
    setSorting(newSorting);
  };

  useEffect(() => {
    let newColumnHeaders = columns.map(columnName => {
      let columnOrder = sorting.find(byLabel(columnName));
      return <ColumnName {...columnOrder} onClick={changeSorting} />;
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
