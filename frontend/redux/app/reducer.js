import { SITE_TITLE } from "../../contants/common";

import { CHANGE_PAGE_TITLE } from "./actions";

const initialState = {
  siteTitle: SITE_TITLE,
  pageTitle: undefined
};

function changePageTitle(state, { payload: { title } }) {
  return { ...state, pageTitle: title };
}

const handlers = {
  [CHANGE_PAGE_TITLE]: changePageTitle
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};
