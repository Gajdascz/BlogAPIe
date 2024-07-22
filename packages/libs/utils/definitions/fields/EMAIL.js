import { getErrOfType } from '../errors/errors';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation
const PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * EMAIL
 * @typedef {object} EMAIL
 * @property {number} MIN_LENGTH The minimum required email length.
 * A valid email must contain at least 6 characters. eg `a@b.cd`.
 * @property {number} MAX_LENGTH The maximum accepted email length.
 * @property {boolean} REQUIRED Is email mandatory?
 * @property {function(string):boolean} CHECK Test an input against a basic regex validation pattern.
 */
/** @type {EMAIL} */
export default {
  MIN_LENGTH: getValidationRule(6, eM.minLength),
  MAX_LENGTH: getValidationRule(254, eM.maxLength),
  REQUIRED: true,
  CHECK: (input) => `${input}`.trim().toLowerCase().match(PATTERN),
};
