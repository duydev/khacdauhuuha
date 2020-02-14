export const CHANGE_PAGE_TITLE = "app/CHANGE_PAGE_TITLE";

export function changePageTitle(title) {
  return {
    type: CHANGE_PAGE_TITLE,
    payload: { title }
  };
}
