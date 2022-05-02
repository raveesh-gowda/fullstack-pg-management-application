const tenantInitialState = [];

const tenantReducers = (state = tenantInitialState, action) => {
   switch (action.type) {
      case "GET_TENANTS": {
         return [...action.payload];
      }
      case "ADD_TENANT": {
         return [...state, { ...action.payload }];
      }
      case "EDIT_TENANT": {
         return state.map((tenant) => {
            if (tenant._id === action.payload._id) {
               return { ...action.payload };
            } else {
               return { ...tenant };
            }
         });
      }
      case "REMOVE_TENANT": {
         return state.filter((ele) => ele._id !== action.payload._id);
      }
      default: {
         return state;
      }
   }
};

export default tenantReducers;
