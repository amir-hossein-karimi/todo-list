const Joi = require("joi");

const createTodoValidatorSchema = Joi.object({
  title: Joi.string().min(3).max(32).required().messages({
    "string.base": "enter a string for title",
    "string.min": "title should have a minimum length of 3",
    "string.max": "title should have a maximum length of 32",
    "any.required": "enter your title this is required",
  }),
  description: Joi.string(),
});

module.exports = {
  createTodoValidatorSchema,
};
