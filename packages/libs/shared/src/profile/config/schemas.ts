import { object } from 'yup';
import { buildStringSchema } from '../../utils/helpers.js';
import { NAME_CFG, PROFILE_BIO_CFG } from './constants.js';

const firstName = buildStringSchema(`First name`, NAME_CFG);
const lastName = buildStringSchema(`Last name`, NAME_CFG);
const profileBio = buildStringSchema(`Profile bio`, PROFILE_BIO_CFG);

const profile = object({
  firstName,
  lastName,
  bio: profileBio,
});

export { profile, firstName, lastName, profileBio };
