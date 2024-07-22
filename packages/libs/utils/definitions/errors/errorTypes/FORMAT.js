import './Types.js';

/** @type {FormatErrorType} */
const FORMAT_ERROR = {
  NAME: 'format',
  CODE: 400,
  getMsg: (rule, expected) => `${rule} must be in the format: ${expected}`,
};

export default FORMAT_ERROR;
