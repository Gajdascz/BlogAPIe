import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  issuer: process.env.JWT_ISS,
  audience: process.env.JWT_AUD,
};

passport.use(new JWTStrategy(options, function (jwt_payload, done) {}));
