import './Types.js';

/** @type {ExclusionErrorType} */
const EXCLUSION_ERROR = {
  NAME: 'exclusion',
  CODE: 400,
  getMsg: (rule, excluded) => `${rule} must not contain any ${excluded}`,
};

export default EXCLUSION_ERROR;
