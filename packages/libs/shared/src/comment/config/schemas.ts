import { buildStringSchema } from '../../utils/helpers.js';
import { COMMENT_BODY_CFG } from './constants.js';

const commentBody = buildStringSchema(`Comment body`, COMMENT_BODY_CFG);

export { commentBody };
