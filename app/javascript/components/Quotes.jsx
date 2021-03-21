import React, { useState, useEffect } from "react";

import Table from "./table";

import { getQuotes } from "../api/quotes";
import { Link, useParams } from "react-router-dom";

const processQuotes = (quotes) =>
  quotes.map((quote) => {
    return {
      id: quote.id,
      share: <Link to={`/shares/${quote.share_id}`}>{quote.share.ticker}</Link>,
      cost: quote.cost,
      date: quote.date,
    };
  });

const Quotes = () => {
  const { date } = useParams();

  return <Table getData={(sort) => getQuotes(date, { sort })} />;
};

export default Quotes;
