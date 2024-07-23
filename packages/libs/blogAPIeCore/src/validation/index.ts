import { object } from 'yup';
import {
  username,
  password,
  email,
  role,
  recoveryAnswer,
  recoveryQuestion,
  blogCategory,
  firstName,
  lastName,
  profileBio,
  reaction,
  postBody,
  postStatus,
  postTitle,
} from './fieldSchemas.js';

const user = object({
  username,
  password,
  email,
  role,
  recoveryQuestion,
  recoveryAnswer,
});

const profile = object({
  firstName,
  lastName,
  profileBio,
});

const post = object({
  postTitle,
  postStatus,
  postBody,
});

export {
  user,
  profile,
  post,
  username,
  password,
  email,
  role,
  recoveryAnswer,
  recoveryQuestion,
  blogCategory,
  firstName,
  lastName,
  profileBio,
  reaction,
  postBody,
  postStatus,
  postTitle,
};
