import actionType from "../type/type";

const initialState = {
  user: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case actionType.GET_FAILED:
      return {
        user: [],
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
