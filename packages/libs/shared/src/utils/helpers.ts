import * as Yup from 'yup';
import { FieldConfig } from './types.js';

const msg = {
  max: (field: string, value: string, unit = 'characters') =>
    `${field} cannot contain more than ${value} ${unit}`,
  min: (field: string, value: string, unit = 'characters') =>
    `${field} must contain at least ${value} ${unit}(s)`,
  oneof: (field: string) => `${field} must be one of the predefined values`,
};

/**
 * Builds a `Yup` string validation schema
 */
const buildStringSchema = (fieldName: string, config: FieldConfig) => {
  let schema = Yup.string();

  if (config.TRIM)
    schema = schema.trim(`${fieldName} must be a trimmed string.`);
  if (config.REQ) schema = schema.required(`${fieldName} is required.`);
  if (config.ONE_OF) {
    if (Array.isArray(config.ONE_OF))
      schema = schema.oneOf(config.ONE_OF, msg.oneof(fieldName));
    else
      schema = schema.oneOf(Object.values(config.ONE_OF), msg.oneof(fieldName));
  }
  if (config.RANGE?.MAX)
    schema = schema.max(
      config.RANGE.MAX,
      msg.max(fieldName, String(config.RANGE.MAX), config.RANGE.UNIT),
    );
  if (config.RANGE?.MIN)
    schema = schema.min(
      config.RANGE.MIN,
      msg.min(fieldName, String(config.RANGE.MIN), config.RANGE.UNIT),
    );
  if (config.PATTERNS) {
    config.PATTERNS.forEach((pattern) => {
      schema = schema.matches(pattern.REGEXP, {
        message: pattern.MSG,
        excludeEmptyString: !(config.REQ && config.RANGE?.MIN),
      });
    });
  }
  if (config.EMAIL) schema = schema.email(`Must be a valid email.`);
  if (config.CUSTOM)
    config.CUSTOM.forEach((custom) => {
      schema = schema.test(custom.NAME, custom.MSG, custom.TEST);
    });

  return schema;
};
export { msg, buildStringSchema, type FieldConfig };
