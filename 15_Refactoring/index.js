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
