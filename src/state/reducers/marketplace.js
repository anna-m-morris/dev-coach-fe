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
      return { ...state, error: action.payload, isLoading: false };

    case types.GET_COACHES_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        coaches: action.payload,
        copyOfCoaches: action.payload,
      };

    case types.SEARCH_FOR_KEYWORD:
      return {
        ...state,
        coaches: state.copyOfCoaches.filter(
          coach =>
            coach.first_name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            coach.last_name
              .toLowerCase()
              .includes(action.payload.toLowerCase()),
        ),
      };

    case types.SEARCH_PRICE:
      return {
        ...state,
        coaches: state.copyOfCoaches.filter(
          coach => coach.hourly_rate < action.payload,
        ),
      };

    case types.SEARCH_EXPERIENCE:
      return {
        ...state,
        coaches:
          action.payload === 1000
            ? state.copyOfCoaches
            : state.copyOfCoaches.filter(
                coach => coach.experience_level === action.payload,
              ),
      };

    default:
      return state;
  }
}

export default marketplaceReducer;
