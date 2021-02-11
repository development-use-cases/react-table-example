import React, { useState, useEffect } from "react";

import { getShares } from "../api/shares";
import SortedTable from "./table/SortedTable";

const Shares = () => {
  const [shares, setShares] = useState([]);

  useEffect(() => {
    getShares().then((shares) => setShares(shares));
  }, []);

  return <SortedTable data={shares} columns={Object.keys(shares[0] || {})} />;
};

export default Shares;
