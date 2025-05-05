const readline = require("readline");
const CovidConfig = require("./CovidConfig");

const config = new CovidConfig();

config.ubahSatuan();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const satuan = config.config.satuan_suhu;
const batasHari = config.config.batas_hari_deman;

rl.question(
    `Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `,
    (suhuInput) => {
        rl.question(
            "Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ",
            (hariInput) => {
                const suhu = parseFloat(suhuInput);
                const hari = parseInt(hariInput);
                let suhuNormal = false;

                if (satuan === "celcius") {
                    suhuNormal = suhu >= 36.5 && suhu <= 37.5;
                } else if (satuan === "fahrenheit") {
                    suhuNormal = suhu >= 97.7 && suhu <= 99.5;
                }

                const demamNormal = hari < batasHari;

                if (suhuNormal && demamNormal) {
                    console.log(config.config.pesan_diterima);
                } else {
                    console.log(config.config.pesan_ditolak);
                }

                rl.close();
            }
        );
    }
);