import { buildStringSchema } from '../../../utils/helpers.js';
import { BLOG_CATEGORY_CFG } from './constants.js';

const blogCategory = buildStringSchema(`Blog category`, BLOG_CATEGORY_CFG);

export { blogCategory };
