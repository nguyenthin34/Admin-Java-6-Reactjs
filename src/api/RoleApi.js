import instance from "./instance";

export const getAll = () => {
  const url = `/role`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/role/${id}`;
  return instance.get(url);
};

export const add = (user) => {
  const url = `/role`;
  return instance.post(url, user);
};

export const update = (role) => {
  const url = `/role/${role.role_id}`;
  return instance.put(url, role);
};
