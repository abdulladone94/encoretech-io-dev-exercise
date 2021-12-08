const initialState = { allItems: [] };

const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_DATA":
      return {
        ...state,
        allItems: action.payload,
      };
    default:
      return state;
  }
};

export default DataReducer;
