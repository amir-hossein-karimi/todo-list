const DB_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "todo_List";

const SERVER_PORT = 3500;

const COLLECTIONS = {
  TODOS: "todos",
  USERS: "users",
  CATEGORIES: "categories",
};

const TYPES = {
  STRING: typeof "",
  NUMBER: typeof 0,
  ARRAY: typeof [],
  BOOLEAN: typeof true,
  OBJECT_ID: "objectId",
};

const ROLES = {
  USER: "user",
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
};

const SECRET = "superSecret";

const TODO_STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

const expt = {
  REFRESH_TOKEN: "1d",
  ACCESS_TOKEN: "30m",
};

module.exports = {
  DB_URL,
  SERVER_PORT,
  COLLECTIONS,
  DB_NAME,
  TYPES,
  ROLES,
  SECRET,
  TODO_STATUS,
  expt,
};
