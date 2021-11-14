const productsLikeReducer = (state = { 1: true, 2: true }, action) => {
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