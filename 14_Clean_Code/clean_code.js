// Menggunakan fs.promises untuk operasi file asynchronous yang lebih bersih
const fs = require('fs').promises;

// Fungsi utama yang menerapkan clean code:
// 1. Menggunakan async/await untuk menangani operasi asynchronous
// 2. Memiliki struktur yang jelas dengan try-catch-finally
// 3. Memisahkan logika ke dalam fungsi-fungsi terpisah
async function main() {
    const startTime = Date.now();

    try {
        // Pemanggilan fungsi dengan nama yang deskriptif
        const processedLines = await readAndProcessFile('data.txt');
        const result = calculateResult(processedLines);
        
        // Logging yang informatif
        console.log('Processed lines:', processedLines.length);
        console.log('Result:', result);
    } catch (error) {
        // Penanganan error yang proper
        console.error('Error:', error.message);
    } finally {
        // Pengukuran waktu yang efisien dan jelas
        const elapsedTime = Date.now() - startTime;
        console.log('Time elapsed:', elapsedTime, 'ms');
    }
}

// Fungsi untuk membaca dan memproses file:
// 1. Nama fungsi yang deskriptif
// 2. Menggunakan async/await untuk operasi file
// 3. Menggabungkan pembacaan file dan pemrosesan data dalam satu fungsi
async function readAndProcessFile(filePath) {
    const fileContent = await fs.readFile(filePath, 'utf8');
    // Menggunakan metode array yang ekspresif (split dan filter)
    return fileContent.split('\n').filter(line => line.trim() !== '');
}

// Fungsi untuk menghitung hasil:
// 1. Nama fungsi yang jelas
// 2. Menggunakan reduce untuk perhitungan yang lebih ekspresif
function calculateResult(lines) {
    return lines.reduce((sum, _, index) => sum + computeValue(index, lines.length), 0);
}

// Fungsi pembantu dengan nama yang lebih deskriptif (dibandingkan dengan 'doStuff')
function computeValue(a, b) {
    const sum = a + b;
    return sum * 2;
}

// Memanggil fungsi utama dengan penanganan error
main().catch(error => console.error('Unhandled error:', error));