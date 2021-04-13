import https from "https";

let Weather = function(key){
	this.key = key;
};

Weather.prototype.getStations = function(callback){
	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/stations",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getStation = function(station, callback){
	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/stations/" + station,
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getCurrentConditions = function(station, callback){
	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/stations/" + station + "/observations/current",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getActiveAlerts = function(point, callback){
	point.latitude = Number(point.latitude).toFixed(4);
	point.longitude = Number(point.longitude).toFixed(4);

	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/alerts/?active=1&point=" + point.latitude + "," + point.longitude,
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getForecast = function(point, callback){
	point.latitude = Number(point.latitude).toFixed(4);
	point.longitude = Number(point.longitude).toFixed(4);

	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/points/" + point.latitude + "," + point.longitude + "/forecast",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getHourlyForecast = function(point, callback){
	point.latitude = Number(point.latitude).toFixed(4);
	point.longitude = Number(point.longitude).toFixed(4);

	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/points/" + point.latitude + "," + point.longitude + "/forecast/hourly",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getObservations = function(station, callback){
	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/stations/" + station + "/observations",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getNearbyStations = function(point, callback){
	point.latitude = Number(point.latitude).toFixed(4);
	point.longitude = Number(point.longitude).toFixed(4);

	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/points/" + point.latitude + "," + point.longitude + "/stations",
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

Weather.prototype.getPoint = function(point,callback){
	point.latitude = Number(point.latitude).toFixed(4);
	point.longitude = Number(point.longitude).toFixed(4);

	let options = {
		method: "GET",
		protocol: "https:",
		hostname: "api.weather.gov",
		path: "/points/" + point.latitude + "," + point.longitude,
		port: 443,
		/*This will change in the future when api.weather.gov switches to API keys.
		See https://forecast-v3.weather.gov/documentation?redirect=legacy */
		headers: {
			"user-agent": this.key,
			"accept": "application/geo+json"
		}
	};

	let req = https.request(options, function(response) {
		let data = "";
		response.on("data", function(chunk) {
			data += chunk;
		});

		response.on("end", function() {
			callback(null, JSON.parse(data));
		});
	});

	req.end();
};

export default Weather;
