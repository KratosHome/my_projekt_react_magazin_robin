const productsLikeReducer = (state = {}, action) => {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        [action.id]: true,
      };
    case "DISELIKE":
      return {
        ...state,
        [action.id]: false,
      };
    default:
      return state;
  }
};

export default productsLikeReducer;
