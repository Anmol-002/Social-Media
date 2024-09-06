const cmntReducer = (
  state = {
    comments: null,
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "COMMENT_START":
      return { ...state, loading: true, error: false };
    case "COMMENT_SUCCESS":
    //   console.log("New Comment Data: ", action.allcomment);
    const newComments = action.allcomment || [];
      return {
        ...state,
        comments: newComments.data,
        loading: false,
        error: false,
      };
    case "COMMENT_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
export default cmntReducer;
