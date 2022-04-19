import instance from "./instance";

export const getAll = () => {
  const url = `/size`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/size/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/size`;
  return instance.post(url, user);
};

export const update = (size) => {
  const url = `/size/${size.size_id}`;
  return instance.put(url, size);
};
