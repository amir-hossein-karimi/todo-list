const { MongoClient } = require("mongodb");
const { DB_URL } = require("../constants");

class DB {
  dbInstance;

  async mongo() {
    if (this.dbInstance) return this.dbInstance;
    try {
      const client = new MongoClient(DB_URL);
      await client.connect();
      console.log("successfully connected to mongodb");
      this.dbInstance = client.db;
      return client.db;
    } catch (e) {
      console.log("mongo db crashed", e);
    }
  }
}

module.exports = DB;
