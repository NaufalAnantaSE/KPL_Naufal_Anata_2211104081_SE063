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

- index.js
```js
  const fs = require('fs');
const readline = require('readline-sync');
const crypto = require('crypto');

const DATA_FILE = 'users.json';

function loadUsers() {
    if (!fs.existsSync(DATA_FILE)) {
        return {};
    }
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
}

function saveUsers(users) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

function validateUsername(username) {
    if (!/^[A-Za-z]+$/.test(username)) {
        return 'Username hanya boleh huruf alfabet ASCII.';
    }
    if (username.length < 4 || username.length > 20) {
        return 'Panjang username harus 4-20 karakter.';
    }
    return '';
}

function validatePassword(username, password) {
    if (password.toLowerCase().includes(username.toLowerCase())) {
        return 'Password tidak boleh mengandung username.';
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return 'Password harus mengandung minimal 1 karakter unik (!@#$%^&*).';
    }
    if (password.toLowerCase().includes(username.toLowerCase())) {
        return 'Password tidak boleh mengandung username.';
    }
    return '';
}

function register() {
    console.log('\n=== REGISTRASI ===');
    const username = readline.question('Username: ');
    const password = readline.question('Password: ', { hideEchoBack: true });

    let error = validateUsername(username);
    if (error) {
        return console.log('Error:', error);
    }

    error = validatePassword(username, password);
    if (error) {
        return console.log('Error:', error);
    }

    const users = loadUsers();
    if (users[username]) {
        return console.log('Username sudah terdaftar.');
    }

    users[username] = hashPassword(password);
    saveUsers(users);
    console.log('Registrasi berhasil!\n');
}

function login() {
    console.log('\n=== LOGIN ===');
    const username = readline.question('Username: ');
    const password = readline.question('Password: ', { hideEchoBack: true });

    const users = loadUsers();
    if (users[username] && users[username] === hashPassword(password)) {
        console.log(`Login berhasil! Selamat datang, ${username}\n`);
    } else {
        console.log('Login gagal: Username atau password salah.\n');
    }
}

function main() {
    while (true) {
        console.log('1. Register\n2. Login\n3. Keluar');
        const choice = readline.question('Pilih menu (1-3): ');
        if (choice === '1') {
            register();
        } else if (choice === '2') {
            login();
        } else if (choice === '3') {
            break;
        } else {
            console.log('Pilihan tidak valid\n');
        }
    }
}

main();
```

- users.json

  ```json
    {
    "naufalananta": "e93c53d042eb630963c6a8b1d7dff3c7c98f84d04a8c9196570e2db001ce55ff"
    }
  ```

## Output



---