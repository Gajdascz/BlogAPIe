/** USERNAME
 * @typedef {object} USERNAME
 * @property {boolean} REQUIRED Is username mandatory?
 * @property {object} MIN_LENGTH The minimum required username length and its message.
 * @property {number} MIN_LENGTH.V The minimum length value.
 * @property {string} MIN_LENGTH.M The message for minimum length validation.
 * @property {object} MAX_LENGTH The maximum accepted username length and its message.
 * @property {number} MAX_LENGTH.V The maximum length value.
 * @property {string} MAX_LENGTH.M The message for maximum length validation.
 * @property {object} PATTERN A regex pattern for username validation and its message.
 * @property {RegExp} PATTERN.V The regex pattern.
 * @property {string} PATTERN.M The message for pattern validation.
 */
/** @type {USERNAME} */
export default {
  REQUIRED: true,
  MIN_LENGTH: { V: 1, M: 'Username must be at least 1 character long.' },
  MAX_LENGTH: { V: 20, M: 'Username must be 20 characters or less' },
  PATTERN: {
    V: /^[a-zA-Z0-9_]+$/,
    M: 'Username can only contain alphanumeric characters and underscores',
  },
};
