const readline = require("readline");
const CovidConfig = require("./CovidConfig");

// Inisialisasi konfigurasi COVID
const covidConfig = new CovidConfig();

// Ganti satuan suhu secara otomatis (celcius ↔ fahrenheit)
covidConfig.toggleTemperatureUnit();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const temperatureUnit = covidConfig.config.satuan_suhu;
const feverDayLimit = covidConfig.config.batas_hari_deman;

// Tanya suhu badan pengguna
rl.question(
    `Berapa suhu badan Anda saat ini? Dalam nilai ${temperatureUnit}: `,
    (inputTemperature) => {
        rl.question(
            "Berapa hari yang lalu (perkiraan) Anda terakhir mengalami demam? ",
            (inputDay) => {
                const temperature = parseFloat(inputTemperature);
                const feverDaysAgo = parseInt(inputDay);

                let isNormalTemperature = false;

                if (temperatureUnit === "celcius") {
                    isNormalTemperature = temperature >= 36.5 && temperature <= 37.5;
                } else if (temperatureUnit === "fahrenheit") {
                    isNormalTemperature = temperature >= 97.7 && temperature <= 99.5;
                }

                const isFeverUnderLimit = feverDaysAgo < feverDayLimit;

                if (isNormalTemperature && isFeverUnderLimit) {
                    console.log(covidConfig.config.pesan_diterima);
                } else {
                    console.log(covidConfig.config.pesan_ditolak);
                }

                rl.close();
            }
        );
    }
);
