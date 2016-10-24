import passport from 'passport';
import { SECRET } from 'config';
import { Strategy, ExtractJwt }  from 'passport-jwt';

import User from '../models/user';

// setup options
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: SECRET
};

//creat JWT Strategy
const jwtLogin = new Strategy(jwtOptions, (payload, done) => {
    User.findById(payload._id, (err, user) => {
        if(err) { return done(err, false); }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
