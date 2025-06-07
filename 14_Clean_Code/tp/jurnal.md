<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL 14**  
**Refactoring dan Penerapan Standar Kode pada Project JavaScript**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**Naufal Ananta (2211104081)**  
**SE-06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

## A. Soal Nomor 1
1. MEMBUAT PROJECT MODUL
Buka IDE misalnya dengan Visual Studio
A. Copy salah satu folder tugas pendahuluan yang dimiliki sebelumnya (dari modul 2 sampai modul
10), kemudian rename folder hasil copy-paste tersebut dengan tpmodul14_NIM (coba pilih tugas
pendahuluan yang paling sederhana)
B. Misalnya menggunakan Visual Studio, bukalah project/folder yang di-copy sebelumnya.
## B. Soal Nomor 2
2. REFACTORING DENGAN STANDAR CODE
Dengan mengikuti standard code yang digunakan (misal C# dengan standar dari .NET), pastikan kode yang
dikumpulkan memenuhi faktor-faktor berikut:
A. Naming convention
i. Variable / Property / Attribute
ii. Method / Function / Procedure
B. White space dan indentation
C. Variable / attribute declarations
D. Comments



## Input

- index.js

```js
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

```

- CovidConfig.js

```js
/const fs = require("fs");

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

```
Refactoring dan penerapan standar kode sangat penting untuk menjaga kualitas dan keberlanjutan program. Praktikum ini membantu mahasiswa memahami pentingnya struktur kode yang baik dan meningkatkan keterampilan menulis kode yang rapi serta profesional.

## Output
![alt text](image.png)

---
