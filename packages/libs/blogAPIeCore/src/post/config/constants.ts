import { FieldConfig } from '../../utils/types.js';

/**
 * - PUBLIC: Post is live and viewable by all.
 * - HIDDEN: Post has been posted but hidden from view.
 * - DRAFT: Post is hidden and being worked on.
 */
const POST_STATUS = {
  PUBLIC: 'public',
  HIDDEN: 'hidden',
  DRAFT: 'draft',
} as const;

const POST_STATUS_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: Object.values(POST_STATUS),
} as const;

const POST_TITLE_CFG: FieldConfig = {
  REQ: true,
  TRIM: true,
  RANGE: {
    MIN: 3,
    MAX: 100,
    UNIT: 'characters',
  },
} as const;

const POST_BODY_CFG: FieldConfig = {
  REQ: true,
  TRIM: true,
  RANGE: {
    MIN: 250,
    MAX: 15000,
    UNIT: 'characters',
  },
} as const;

export { POST_STATUS, POST_STATUS_CFG, POST_TITLE_CFG, POST_BODY_CFG };
