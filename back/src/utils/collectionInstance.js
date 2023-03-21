const DB = require("../config/db");

let collection;
let prevCollectionName;
const collectionInstance = async (collectionName) => {
  if (collection && prevCollectionName === collectionName) return collection;
  prevCollectionName = collectionName;

  console.log(`created new Collection instance of ${collectionName}`);
  const db = await new DB().mongo();
  const newCollection = await db.collection(collectionName);
  collection = newCollection;
  return newCollection;
};

module.exports = {
  collectionInstance,
};
