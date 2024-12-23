export const loginFormValidation = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) {
    return "Email Address is not valid. Please Enter valid Email Address";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
