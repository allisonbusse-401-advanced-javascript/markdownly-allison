export const MARKDOWN_UPDATE = 'MARKDOWN_UPDATE';
export const GO_TO_TAB = 'GO_TO_TAB';

export const sendMarkdownUpdate = markdown => ({
  type: MARKDOWN_UPDATE,
  payload: markdown
});

export const goToTab = markdown => ({
  type: GO_TO_TAB,
  payload: markdown
});
