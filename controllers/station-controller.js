import { stationStore } from "../models/station-store.js";
import { readingStore } from "../models/reading-store.js";
import { latestReadings } from "../utils/latestreadings.js";

export const stationController = {
    async index(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        let stationReadings = await latestReadings(request.params.id);
        const viewData = {
            title: "Station",
            station: station,
        };
        Object.assign(viewData, stationReadings.reading);
        response.render("station-view", viewData);
    },

    async addReading(request, response) {
        const station = await stationStore.getStationById(request.params.id);
        const newReading = {
            code: Number(request.body.code),
            temp: Number(request.body.temp),
            windSpeed: Number(request.body.windSpeed),
            windDirection: Number(request.body.windDirection),
            pressure: Number(request.body.pressure),
        };
        console.log(`adding reading ${newReading.code}`);
        await readingStore.addReading(station._id, newReading);
        response.redirect("/station/" + station._id);
    },
};