import { UiReducerState, UiActions } from '../../types';

// Initial state

const InitialState: UiReducerState = {
  searchKeyword: '',
};

// Cart reducer function

export default function uiReducer(
  state: UiReducerState = InitialState,
  action: UiActions
): UiReducerState {
  switch (action.type) {
    case 'UPDATE_SEARCH_KEYWORD': {
      return {
        ...state,
        searchKeyword: action.payload,
      };
    }

    default:
      return state;
  }
}
