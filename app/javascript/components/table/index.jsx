import React from "react";
import Body from "./Body";
import Header from './Header';

const Table = ({ data = [], columns = Object.keys(data[0] || {}) }) => (
  <table>
    <Header columns={columns} />
    <Body columns={columns} data={data} />
  </table>
);

export default Table;
