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

module.exports = {
  DB_URL,
  SERVER_PORT,
  COLLECTIONS,
  DB_NAME,
  TYPES,
  ROLES,
  SECRET,
};
