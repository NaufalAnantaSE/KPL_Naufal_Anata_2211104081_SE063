
const fs = require("fs");

class BankTransferConfig {
    constructor(filePath = "bank_transfer_config.json") {
        this.filePath = filePath;
        this.defaultConfig = {
            lang: "en",
            transfer: {
                threshold: 25000000,
                low_fee: 6500,
                high_fee: 15000,
            },
            methods: ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
            confirmation: {
                en: "yes",
                id: "ya",
            },
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
}

module.exports = BankTransferConfig;
