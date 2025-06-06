<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL 12**  
**Performance Analysis Unit Testing dan Debugging**

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
A. Misalnya menggunakan Visual Studio, buatlah project baru dengan nama modul12_NIM
B. Pastikan project yang dibuat dapat menggunakan GUI (misalnya tipe Windows Form pada
Visual Studio).
## B. Soal Nomor 2

B. MEMBUAT GUI SEDERHANA DAN
Pada project yang telah dibuat sebelumnya:
A. Buatlah suatu Form atau tampilan GUI sederhana dengan dua buah textbox, satu button dan
satu label untuk menampilkan output.
B. Tambahkan satu method dengan nama “CariNilaiPangkat(int a, int b)” yang menerima dua input
dan mengembalikan nilai berupa hasil pangkat ab dengan melakukan iterasi (tanpa
menggunakan library atau fungsi bawaan).
C. Pada method tersebut terdapat aturan sebagai berikut (berbeda dengan aturan pangkat
normal):
i. Apabila input b adalah 0 maka nilai return selalu 1 (walapuun nilai a adalah 0)
ii. Apabila input b adalah bilangan negatif, maka nilai return adalah -1
iii. Apabila input b lebih dari 10 atau input a lebih dari 100 maka nilai return adalah -2
iv. Apabila hasil pangkat melebihi batas maksimal bilangan positif integer (misal dengan
checked pada C#) maka nilai return adalah -3
D. Pada tampilan GUI, pada saat tombol ditekan, maka label output akan menampilkan hasil
pangkat dari pemanggilan fungsi “CariNilaiPangkat” dari dua input textbox.

## C. Soal Nomor 3
Jalankan project yang dibuat sebelumnya dan jalankan profiling tools (misal dari visual studio, task
manager atau sejenisnya):
A. Pada saat program berjalan, catat dan amati CPU usage dari aplikasi yang sedang berjalan tanpa
melakukan input apapun.
B. Pada saat program berjalan, catat dan amati memory usage dari aplikasi yang sedang berjalan
tanpa melakukan input apapun.
C. Tambahkan input “3” pada textbox pertama dan “19” pada textbox ketiga, dan tekan tombol
button dan catat dan amati memory usage dari aplikasi.
D. Laporkan apakah terdapat perubahan pada CPU usage dan memory (apabila tidak ada
perubahan juga perlu dilaporkan di file docx).
E. Lakukan lagi experimen dengan input pertama yaitu “9” dan angka kedua yaitu “30”, laporkan
apakah terdapat perubahan di CPU usage dan memory.

## D. Soal Nomor 4
Di dalam project yang sama:
A. Buatlah kode unit test untuk menguji method “CariNilaiPangkat” yang dibuat sebelumnya.
B. Pastikan kode unit test tersebut memiliki branch coverage yang baik untuk method
“CariNilaiPangkat”.
C. Jalankan kode unit test yang dibuat dan lampirkan hasil unit testing yang dilakukan.

## E. Soal Nomor 5
Sebelum pengumpulan, praktikan wajib menunjukkan hasil run via share screen ke asprak. Kumpulkan
semua file berikut dalam bentuk file zip/rar/7zip:
A. Source code dari project yang dibuat
B. File docx/pdf yang berisi:
i. Screenshot hasil run
ii. Penjelasan singkat dari kode implementasi yang dibuat (beserta screenshot dari potongan
source code yang dijelaskan).


## Input

- index.html

```html
  
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Modul 12 - Pangkat</title>
</head>
<body>
  <h2>Perhitungan Pangkat Khusus</h2>
  <input type="number" id="base" placeholder="Angka a" />
  <input type="number" id="exponent" placeholder="Angka b" />
  <button onclick="hitungPangkat()">Hitung Pangkat</button>
  <p id="output"></p>

  <script src="logic.js"></script>
</body>
</html>

```

- logic.js

  ```js
    function CariNilaiPangkat(a, b) {
    if (b === 0) {
        return 1;
    }
    if (b < 0) {
        return -1;
    }
    if (b > 10 || a > 100) {
        return -2;
    }

    let hasil = 1;
    for (let i = 0; i < b; i++) {
        hasil *= a;

        if (hasil > 2147483647) {
        return -3;
        }
    }

    return hasil;
    }

    function hitungPangkat() {
    const a = parseInt(document.getElementById("base").value);
    const b = parseInt(document.getElementById("exponent").value);
    const output = document.getElementById("output");

    if (isNaN(a) || isNaN(b)) {
        output.innerText = "Input tidak valid.";
        return;
    }

    const result = CariNilaiPangkat(a, b);
    output.innerText = `Hasil: ${result}`;
    }

  ```

## Output

```bash
![image](https://github.com/user-attachments/assets/365f9504-c6b2-487a-b4c9-babc30f467af)

```

---
