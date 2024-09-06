const userReducer=(
    state={
        user:null,
        loading:false,
        error:false,
    },
    action
)=> {
    switch (action.type) {
      case "GET_START":
        return { ...state, loading: true, error: false };
      case "GET_SUCCESS":
        return { ...state, user:action.data, loading: false, error: false };
      case "GET_FAIL":
        return { ...state,loading: false, error: true };

      case "CLEAR_ERRORS":
        return {
          ...state,
          error: null,
        };

      default:
        return state;
    }
}

export default userReducer;