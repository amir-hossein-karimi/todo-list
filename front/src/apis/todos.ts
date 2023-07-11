import axios from "axios";

interface todoBodyType {
  title: string;
  description?: string;
  status?: "todo" | "in_progress" | "done";
}

export const getAllTodos = (categoryId: string) => {
  return axios.get(`/todos/all?categoryId=${categoryId}`);
};

export const createTodo = (data: todoBodyType, categoryId: string) => {
  return axios.post(`/todos/create?categoryId=${categoryId}`, data);
};

export const updateTodo = (data: todoBodyType, todoId: string) => {
  return axios.put(`/todos/update?id=${todoId}`, data);
};

export const deleteTodo = (todoId: string) => {
  return axios.delete(`/todos/delete?id=${todoId}`);
};
