export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUSer = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user: user
});

const initialState = {
  users: undefined
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};

export default userReducer;
