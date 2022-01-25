const saveUserAction = (data) => {
  return {
    type: "SAVE_USER",
    payload: data,
  };
};

const saveTokenAction = (data) => {
  return {
    type: "SAVE_TOKEN",
    payload: data,
  };
};

const logoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export { saveUserAction, saveTokenAction, logoutAction };
