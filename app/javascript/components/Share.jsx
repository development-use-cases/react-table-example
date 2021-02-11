import React from "react";
import Table from "./table";

const tickerStyles = {
  fontFamily: 'monospace'
};

const Share = ({ share }) => {
  return (
    <div>
      <h1>{share.company} (<span style={tickerStyles}>{share.ticker}</span>)</h1>
      <h6>{share.country}</h6>
      <div>
        <h2>Quotes</h2>
        <Table data={share.quotes} />
      </div>
    </div>
  );
}

export default Share;
