import instance from "./instance";

export const getAll = () => {
  const url = `/commodity`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/commodity/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/commodity`;
  return instance.post(url, user);
};

export const update = (commodity) => {
  const url = `/commodity/${commodity.commodity_id}`;
  return instance.put(url, commodity);
};
