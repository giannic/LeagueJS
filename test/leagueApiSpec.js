/*global describe*/
/*global require*/
/*global beforeEach*/
/*global it*/
/*global xit*/

describe('League of Legends api wrapper test suite', function () {
    'use strict';


    var sinon = require('sinon'),
        should = require('should'),
        leagueApi = require('../lib/lolapi'),
        mockChampionArray = ['Teemo', 'Ahri', 'Vladimir'],
        mockSummonersArray = [29228901, 19199530];


    beforeEach(function () {
        leagueApi.init('aee0b50d-21b0-4e36-b864-75daa2f5df48', 'na');
    });

    it('should be able to retrieve all champions', function (done) {

        leagueApi.getChampions(false, 'na', function (err, res) {
            should.not.exist(err);
            should.exist(res);
            res.length.should.be.greaterThan(0);
            done();
        });
    });

    it('should be able to retrieve all of the free champions', function (done) {
        leagueApi.getChampions(true, 'na', function (err, res) {
            should.not.exist(err);
            should.exist(res);
            res.length.should.be.equal(10);
            done();
        });
    });

    it('should throw an error if given the wrong type ', function (done) {
        done();
    });
    
    it('should be able to summoners data from a list of ids', function (done) {
        leagueApi.Summoner.listSummonerDataByIDs(mockSummonersArray, function (err, res) {
            should.not.exist(err);
            should.exist(res);
            mockSummonersArray.forEach(function (id) {
                should.exist(res[id]);
            });
            done();
        });
    });

    it('should be able to get champion static data', function(done) {
        var options = {champData: 'allytips,blurb', version : '4.4.3', locale: 'en_US'}
        leagueApi.Static.getChampionList(options, 'na', function(err, champs) {
            should.not.exist(err);
            should.exist(champs);
            done();
        });
    })
});