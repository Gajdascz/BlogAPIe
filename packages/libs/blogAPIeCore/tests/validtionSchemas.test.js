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
} from '../src/index.ts';

import { EMAILS, PASSWORDS } from './data.js';
import { ValidationError } from 'yup';

const assertForOf = async (obj, schema, toThrow = false) => {
  for (const i of obj) {
    try {
      const result = await schema.validate(i);
      expect(result).toBeTruthy();
    } catch(err) {
      if(toThrow) expect(err).toBeInstanceOf(ValidationError);
      else throw new Error(`Unexpected error thrown`);
    }
  }
};

describe(`Field Validation Schemas`, () => {
  it(`Email`, async () => {
    const {VALID,INVALID} = EMAILS;
      await assertForOf(VALID, email, false); // Accepts Valid
      await assertForOf(INVALID,email,true);  // Rejects Invalid
  })
});
