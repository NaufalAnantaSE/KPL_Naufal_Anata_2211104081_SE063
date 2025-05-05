<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VIII**  
**RUNTIME CONFIGURATION & INTERNATIONALIZATION**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**Naufal Ananta (2211104081)**  
**SE06-03**

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

# TUGAS PENDAHULUAN

## A. Soal Nomor 1

IMPLEMENTASI RUNTIME CONFIGURATION
Dari master/main branch dan class utama, buatlah implementasi program yang memanfaatkan teknik Runtime Configuration dengan spesifikasi sebagai berikut ini:
- Tambahkan class baru untuk memproses file konfigurasi dengan nama “CovidConfig”.
- File konfigurasi yang digunakan adalah “covid_config.json” dengan format sebagai berikut:
```json
    {
    "satuan_suhu": "CONFIG1",
    "batas_hari_deman": "CONFIG2",
    "pesan_ditolak": "CONFIG3",
    "pesan_diterima": "CONFIG4"
    }
```
- Nilai default yang digunakan apabila file config masih belum ada yaitu:
    - CONFIG1 => “celcius”
    - CONFIG2 => 14
    - CONFIG3 => “Anda tidak diperbolehkan masuk ke dalam gedung ini”
    - CONFIG4 => “Anda dipersilahkan untuk masuk ke dalam gedung ini”
- Aplikasi (program utama) menerima dua input dari user:
    - Input pertama didapatkan dengan menampilkan pertanyaan: “Berapa suhu badan anda saat ini? Dalam nilai <CONFIG1>”
    - Input kedua didapatkan dengan menampilkan pertanyaan: “Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ”
- Apabila kondisi di bawah ini di sesuai maka aplikasi akan mengeluarkan output dari nilai CONFIG4 atau nilai JSON untuk key “pesan_diterima”, dan menampilkan CONFIG3 atau nilai JSON untuk key “pesan_ditolak” jika kedua kondisi di bawah ini tidak sesuai:
    - Pada saat CONFIG1 bernilai “celcius” maka input pertama di bagian C harus dalam range nilai 36,5 sampai 37,5 derajat, dan jika CONFIG1 bernilai “fahrenheit” maka input pertama harus dalam range nilai 97,7 sampai dengan 99,5 derajat.
    - Nilai dari input kedua di bagian C harus kurang dari nilai CONFIG2.
- Pada class “CovidConfig” tambahkan juga satu method bernama “UbahSatuan” selain method - method utama pada teknik runtime configuration. Method ini dapat digunakan untuk mengganti CONFIG1 dari “celcius” ke “fahrenheit" dan sebaliknya.
- Pada program utama panggil pergantian satuan dengan memanggil method “UbahSatuan”. Jalankan program utama dan tunjukkan ke asisten praktikum.

**Input**

- covid_config

```json
{
  "satuan_suhu": "fahrenheit",
  "batas_hari_deman": 14,
  "pesan_ditolak": "Anda tidak diperbolehkan masuk ke dalam gedung ini",
  "pesan_diterima": "Anda dipersilahkan untuk masuk ke dalam gedung ini"
}
```

- CovidConfig

```js
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
```

- index

```js
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
```

**Output**



---