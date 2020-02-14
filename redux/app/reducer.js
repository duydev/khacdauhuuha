import { SITE_TITLE } from "../../contants/common";

const initialState = {
  siteTitle: SITE_TITLE,
  pageTitle: undefined
};

const handlers = {};

export default (state = initialState, action) => {
  const handler = handlers[action.type];

  return handler ? handler(state, action) : state;
};
