import chai from "chai";
import sinon from "sinon";
import https from "https";
import { PassThrough } from "stream";
import Weather from "../../src/index";

//Attach "should" method to all object prototypes
chai.should();

describe("index.js", function(){
	let weather = new Weather("My API Key");
	it("should export a prototype", function(){
		weather.should.be.an("object");
	});

	it("should have a getStations method", function(){
		weather.should.have.property("getStations");
	});

	it("should have a getStation method", function(){
		weather.should.have.property("getStation");
	});

	it("should have a getCurrentConditions method", function(){
		weather.should.have.property("getCurrentConditions");
	});

	it("should have a getActiveAlerts method", function(){
		weather.should.have.property("getActiveAlerts");
	});

	it("should have a getForecast method", function(){
		weather.should.have.property("getForecast");
	});

	it("should have a getHourlyForecast method", function(){
		weather.should.have.property("getHourlyForecast");
	});

	it("should have a getObservations method", function(){
		weather.should.have.property("getObservations");
	});

	it("should have a getNearbyStations method", function(){
		weather.should.have.property("getNearbyStations");
	});

	it("should have a getPoint method", function(){
		weather.should.have.property("getPoint");
	});

	describe("getStations", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should eventually return an array of weather stations", function(done){
			let expected = { "@oontext": [], "type": "", "features": [], "observationStations": [] };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			weather.getStations(function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getStation", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should eventually return a weather station object", function(done){
			let expected = { "@oontext": [], "id": "", "type": "", "geometry": [], "properties": [] };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			weather.getStation("ASDF", function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getCurrentConditions", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should eventually return an object with the current conditions", function(done){
			let expected = { "@oontext": [], "id": "", "type": "", "geometry": [], "properties": [] };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			weather.getCurrentConditions("ASDF", function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getActiveAlerts", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should return an array of active alerts", function(done){
			let expected = { "type": "", "features": [], "title": "" };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			let point = {
				latitude: 43.06994,
				longitude: -89.414883
			};
			weather.getActiveAlerts(point, function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getForecast", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should eventually return an object with forecast information", function(done){
			let expected = { "@oontext": [], "type": "", "geometry": {}, "properties": {} };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			let point = {
				latitude: 43.06994,
				longitude: -89.414883
			};
			weather.getForecast(point, function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getHourlyForecast", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should return an object with hourly forecast", function(done){
			let expected = { "@oontext": [], "type": "", "geometry": {}, "properties": {} };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			let point = {
				latitude: 43.06994,
				longitude: -89.414883
			};
			weather.getHourlyForecast(point, function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getObservations", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should return an array of observations", function(done){
			let expected = { "@oontext": [], "type": "", "features": [] };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			weather.getObservations("ASDF", function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getNearbyStations", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should return an array of nearby stations for a set of geo-coordinates", function(done){
			let expected = { "@oontext": [], "type": "", "features": [], "observationStations": [] };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			let point = {
				latitude: 43.06994,
				longitude: -89.414883
			};
			weather.getNearbyStations(point, function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});

	describe("getPoint", function(){
		beforeEach(function(){
			this.request = sinon.stub(https, "request");
		});
		afterEach(function(){
			https.request.restore();
		});
		it("should return a point object", function(done){
			let expected = { "@oontext": [], "type": "", "id": "",  "geometry": {}, "properties": {} };
			let response = new PassThrough();
			response.write(JSON.stringify(expected));
			response.end();

			let request = new PassThrough();
			this.request.callsArgWith(1, response).returns(request);

			let weather = new Weather("My API Key");
			let point = {
				latitude: 43.06994,
				longitude: -89.414883
			};
			weather.getPoint(point, function(err, result){
				result.should.deep.equal(expected);
				done();
			});
		});
	});
});
