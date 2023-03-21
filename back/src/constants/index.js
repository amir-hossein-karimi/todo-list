const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "todo_List";

const SERVER_PORT = 3500;

const COLLECTIONS = {
  TODOS: "todos",
  USERS: "users",
};

const TYPES = {
  STRING: "string",
  NUMBER: "number",
  ARRAY: "array",
  BOOLEAN: "boolean",
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

module.exports = {
  DB_URL,
  SERVER_PORT,
  COLLECTIONS,
  DB_NAME,
  TYPES,
  ROLES,
  SECRET,
  TODO_STATUS,
};
