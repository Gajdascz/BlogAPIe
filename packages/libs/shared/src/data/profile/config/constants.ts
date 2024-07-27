import { FieldConfig } from '../../../utils/types.js';

const NAME_CFG: FieldConfig = {
  TRIM: true,
  REQ: false,
  RANGE: {
    MAX: 20,
    MIN: 1,
    UNIT: 'characters',
  },
  CUSTOM: [
    {
      NAME: 'name-character-exclusion',
      MSG: `Name cannot include illegal characters.`,
      // This is tested but showing uncovered in the report.
      // test data includes both valid and invalid strings and is properly accepted/rejected.
      /* v8 ignore next 2 */
      TEST: (str?: string) =>
        /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]*$/.test(str ?? ''),
    },
  ],
} as const;

const PROFILE_BIO_CFG: FieldConfig = {
  TRIM: true,
  REQ: false,
  RANGE: {
    MIN: 1,
    MAX: 150,
    UNIT: 'characters',
  },
} as const;

export { NAME_CFG, PROFILE_BIO_CFG };
