const buildingInitialState = [];

const buildingReducer = (state = buildingInitialState, action) => {
   switch (action.type) {
      case "GET_BUILDINGS": {
         return [...action.payload];
      }
      case "ADD_BUILDING": {
         return [...state, { ...action.payload }];
      }
      case "EDIT_BUILDING": {
         return state.map((build) => {
            if (build._id === action.payload._id) {
               return { ...action.payload };
            } else {
               return { ...build };
            }
         });
      }
      case "REMOVE_BUILDING": {
         return state.filter((ele) => ele._id !== action.payload._id);
      }
      default:
         return state;
   }
};
export default buildingReducer;
