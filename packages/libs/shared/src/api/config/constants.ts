import { FieldConfig } from '../../utils/helpers.js';

/**
 * - ACTIVE: Currently capable of making requests.
 * - REVOKED: Explicitly terminated by authoritative user.
 * - CLOSED: Terminated by user.
 */
const API_KEY_STATUS = {
  ACTIVE: 'active',
  REVOKED: 'revoked',
  CLOSED: 'closed',
} as const;

/**
 * - SUCCESS: Request processed successfully.
 * - ERROR: Request produced an error.
 */
const API_RESPONSE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

const API_KEY_STATUS_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: API_KEY_STATUS,
} as const;

const API_RESPONSE_STATUS_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: API_RESPONSE_STATUS,
} as const;

export {
  API_KEY_STATUS,
  API_RESPONSE_STATUS,
  API_KEY_STATUS_CFG,
  API_RESPONSE_STATUS_CFG,
};
