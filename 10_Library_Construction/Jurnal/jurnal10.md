<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL X**  
**LIBRARY CONSTRUCTION**

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

MEMBUAT PROJECT DAN CLASS LIBRARY
Buka IDE misalnya dengan Visual Studio
A. Misalnya menggunakan Visual Studio, buatlah solution baru dengan nama modul10_NIM yang berisi blank project.
B. Setelah itu, buatlah class library project di dalam solution tersebut. Langkah-langkah dengan Visual studio dapat dicek di link berikut: https://docs.microsoft.com/en-us/dotnet/core/tutorials/library-with-visual-studio?pivots=dotnet-6-0

## B. Soal Nomor 2

MEMBUAT LIBRARY MATEMATIKA
Buatlah suatu library bernama (namespace) MatematikaLibraries yang mempunyai beberapa
method sebagai berikut.
A. Mencari faktor persekutuan terbesar dari dua buah bilangan: int FPB(int input1, int input2)
Contoh pemanggilan:
FPB(60, 45)
Output: 15
B. Mencari kelipatan persekutuan terkecil dari dua buah bilangan: int KPK(int input1, int input2)
Contoh pemanggilan:
KPK(12, 8)
Output: 24
C. Mendapatkan hasil turunan dari persamaan sederhana: string Turunan(int[] persamaan)
Contohnya untuk persamaan x3 + 4x2 -12x+9 maka turunannya adalah 3x2 + 8x -12
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Turunan({1, 4, -12, 9})
Output: “3x2 + 8x - 12”
D. Mendapatkan hasil integral dari persamaan sederhana: string Integral(int[] persamaan)
Contohnya untuk persamaan 4x3 + 6x2 – 12x +9 maka hasilnya x4 + 2x3 – 6x2 + 9x + C
Proses pemanggilan dari fungsi ini adalah sebagai berikut:
Integral({4, 6, -12, 9})
Output: “x4 + 2x3 – 6x2 + 9x + C”

## C. Soal Nomor 3

MEMANGGIL LIBRARY DI FUNGSI UTAMA
Setelah library selesai dibuat:
A. Buatlah sebuah console application project baru yang memanggil semua fungsi di library MatematikaLibraries sebelumnya.
B. Catatan: pada pengerjaan modul ini diminta untuk memanfaatkan Class Library dan menambahkan library MatematikaLibraries. Misalnya dengan Visual Studio dapat dilakukan dengan cara menambahkannya di Project Reference (dependencies) untuk console project yang baru dibuat.

## Input

- matematikaLibraries.js

  ```js
  
    const MatematikaLibraries = {
    FPB: function (a, b) {
        while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
        }
        return Math.abs(a);
    },

    KPK: function (a, b) {
        return Math.abs(a * b) / this.FPB(a, b);
    },

    Turunan: function (persamaan) {
        let hasil = '';
        let pangkat = persamaan.length - 1;

        for (let i = 0; i < persamaan.length - 1; i++) {
        let koef = persamaan[i];
        let turunan = koef * pangkat;

        if (turunan === 0) {
            pangkat--;
            continue;
        }

        if (hasil !== '' && turunan > 0) {
            hasil += ' + ';
        } else if (turunan < 0) {
            hasil += ' - ';
        }

        hasil += Math.abs(turunan);
        if (pangkat - 1 > 1) {
            hasil += `x${pangkat - 1}`;
        } else if (pangkat - 1 === 1) {
            hasil += 'x';
        }

        pangkat--;
        }

        return hasil.trim();
    },

    Integral: function (persamaan) {
        let hasil = '';
        let pangkat = persamaan.length - 1;

        for (let i = 0; i < persamaan.length; i++) {
        let koef = persamaan[i];
        let pangkatBaru = pangkat + 1;
        let hasilKoef = koef / pangkatBaru;

        if (hasil !== '' && hasilKoef > 0) {
            hasil += ' + ';
        } else if (hasilKoef < 0) {
            hasil += ' - ';
        }

        hasil += Math.abs(hasilKoef) === 1 ? '' : Math.abs(hasilKoef).toFixed(1).replace(/\.0$/, '');
        if (pangkatBaru === 1) {
            hasil += 'x';
        } else if (pangkatBaru > 1) {
            hasil += `x${pangkatBaru}`;
        }

        pangkat--;
        }

        hasil += ' + C';
        return hasil.trim();
    }
    };

    module.exports = MatematikaLibraries;
  ```

- index.js

  ```js
    const Matematika = require('./matematika');

    console.log("FPB(60, 45) =", Matematika.FPB(60, 45));       
    console.log("KPK(12, 8) =", Matematika.KPK(12, 8));           

    console.log("Turunan dari [1, 4, -12, 9]:", Matematika.Turunan([1, 4, -12, 9]));

    console.log("Integral dari [4, 6, -12, 9]:", Matematika.Integral([4, 6, -12, 9]));
  ```

## Output

```bash
Naufal@Naufal-Ananta MINGW64 /e/smester6/praktikum_KPL/10_Library_Construction/Jurnal (main)
$ node index.js
FPB(60, 45) = 15
KPK(12, 8) = 24
Turunan dari [1, 4, -12, 9]: 3x2 + 8x - 12
Integral dari [4, 6, -12, 9]: x4 + 2x3 - 6x2 + 9x + C
```

---