import { API_KEY_STATUS_CFG, API_RESPONSE_STATUS_CFG } from './constants.js';
import { buildStringSchema } from '../../utils/helpers.js';

const apiKeyStatus = buildStringSchema(`API key status`, API_KEY_STATUS_CFG);
const apiResponseStatus = buildStringSchema(
  `API response status`,
  API_RESPONSE_STATUS_CFG,
);

export { apiKeyStatus, apiResponseStatus };
