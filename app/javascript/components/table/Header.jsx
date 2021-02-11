import React from "react";

const Header = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((columnName, i) => (
        <th key={`header-${i}`}>{columnName}</th>
      ))}
    </tr>
  </thead>
);

export default Header;
