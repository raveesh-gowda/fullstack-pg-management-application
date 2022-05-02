import axios from "../../configure/configAxios";
import { header } from "../../configure/header";
import swal from "sweetalert";

export const startRegisterUser = (formData) => {
   return (dispatch) => {
      axios
         .post("/user/register", formData)
         .then((response) => {
            if (response.data.hasOwnProperty("errors")) {
               swal(response.data.errors);
            } else {
               swal({
                  title: "Registered Succesfully!",
                  icon: "success",
                  button: "OK",
               });
            }
         })
         .catch((err) => {
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            });
         });
   };
};

export const startLoginUser = (formData, handleReset, handleAuth, props) => {
   return (dispatch) => {
      axios
         .post("/user/login", formData)
         .then((response) => {
            if (response.data.hasOwnProperty("errors")) {
               swal(response.data.errors);
            } else {
               swal({
                  title: "Logged In Succesfully!",
                  icon: "success",
                  button: "OK",
               });
               localStorage.setItem("token", response.data.token);
               handleReset();
               handleAuth();
               props.history.push("/");
               window.location.reload(false)
            }
         })
         .catch((err) => {
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            });
         });
   };
};

export const startGetUser = () => {
   return (dispatch) => {
      axios
         .get("/user/account", { headers: header })
         .then((response) => {
            dispatch(userInfo(response.data));
         })
         .catch((err) => {
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            });
         });
   };
};

export const userInfo = (data) => {
   return {
      type: "USER_INFO",
      payload: data,
   };
};
