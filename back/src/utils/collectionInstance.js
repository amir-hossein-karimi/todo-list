const DB = require("../config/db");

let collection = {};
const collectionInstance = async (collectionName) => {
  if (collection[collectionName]) return collection[collectionName];

  console.log(`created new Collection instance of ${collectionName}`);
  const db = await new DB().mongo();
  const newCollection = await db.collection(collectionName);
  collection = { [collectionName]: newCollection };
  return newCollection;
};

module.exports = {
  collectionInstance,
};
