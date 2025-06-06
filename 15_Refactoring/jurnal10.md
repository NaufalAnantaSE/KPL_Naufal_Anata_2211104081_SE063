<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**JURNAL MODUL 15**  
**REFACTORING**

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
Buka IDE misalnya dengan Visual Studio
A. Copy salah satu folder tugas jurnal yang dimiliki sebelumnya (dari modul 2 sampai modul 13),
kemudian rename folder hasil copy-paste tersebut dengan modul15_NIM (coba pilih tugas
pendahuluan yang paling sederhana)
B. Misalnya menggunakan Visual Studio, bukalah project/folder yang di-copy sebelumnya.

## B. Soal Nomor 2
Buatlah aplikasi desktop dengan fitur:

1. Registrasi user dengan input username dan password
2. Penyimpanan data user pada file json
3. Login user

Dengan mengikuti Secure Coding Practices yang memenuhi faktor-faktor berikut:
A. Input Validation (wajib mengimplementasikan salah satu, diizinkan lebih)
i. Validasi range data
Range data input harus dibatasi dan ditetapkan. Contoh:
o Hanya boleh huruf alfabet ASCII
o Harus mengandung angka
ii. Validasi panjang data
Panjang atau ukuran data harus dibatasi dan ditetapkan. Contoh:
o Minimal 8 karakter
o Maksimal 20 karakter
iii. Handling data invalid
Data yang tidak valid harus ditolak atau dihandle dengan jelas (jangan dibiarkan menjadi
runtime error yang tidak dihandle). Contoh:
o Jika terdapat aturan minimal 8 karakter input, input di bawah 8 karakter harus ditolak atau
dihandle dengan spesifik
o Jika terdapat aturan hanya boleh huruf alfabet ASCII, input dengan karakter selain alfabet
ASCII harus ditolak atau dihandle dengan spesifik
B. Password Management (wajib mengimplementasikan salah satu, diizinkan lebih)
i. Password hashing
Ketika sistem menyimpan password, password harus dienkripsi atau dihash. Contoh:
o Sistem mengenkripsi password dengan metode hash SHA256
o Sistem mengubah password dengan konsisten supaya tidak sama persis dengan inputan
user
ii. Password rules
Ketika sistem harus menerima inputan password, harus ada aturan keamanan untuk
password tersebut. Contoh:
o Password harus mengandung minimal 1 karakter unik (!@#$%^&*)
o Password tidak boleh mengandung kata dari username

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