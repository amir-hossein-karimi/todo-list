import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: (e) => `${e.path} is required`,
  },
  string: {
    min: (e) => `${e.path} should have a minimum length of ${e.min}`,
    max: (e) => `${e.path} should have a minimum length of ${e.max}`,
  },
});
