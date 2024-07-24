import { POST_STATUS } from './constants.js';

type PostStatus = (typeof POST_STATUS)[keyof typeof POST_STATUS];

export { PostStatus };
