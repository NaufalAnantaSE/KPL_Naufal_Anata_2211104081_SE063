const fs = require('fs');

// Fungsi ini tidak menerapkan clean code karena:
// 1. Nama fungsi tidak deskriptif ('doStuff' tidak menjelaskan apa yang dilakukan fungsi)
// 2. Parameter a dan b tidak jelas maksudnya
// 3. Variabel x tidak perlu, bisa langsung return (a + b) * 2
function doStuff(a, b) {
    let x = a + b;
    return x * 2;
}

// Variabel d dan t tidak menerapkan clean code karena:
// 1. Nama variabel tidak deskriptif (d dan t tidak jelas maksudnya)
// 2. Variabel ini seharusnya const karena tidak berubah nilainya
let d = new Date();
let t = d.getTime();

// Blok kode ini tidak menerapkan clean code karena:
// 1. Callback hell, sulit dibaca dan dipahami
// 2. Mixing of concerns (membaca file, memproses data, dan menghitung hasil dalam satu blok)
// 3. Error handling yang minimal
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err);
        return;
    }
    // 4. Variabel 'lines' dan 'res' tidak deskriptif
    // 5. Penggunaan loop for tradisional alih-alih metode array yang lebih ekspresif
    let lines = data.split('\n');
    let res = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() !== '') {
            res.push(lines[i]);
        }
    }
    console.log('Processed lines:', res.length);
    // 6. Variabel 'sum' bisa menggunakan const dan dihitung dengan reduce
    // 7. Penggunaan loop for lagi alih-alih metode array
    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += doStuff(i, res.length);
    }
    console.log('Result:', sum);
});

// Baris ini tidak menerapkan clean code karena:
// 1. Menghitung waktu secara manual alih-alih menggunakan metode bawaan Node.js seperti console.time()
// 2. Tidak konsisten dengan penggunaan variabel 't' di awal (terlalu implisit)
console.log('Time elapsed:', new Date().getTime() - t);