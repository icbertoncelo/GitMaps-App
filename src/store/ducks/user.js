/**
 * Action Types
 */
export const Types = {
  ADD_REQUEST: 'user/ADD_REQUEST',
  ADD_SUCCESS: 'user/ADD_SUCCESS',
  ADD_FAILURE: 'user/ADD_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return { data: [...state.data, action.payload.data], loading: false, error: false };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  addUserRequest: (username, coordinate) => ({
    type: Types.ADD_REQUEST,
    payload: { username, coordinate },
  }),
  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),
  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
