'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');

var router = express.Router();

router
  .get('/', passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_fullprofile', 'r_network', 'r_contactinfo'],
    failureRedirect: '/signup',
    session: false
  }))

  .get('/callback', passport.authenticate('linkedin', {
    failureRedirect: '/signup',
    session: false
  }), auth.setTokenCookie);

module.exports = router;
