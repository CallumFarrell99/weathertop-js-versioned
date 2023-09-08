export const conversions = {

  celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return Math.round(fahrenheit * 100.0) / 100.0;
  },

  windSpeedToBeaufort(windSpeed) {
    let beaufort = 0;

    if (windSpeed == 1) {
      beaufort = 0;
    } else if (windSpeed > 1 && windSpeed <= 5) {
      beaufort = 1;
    } else if (windSpeed > 5 && windSpeed <= 11) {
      beaufort = 2;
    } else if (windSpeed > 11 && windSpeed <= 19) {
      beaufort = 3;
    } else if (windSpeed > 19 && windSpeed <= 28) {
      beaufort = 4;
    } else if (windSpeed > 28 && windSpeed <= 38) {
      beaufort = 5;
    } else if (windSpeed > 38 && windSpeed <= 49) {
      beaufort = 6;
    } else if (windSpeed > 49 && windSpeed <= 61) {
      beaufort = 7;
    } else if (windSpeed > 61 && windSpeed <= 74) {
      beaufort = 8;
    } else if (windSpeed > 74 && windSpeed <= 88) {
      beaufort = 9;
    } else if (windSpeed > 88 && windSpeed <= 102) {
      beaufort = 10;
    } else if (windSpeed > 102 && windSpeed <= 117) {
      beaufort = 11;
    }
    return beaufort;
  },

  conditions(code) {
    let conditions = null;

    if (code == 100) {
      conditions = "Clear";
    } else if (code == 200) {
      conditions = "Partial Clouds";
    } else if (code == 300) {
      conditions = "Cloudy";
    } else if (code == 400) {
      conditions = "Light Showers";
    } else if (code == 500) {
      conditions = "Heavy Showers";
    } else if (code == 600) {
      conditions = "Rain";
    } else if (code == 700) {
      conditions = "Snow";
    } else if (code == 800) {
      conditions = "Thunder";
    } else {
      conditions = "Invalid Code";
    }
    return conditions;
  },

  conditionsIcon(code) {
    let conditionsIcon = null;

    if (code == 100) {
      conditionsIcon = "fas fa-solid fa-sun fa-2xl";
    } else if (code == 200) {
      conditionsIcon = "fas fa-solid fa-cloud-sun fa-2xl";
    } else if (code == 300) {
      conditionsIcon = "fas fa-solid fa-cloud fa-2xl";
    } else if (code == 400) {
      conditionsIcon = "fas fa-solid fa-cloud-showers-water fa-2xl";
    } else if (code == 500) {
      conditionsIcon = "fas fa-solid fa-cloud-showers-heavy fa-2xl";
    } else if (code == 600) {
      conditionsIcon = "fas fa-solid fa-cloud-rain fa-2xl";
    } else if (code == 700) {
      conditionsIcon = "fas fa-solid fa-snowflake fa-2xl";
    } else if (code == 800) {
      conditionsIcon = "fas fa-solid fa-cloud-bolt fa-2xl";
    } else {
      conditionsIcon = "fas fa-solid fa-bug fa-2xl";
    }
    return conditionsIcon;
  },

  compassDirection(windDirection) {
    let compassDirection = null;

    if (windDirection > 11.25 && windDirection <= 33.75) {
      compassDirection = "North North East";
    } else if (windDirection > 33.75 && windDirection <= 56.25) {
      compassDirection = "North East";
    } else if (windDirection > 56.25 && windDirection <= 78.75) {
      compassDirection = "East North East";
    } else if (windDirection > 78.75 && windDirection <= 101.25) {
      compassDirection = "East";
    } else if (windDirection > 101.25 && windDirection <= 123.75) {
      compassDirection = "East South East";
    } else if (windDirection > 123.75 && windDirection <= 146.25) {
      compassDirection = "South East";
    } else if (windDirection > 146.25 && windDirection <= 168.75) {
      compassDirection = "South South East";
    } else if (windDirection > 168.75 && windDirection <= 191.25) {
      compassDirection = "South";
    } else if (windDirection > 191.25 && windDirection <= 213.75) {
      compassDirection = "South South West";
    } else if (windDirection > 213.75 && windDirection <= 236.25) {
      compassDirection = "South West";
    } else if (windDirection > 236.25 && windDirection <= 258.75) {
      compassDirection = "West South West";
    } else if (windDirection > 258.75 && windDirection <= 281.25) {
      compassDirection = "West";
    } else if (windDirection > 281.25 && windDirection <= 303.75) {
      compassDirection = "West North West";
    } else if (windDirection > 303.75 && windDirection <= 326.25) {
      compassDirection = "North West";
    } else if (windDirection > 326.25 && windDirection <= 348.75) {
      compassDirection = "North North West";
    } else if (windDirection > 348.75 && windDirection <= 360.00
      || windDirection >= 0.00 && windDirection <= 11.25) {
      compassDirection = "North";
    } else {
      compassDirection = "Invalid Wind Direction";
    }
    return compassDirection;
  },

  windChill(windSpeed, temperature) {
    let windChill = 0;

    windChill = 13.12 + (0.6215 * temperature) - 11.37 * Math.pow(windSpeed, 0.16) + (0.3965 * temperature);

    return Math.round(windChill * 100.00) / 100.0;
  },

  calculateMin(reading) {
    let minimum = reading - (reading * .2);
    return Math.round(minimum * 100.0) / 100.0;
  },

  calculateMax(reading) {
    let maximum = reading + (reading * .2);
    return Math.round(maximum * 100.0) / 100.0;
  },
};