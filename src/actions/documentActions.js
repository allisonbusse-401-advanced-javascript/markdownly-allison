export const MARKDOWN_UPDATE = 'MARKDOWN_UPDATE';

export const sendMarkdownUpdate = markdown => ({
  type: MARKDOWN_UPDATE,
  payload: markdown
});
