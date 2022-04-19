import instance from "./instance";

export const getAll = () => {
  const url = `/category`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/category/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/category`;
  return instance.post(url, user);
};

export const update = (category) => {
  const url = `/category/${category.category_id}`;
  return instance.put(url, category);
};
