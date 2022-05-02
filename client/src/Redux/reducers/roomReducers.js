const roomInitialState = [];

const roomsReducer = (state = roomInitialState, action) => {
   switch (action.type) {
      case "GET_ROOMS": {
         return [...action.payload];
      }
      case "ADD_ROOM": {
         return [...state, { ...action.payload }];
      }
      case "EDIT_ROOM": {
         return state.map((room) => {
            if (room._id === action.payload._id) {
               return { ...action.payload };
            } else {
               return { ...room };
            }
         });
      }
      case "REMOVE_ROOM": {
         return state.filter((ele) => ele._id !== action.payload._id);
      }
      default:
         return state;
   }
};
export default roomsReducer;
