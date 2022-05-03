import axios from "../../configure/configAxios";

export const startGetTenants = () => {
   return (dispatch) => {
      axios
         .get("/tenants")
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
         .post(`/tenants`, formData)
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
         .put(`/tenants/${id}`, formData)
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
         .delete(`/tenants/${_id}`)
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
