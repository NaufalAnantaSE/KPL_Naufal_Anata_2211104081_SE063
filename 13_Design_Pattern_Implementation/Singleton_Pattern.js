// Singleton Pattern: ConfigManager untuk mengelola konfigurasi aplikasi

class ConfigManager {
    constructor() {
        // Memeriksa apakah instance sudah ada
        if (ConfigManager.instance) {
            return ConfigManager.instance; // Jika sudah ada, kembalikan instance yang ada
        }

        this._config = {}; // Objek untuk menyimpan konfigurasi
        ConfigManager.instance = this; // Menyimpan instance ini sebagai instance tunggal
        console.log('ConfigManager: Instance baru telah dibuat.');
    }

    // Metode untuk mengatur nilai konfigurasi
    setConfig(key, value) {
        this._config[key] = value;
        console.log(`ConfigManager: Mengatur ${key} = ${value}`);
    }

    // Metode untuk mendapatkan nilai konfigurasi
    getConfig(key) {
        return this._config[key];
    }

    // Metode untuk menampilkan seluruh konfigurasi
    displayConfig() {
        console.log('ConfigManager: Konfigurasi saat ini:');
        for (let key in this._config) {
            console.log(`  ${key}: ${this._config[key]}`);
        }
    }
}

// Penggunaan ConfigManager

// Membuat instance pertama
console.log('Membuat instance pertama dari ConfigManager:');
const config1 = new ConfigManager();
config1.setConfig('theme', 'dark');
config1.setConfig('language', 'id');

// Mencoba membuat instance kedua (seharusnya mengembalikan instance yang sama)
console.log('\nMembuat instance kedua dari ConfigManager:');
const config2 = new ConfigManager();
config2.setConfig('fontSize', '14px');

// Menampilkan konfigurasi config1 sebelum perubahan config2
console.log('\nKonfigurasi config1 sebelum perubahan melalui config2:');
config1.displayConfig();

// Menambahkan pengaturan baru melalui config2
console.log('\nMenambahkan backgroundColor melalui config2:');
config2.setConfig('backgroundColor', 'blue');

// Menampilkan konfigurasi config1 setelah perubahan melalui config2
console.log('\nKonfigurasi config1 setelah perubahan melalui config2:');
config1.displayConfig();

// Memeriksa apakah kedua instance adalah objek yang sama
console.log('\nMemeriksa apakah kedua instance adalah sama:');
console.log(config1 === config2 ? 'Sama instance' : 'Berbeda instance');

// Mengambil nilai konfigurasi tertentu
console.log('\nMengambil nilai konfigurasi tertentu:');
console.log('Theme:', config1.getConfig('theme'));
console.log('Language:', config2.getConfig('language')); // Menggunakan config2 untuk menunjukkan bahwa ini adalah instance yang sama