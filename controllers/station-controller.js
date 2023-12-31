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
        const date = new Date();
        let dateString = date.toLocaleString('en-GB');
        const newReading = {
            timeStamp: String(dateString),
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

    async deleteReading(request, response) {
        const stationId = request.params.stationid;
        const readingId = request.params.readingid;
        console.log(`Deleting reading ${readingId} from Station ${stationId}`);
        await readingStore.deleteReading(request.params.readingId);
        response.redirect("/station/" + stationId);
    },
};