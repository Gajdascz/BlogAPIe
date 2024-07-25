import {
  RECOVERY_QUESTIONS as _RECOVERY_QUESTIONS,
  ROLES as _ROLES,
  PROFILE_BIO_CFG,
  RECOVERY_ANSWER_CFG,
  BLOG_CATEGORY_CFG,
  POST_BODY_CFG,
  POST_TITLE_CFG,
  COMMENT_BODY_CFG,
} from '../src';
import { NAME_CFG } from '../src';

const EMAILS = {
  // https://en.wikipedia.org/wiki/Email_address#Invalid_email_addresses
  INVALID: [
    { desc: 'missing @ symbol', test: 'abc.example.com' },
    { desc: 'multiple @ symbols', test: 'a@b@c@example.com' },
    {
      desc: 'invalid characters in local',
      test: 'a"b(c)d,e:f;g<h>i[j\\k]l@example.com',
    },
    { desc: 'quoted strings with spaces', test: 'just"not"right@example.com' },
    { desc: 'spaces in local', test: 'this is"not\\allowed@example.com' },
    {
      desc: 'escaped characters in local',
      test: 'this\\ still\\"not\\\\allowed@example.com',
    },
    {
      desc: 'invalid underscore in domain',
      test: 'i.like.underscores@but_they_are_not_allowed_in_this_part',
    },
  ],
  // https://en.wikipedia.org/wiki/Email_address#Valid_email_addresses
  VALID: [
    { desc: 'underscore in local', test: '_______@example.com' },
    { desc: 'hyphen in local', test: 'firstname-lastname@example.com' },
    { desc: 'simple', test: 'simple@example.com' },
    { desc: 'common', test: 'very.common@example.com' },
    {
      desc: 'mixed case with dot',
      test: 'FirstName.LastName@EasierReading.org',
    },
    { desc: 'single letter local', test: 'x@example.com' },
    {
      desc: 'hyphens and subdomains',
      test: 'long.email-address-with-hyphens@and.subdomains.example.com',
    },
    { desc: 'plus addressing', test: 'user.name+tag+sorting@example.com' },
    { desc: 'dot in local', test: 'user.name@example.com' },
    { desc: 'slash in local', test: 'name/surname@example.com' },
    { desc: 'no dot in domain', test: 'admin@example' },
    { desc: 'single letter domain', test: 'example@s.example' },
    { desc: 'bang path in local', test: 'mailhost!username@example.org' },
    { desc: 'percent in local', test: 'user%example.com@example.org' },
    { desc: 'dash at end of local', test: 'user-@example.org' },
  ],
};
const PASSWORDS = {
  VALID: [
    { desc: 'valid', test: 'Aa1!234' },
    { desc: 'common', test: 'P@ssw0rd' },
    { desc: 'special characters', test: 'Valid$Password1' },
    { desc: 'example', test: 'Ex@mple123' },
    { desc: 'mixed characters', test: "MyPass1!'" },
    { desc: 'at maximum', test: 'aA1!_bBcC99$$pPpPpP' },
    { desc: 'at minimum', test: 'aA1!_0' },
  ],
  INVALID: [
    { desc: 'below minimum', test: 'A1!a' },
    { desc: 'below minimum', test: 'P@1a' },
    { desc: 'exceeds maximum', test: 'ThisPasswordIsWayTooLong123!' },
    { desc: 'exceeds maximum', test: 'ExcessivelyLongPassword12345!' },
    { desc: 'missing special character', test: 'Password123' },
    { desc: 'missing special character', test: 'UppercaseLowercase12' },
    { desc: 'missing uppercase letter', test: 'password1!' },
    { desc: 'missing uppercase letter', test: 'lowercaseonly1!' },
    { desc: 'missing lowercase letter', test: 'PASSWORD1!' },
    { desc: 'missing lowercase letter', test: 'UPPERCASEONLY1!' },
    { desc: 'missing digit', test: 'Password!' },
    {
      desc: 'mixed-case with special chars missing digit',
      test: 'SpecialCharsOnly!@#$',
    },
  ],
};
const USERNAMES = {
  VALID: [
    { desc: 'basic', test: 'user123' },
    { desc: 'with underscore', test: 'user_name' },
    { desc: 'with mixed case and digits', test: 'UserName123' },
    { desc: 'minimum length', test: 'a' },
    { desc: 'maximum length', test: 'maxLength20chars____' },
  ],
  INVALID: [
    { desc: 'empty string', test: '' },
    { desc: 'trimmed empty string', test: '   ' },
    { desc: 'contains space', test: 'user name' },
    { desc: 'contains hyphen', test: 'user-name' },
    { desc: 'contains @', test: 'user@name' },
    { desc: 'contains asterisk', test: 'username*' },
    {
      desc: 'exceeds maximum length',
      test: 'username_that_is_way_too_long_for_the_config',
    },
  ],
};
const RECOVERY_QUESTIONS = {
  VALID: _RECOVERY_QUESTIONS.map((question) => ({
    desc: question,
    test: question,
  })),
  INVALID: [
    {
      desc: 'favorite color',
      test: 'Favorite color?',
    },
    { desc: 'favorite car', test: 'Favorite car?' },
    {
      desc: 'favorite rock',
      test: 'Favorite rock?',
    },
    {
      desc: '1234353453405394nullvoid000Promise<any>',
      test: '1234353453405394nullvoid000Promise<any>',
    },
  ],
};
const RECOVERY_ANSWERS = {
  VALID: [
    { desc: 'simple', test: 'MaidenName' },
    { desc: 'simple', test: 'MyBestFriend' },
    { desc: 'at minimum', test: 'O'.repeat(RECOVERY_ANSWER_CFG.RANGE.MIN) },
    {
      desc: 'at maximum',
      test: 'O'.repeat(RECOVERY_ANSWER_CFG.RANGE.MAX),
    },
  ],
  INVALID: [
    { desc: 'empty string', test: '' },
    { desc: 'only spaces', test: '   ' },
    {
      desc: 'below minimum',
      test: 'X'.repeat(RECOVERY_ANSWER_CFG.RANGE.MIN - 1),
    },
    {
      desc: 'exceeds maximum',
      test: 'X'.repeat(RECOVERY_ANSWER_CFG.RANGE.MAX + 1),
    },
  ],
};
const ROLES = {
  VALID: Object.values(_ROLES).map((role) => ({
    desc: role,
    test: role,
  })),
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'guest', test: 'guest' },
    { desc: 'user', test: 'user' },
    { desc: 'admin with digit', test: 'admin1' },
    { desc: 'author with exclamation', test: 'author!' },
    { desc: 'underscore member', test: '_member' },
  ],
};

const API_KEY_STATUSES = {
  VALID: [
    { desc: 'active', test: 'active' },
    { desc: 'revoked', test: 'revoked' },
    { desc: 'closed', test: 'closed' },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'null', test: null },
    { desc: 'undefined', test: undefined },
    { desc: 'invalid', test: 'invalid' },
    { desc: 'partially matching', test: 'activ' },
  ],
};
const API_RESPONSE_STATUSES = {
  VALID: [
    { desc: 'success', test: 'success' },
    { desc: 'error', test: 'error' },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'null', test: null },
    { desc: 'undefined', test: undefined },
    { desc: 'invalid', test: 'invalid' },
    { desc: 'partially matching', test: 'succ' },
  ],
};
const NAMES = {
  FIRST: {
    VALID: [
      { desc: 'simple', test: 'John' },
      { desc: 'trimmed', test: ' John ' },
      { desc: 'at minimum', test: 'A'.repeat(NAME_CFG.RANGE.MIN) },
      { desc: 'at maximum', test: 'A'.repeat(NAME_CFG.RANGE.MAX) },
    ],
    INVALID: [
      { desc: 'empty', test: '' },
      { desc: 'illegal character', test: 'John!' },
      { desc: 'below minimum', test: 'A'.repeat(NAME_CFG.RANGE.MIN - 1) },
      { desc: 'exceeds maximum', test: 'A'.repeat(NAME_CFG.RANGE.MAX + 1) },
    ],
  },
  LAST: {
    VALID: [
      { desc: 'simple', test: 'Doe' },
      { desc: 'trimmed', test: ' Doe ' },
      { desc: 'at minimum', test: 'B'.repeat(NAME_CFG.RANGE.MIN) },
      { desc: 'at maximum', test: 'B'.repeat(NAME_CFG.RANGE.MAX) },
    ],
    INVALID: [
      { desc: 'empty', test: '' },
      { desc: 'illegal character', test: 'Doe!' },
      { desc: 'below minimum', test: 'B'.repeat(NAME_CFG.RANGE.MIN - 1) },
      { desc: 'exceeds maximum', test: 'B'.repeat(NAME_CFG.RANGE.MAX + 1) },
    ],
  },
};
const PROFILE_BIOS = {
  VALID: [
    { desc: 'simple', test: 'This is a simple bio.' },
    { desc: 'trimmed', test: ' This is a trimmed bio. ' },
    { desc: 'maximum length', test: 'A'.repeat(PROFILE_BIO_CFG.RANGE.MAX) },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'below minimum', test: 'A'.repeat(PROFILE_BIO_CFG.RANGE.MIN - 1) },
    {
      desc: 'exceeds maximum',
      test: 'A'.repeat(PROFILE_BIO_CFG.RANGE.MAX + 1),
    },
  ],
};

const POST_STATUSES = {
  VALID: [
    { desc: 'public', test: 'public' },
    { desc: 'hidden', test: 'hidden' },
    { desc: 'draft', test: 'draft' },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'null', test: null },
    { desc: 'undefined', test: undefined },
    { desc: 'invalid', test: 'invalid' },
    { desc: 'partially matching', test: 'publ' },
  ],
};
const POST_TITLES = {
  VALID: [
    { desc: 'simple', test: 'My Post' },
    { desc: 'trimmed', test: ' My Post ' },
    { desc: 'at minimum length', test: 'A'.repeat(POST_TITLE_CFG.RANGE.MIN) },
    { desc: 'at maximum length', test: 'A'.repeat(POST_TITLE_CFG.RANGE.MAX) },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'below minimum', test: 'A'.repeat(POST_BODY_CFG.RANGE.MIN - 1) },
    { desc: 'exceeds maximum', test: 'A'.repeat(POST_BODY_CFG.RANGE.MAX + 1) },
  ],
};

const POST_BODIES = {
  VALID: [
    { desc: 'trimmed', test: ' ' + 'A'.repeat(POST_BODY_CFG.RANGE.MIN) + ' ' },
    { desc: 'at minimum length', test: 'A'.repeat(POST_BODY_CFG.RANGE.MIN) },
    { desc: 'at maximum length', test: 'A'.repeat(POST_BODY_CFG.RANGE.MAX) },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'below minimum', test: 'A'.repeat(POST_BODY_CFG.RANGE.MIN - 1) },
    { desc: 'exceeds maximum', test: 'A'.repeat(POST_BODY_CFG.RANGE.MAX + 1) },
  ],
};
const BLOG_CATEGORIES = {
  VALID: [
    { desc: 'simple', test: 'Technology' },
    { desc: 'trimmed', test: ' Health ' },
    { desc: 'at minimum', test: 'A'.repeat(BLOG_CATEGORY_CFG.RANGE.MIN) },
    { desc: 'at maximum', test: 'A'.repeat(BLOG_CATEGORY_CFG.RANGE.MAX) },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    {
      desc: 'below minimum',
      test: 'A'.repeat(BLOG_CATEGORY_CFG.RANGE.MIN - 1),
    },
    {
      desc: 'exceeds maximum',
      test: 'A'.repeat(BLOG_CATEGORY_CFG.RANGE.MAX + 1),
    },
  ],
};

// Define test cases for COMMENT_BODY_CFG
const COMMENT_BODIES = {
  VALID: [
    { desc: 'simple', test: 'This is a comment.' },
    { desc: 'at minimum', test: 'A'.repeat(COMMENT_BODY_CFG.RANGE.MIN) },
    { desc: 'at maximum', test: 'A'.repeat(COMMENT_BODY_CFG.RANGE.MAX) },
  ],
  INVALID: [
    { desc: 'empty string', test: '' },
    { desc: 'below minimum', test: 'A'.repeat(COMMENT_BODY_CFG.RANGE.MIN - 1) },
    {
      desc: 'exceeds maximum',
      test: 'A'.repeat(COMMENT_BODY_CFG.RANGE.MAX + 1),
    },
  ],
};

// Define test cases for REACTION_CFG
const REACTIONS = {
  VALID: [
    { desc: 'like', test: 'like' },
    { desc: 'love', test: 'love' },
    { desc: 'laugh', test: 'laugh' },
    { desc: 'wow', test: 'wow' },
    { desc: 'sad', test: 'sad' },
    { desc: 'thinking', test: 'thinking' },
    { desc: 'applaud', test: 'applaud' },
    { desc: 'confused', test: 'confused' },
  ],
  INVALID: [
    { desc: 'empty', test: '' },
    { desc: 'null', test: null },
    { desc: 'undefined', test: undefined },
    { desc: 'invalid', test: 'invalid' },
    { desc: 'partially matching', test: 'lov' },
  ],
};
const USERS = {
  VALID: [
    {
      username: USERNAMES.VALID[0].test,
      password: PASSWORDS.VALID[0].test,
      email: EMAILS.VALID[0].test,
      role: ROLES.VALID[0].test,
      recoveryQuestion: RECOVERY_QUESTIONS.VALID[0].test,
      recoveryAnswer: RECOVERY_ANSWERS.VALID[0].test,
    },
  ],
  INVALID: [
    {
      username: USERNAMES.INVALID[0].test,
      password: PASSWORDS.INVALID[0].test,
      email: EMAILS.INVALID[0].test,
      role: ROLES.INVALID[0].test,
      recoveryQuestion: RECOVERY_QUESTIONS.INVALID[0].test,
      recoveryAnswer: RECOVERY_ANSWERS.INVALID[0].test,
    },
  ],
};
const POSTS = {
  VALID: [
    {
      title: POST_TITLES.VALID[0].test,
      body: POST_BODIES.VALID[0].test,
      status: POST_STATUSES.VALID[0].test,
    },
  ],
  INVALID: [
    {
      title: POST_TITLES.INVALID[0].test,
      body: POST_BODIES.INVALID[0].test,
      status: POST_STATUSES.INVALID[0].test,
    },
  ],
};
const PROFILES = {
  VALID: [
    {
      firstName: NAMES.FIRST.VALID[0].test,
      lastName: NAMES.LAST.VALID[0].test,
      bio: PROFILE_BIOS.VALID[0].test,
    },
  ],
  INVALID: [
    {
      firstName: NAMES.FIRST.INVALID[0].test,
      lastName: NAMES.LAST.INVALID[0].test,
      bio: PROFILE_BIOS.INVALID[0].test,
    },
  ],
};

export {
  EMAILS,
  PASSWORDS,
  USERNAMES,
  ROLES,
  RECOVERY_ANSWERS,
  RECOVERY_QUESTIONS,
  API_KEY_STATUSES,
  API_RESPONSE_STATUSES,
  PROFILE_BIOS,
  NAMES,
  POST_BODIES,
  POST_STATUSES,
  POST_TITLES,
  BLOG_CATEGORIES,
  COMMENT_BODIES,
  REACTIONS,
  USERS,
  POSTS,
  PROFILES,
};
