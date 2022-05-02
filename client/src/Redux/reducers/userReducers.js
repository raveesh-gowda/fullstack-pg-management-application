const userInitialState = {
   user: {},
};

const userReducers = (state = userInitialState, action) => {
   switch (action.type) {
      case "USER_INFO": {
         return { ...state, user: { ...action.payload } };
      }
      default: {
         return { ...state };
      }
   }
};

export default userReducers;
