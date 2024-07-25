import { buildStringSchema } from '../../utils/helpers.js';
import { object } from 'yup';
import {
  USERNAME_CFG,
  ROLE_CFG,
  RECOVERY_ANSWER_CFG,
  RECOVER_QUESTION_CFG,
  PASSWORD_CFG,
  EMAIL_CFG,
} from './constants.js';

const username = buildStringSchema(`Username`, USERNAME_CFG);
const role = buildStringSchema(`Role`, ROLE_CFG);
const recoveryQuestion = buildStringSchema(
  `Recovery question`,
  RECOVER_QUESTION_CFG,
);
const recoveryAnswer = buildStringSchema(
  `Recovery answer`,
  RECOVERY_ANSWER_CFG,
);
const password = buildStringSchema(`Password`, PASSWORD_CFG);
const email = buildStringSchema(`Email`, EMAIL_CFG);

const user = object({
  username,
  password,
  email,
  role,
  recoveryQuestion,
  recoveryAnswer,
});

export {
  user,
  username,
  role,
  password,
  recoveryAnswer,
  recoveryQuestion,
  email,
};
