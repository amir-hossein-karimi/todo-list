const Joi = require("joi");
const { TODO_STATUS } = require("../constants");

const createTodoValidatorSchema = Joi.object({
  title: Joi.string().min(3).max(32).required().messages({
    "string.base": "enter a string for title",
    "string.min": "title should have a minimum length of 3",
    "string.max": "title should have a maximum length of 32",
    "any.required": "enter your todo title this is required",
  }),
  description: Joi.string().min(3).max(300),
  status: Joi.string()
    .custom((value, helper) => {
      if (!value || (value && Object.values(TODO_STATUS).includes(value))) {
        return value;
      } else {
        throw helper.error();
      }
    })
    .messages({
      "any.custom": "this status is not accepted status",
    }),
});

const updateTodoValidatorSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().max(300),
  status: Joi.string()
    .custom((value, helper) => {
      if (!value || (value && Object.values(TODO_STATUS).includes(value))) {
        return value;
      } else {
        throw helper.error();
      }
    })
    .messages({
      "any.custom": "this status is not accepted status",
    }),
});

module.exports = {
  createTodoValidatorSchema,
  updateTodoValidatorSchema,
};
