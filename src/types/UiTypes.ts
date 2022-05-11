import { setSeachKeyword } from '../redux/actions/UiAction';

export const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD';

export type UiReducerState = {
  searchKeyword: string;
};

export type SetSearchKeywordAction = {
  type: typeof UPDATE_SEARCH_KEYWORD;
  payload: string;
};

export type UiActions = SetSearchKeywordAction;
