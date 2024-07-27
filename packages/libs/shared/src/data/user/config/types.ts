import { ROLES, RECOVERY_QUESTIONS } from './constants.js';

type Role = (typeof ROLES)[keyof typeof ROLES];
type RecoveryQuestion =
  (typeof RECOVERY_QUESTIONS)[keyof typeof RECOVERY_QUESTIONS];

export type { Role, RecoveryQuestion };
