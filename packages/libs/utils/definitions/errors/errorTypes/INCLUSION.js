import './Types.js';

/** @type {InclusionErrorType} */
const INCLUSION_ERROR = {
  NAME: 'inclusion',
  CODE: 400,
  getMsg: (rule, needs, minimumCount = '1') =>
    `${rule} must include at least ${minimumCount} ${needs}`,
};

export default INCLUSION_ERROR;
