import instance from "./instance";

export const getAll = () => {
  const url = `/users`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/users/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/users`;
  return instance.post(url, user);
};



export const update = (user) => {
  const url = `/users/${user.username}`;
  return instance.put(url, user);
};
