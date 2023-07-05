import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: (e) => {
      return `${e.path} is required`;
    },
  },
  string: {
    min: (e) => {
      return `${e.path} should have a minimum length of ${e.min}`;
    },
    max: (e) => {
      return `${e.path} should have a minimum length of ${e.max}`;
    },
  },
});
