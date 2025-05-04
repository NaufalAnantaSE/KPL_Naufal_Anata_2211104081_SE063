<div align="center">

**TUGAS PENDAHULUAN**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VII**  
**GRAMMAS BASED INPUT PROCESSING PARSING**

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
##### MENAMBAHKAN JSON DESERIALIZATON 1
Buatlah branch baru dengan nama branch “naufal_praktikan” dan checkout kesana.
A. Download file “tp7_1_nim.json” dan rename file tersebut dengan mengganti “nim”
dengan 2211104081 kemudian pindahkan file json tersebut di folder solution
projectnya.
B. Ganti isian nama dan nim di dalam file tersebut dengan nama dan nim praktikan.
C. Buatlah sebuah file class baru dengan nama “DataMahasiswa2211104081”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan
format:
“Nama <nama depan + belakang> dengan nim <nim> dari fakultas <fakultas>”

**Code**

- tp7_1_2211104081.json
```json
{
    "nama": {
        "depan": "Naufal",
        "belakang": "Ananta"
    },
    "nim": "2211104081",
    "fakultas": "informatika"
}
```

- DataMahasiswa2211104081.js
```javascript
const fs = require("fs");

class dataMahasiswa2211104081 {
    static ReadJSON() {
        const filePath = "tp7_1_2211104081.json";
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const mahasiswa = JSON.parse(jsonData);

        console.log(
            `Nama ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} dengan nim ${mahasiswa.nim
            } dari fakultas ${mahasiswa.fakultas.toLowerCase()}`
        );
    }
}

module.exports = dataMahasiswa2211104081;
```
---
## A. Soal Nomor 1
##### MENAMBAHKAN JSON DESERIALIZATON 2
Buatlah branch baru dengan nama branch “naufal_praktikan” dan checkout kesana.
A. Download file “tp7_2_nim.json” dan rename file tersebut dengan mengganti “nim” dengan
2211104081 kemudian pindahkan file json tersebut di folder solution projectnya.
B. Ganti kode mata kuliah dan nama kuliah sesuai dengan daftar mata kuliah yang diambil di
semester ini.
C. Buatlah sebuah file class baru dengan nama “KuliahMahasiswa2211104081”.
D. Buat method “ReadJSON() yang melakukan parsing untuk file tersebut menjadi object
sesuai.
E. Pada method tersebut, lakukan print hasil deserialisasi dari object yang dibuat dengan format:
“Daftar mata kuliah yang diambil:”
“MK 1 <kode_matakuliah_1> - <nama_matakuliah_1>”
“MK 2 <kode_matakuliah_2> - <nama_matakuliah_2>”
“MK 3 <kode_matakuliah_3> - <nama_matakuliah_3>”
dst.

- tp7_2_2211104081.json
```json
{
    "mata_kuliah": [
        {
            "kode": "MK001",
            "nama": "Bahasa Inggris"
        },
        {
            "kode": "MK002",
            "nama": "Pemrograman Web"
        },
        {
            "kode": "MK003",
            "nama": "Algoritma dan Pemrograman"
        },
        {
            "kode": "MK004",
            "nama": "Basis Data"
        },
        {
            "kode": "MK005",
            "nama": "Jaringan Komputer"
        }
    ]
}
```

- kuliahMahasiswa2211104081.js
```javascript
const fs = require("fs");

class kuliahMahasiswa2211104081 {
    static ReadJSON() {
        const filePath = "tp7_2_2211104081.json";
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(jsonData);

        console.log("Daftar mata kuliah yang diambil:");
        data.mata_kuliah.forEach((mk, index) => {
            console.log(`MK ${index + 1} <${mk.kode}> - <${mk.nama}>`);
        });
    }
}

module.exports = kuliahMahasiswa2211104081;
```

- index.js

```javascript
const DataMahasiswa = require("./DataMahasiswa2211104081");
DataMahasiswa.ReadJSON();

const Kuliah = require("./kuliahMahasiswa2211104081");
Kuliah.ReadJSON();
```

-  output
```bash
PS E:\smester6\praktikum_KPL\07_Grammar-Based_Input_Processing_Parsing\tp> node index.js
Nama Naufal Ananta dengan nim 2211104081 dari fakultas informatika
Daftar mata kuliah yang diambil:
MK 1 <MK001> - <Bahasa Inggris>
MK 2 <MK002> - <Pemrograman Web>
MK 3 <MK003> - <Algoritma dan Pemrograman>
MK 4 <MK004> - <Basis Data>
MK 5 <MK005> - <Jaringan Komputer>
PS E:\smester6\praktikum_KPL\07_Grammar-Based_Input_Processing_Parsing\tp> 
```