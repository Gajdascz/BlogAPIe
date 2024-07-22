import './Types.js';

/** @type {RangeErrorType} */
const RANGE_ERROR = {
  NAME: 'range',
  CODE: 400,
  getMsg: (rule, min, max, rangeOf = 'characters') =>
    `${rule} must be between ${min} and ${max} ${rangeOf}`,
};

export default RANGE_ERROR;
