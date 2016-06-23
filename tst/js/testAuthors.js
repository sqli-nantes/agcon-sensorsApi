'use strict';

var express = require('express');
var request = require('supertest');
var threerest = require('threerest');

import * as ServiceAuthors from "../../src/js/services/serviceAuthors";
var assert = require("assert");

describe('Load service rest Authors', function(){
  it('test all links for all authors', function(done){

    var app = express();
    threerest.ServiceLoader.loadService(app, new ServiceAuthors.default());


    request(app)
    .get('/authors')
    .expect(function(res) {

      assert.equal(res.body._links.self.href, '/authors');
      assert.equal(res.body.data[0]._links.self.href, '/authors/0');
      assert.equal(res.body.data[1]._links.self.href, '/authors/1');
      assert.equal(res.body.data[2]._links.self.href, '/authors/2');
      assert.equal(res.body.data[3]._links.self.href, '/authors/3');
      assert.equal(res.body.data[4]._links.self.href, '/authors/4');

      assert.equal(res.body.data[0].series[0]._links.self.href, '/series/0');
      assert.equal(res.body.data[1].series[0]._links.self.href, '/series/1');
      assert.equal(res.body.data[1].series[1]._links.self.href, '/series/2');
      assert.equal(res.body.data[1].series[2]._links.self.href, '/series/3');
      assert.equal(res.body.data[1].series[3]._links.self.href, '/series/4');
      assert.equal(res.body.data[1].series[4]._links.self.href, '/series/5');
      assert.equal(res.body.data[2].series[0]._links.self.href, '/series/6');
      assert.equal(res.body.data[2].series[1]._links.self.href, '/series/7');
      assert.equal(res.body.data[2].series[2]._links.self.href, '/series/8');
      assert.equal(res.body.data[3].series[0]._links.self.href, '/series/9');
      assert.equal(res.body.data[3].series[1]._links.self.href, '/series/10');
      assert.equal(res.body.data[4].series[0]._links.self.href, '/series/11');

    }).end(done);
  });

  it('should have all series links and name for one author', function(done){

    var app = express();
    threerest.ServiceLoader.loadService(app, new ServiceAuthors.default());

    request(app)
    .get('/authors/2')
    .expect(function(res) {

      assert.equal(res.body._links.self.href, '/authors/2');
      assert.equal(res.body.data.id, 2);
      assert.equal(res.body.data.firstName, 'Christophe');
      assert.equal(res.body.data.lastName, 'Bec');
      assert.equal(res.body.data._links.self.href, '/authors/2');

      assert.equal(res.body.data.series[0].idSerie, 1);
      assert.equal(res.body.data.series[0].name, 'Carthago');
      assert.equal(res.body.data.series[0]._links.self.href, '/series/1');
      assert.equal(res.body.data.series[1].idSerie, 2);
      assert.equal(res.body.data.series[1].name, 'Deepwater Prison');
      assert.equal(res.body.data.series[1]._links.self.href, '/series/2');
      assert.equal(res.body.data.series[2].idSerie, 3);
      assert.equal(res.body.data.series[2].name, 'Meilleur Job du monde (le)');
      assert.equal(res.body.data.series[2]._links.self.href, '/series/3');
      assert.equal(res.body.data.series[3].idSerie, 4);
      assert.equal(res.body.data.series[3].name, 'Prométhée');
      assert.equal(res.body.data.series[3]._links.self.href, '/series/4');
      assert.equal(res.body.data.series[4].idSerie, 5);
      assert.equal(res.body.data.series[4].name, 'Temps des loups (Le)');
      assert.equal(res.body.data.series[4]._links.self.href, '/series/5');

    }).end(done);
  });

});
