const { MongoClient } = require("mongodb");
const { DB_URL, DB_NAME } = require("../constants");

let dbInstance;

class DB {

  async mongo() {
    if (dbInstance)
      return new Promise((resolve) => resolve(dbInstance));
    try {
      const client = new MongoClient(DB_URL);
      await client.connect();
      console.log("successfully connected to mongodb");
      dbInstance = client.db(DB_NAME);
      return client.db(DB_NAME);
    } catch (e) {
      console.log("mongo db crashed", e);
    }
  }
}

module.exports = DB;
