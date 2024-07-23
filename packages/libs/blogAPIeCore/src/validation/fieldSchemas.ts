import { string } from 'yup';
import {
  ROLES,
  RECOVERY_QUESTIONS,
  USERNAME,
  PASSWORD,
  NAME,
  BLOG_CATEGORY,
  PROFILE_BIO,
  RECOVERY_ANSWER,
  REACTIONS,
  POST_BODY,
  POST_STATUS,
  POST_TITLE,
} from '../constants.js';

const msg = {
  max: (field: string, value: string, unit = 'characters') =>
    `${field} cannot contain more than ${value} ${unit}`,
  min: (field: string, value: string, unit = 'characters') =>
    `${field} must contain at least ${value} ${unit}(s)`,
};

const username = string()
  .trim()
  .required('Username is required.')
  .max(USERNAME.MAX, msg.max('Username', String(USERNAME.MAX)))
  .min(USERNAME.MIN, msg.min('Username', String(USERNAME.MIN)))
  .matches(
    USERNAME.PATTERN,
    `Username may only contain letters, digits, and underscores.`,
  );

const role = string()
  .trim()
  .required('Role is required.')
  .oneOf(Object.values(ROLES), `Invalid role.`);

const recoveryQuestion = string()
  .trim()
  .required(`Recovery required.`)
  .oneOf(RECOVERY_QUESTIONS);

const recoveryAnswer = string()
  .trim()
  .required(`Answer to recovery question required.`)
  .max(
    RECOVERY_ANSWER.MAX,
    msg.max(`Answer to recovery question`, String(RECOVERY_ANSWER.MAX)),
  )
  .min(
    RECOVERY_ANSWER.MIN,
    msg.min(`Answer to recovery question`, String(RECOVERY_ANSWER.MIN)),
  );

const password = string()
  .trim()
  .required(`Password required.`)
  .max(PASSWORD.MAX, msg.max(`Password`, String(PASSWORD.MAX)))
  .min(PASSWORD.MIN, msg.min(`Password`, String(PASSWORD.MIN)))
  .test(
    `contains-lowercase`,
    msg.min(`Password`, 'one', 'lower case letter'),
    (str?: string) => PASSWORD.PATTERN.LOWER_CASE.test(str ?? ''),
  )
  .test(
    `contains-uppercase`,
    msg.min(`Password`, 'one', 'upper case letter'),
    (str?: string) => PASSWORD.PATTERN.UPPER_CASE.test(str ?? ''),
  )
  .test(`contains-digit`, msg.min(`Password`, 'one', 'digit'), (str?: string) =>
    PASSWORD.PATTERN.DIGIT.test(str ?? ''),
  )
  .test(
    `contains-special`,
    msg.min(`Password`, 'one', 'accepted special character'),
    (str?: string) => PASSWORD.PATTERN.SPECIAL_SYMBOL.test(str ?? ''),
  );

const email = string().trim().email();

const firstName = string()
  .trim()
  .max(NAME.MAX, msg.max(`First name`, String(NAME.MAX)))
  .min(NAME.MIN, msg.min(`First name`, String(NAME.MIN)))
  .test('restricted-chars', `Invalid character in input.`, (str?: string) =>
    NAME.PATTERN.test(str ?? ''),
  );

const lastName = string()
  .trim()
  .max(NAME.MAX, msg.max(`Last name`, String(NAME.MAX)))
  .min(NAME.MIN, msg.min(`Last name`, String(NAME.MIN)))
  .test('restricted-chars', `Invalid character in input.`, (str?: string) =>
    NAME.PATTERN.test(str ?? ''),
  );

const blogCategory = string()
  .trim()
  .required(`Blog category is required.`)
  .max(BLOG_CATEGORY.MAX, msg.max(`Blog category`, String(BLOG_CATEGORY.MAX)))
  .min(BLOG_CATEGORY.MIN, msg.min(`Blog category`, String(BLOG_CATEGORY.MIN)));

const profileBio = string()
  .trim()
  .max(PROFILE_BIO.MAX, msg.max(`Profile bio`, String(PROFILE_BIO.MAX)))
  .min(PROFILE_BIO.MIN, msg.min(`Profile bio`, String(PROFILE_BIO.MIN)));

const reaction = string().trim().oneOf(Object.values(REACTIONS));

const postBody = string()
  .required(`Post must contain body.`)
  .max(POST_BODY.MAX, msg.max(`Post body`, String(POST_BODY.MAX), 'characters'))
  .min(POST_BODY.MIN, msg.min(`Post body`, String(POST_BODY.MIN)));

const postStatus = string().oneOf(Object.values(POST_STATUS));

const postTitle = string()
  .required(`Post must have a title.`)
  .max(POST_TITLE.MAX, msg.max(`Post title`, String(POST_TITLE.MAX)))
  .min(POST_TITLE.MIN, msg.min(`Post title`, String(POST_TITLE.MIN)));

export {
  username,
  password,
  role,
  recoveryQuestion,
  recoveryAnswer,
  email,
  firstName,
  lastName,
  blogCategory,
  profileBio,
  reaction,
  postBody,
  postStatus,
  postTitle,
};
