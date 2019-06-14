/**
 * Action Types
 */
export const Types = {
  SHOW_MODAL: 'modal/SHOW_MODAL',
  HIDE_MODAL: 'modal/HIDE_MODAL',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  visible: false,
  coordinate: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { visible: true, coordinate: action.payload.coordinate };
    case Types.HIDE_MODAL:
      return { visible: false, coordinate: null };
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  showModal: coordinate => ({
    type: Types.SHOW_MODAL,
    payload: { coordinate },
  }),
  hideModal: () => ({
    type: Types.HIDE_MODAL,
  }),
};
