# Weather
A simple, lightweight Node wrapper for fetching weather information from NOAA API.

## Usage
First, create a new `Weather` object

```
let weather = new Weather("Your API Key");
```

Each method on the `Weather` object accepts a callback function as the final argument. The callback function takes a single argument, which is the data returned from NOAA.

The `Weather` object has the following methods:

```
	// Get Stations collecting data
	getStations(callback)
	
	// Get an individual station by its ID
	getStation(station, callback)
	
	// Get the current conditions at a station
	getCurrentConditions(station, callback)
	getActiveAlerts(point, callback)
	
	getForecast(point, callback)
	getHourlyForecast(point, callback)
	getObservations(station, callback)
	getNearbyStations(point, callback)
	getPoint(point, callback)
```

## Examples

To get a list of stations

```
	let weather = new Weather("Your API Key");
	
	weather.getStations((data) => {
		console.log(data);
	});
```

To get the current conditions at a station

```
	let weather = new Weather("Your API Key");
	
	weather.getCurrentConditions("WBAN", (data) => {
		console.log(data);
	});
```

To get stations near a geocoordinate point

```
	let weather = new Weather("Your API Key");
	let point = {
		latitude: 40.63915, 
		longitude: -73.76401
	};
	
	weather.getNearbyStations(point, (data) => {
		console.log(data);
	});
```
