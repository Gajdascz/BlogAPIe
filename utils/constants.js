/** Constants
 * @module ./constants
 */

/** User
 * @typedef {Object} USER
 * @property {Number} MIN_EMAIL_LENGTH The minium required length of a username.
 * @property {Number} MIN_USERNAME_LENGTH The minium required length of a username.
 * @property {Number} MAX_USERNAME_LENGTH The maximum accepted length of a username.
 * @property {String[]} RECOVERY_QUESTIONS Questions a user can answer to recover their password.
 * - "What is your mother's maiden name?"
 * - "What is the name of your childhood best friend?"
 * - "If you had to be a tree what kind of tree would you be?"
 * - "What is your favorite academic subject?"
 * - "What is your least favorite academic subject?"
 */

/** Roles
 * @typedef {Object} ROLES
 * no-role: Can read public blog data.
 * @property {String} MEMBER A user who has registered.
 * Can read articles, comment on posts, and like/dislike content.
 * @property {String} AUTHOR A user who can create and manage their own posts.
 * @property {String} ADMIN A user with full control over the application.
 */

/** EMAIL
 * @typedef {object} EMAIL
 * @property {number} MIN_LENGTH The minimum required email length.
 * A valid email must contain at least 6 characters. eg `a@b.cd`.
 * @property {number} MAX_LENGTH The maximum accepted email length.
 * @property {boolean} REQUIRED Is email mandatory?
 */

/** USERNAME
 * @typedef {object} USERNAME
 * @property {string} MIN_LENGTH The minimum required username length.
 * @property {string} MAX_LENGTH The maximum accepted username length.
 * @property {boolean} REQUIRED Is username mandatory?
 */

/** RECOVERY_QUESTIONS
 * @typedef {object} RECOVERY_QUESTIONS
 * @property {string[]} QUESTIONS Questions a user can answer to recover their password.
 * - "What is your mother's maiden name?"
 * - "What is the name of your childhood best friend?"
 * - "If you had to be a tree, what kind of tree would you be?"
 * - "What is your favorite academic subject?"
 * - "What is your least favorite academic subject?"
 * @property {boolean} REQUIRED Is username mandatory?
 */

/** @type {USER} */
const USER = {
  /** @type {EMAIL} */
  EMAIL: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 20,
    REQUIRED: true,
  },
  /**@type {USERNAME} */
  USERNAME: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 20,
    REQUIRED: true,
  },
  RECOVERY_QUESTIONS: [
    "What is your mother's maiden name?",
    "What is the name of your childhood best friend?",
    "If you had to be a tree what kind of tree would you be?",
    "What is your favorite academic subject?",
    "What is your least favorite academic subject?",
  ],
  /** @type {ROLES} */
  ROLES: {
    MEMBER: "member",
    AUTHOR: "author",
    ADMIN: "admin",
  },
};

/**
 * Profile
 */
const PROFILE = {};

export { USER };
