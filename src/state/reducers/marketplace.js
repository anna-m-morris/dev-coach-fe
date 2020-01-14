import * as types from '../actions/marketplaceActions';

const initialState = {
  coaches: null,
  copyOfCoaches: null,
  isLoading: false,
  error: null,
};

function marketplaceReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_COACHES_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_COACHES_ERROR:
      return { ...state, error: action.payload };

    case types.GET_COACHES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        coaches: action.payload,
        copyOfCoaches: action.payload,
      };

    case types.SEARCH_COACHES:
      return {
        ...state,
        coaches: state.coaches.filter(info => {
          if (
            info.first_name.toLowerCase().includes(action.payload)
          ) {
            return info.first_name
              .toLowerCase()
              .includes(action.payload);
          }
          if (
            info.description.toLowerCase().includes(action.payload)
          ) {
            return info.description
              .toLowerCase()
              .includes(action.payload);
          }
          return info.location.toLowerCase().includes(action.payload);
        }),
      };

    case types.SEARCH_PRICE:
      return {
        ...state,
        coaches: state.copyOfCoaches.filter(
          coach => coach.hourly_rate < action.payload,
        ),
      };

    default:
      return state;
  }
}

export default marketplaceReducer;
