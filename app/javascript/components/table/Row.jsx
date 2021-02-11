import React from "react";

const Row = ({ columns, object }) => (
  <tr>
    {columns.map((column, i) => (
      <td key={`row-${i}`}>{object[column]}</td>
    ))}
  </tr>
);

export default Row;
