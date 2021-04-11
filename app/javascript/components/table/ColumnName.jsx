import React from "react";

import SortingArrow from "./SortingArrow";

const ColumnName = ({ label, order, onClick }) => (
  <span style={{ cursor: "pointer" }} onClick={() => onClick(label)}>
    {label} <SortingArrow order={order} />
  </span>
);

export default ColumnName;
