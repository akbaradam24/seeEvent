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

export { saveUserAction, saveTokenAction };
