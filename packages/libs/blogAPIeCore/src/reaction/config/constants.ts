import { FieldConfig } from '../../utils/types.js';

const REACTIONS = {
  LIKE: 'like',
  LOVE: 'love',
  LAUGH: 'laugh',
  WOW: 'wow',
  SAD: 'sad',
  THINKING: 'thinking',
  APPLAUD: 'applaud',
  CONFUSED: 'confused',
} as const;

const REACTION_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: Object.values(REACTIONS),
} as const;

export { REACTIONS, REACTION_CFG };
