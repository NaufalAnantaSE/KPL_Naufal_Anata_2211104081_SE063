<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL 13**  
**Design Pattern Implementation**

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

A. MEMBUAT PROJECT GUI BARU
Buka IDE misalnya dengan Visual Studio
A. Misalnya menggunakan Visual Studio, buatlah project baru dengan nama modul13_NIM
B. Project yang dibuat bisa berupa console atau sejenisnya
## B. Soal Nomor 2

B. MENJELASKAN DESIGN PATTERN SINGLETON
Buka halaman web https://refactoring.guru/design-patterns/catalog kemudian baca design pattern
dengan nama “Singleton”, dan jawab pertanyaan berikut ini (dalam Bahasa Indonesia):
A. Berikan salah dua contoh kondisi dimana design pattern “Singleton” dapat digunakan.
B. Berikan penjelasan singkat mengenai langkah-langkah dalam mengimplementasikan design
pattern “Singleton”.
C. Berikan tiga kelebihan dan kekurangan dari design pattern “Singleton”.

## Input

- index.html

```js
const ManajerData = require('./ManajerDataSingleton');
const dataA = ManajerData.getInstance();
const dataB = ManajerData.getInstance();

dataA.tambahData("Naufal - Anggota");
dataA.tambahData("irpan - Anggota");
dataA.tambahData("Faisal - Asisten");

console.log("\n🔍 Menampilkan data dari dataB:");
dataB.tampilkanSemuaData();

dataB.hapusDataBerdasarkanIndex(2);

console.log("\n🧾 Menampilkan ulang data dari dataA setelah penghapusan:");
dataA.tampilkanSemuaData();

console.log(`\n📊 Jumlah data pada dataA: ${dataA.ambilSemuaData().length}`);
console.log(`📊 Jumlah data pada dataB: ${dataB.ambilSemuaData().length}`);


```

- ManajerDataSingleton.js

```js
class ManajerDataSingleton {
    constructor() {
        if (ManajerDataSingleton.instance) {
            throw new Error("Gunakan getInstance() untuk mengakses singleton.");
        }

        this.kumpulanData = [];
        ManajerDataSingleton.instance = this;
    }

    static getInstance() {
        if (!ManajerDataSingleton.instance) {
            new ManajerDataSingleton();
        }
        return ManajerDataSingleton.instance;
    }

    tambahData(nama) {
        this.kumpulanData.push(nama);
    }

    hapusDataBerdasarkanIndex(index) {
        if (index >= 0 && index < this.kumpulanData.length) {
            this.kumpulanData.splice(index, 1);
        } else {
            console.log("Index tidak ditemukan!");
        }
    }

    tampilkanSemuaData() {
        console.log("📦 Isi data saat ini:");
        this.kumpulanData.forEach((data, i) => {
            console.log(`${i}. ${data}`);
        });
    }

    ambilSemuaData() {
        return this.kumpulanData;
    }
}

module.exports = ManajerDataSingleton;


```

## Output
![image](https://github.com/user-attachments/assets/938b56a2-9450-4c27-9d8b-50e40953c1a6)

---
