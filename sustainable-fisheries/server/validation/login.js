const isEmptyValidator = require("validator").isEmpty;
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  //data.email = !isEmpty(data.email) ? data.email : "";
  //data.password = !isEmpty(data.password) ? data.password : "";
  
  // Username checks
  if (isEmptyValidator(data.username)) {
    errors.username = "Email field is required";
  }
  // Password checks
  if (isEmptyValidator(data.password)) {
    errors.password = "Password field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};