import axios from "../../configure/configAxios";
import swal from "sweetalert"
import {header} from "../../configure/header"

export const startGetTenants = () => {
   return (dispatch) => {
      axios
         .get("/tenants", { headers: header })
         .then((response) => {
            dispatch(setTenants(response.data));
         })
         .catch((err) =>
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            })
         );
   };
};

export const setTenants = (data) => {
   return {
      type: "GET_TENANTS",
      payload: data,
   };
};

export const startAddTenant = (formData, reset) => {
   return (dispatch) => {
      axios
         .post(`/tenants`,{ headers: header }, formData)
         .then((response) => {
            // console.log(response.data);
            dispatch(addTenant(response.data));
            reset();
         })
         .catch((err) =>
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            })
         );
   };
};

export const addTenant = (data) => {
   return {
      type: "ADD_TENANT",
      payload: data,
   };
};

export const startEditTenant = (formData, reset, id) => {
   return (dispatch) => {
      axios
         .put(`/tenants/${id}`,{ headers: header }, formData)
         .then((response) => {
            dispatch(editTenant(response.data));
            reset();
         })
         .catch((err) =>
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            })
         );
   };
};

export const editTenant = (data) => {
   return {
      type: "EDIT_TENANT",
      payload: data,
   };
};

export const startRemoveTenant = (_id) => {
   return (dispatch) => {
      axios
         .delete(`/tenants/${_id}`, { headers: header })
         .then((response) => {
            dispatch(removeTenant(response.data));
         })
         .catch((err) =>
            swal({
               title: `${err.message}`,
               icon: "error",
               button: "OK",
            })
         );
   };
};

export const removeTenant = (data) => {
   return {
      type: "REMOVE_TENANT",
      payload: data,
   };
};
