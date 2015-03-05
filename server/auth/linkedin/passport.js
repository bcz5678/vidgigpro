var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin').Strategy;

exports.setup = function(User, config) {
  passport.use(new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.find({
      'linkedin.id': profile.id
    })
      .then(function(user) {
        if (!user) {
          user = User.build({
            name: profile.name,
            email: profile.email,
            role: 'user',
            provider: 'linkedin',
            linkedin: profile._json
          });
          user.save()
            .then(function(user) {
              return done(null, user);
            })
            .catch(function(err) {
              return done(err);
            });
        } else {
          return done(null, user);
        }
      })
      .catch(function(err) {
        return done(err);
      });
  }));
};
