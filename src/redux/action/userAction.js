import axios from "axios";
import actionType from "../type/type";

const userList = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionType.GET_REQUEST,
      });
      const res = await axios.get(
        "https://redux-book-shelf.herokuapp.com/books"
      );

      dispatch({
        type: actionType.GET_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: actionType.GET_FAILED,
        payload: error.message,
      });
    }
  };
};

export default userList;
