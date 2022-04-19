import instance from "./instance";

export const getAll = () => {
  const url = `/orderDetail`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/orderDetail/${id}`;
  return instance.get(url);
};
