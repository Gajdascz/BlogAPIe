/** Constants
 * @module constants
 */

/**
 * User
 * @typedef {Object} USER
 * @property {Number} MIN_EMAIL_LENGTH The minium required length of a username.
 * @property {Number} MIN_USERNAME_LENGTH The minium required length of a username.
 * @property {Number} MAX_USERNAME_LENGTH The maximum accepted length of a username.
 * @property {ROLES} ROLES
 * @property {RECOVERY_QUESTIONS} RECOVERY_QUESTIONS
 */

/** @type {USER} */
const USER = {
  EMAIL,
  USERNAME,

  ROLES: {
    MEMBER: 'member',
    AUTHOR: 'author',
    ADMIN: 'admin',
  },
};
const test = (t) => {
  t.forEach(a => a)
return t ? true : false;
}
/**
 * Profile
 */
const PROFILE = {};

export { USER };
