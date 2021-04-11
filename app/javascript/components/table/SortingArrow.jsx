import React from "react";

const textToIcon = {
  desc: "▼",
  asc: "▲",
  [null]: ""
};

const SortingArrow = ({ order }) => {
  let icon = textToIcon[order];

  if (icon === undefined) {
    throw new Error(`Unsupported argument ${order}!`);
  }

  return <span>{icon}</span>;
};

export default SortingArrow;
