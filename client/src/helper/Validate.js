import Toast from "react-hot-toast";
// VALIDATE USERNAME
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  return errors;
}
// VALIDATE PASSWORD
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);
    return errors;
  }

// VALIDATE RESET PASSWORD 

export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.password = Toast.error("password must be same.....");
    }
    return errors
}





// password validate

function passwordVerify(error = {}, valuse) {
  if (!valuse.password) {
    error.password = Toast.error("required a password...........!");
  } else if (valuse.password.includes(" ")) {
    error.password = Toast.error("enter a valid password...........!");
  } else if (valuse.password.lenght <= 4) {
    error.password = Toast.error("password must be more than 4 digit...........!");
  }
  return error
}

// username validate
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = Toast.error("UserName Required............!");
  } else if (values.username.includes(" ")) {
    error.username = Toast.error("plzz enter a valid user............!");
  }
  return error;
}
