import React from "react";

import SortedTable from './table/SortedTable';
import { getShares } from '../api/shares';

const getData = async (sorting) => {
  return await getShares({ sort: sorting });
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
