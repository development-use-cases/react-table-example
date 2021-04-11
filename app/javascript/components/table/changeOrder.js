const orderSequence = {
  "asc": "desc",
  "desc": null,
  [null]: "asc"
};

const changeOrder = (order) => orderSequence[order];

export default changeOrder;
