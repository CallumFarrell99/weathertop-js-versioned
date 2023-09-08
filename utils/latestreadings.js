import { readingStore } from "../models/reading-store.js";
import { conversions } from "../utils/conversions.js";

export const latestReadings= async (id) => {
    let stationReadings = await readingStore.getReadingsByStationId(id);
    let latestReading = null;
    const reading = {
        latestConditions: null,
        conditionsIcon: null,
        latestTemp: null,
        latestTempFahrenheit: null,
        minTemp: null,
        maxTemp: null,
        latestWindSpeed: null,
        latestWindSpeedBft: null,
        minWindSpeed: null,
        maxWindSpeed: null,
        latestWindDirection: null,
        compassDirection: null,
        windChill: null,
        latestPressure: null,
        minPressure: null,
        maxPressure: null,
    };

    if (stationReadings.length > 0) {
        latestReading = stationReadings.length - 1;
        reading.latestConditions = conversions.conditions(stationReadings[latestReading].code);
        reading.conditionsIcon = conversions.conditionsIcon(stationReadings[latestReading].code);
        reading.latestTemp = stationReadings[latestReading].temp;
        reading.latestTempFahrenheit = conversions.celsiusToFahrenheit(reading.latestTemp);
        reading.minTemp = conversions.calculateMin(reading.latestTemp);
        reading.maxTemp = conversions.calculateMax(reading.latestTemp);
        reading.latestWindSpeed = stationReadings[latestReading].windSpeed;
        reading.latestWindSpeedBft = conversions.windSpeedToBeaufort(reading.latestWindSpeed);
        reading.minWindSpeed = conversions.calculateMin(reading.latestWindSpeed);
        reading.maxWindSpeed = conversions.calculateMax(reading.latestWindSpeed);
        reading.latestWindDirection = stationReadings[latestReading].windDirection;
        reading.compassDirection = conversions.compassDirection(reading.latestWindDirection);
        reading.windChill = conversions.windChill(reading.latestWindSpeed, reading.latestTemp);
        reading.latestPressure = stationReadings[latestReading].pressure;
        reading.minPressure = conversions.calculateMin(reading.latestPressure);
        reading.maxPressure = conversions.calculateMax(reading.latestPressure);
    }
    return {
        latestReading: latestReading,
        reading: reading,
    };
};