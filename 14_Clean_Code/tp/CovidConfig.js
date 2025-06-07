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

    // Memuat konfigurasi dari file, jika tidak ada, buat default
    loadConfig() {
        if (!fs.existsSync(this.filePath)) {
            this.saveConfig(this.defaultConfig);
            return this.defaultConfig;
        }

        const rawData = fs.readFileSync(this.filePath, "utf8");
        return JSON.parse(rawData);
    }

    // Menyimpan konfigurasi ke file
    saveConfig(config) {
        fs.writeFileSync(this.filePath, JSON.stringify(config, null, 2));
    }

    // Mengubah satuan suhu dari celcius ke fahrenheit atau sebaliknya
    toggleTemperatureUnit() {
        this.config.satuan_suhu =
            this.config.satuan_suhu === "celcius" ? "fahrenheit" : "celcius";
        this.saveConfig(this.config);
    }
}

module.exports = CovidConfig;
