import instance from "./instance";

export const getAll = () => {
  const url = `/color`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/color/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/color`;
  return instance.post(url, user);
};

export const update = (color) => {
  const url = `/color/${color.color_id}`;
  return instance.put(url, color);
};
