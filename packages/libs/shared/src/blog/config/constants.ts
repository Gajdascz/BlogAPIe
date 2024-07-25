import { FieldConfig } from '../../utils/helpers.js';

const BLOG_CATEGORY_CFG: FieldConfig = {
  REQ: true,
  TRIM: true,
  RANGE: {
    MAX: 50,
    MIN: 3,
    UNIT: 'characters',
  },
} as const;

export { BLOG_CATEGORY_CFG };
