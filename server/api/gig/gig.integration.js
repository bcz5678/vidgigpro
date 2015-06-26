'use strict';

var app = require('../../app');
var request = require('supertest');

var newgig;

describe('gig API:', function() {

  describe('GET /api/gigs', function() {
    var gigs;

    beforeEach(function(done) {
      request(app)
        .get('/api/gigs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          gigs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      gigs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/gigs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/gigs')
        .send({
          name: 'New gig',
          info: 'This is the brand new gig!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newgig = res.body;
          done();
        });
    });

    it('should respond with the newly created gig', function() {
      newgig.name.should.equal('New gig');
      newgig.info.should.equal('This is the brand new gig!!!');
    });

  });

  describe('GET /api/gigs/:id', function() {
    var gig;

    beforeEach(function(done) {
      request(app)
        .get('/api/gigs/' + newgig._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          gig = res.body;
          done();
        });
    });

    afterEach(function() {
      gig = {};
    });

    it('should respond with the requested gig', function() {
      gig.name.should.equal('New gig');
      gig.info.should.equal('This is the brand new gig!!!');
    });

  });

  describe('PUT /api/gigs/:id', function() {
    var updatedgig

    beforeEach(function(done) {
      request(app)
        .put('/api/gigs/' + newgig._id)
        .send({
          name: 'Updated gig',
          info: 'This is the updated gig!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedgig = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedgig = {};
    });

    it('should respond with the updated gig', function() {
      updatedgig.name.should.equal('Updated gig');
      updatedgig.info.should.equal('This is the updated gig!!!');
    });

  });

  describe('DELETE /api/gigs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/gigs/' + newgig._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when gig does not exist', function(done) {
      request(app)
        .delete('/api/gigs/' + newgig._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
