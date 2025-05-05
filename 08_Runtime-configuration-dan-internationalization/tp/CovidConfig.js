const fs = require("fs");

class CovidConfig {
    constructor(filePath = "covid_config.json") {
        this.filePath = filePath;
        this.defaultConfig = {
            satuan_suhu: "celcius",
            batas_hari_deman: 14,
            pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini",
        };
        this.config = this.loadConfig();
    }

    loadConfig() {
        if (!fs.existsSync(this.filePath)) {
            this.saveConfig(this.defaultConfig);
            return this.defaultConfig;
        }

        const data = fs.readFileSync(this.filePath, "utf8");
        return JSON.parse(data);
    }

    saveConfig(config) {
        fs.writeFileSync(this.filePath, JSON.stringify(config, null, 2));
    }

    ubahSatuan() {
        this.config.satuan_suhu =
            this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
        this.saveConfig(this.config);
    }
}

module.exports = CovidConfig;