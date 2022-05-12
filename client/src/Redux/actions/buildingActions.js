import axios from "../../configure/configAxios";
import {header} from "../../configure/header"
import swal from "sweetalert";

export const startGetBuildings = () => {
   return (dispatch) => {
      axios
         .get("/buildings", { headers: header })
         .then((response) => {
            dispatch(setBuildings(response.data));
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

export const setBuildings = (data) => {
   return {
      type: "GET_BUILDINGS",
      payload: data,
   };
};

export const startAddBuilding = (formData) => {
   return (dispatch) => {
      axios
         .post("/buildings",{ headers: header }, formData)
         .then((response) => {
            dispatch(addBuilding(response.data));
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

export const addBuilding = (data) => {
   return {
      type: "ADD_BUILDING",
      payload: data,
   };
};

export const startEditBuilding = (formData, id, handleToggle) => {
   return (dispatch) => {
      axios
         .put(`/buildings/${id}`, { headers: header },formData)
         .then((response) => {
            dispatch(editBuilding(response.data));
            handleToggle();
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

export const editBuilding = (data) => {
   return {
      type: "EDIT_BUILDING",
      payload: data,
   };
};

export const startRemoveBuilding = (_id) => {
   return (dispatch) => {
      axios
         .delete(`/buildings/${_id}`, { headers: header })
         .then((response) => {
            dispatch(removeBuilding(response.data));
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

export const removeBuilding = (_id) => {
   return {
      type: "REMOVE_BUILDING",
      payload: _id,
   };
};
