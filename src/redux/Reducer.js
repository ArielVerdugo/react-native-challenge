export const soundBarReducer = (state = [], action) => {
  const arr = [];
  arr.push(action.payload);
  return arr;
};
