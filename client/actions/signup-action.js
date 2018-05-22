export const signupAction = (data) => {
    console.log("*****************", data);
    return dispatch => {
        dispatch({
        type: 'SIGNUP_DATA',
        payload: data,
    })
}
}