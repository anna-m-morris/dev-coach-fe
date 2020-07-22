import * as types from '../actions/resourceHubActions';

const initialState = {
  resources: null,
  isLoading: false,
  error: null,
  submitResource: null,
  updateResource: null,
};

function resourceHubReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_RESOURCE_START:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_RESOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resources: action.payload,
      };

    case types.GET_RESOURCE_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case types.SUBMIT_RESOURCE_START:
      return { ...state, submitResource: action.payload };

    case types.SUBMIT_RESOURCE_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case types.SUBMIT_RESOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resource: action.payload,
      };

    case types.UPDATE_RESOURCE_START:
      return { ...state, updateResource: action.payload };

    case types.UPDATE_RESOURCE_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    case types.UPDATE_RESOURCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resource: action.payload,
      };

    default:
      return state;
  }
}

export default resourceHubReducer;
