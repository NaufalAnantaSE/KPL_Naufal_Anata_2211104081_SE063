<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL V**  
**GENERICS**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**Naufal Ananta (2211104081)**  
**SE-06-02**

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

Menambahkan method dengan generic tanpa membuat file baru (gunakan file yang dibuat saat membuat project):
---
- Buatlah sebuah class bernama “Penjumlahan”.
- Pada class tersebut, tambahkan sebuah method dengan nama “JumlahTigaAngka” yang
memiliki tiga parameter generic yang sama yaitu “T”
- Method tersebut dapat melakukan penjumalahan dari tiga input/argument yang diberikan pada
method tersebut.
- Hint: gunakan variable sementara dengan tipe data dynamic untuk memungkinkan operasi
matematis misalnya penjumlahan.
- Panggil method tersebut pada fungsi/method utama dengan tiga input angka yaitu 2-digit dari
NIM. Misalnya NIM 12345678, maka tiga input angka yaitu “12”, “34” dan “56” dengan tipe data
sebagai berikut:
    * NIM berakhiran 1 atau 2: tipe data input float
    * NIM berakhiran 3, 4 atau 5: tipe data input double
    * NIM berakhiran 6, 7 atau 8: tipe data input int
    * NIM berakhiran 9 atau 0: tipe data input long

**Input**

- penjumlahan

  ```js
  class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        return Number(a) + Number(b) + Number(c);
    }
    }

    function main() {
    const nim = 2211104081;

    const nimStr = nim.toString();
    const firstTwoDigits = parseInt(nimStr.slice(0, 2));   
    const secondTwoDigits = parseInt(nimStr.slice(2, 4));  
    const thirdTwoDigits = parseInt(nimStr.slice(4, 6));   

    const lastDigit = nim % 10;
    let result;

    if (lastDigit === 1 || lastDigit === 2) {
        // float
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = result.toFixed(2);
        console.log(`Tipe: float`);
    } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = result.toFixed(5);
        console.log(`Tipe: double`);
    } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = Math.floor(result);
        console.log(`Tipe: int`);
    } else if (lastDigit === 9 || lastDigit === 0) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = Math.floor(result);
        console.log(`Tipe: long`);
    }

    console.log(`Hasil penjumlahan: ${result}`);
    }

    main();
     ```

## B. Soal Nomor 2

Menambahkan method dengan generic tanpa membuat file baru (gunakan file yang dibuat saat membuat project dan pastikan branch
aktif adalah pada branch implementasi-generic-class):
---

A. Buatlah sebuah class bernama “SimpleDataBase” dengan mengikuti class model yang
ditunjukkan pada gambar/tabel di bawah ini.
-----
* (-) storedData: List (T)
* (-) inputDates: List (Date)

* (+) SimpleDataBase()
* (+) AddNewData(T)
* (+) PrintAllData(): void

B. Class tersebut memiliki dua property yaitu:
----
- Property “storedData” yang merupakan suatu List (struktur data bawaan/default) yang
berisi data bertipe generic “T”.
- Property “inputDates” yang bertipe List<Date> (atau tipe data List<DateTime> di C#) yang
akan list dari waktu input.
C. Class tersebut juga memiliki beberapa method yaitu:
--
- Konstruktor SimpleDataBase() yang akan membuat property “storedData” berisi List
kosong.
- Method AddNewData(T) yang akan menambahkan data baru bertipe T ke dalam list
“storedData” dan waktu saat itu (Now) ke dalam list “inputDates”.
- Method PrintAllData() yang akan memberikan output console berupa teks yang
menampilkan seluruh data yang tersimpan pada “storedData” dan “inputDates”, contohnya:

        • Data 1 berisi: 12, yang disimpan pada waktu UTC: 3/10/2022 5:32:01 AM

        • Data 2 berisi: 34, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM

        • Data 2 berisi: 56, yang disimpan pada waktu UTC: 3/10/2022 5:32:02 AM
- Panggil method PrintAllData() pada fungsi/method utama setelah menambahkan

**Input**

- simpleDatabase

  ```js
  class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }

    AddNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date());
    }

    PrintAllData() {
      this.storedData.forEach((data, index) => {
        console.log(
          `Data ${
            index + 1
          } berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[
            index
          ].toUTCString()}`
        );
      });
    }
  }

  function main() {
    const db = new SimpleDataBase();

    db.AddNewData(23);
    db.AddNewData(19);
    db.AddNewData(24);

    db.PrintAllData();
  }

  main();
  ```

**Output**

![Image](https://github.com/user-attachments/assets/bb9aee24-48a9-4886-9a46-4fe0b1861fe6)

---