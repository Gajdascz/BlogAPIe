// ErrorType (Base of all errors)
/**
 * @typedef {object} ErrorType
 * @property {string} NAME the name of the error type.
 * @property {(number)} CODE The HTTP status code of the error.
 * - See {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status} for a list of all HTTP response status codes.
 */

//#region | RangeErrorType
/**
 * @typedef {object} _RangeErrorType
 * @property {RangeErrorMessageGenerator} getMsg
 * - See {@link RangeErrorMessageGenerator} for more details.
 */
/**
 * Generates a range error message.
 * @callback RangeErrorMessageGenerator
 * @param {string} rule The rule to which this message applies.
 * @param {number} min The upper bound.
 * @param {number} max The lower bound.
 * @param {string} [rangeOf='characters'] What the range consists of.
 * @returns {string} Error message.
 *
 * @example
 * // returns `Password must be between 8 and 100 characters`
 * getMsg('Password','8','100','characters')
 */
/**
 * @typedef {ErrorType & _RangeErrorType} RangeErrorType
 * Encapsulates the general data for range errors.
 */
//#endregion | RangeErrorType

//#region | InclusionErrorType
/** _InclusionErrorType
 * @typedef {object} _InclusionErrorType
 * @property {InclusionErrorMessageGenerator} getMsg
 * - See {@link InclusionErrorMessageGenerator} for more details.
 */
/** InclusionErrorMessageGenerator
 * Generates a Inclusion error message.
 * @callback InclusionErrorMessageGenerator
 * @param {string} rule The rule to which this message applies.
 * @param {string} needs What's expected to be included.
 * @param {number} [minimumCount=1] The minimum amount required to be included.
 * @returns {string} Error message.
 *
 * @example
 * // returns `Password must be include at least 1 Special Character`
 * getMsg('Password','Special Character', "1")
 */
/** InclusionErrorType
 * @typedef {ErrorType & _InclusionErrorType} InclusionErrorType
 * Encapsulates the general data for inclusion errors.
 */
//#endregion | InclusionErrorType

//#region | InclusionExclusiveErrorType
/**
 * @typedef {object} _InclusionExclusiveErrorType
 * @property {InclusionExclusiveErrorMessageGenerator} getMsg
 * - See {@link InclusionExclusiveErrorMessageGenerator} for more details.
 */
/**
 * Generates a InclusionExclusive error message.
 * @callback InclusionExclusiveErrorMessageGenerator
 * @param {string} rule The rule to which this message applies.
 * @param {string} expected What's expected to be exclusively included.
 * @returns {string} Error message.
 *
 * @example
 * // returns `Phone must only include Numbers`
 * getMsg('Phone','Numbers')
 */
/**
 * @typedef {ErrorType & _InclusionExclusiveErrorType} InclusionExclusiveErrorType
 * Encapsulates the general data for inclusion-exclusive errors.
 */
//#endregion | InclusionExclusiveErrorType

//#region | FormatErrorType
/**
 * @typedef {object} _FormatErrorType
 * @property {FormatErrorMessageGenerator} getMsg
 * - See {@link FormatErrorMessageGenerator} for more details.
 */
/**
 * Generates a Format error message.
 * @callback FormatErrorMessageGenerator
 * @param {string} rule The rule to which this message applies.
 * @param {string} expected The expected format.
 * @returns {string} Error message.
 *
 * @example
 * // returns `Phone must be in the format: XXX-XXX-XXXX`
 * getMsg('Phone','XXX-XXX-XXXX')
 */
/**
 * @typedef {ErrorType & _FormatErrorType} FormatErrorType
 * Encapsulates the general data for format errors.
 */
//#endregion | FormatErrorType

//#region | ExclusionErrorType
/**
 * @typedef {object} _ExclusionErrorType
 * @property {ExclusionErrorMessageGenerator} getMsg
 * - See {@link ExclusionErrorMessageGenerator} for more details.
 */
/**
 * Generates a Exclusion error message.
 * @callback ExclusionErrorMessageGenerator
 * @param {string} rule The rule to which this message applies.
 * @param {string} needs What's expected to be included.
 * @param {number} [minimumCount=1] The minimum amount required to be included.
 * @returns {string} Error message.
 *
 * @example
 * // returns `Password must be include at least 1 Special Character`
 * getMsg('Password','Special Character', "1")
 */
/**
 * @typedef {ErrorType & _ExclusionErrorType} ExclusionErrorType
 * Encapsulates the general data for Exclusion errors.
 */
//#endregion | ExclusionErrorType

/**
 * @typedef {Map} ErrorMap Contains all of the built error objects.
 * Use this Map to extend the errors in the context of your use case.
 * @returns {Map<string,ErrorObject>} A Map containing all of the built errorTypes
 */
