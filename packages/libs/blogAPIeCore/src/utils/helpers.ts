import { string } from 'yup';
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
  let schema = string();
  if (config.TRIM) schema = schema.trim();
  if (config.REQ) schema = schema.required(`${fieldName} is required.`);
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
  if (config.ONE_OF) {
    if (Array.isArray(config.ONE_OF))
      schema = schema.oneOf(config.ONE_OF, msg.oneof(fieldName));
    else
      schema = schema.oneOf(Object.values(config.ONE_OF), msg.oneof(fieldName));
  }
  if (config.PATTERN)
    schema = config.PATTERN.reduce((acc, curr) => {
      acc = schema.matches(curr.REGEXP, curr.MSG);
      return acc;
    }, schema);
  if (config.EMAIL) schema = schema.email(`Must be a valid email`);
  if (config.CUSTOM)
    schema = config.CUSTOM.reduce((acc, curr) => {
      acc = schema.test(curr.NAME, curr.MSG, curr.TEST);
      return acc;
    }, schema);
  return schema;
};

export { msg, buildStringSchema, type FieldConfig };
