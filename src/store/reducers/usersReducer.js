const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USERS_LIST": {
      return {
        ...state,
        users: action.users
      };
    }
    case 'CREATE_NEW_USER':{
      return state;
    }
    default:
      return state;
  }
};
