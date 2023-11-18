export default (state, action) => {
  switch (action.type) {
    
    case "GET_SURVEY":
      return {
        ...state,
        survey: action.payload,
      };
    default:
      return state;
  }
};
