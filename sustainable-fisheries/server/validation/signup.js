const isEmptyValidator = require("validator").isEmpty;
const isLengthValidator = require("validator").isLength;
const equalsValidator = require("validator").equals;
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  //data.username = !isEmpty(data.name) ? data.name : "";
  //data.password = !isEmpty(data.password) ? data.password : "";
  //data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Username checks
  if (isEmptyValidator(data.username)) {
    errors.username = "Username field is required";
  }
  // Password checks
  if (isEmptyValidator(data.password)) {
    errors.password = "Password field is required";
  } if (isEmptyValidator(data.password2)) {
    errors.password2 = "Confirm password field is required";
  } if (!isLengthValidator(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  } if (!equalsValidator(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};