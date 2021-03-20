import React from "react";
import Row from "./Row";

const Body = ({ columns, data }) => (
  <tbody>
    {(data || []).map((row, i) => (
      <Row key={i} columns={columns} object={row} />
    ))}
  </tbody>
);

export default Body;
