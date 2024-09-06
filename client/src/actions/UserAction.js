import * as UserApi from "../api/UserRequests";


// export const updateUser=(id, formData)=> async(dispatch)=> {
//     dispatch({type: "UPDATING_START"})
//     try{
//         const {data} = await UserApi.updateUser(id, formData);
//         console.log("Action ko receive hoa hy ye : ",data)
//         dispatch({type: "UPDATING_SUCCESS", data: data})
//     }   
//     catch(error){
//         dispatch({type: "UPDATING_FAIL"})
//     }
// }
export const getUser=(userID)=> async(dispatch)=> {
    dispatch({type: "GET_START"})
    try{
        const {data} = await UserApi.getUser(userID);
        dispatch({type: "GET_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "GET_FAIL"})
    }
}


export const followUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "FOLLOW_USER", data: id})
    UserApi.followUser(id, data)
}

export const unfollowUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER", data: id})
    UserApi.unfollowUser(id, data)
}

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};
