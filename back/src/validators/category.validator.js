const Joi = require("joi");

const categoryNameValidatorSchema = Joi.object({
  name: Joi.string().min(3).max(32).required().messages({
    "string.base": "enter a string for name",
    "string.min": "name should have a minimum length of 3",
    "string.max": "name should have a maximum length of 32",
    "any.required": "enter your category name this is required",
  }),
});

module.exports = {
  categoryNameValidatorSchema,
};
