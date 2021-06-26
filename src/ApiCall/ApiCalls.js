import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("https://salesx.herokuapp.com/api/v1/users/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};

