// config/passport.js
const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

require('dotenv').config();

module.exports = () => {

    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'name',
        passwordField: 'icode'
        },
        function (name, icode, done) {
            // 이 부분에선 저장되어 있는 User를 비교하면 된다. 
            return models.users.findOne({where : {"name" : name, "icode" : icode }})
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'Incorrect icode or name.'});
                    }
                    return done(null, user, {message: 'Logged In Successfully'});
                })
                .catch(err => done(err));
        }
    ));
    
    //JWT Strategy
    passport.use(new JWTStrategy({
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey   : process.env.ACCESS_TOKEN_SECRET
        },
        function (jwtPayload, done) {
            return models.users.findOneById(jwtPayload.id)
                .then(user => {
                    return done(null, user);
                })
                .catch(err => {
                    return done(err);
                });
        }
    ));
}