import React from "react";

import SortedTable from './table/SortedTable';
import { get } from '../api/get';

const getData = async (sorting) => {
  return await get("/api/shares.json?" + queryFromSorting(sorting));
};

const queryFromSorting = (sorting) => {
  return sorting.map(({ label, sorting }) => {
    if (sorting == null) {
      return null;
    } else {
      return `sort[${label}]=${sorting}`;
    }
  }).filter(s => s !== null).join('&');
};

const Shares = () => {
  return (
    <>
      <h2>Shares</h2>
      <SortedTable getData={getData} />
    </>
  );
}

export default Shares;
