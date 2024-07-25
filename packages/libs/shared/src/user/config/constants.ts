import { FieldConfig } from '../../utils/helpers.js';

const ROLES = {
  MEMBER: 'member',
  AUTHOR: 'author',
  ADMIN: 'admin',
} as const;

const RECOVERY_QUESTIONS = [
  "What is your mother's maiden name?",
  'What is the name of your childhood best friend?',
  'If you had to be a tree what kind of tree would you be?',
  'What is your favorite academic subject?',
  'What is your least favorite academic subject?',
] as const;

const ROLE_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: Object.values(ROLES),
} as const;
const RECOVER_QUESTION_CFG: FieldConfig = {
  REQ: true,
  ONE_OF: [...RECOVERY_QUESTIONS],
} as const;
const RECOVERY_ANSWER_CFG: FieldConfig = {
  TRIM: true,
  REQ: true,
  RANGE: {
    MAX: 50,
    MIN: 3,
    UNIT: 'characters',
  },
} as const;
const USERNAME_CFG: FieldConfig = {
  REQ: true,
  TRIM: true,
  RANGE: {
    MAX: 20,
    MIN: 1,
    UNIT: 'characters',
  },
  PATTERNS: [
    {
      REGEXP: /^[a-zA-Z0-9_]+$/,
      MSG: 'Username may only contain letters, digits, and underscores.',
    },
  ],
} as const;

const PASSWORD_CFG: FieldConfig = {
  REQ: true,
  TRIM: true,
  RANGE: {
    MAX: 20,
    MIN: 6,
    UNIT: 'characters',
  },
  PATTERNS: [
    {
      REGEXP: /(?=.*[!@#$%^&*()\-=_+])/,
      MSG: `Password must contain at least one of the following special characters (!@#$%^&*()-=_+,.)`,
    },
    {
      REGEXP: /(?=.*[A-Z])/,
      MSG: `Password must contain at least one upper case letter.`,
    },
    {
      REGEXP: /(?=.*[a-z])/,
      MSG: `Password must contain at least one lower case letter.`,
    },
    { REGEXP: /(?=.*[0-9])/, MSG: `Password must contain at least one digit.` },
  ],
} as const;

const EMAIL_CFG: FieldConfig = {
  REQ: false,
  TRIM: true,
  EMAIL: true,
} as const;

/**
 * Static Constants
 */
export { ROLES, RECOVERY_QUESTIONS };

/**
 * Validation Configurations
 */
export {
  ROLE_CFG,
  USERNAME_CFG,
  RECOVERY_ANSWER_CFG,
  RECOVER_QUESTION_CFG,
  PASSWORD_CFG,
  EMAIL_CFG,
};
