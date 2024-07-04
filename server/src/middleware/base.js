import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import logger from 'morgan';

export default (app) => {
  app.use(compression());
  app.use(helmet());
  app.use(logger('dev'));
  app.use(cookieParser());
};
