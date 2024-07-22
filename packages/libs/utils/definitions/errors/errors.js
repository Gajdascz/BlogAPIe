import RANGE from './errorTypes/RANGE.js';
import INCLUSION from './errorTypes/INCLUSION.js';
import EXCLUSION from './errorTypes/EXCLUSION.js';
import FORMAT from './errorTypes/FORMAT.js';
import INCLUSION_EXCLUSIVE from './errorTypes/INCLUSION_EXCLUSIVE.js';

const ALL = { RANGE, INCLUSION, EXCLUSION, FORMAT, INCLUSION_EXCLUSIVE };
const ALL_ARR = Object.values(ALL);

/**
 * @typedef {object} ErrorTypeNames
 * @property {string} RANGE
 *
 */
/**
 * @type {ErrorTypeNames}
 */
const ALL_TYPE_NAMES = Object.entries(ALL).reduce((acc, [key, value]) => {
  acc[key] = value.NAME;
  return acc;
}, {});
console.log(ALL_TYPE_NAMES);
/**
 * Validates the structure of the provided error and returns a mappable key-value pair.
 *
 * @param {ErrorType} errorType The extended error type object.
 * @returns {[string,{type:NAME,CODE,getMsg}]} A key value pair to be set in a Map. [NAME, { type:NAME, CODE, getMsg }]
 * @throws {Error} If validation fails for the error type structure.
 */
const buildErr = ({ NAME, CODE, getMsg }) => {
  if (!NAME)
    throw new Error(
      `!INTERNAL (buildErr): error type is required. Received: ${NAME}`,
    );
  if (+CODE > 599 || +CODE < 100)
    throw new Error(`!INTERNAL (buildErr): Invalid CODE received (${CODE})`);
  if (typeof getMsg !== 'function')
    throw new Error(
      `!INTERNAL (buildErr): getMsg must be a function that returns an error message`,
    );
  return [NAME, { TYPE: NAME, CODE, getMsg }];
};

/**
 * Returns the specified errorType object
 *
 * @param {ALL_TYPE_NAMES} type The type of error you're getting.
 * @returns {ErrorType|undefined} The errorType object if found and undefined otherwise.
 * @types ["range", "inclusion", "exclusion", "format", "inclusionExclusive"]
 */
const getErrOfType = (type) => manager.ALL[type.toUpperCase()];

/**
 * Use this method to create a Map of the built errorTypes.
 *
 * @returns {ErrorMap} @see {@link ErrorMap}
 */
const buildErrMap = () => new Map(ALL_ARR.map(buildErr));

export { buildErrMap, getErrOfType, ALL_TYPE_NAMES };
