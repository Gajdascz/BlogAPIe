import { StatusCodes } from 'http-status-codes';
import { API_RESPONSE_STATUS, API_KEY_STATUS } from './constants.js';
/**
 * APIResponse<T>
 * - status: Indicates whether the request was successful or returned an error.
 * - code: One of the certified HTTP status codes.
 * - message: The primary response from the api to explain the returned status.
 * - [data]: An object containing data related to the request.
 * - [detail]: Contains additional messages related to the successful request or returned error.
 */
interface APIResponse {
  status: (typeof API_RESPONSE_STATUS)[keyof typeof API_RESPONSE_STATUS];
  code: StatusCodes;
  message: string;
  data?: Record<string, unknown>;
  detail?: string[];
}
type APIKeyStatus = (typeof API_KEY_STATUS)[keyof typeof API_KEY_STATUS];

type APIResponseStatus =
  (typeof API_RESPONSE_STATUS)[keyof typeof API_RESPONSE_STATUS];

export type { APIResponse, APIKeyStatus, APIResponseStatus };
