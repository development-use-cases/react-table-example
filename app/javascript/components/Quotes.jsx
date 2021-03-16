import React, { useState, useEffect } from "react";

import SortedTable from "./table/SortedTable";

import { getQuotes } from "../api/quotes";
import { Link, useParams } from "react-router-dom";

const processQuotes = (quotes) =>
  quotes.map((quote) => ({
    id: quote.id,
    share: <Link to={`/shares/${quote.share_id}`}>{quote.share.ticker}</Link>,
    cost: quote.cost,
    date: quote.date,
  }));

const Quotes = () => {
  const { date } = useParams();

  return <SortedTable getData={(sorting) => {
    console.log(sorting);
    return getQuotes(date, { sort: sorting });
  }} />;
};

export default Quotes;
