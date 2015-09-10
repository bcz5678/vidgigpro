'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var gigCtrlStub = {
  index: 'gigCtrl.index',
  show: 'gigCtrl.show',
  create: 'gigCtrl.create',
  update: 'gigCtrl.update',
  destroy: 'gigCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var gigIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './gig.controller': gigCtrlStub
});

describe('gig API Router:', function() {

  it('should return an express router instance', function() {
    gigIndex.should.equal(routerStub);
  });

  describe('GET /api/gigs', function() {

    it('should route to gig.controller.index', function() {
      routerStub.get
                .withArgs('/', 'gigCtrl.index')
                .should.have.been.calledOnce;
    });

  });

  describe('GET /api/gigs/:id', function() {

    it('should route to gig.controller.show', function() {
      routerStub.get
                .withArgs('/:id', 'gigCtrl.show')
                .should.have.been.calledOnce;
    });

  });

  describe('POST /api/gigs', function() {

    it('should route to gig.controller.create', function() {
      routerStub.post
                .withArgs('/', 'gigCtrl.create')
                .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/gigs/:id', function() {

    it('should route to gig.controller.update', function() {
      routerStub.put
                .withArgs('/:id', 'gigCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/gigs/:id', function() {

    it('should route to gig.controller.update', function() {
      routerStub.patch
                .withArgs('/:id', 'gigCtrl.update')
                .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/gigs/:id', function() {

    it('should route to gig.controller.destroy', function() {
      routerStub.delete
                .withArgs('/:id', 'gigCtrl.destroy')
                .should.have.been.calledOnce;
    });

  });

});
