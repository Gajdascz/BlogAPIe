import { REACTION_CFG } from './constants.js';
import { buildStringSchema } from '../../utils/helpers.js';

const reaction = buildStringSchema(`Reaction`, REACTION_CFG);

export { reaction };
