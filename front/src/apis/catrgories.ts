import axios from "axios";

export const getAllCategories = () => {
  return axios.get("/category/all");
};

export const addCategory = ({ name }: { name: string }) => {
  return axios.post("/category/create", { name });
};

export const updateCategory = ({ name, id }: { name: string; id: string }) => {
  return axios.put(`/category/update?id=${id}`, { name });
};

export const deleteCategory = ({ id }: { id: string }) => {
  return axios.delete(`/category/delete?id=${id}`);
};
