import { it, expect, describe } from 'vitest';
import {
  email,
  password,
  recoveryAnswer,
  recoveryQuestion,
  role,
  user,
  username,
  firstName,
  lastName,
  profile,
  profileBio,
  post,
  postBody,
  postStatus,
  postTitle,
  apiKeyStatus,
  apiResponseStatus,
  commentBody,
  reaction,
  blogCategory,
} from '../index.ts';

import {
  EMAILS,
  PASSWORDS,
  USERNAMES,
  ROLES,
  RECOVERY_ANSWERS,
  RECOVERY_QUESTIONS,
  NAMES,
  PROFILE_BIOS,
  POST_BODIES,
  POST_STATUSES,
  POST_TITLES,
  API_KEY_STATUSES,
  API_RESPONSE_STATUSES,
  COMMENT_BODIES,
  REACTIONS,
  BLOG_CATEGORIES,
  PROFILES,
  POSTS,
  USERS,
} from './data.js';
import { ValidationError } from 'yup';

const shouldAcceptValid = (validArr, schema) => {
  for (const { desc, test } of validArr) {
    it(`${desc}`, async () => {
      const result = await schema.validate(test);
      expect(result).toBeTruthy();
    });
  }
};
const shouldRejectInvalid = (invalidArr, schema) => {
  for (const { desc, test } of invalidArr) {
    it(`${desc}`, async () => {
      try {
        await schema.validate(test);
        throw new Error(`Validate passed when it should have failed.`);
      } catch (err) {
        expect(err).toBeInstanceOf(ValidationError);
      }
    });
  }
};

const testStringSchema = (schemaName, schema, valid, invalid) => {
  describe(`${schemaName}`, () => {
    describe(`Should Accept`, () => {
      shouldAcceptValid(valid, schema);
    });
    describe(`Should Reject`, () => {
      shouldRejectInvalid(invalid, schema);
    });
  });
};

const testObjectSchema = (schemaName, schema, valid, invalid) => {
  describe(`${schemaName}`, () => {
    it(`should accept`, async () => {
      for (const validCase of valid) {
        const result = await schema.validate(validCase);
        expect(result).toBeTruthy();
      }
    });
    it(`should reject`, async () => {
      for (const invalidCase of invalid) {
        try {
          await schema.validate(invalidCase);
          throw new Error(`Invalid user should have failed.`);
        } catch (err) {
          expect(err).toBeInstanceOf(ValidationError);
        }
      }
    });
  });
};

describe(`Validation Schemas`, () => {
  testStringSchema('Email', email, EMAILS.VALID, EMAILS.INVALID);
  testStringSchema('Password', password, PASSWORDS.VALID, PASSWORDS.INVALID);
  testStringSchema('Username', username, USERNAMES.VALID, USERNAMES.INVALID);
  testStringSchema('Roles', role, ROLES.VALID, ROLES.INVALID);
  testStringSchema(
    'Recovery Questions',
    recoveryQuestion,
    RECOVERY_QUESTIONS.VALID,
    RECOVERY_QUESTIONS.INVALID,
  );
  testStringSchema(
    'Recovery Answers',
    recoveryAnswer,
    RECOVERY_ANSWERS.VALID,
    RECOVERY_ANSWERS.INVALID,
  );
  testStringSchema(
    'First Name',
    firstName,
    NAMES.FIRST.VALID,
    NAMES.FIRST.INVALID,
  );
  testStringSchema('Last Name', lastName, NAMES.LAST.VALID, NAMES.LAST.INVALID);
  testStringSchema(
    'Profile Bio',
    profileBio,
    PROFILE_BIOS.VALID,
    PROFILE_BIOS.INVALID,
  );
  testStringSchema(
    'Post Body',
    postBody,
    POST_BODIES.VALID,
    POST_BODIES.INVALID,
  );
  testStringSchema(
    'Post Status',
    postStatus,
    POST_STATUSES.VALID,
    POST_STATUSES.INVALID,
  );
  testStringSchema(
    'Post Title',
    postTitle,
    POST_TITLES.VALID,
    POST_TITLES.INVALID,
  );
  testStringSchema(
    'API Key Status',
    apiKeyStatus,
    API_KEY_STATUSES.VALID,
    API_KEY_STATUSES.INVALID,
  );
  testStringSchema(
    'API Response Status',
    apiResponseStatus,
    API_RESPONSE_STATUSES.VALID,
    API_RESPONSE_STATUSES.INVALID,
  );
  testStringSchema(
    `Comment Body`,
    commentBody,
    COMMENT_BODIES.VALID,
    COMMENT_BODIES.INVALID,
  );
  testStringSchema(`Reaction`, reaction, REACTIONS.VALID, REACTIONS.INVALID);
  testStringSchema(
    `Blog Category`,
    blogCategory,
    BLOG_CATEGORIES.VALID,
    BLOG_CATEGORIES.INVALID,
  );

  testObjectSchema('User', user, USERS.VALID, USERS.INVALID);
  testObjectSchema('Profile', profile, PROFILES.VALID, PROFILES.INVALID);
  testObjectSchema('Post', post, POSTS.VALID, POSTS.INVALID);
});
