import { getValidationRule } from './_helpers';

/**
 * PASSWORD
 * @typedef {object} PASSWORD
 * @property {number}  MIN_LENGTH The minimum required password length.
 * @property {number} MAX_LENGTH The maximum accepted password length.
 * @property {boolean} REQUIRED Is password mandatory?
 */
/** @type {PASSWORD} */
export default {
  REQUIRED: true,
  MIN_LENGTH: getValidationRule(6, lengthErrMsg),
  MAX_LENGTH: getValidationRule(20, lengthErrMsg),
};
