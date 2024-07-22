/**
 * User Roles
 * @typedef {Object} ROLES
 * @property {String} MEMBER A user who has registered.
 * Can read articles, comment on posts, and like/dislike content.
 * @property {String} AUTHOR A user who can create and manage their own posts.
 * @property {String} ADMIN A user with full control over the application.
 * @property {String[]} array A method to return all of the roles in ascending order based on privilege
 *
 * no-role: Can read public blog data.
 */
/**@type {ROLES} */
export default {
  MEMBER: 'member',
  AUTHOR: 'author',
  ADMIN: 'admin',
  array: function () {
    return [this.MEMBER, this.AUTHOR, this.ADMIN];
  },
};
