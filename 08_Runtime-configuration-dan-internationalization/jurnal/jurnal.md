<div align="center">

**TUGAS JURNAL**  
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

# TUGAS JURNAL

## A. Soal Nomor 1

IMPLEMENTASI RUNTIME CONFIGURATION
Dari master/main branch dan class utama, buatlah implementasi program yang memanfaatkan teknik Runtime Configuration dengan spesifikasi sebagai berikut ini:
A. Tambahkan class baru untuk memproses file konfigurasi dengan nama “BankTransferConfig”.
B. File konfigurasi yang digunakan adalah “bank_transfer_config.json” dengan format sebagai berikut ini:

```json
{
    "lang": "CONFIG1",
    "transfer": {
        "threshold": "CONFIG2",
        "low_fee": "CONFIG3",
        "high_fee": "CONFIG4"
    },
    "methods": "CONFIG5",
    "confirmation": {
        "en": "CONFIG6",
        "id": "CONFIG7"
    }
}
```

C. Nilai default yang digunakan apabila file config masih belum ada yaitu:

i. CONFIG1 => “en”
ii. CONFIG2 => 25000000
iii. CONFIG3 => 6500
iv. CONFIG4 => 15000
v. CONFIG5 => [ “RTO (real-time)”, “SKN”, “RTGS”, “BI FAST” ]
vi. CONFIG6 => “yes”
vii. CONFIG7 => “ya”

D. Aplikasi (program utama) memiliki alur atau fungsi sebagai berikut (yang menggunakan class config “BankTransferConfig”):

i. Pada saat program dijalankan program akan menampilkan pesan sebagai berikut tergantung nilai dari CONFIG1 atau JSON untuk key “lang”:

1. CONFIG1 == “en” => “Please insert the amount of money to transfer:”
2. CONFIG1 == “id” => “Masukkan jumlah uang yang akan di-transfer:”

ii. Setelah itu aplikasi akan menampilkan biaya transfer dan total biaya yang akan dibayarkan dengan ketentuan sebagai berikut:

1. Apabila jumlah yang yang di-transfer pada bagian sebelumnya (D-i) kurang dari atau sama dengan nilai CONFIG2 atau “threshold”, maka biaya transfer adalah CONFIG3 atau “low_fee”. Akan tetapi jika lebih dari “threshold”, maka biaya transfer diambil dari nilai CONFIG4 atau “high_fee”.
2. Total biaya yang perlu dibayarkan adalah hasil penjumlahan dari jumlah uang yang akan ditransfer dan biaya transfer.
3. Pesan output apabila CONFIG1 atau “lang” bernilai “en” adalah “Transfer fee = <biaya_transfer>” dan “Total amount = <nominal_transfer + biaya_transfer>.
4. Pesan output apabila CONFIG1 atau “lang” bernilai “id” adalah “Biaya transfer = <biaya_transfer>” dan “Total biaya = <nominal_transfer + biaya_transfer>.

iii. Setelah itu aplikasi akan menampilkan pesan yang bergantung dari bahasa yang dipilih di konfigurasi:

1. EN =>” Select transfer method:”
2. ID => “Pilih metode transfer:”

iv. Kemudian juga akan dilakukan print dengan numbering untuk setiap string yang ada di JSON untuk key “methods” atau CONFIG5. Contoh output (dari nilai default):

1. RTO (real-time)
2. SKN
3. RTGS
4. BI FAST

v. Setelah menerima input pada pertanyaan sebelumnya, aplikasi akan bertanya satu pertanyaan terakhir dengan isi yang bergantung dari nilai “lang” dan “confirmation”

1. EN => Please type "<CONFIG6>" to confirm the transaction:
2. ID => Ketik "<CONFIG7>" untuk mengkonfirmasi transaksi:

vi. Apabila input dari user sesuai dengan CONFIG6 atau CONFIG7 (tergantung nilai “lang”), maka:

1. EN => The transfer is completed
2. ID => Proses transfer berhasil

vii. Tetapi jika input dari user tidak sesuai, maka:

1. EN => Transfer is cancelled
2. ID => Transfer dibatalkan

E. Ubah nilai default pada json file “bank_transfer_config.json” dengan nilai yang berbeda dan tunjukkan ke asisten praktikum hasil run dari aplikasi.

**Input**

- bank_transfer_config

```json
{
  "lang": "en",
  "transfer": {
    "threshold": 25000000,
    "low_fee": 6500,
    "high_fee": 15000
  },
  "methods": ["RTO (real-time)", "SKN", "RTGS", "BI FAST"],
  "confirmation": {
    "en": "yes",
    "id": "ya"
  }
}
```

- BankTransferConfig

```js
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
```

- index

```js
const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");
const config = new BankTransferConfig().config;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lang = config.lang;
const threshold = config.transfer.threshold;
const lowFee = config.transfer.low_fee;
const highFee = config.transfer.high_fee;
const methods = config.methods;
const confirmation = config.confirmation;

const ask = (question) =>
  new Promise((resolve) => rl.question(question, resolve));

(async function main() {
  const askAmount =
    lang === "en"
      ? "Please insert the amount of money to transfer: "
      : "Masukkan jumlah uang yang akan di-transfer: ";

  const amountStr = await ask(askAmount);
  const amount = parseInt(amountStr);

  const fee = amount <= threshold ? lowFee : highFee;
  const total = amount + fee;

  if (lang === "en") {
    console.log(`Transfer fee = ${fee}`);
    console.log(`Total amount = ${total}`);
  } else {
    console.log(`Biaya transfer = ${fee}`);
    console.log(`Total biaya = ${total}`);
  }

  const methodPrompt =
    lang === "en" ? "Select transfer method:" : "Pilih metode transfer:";
  console.log(methodPrompt);
  methods.forEach((method, i) => {
    console.log(`${i + 1}. ${method}`);
  });

  await ask("> ");

  const confirmPrompt =
    lang === "en"
      ? `Please type "${confirmation.en}" to confirm the transaction: `
      : `Ketik "${confirmation.id}" untuk mengkonfirmasi transaksi: `;

  const userConfirm = await ask(confirmPrompt);
  const validConfirm =
    lang === "en"
      ? userConfirm.toLowerCase() === confirmation.en.toLowerCase()
      : userConfirm.toLowerCase() === confirmation.id.toLowerCase();

  if (validConfirm) {
    console.log(
      lang === "en" ? "The transfer is completed" : "Proses transfer berhasil"
    );
  } else {
    console.log(
      lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan"
    );
  }

  rl.close();
})();
```

**Output**



---