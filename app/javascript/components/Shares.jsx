import React, { useState, useEffect } from "react";

import Table from './table/index';

import { getShares } from '../api/shares';

const Shares = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    getShares().then(shares => setShares(shares))
  }, []);

  return (<Table data={shares} columns={Object.keys(shares[0] || {})} />);
}

export default Shares;
