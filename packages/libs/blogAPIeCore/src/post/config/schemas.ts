import { object } from 'yup';
import { buildStringSchema } from '../../utils/helpers.js';
import { POST_BODY_CFG, POST_STATUS_CFG, POST_TITLE_CFG } from './constants.js';

const postBody = buildStringSchema(`Post body`, POST_BODY_CFG);
const postStatus = buildStringSchema(`Post status`, POST_STATUS_CFG);
const postTitle = buildStringSchema(`Post title`, POST_TITLE_CFG);

const post = object({
  title: postTitle,
  body: postBody,
  status: postStatus,
});

export { post, postTitle, postBody, postStatus };
