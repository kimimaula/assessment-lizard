//checks for uniqueness in array
export const uniq = (arr, field) => [
  ...new Map(arr.map((item) => [item[field], item])).values(),
];
