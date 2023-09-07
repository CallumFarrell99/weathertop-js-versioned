import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import { latestReadings } from "../utils/latestreadings.js";

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      station: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    for (const station of viewData.station) {
      const lastReading = await latestReadings(station._id);
      Object.assign(station, lastReading.reading);
    }
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      name: request.body.name,
      latitude: Number(request.body.latitude),
      longitude: Number(request.body.longitude),
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.name}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  }
};
