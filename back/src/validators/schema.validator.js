const { ObjectId } = require("mongodb");
const { TYPES } = require("../constants");

const validationBySchema = (data, schema) => {
  const newData = { ...data };
  let hasError = false;
  Object.entries(data).forEach(([key, value]) => {
    if (key in schema) {
      if (
        typeof value === schema[key].type ||
        (schema[key].type === TYPES.OBJECT_ID && ObjectId.isValid(value))
      ) {
        if (
          schema[key].acceptdValues &&
          !schema[key].acceptdValues.includes(value)
        ) {
          hasError = `value of ${key} is not valid`;
        }
      } else {
        hasError = `type of ${key} most be ${schema[key].type}`;
      }
    } else {
      delete newData[key];
    }
  });

  if (!hasError) {
    Object.entries(schema).forEach(([key, value]) => {
      if (!(key in newData)) {
        if (value.required) {
          hasError = `${key} is required`;
        } else if ("defaultValue" in value) {
          newData[key] = value.defaultValue;
        } else {
          newData[key] = undefined;
        }
      }
    });
  }
  return { error: hasError, value: newData };
};

module.exports = validationBySchema;
