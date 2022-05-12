import axios from "../../configure/configAxios";
import { header } from "../../configure/header";
import swal from "sweetalert";

export const startGetRooms = () => {
   return (dispatch) => {
      axios
         .get("/rooms", { headers: header })
         .then((response) => {
            dispatch(setRooms(response.data));
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

export const setRooms = (data) => {
   return {
      type: "GET_ROOMS",
      payload: data,
   };
};

export const startAddRoom = (formData) => {
   return (dispatch) => {
      axios
         .post(`/rooms`,{ headers: header }, formData)
         .then((response) => {
            dispatch(addRoom(response.data));
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

export const addRoom = (data) => {
   return {
      type: "ADD_ROOM",
      payload: data,
   };
};

export const startEditRoom = (formData, handleToggle, id) => {
   return (dispatch) => {
      axios
         .put(`/rooms/${id}`,{ headers: header }, formData)
         .then((response) => {
            dispatch(editRoom(response.data));
            handleToggle();
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

export const editRoom = (data) => {
   return {
      type: "EDIT_ROOM",
      payload: data,
   };
};

export const startRemoveRoom = (_id) => {
   return (dispatch) => {
      axios
         .delete(`/rooms/${_id}`, { headers: header })
         .then((response) => {
            dispatch(removeRoom(response.data));
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

export const removeRoom = (data) => {
   return {
      type: "REMOVE_ROOM",
      payload: data,
   };
};
