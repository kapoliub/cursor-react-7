const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TWEETS_LIST": {
      return {
        ...state,
        tweets: action.tweets
      }
    }
    case 'CREATE_NEW_TWEET':{
      return state
    }
    default:
      return state;
  }
};

