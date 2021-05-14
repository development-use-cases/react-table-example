/**
  * arrayToObject([{ label: "name", value: val: "John" }, { label: "age", val: 30 }], "val")
  *   => { "name": "John", "age": 30 }
  */
const arrayToObject = (array, key) => {
  let object = {};
  array.forEach(item => {
    if (item[key] != null) {
      object[item["label"]] = item[key];
    }
  });
  return object;
}

export default arrayToObject;
