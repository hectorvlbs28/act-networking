const createSignUpBody = (name, email, password) => {
  return {
    name,
    email,
    password,
  };
};

const createSignInBody = (email, password) => {
  return {
    email,
    password,
  };
};

const createSignOutBody = (userToken) => {
  return {
    userToken,
  };
};

export { createSignUpBody, createSignInBody, createSignOutBody };
