import { comment, getComment } from "../api/CommentRequests";

export const comments = (formData) => async (dispatch) => {
  dispatch({ type: "COMMENT_START" });
  try {
    const allcomment = await comment(formData);
    dispatch({ type: "COMMENT_SUCCESS", allcomment: allcomment });
  } catch (error) {
    console.log(error);
    dispatch({ type: "COMMENT_FAIL" });
  }
};
export const commentGet = () => async (dispatch) => {
  dispatch({ type: "COMMENT_START" });
  try {
    const allcomment = await getComment();
    dispatch({ type: "COMMENT_SUCCESS", allcomment: allcomment });
  } catch (error) {
    console.log(error);
    dispatch({ type: "COMMENT_FAIL" });
  }
};
