import './Types.js';

/** @type {InclusionExclusiveErrorType} */
const INCLUSION_EXCLUSIVE_ERROR = {
  NAME: 'inclusionExclusive',
  CODE: 400,
  getMsg: (rule, expected) => `${rule} must only include ${expected}`,
};

export default INCLUSION_EXCLUSIVE_ERROR;
