import { FieldConfig } from '../../utils/types.js';

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
