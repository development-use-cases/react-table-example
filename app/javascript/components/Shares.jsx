import React from "react";

import Table from './table';
import { getShares } from '../api/shares';

const Shares = () => {
  return (
    <>
      <h2>Shares</h2>
      <Table getData={sort => getShares({ sort })} />
    </>
  );
}

export default Shares;
