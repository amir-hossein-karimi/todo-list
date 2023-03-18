const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "todo_List";
const SERVER_PORT = 3500;

const COLLECTIONS = {
  TODOS: "todos",
  USERS: "users",
};

module.exports = {
  DB_URL,
  SERVER_PORT,
  COLLECTIONS,
  DB_NAME,
};
