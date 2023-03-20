const Joi = require("joi");
const { ROLES } = require("../constants");

const createUserValidatorSchema = Joi.object({
  username: Joi.string().min(3).max(32).required().messages({
    "string.base": "enter a string for username",
    "string.min": "username should have a minimum length of 3",
    "string.max": "username should have a maximum length of 32",
    "any.required": "enter your username this is required",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "string.base": "enter a string for password",
    "string.min": "password should have a minimum length of 6",
    "string.max": "password should have a maximum length of 20",
    "any.required": "enter your password this is required",
  }),
  role: Joi.string().custom((value, helper) => {
    if (Object.values(ROLES).includes(value)) {
      return value;
    } else {
      throw helper.error("any.invalid");
    }
  }),
});

module.exports = {
  createUserValidatorSchema,
};
