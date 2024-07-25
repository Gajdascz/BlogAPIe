import { FieldConfig } from '../../utils/types.js';

const COMMENT_BODY_CFG: FieldConfig = {
  TRIM: true,
  REQ: true,
  RANGE: {
    MIN: 3,
    MAX: 250,
    UNIT: 'characters',
  },
} as const;

export { COMMENT_BODY_CFG };
