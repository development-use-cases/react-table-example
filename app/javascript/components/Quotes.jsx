import React, { useState, useEffect } from "react";

import Table from "./table/index";

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

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getQuotes(date).then((quotes) => setQuotes(processQuotes(quotes)));
  }, []);

  return <Table data={quotes} />;
};

export default Quotes;
