import { REACTIONS } from './constants.js';

type Reaction = (typeof REACTIONS)[keyof typeof REACTIONS];

export { Reaction };
