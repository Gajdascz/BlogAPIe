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

const RECOVERY_ANSWER = {
  MAX: 50,
  MIN: 5,
} as const;

const USERNAME = {
  MAX: 20,
  MIN: 1,
  PATTERN: /^[a-zA-Z0-9_]+$/,
} as const;

const PASSWORD = {
  MAX: 20,
  MIN: 6,
  PATTERN: {
    SPECIAL_SYMBOL: /[!@#$%^&*()-=_+,.]/,
    UPPER_CASE: /[A-Z]/,
    LOWER_CASE: /[a-z]/,
    DIGIT: /[0-9]/,
  },
} as const;

const NAME = {
  MAX: 20,
  MIN: 1,
  PATTERN: /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]$/,
} as const;

/**
 * ACTIVE  - Currently capable of making requests.
 * REVOKED - Explicitly terminated by authoritative user.
 * CLOSED  - Terminated by user.
 */
const API_KEY_STATUS = {
  ACTIVE: 'active',
  REVOKED: 'revoked',
  CLOSED: 'closed',
} as const;

const BLOG_CATEGORY = {
  MAX: 50,
  MIN: 3,
} as const;

const PROFILE_BIO = {
  MIN: 1,
  MAX: 150,
} as const;

const POST_TITLE = {
  MIN: 3,
  MAX: 100,
} as const;

const POST_BODY = {
  MIN: 250,
  MAX: 15000,
} as const;

const POST_STATUS = {
  PUBLIC: 'public',
  HIDDEN: 'hidden',
  DRAFT: 'draft',
} as const;

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

const COMMENT_BODY = {
  MIN: 3,
  MAX: 250,
} as const;

export {
  ROLES,
  RECOVERY_QUESTIONS,
  USERNAME,
  PASSWORD,
  NAME,
  API_KEY_STATUS,
  BLOG_CATEGORY,
  PROFILE_BIO,
  RECOVERY_ANSWER,
  POST_TITLE,
  POST_STATUS,
  POST_BODY,
  REACTIONS,
  COMMENT_BODY,
};
