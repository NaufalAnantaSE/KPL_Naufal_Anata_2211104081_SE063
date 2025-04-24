import { assert, ensureNumber } from './utils.js';

// Kelas BankAccount dengan Invariants & Defensive Programming
class BankAccount {
    constructor(balance = 0) {
        // Memastikan saldo awal adalah angka yang valid
        this.balance = ensureNumber(balance, "balance");
        // Memeriksa invariant setelah inisialisasi
        this.checkInvariants();
    }

    // Metode untuk melakukan deposit
    deposit(amount) {
        // Memastikan jumlah yang dimasukkan adalah angka yang valid
        amount = ensureNumber(amount, "amount");
        // Memastikan jumlah deposit lebih dari 0
        assert(amount > 0, "Jumlah deposit harus lebih dari nol.");
        // Menambahkan jumlah deposit ke saldo
        this.balance += amount;
        // Memeriksa invariant setelah perubahan saldo
        this.checkInvariants();
    }

    // Metode untuk melakukan penarikan
    withdraw(amount) {
        // Memastikan jumlah yang dimasukkan adalah angka yang valid
        amount = ensureNumber(amount, "amount");
        // Memastikan jumlah penarikan lebih dari 0
        assert(amount > 0, "Jumlah penarikan harus lebih dari nol.");
        // Memastikan saldo mencukupi sebelum melakukan penarikan
        if (amount > this.balance) {
            throw new Error("Precondition failed: Saldo tidak mencukupi.");
        }
        // Mengurangi saldo dengan jumlah penarikan
        this.balance -= amount;
        // Memeriksa invariant setelah perubahan saldo
        this.checkInvariants();
    }

    // Metode untuk memastikan invariant (aturan tetap) tetap terjaga
    checkInvariants() {
        // Memastikan saldo tidak negatif
        assert(this.balance >= 0, "Invariant failed: Saldo tidak boleh negatif.");
    }

    // Metode untuk mendapatkan saldo saat ini
    getBalance() {
        return this.balance;
    }
}

// Inisialisasi akun bank dengan saldo awal 100
const account = new BankAccount(100);

// Fungsi untuk memperbarui tampilan saldo di UI
function updateBalance() {
    document.getElementById("balance").innerText = account.getBalance();
}

// Fungsi untuk menangani aksi deposit dari input pengguna
window.deposit = function () {
    try {
        // Mengambil jumlah dari input dan mengonversinya ke angka
        const amount = parseFloat(document.getElementById("amount").value);
        // Melakukan deposit ke akun
        account.deposit(amount);
        // Memperbarui tampilan saldo
        updateBalance();
        // Mengosongkan pesan error jika berhasil
        document.getElementById("error-message").innerText = "";
    } catch (error) {
        // Menampilkan pesan error jika terjadi kesalahan
        document.getElementById("error-message").innerText = error.message;
    }
}

// Fungsi untuk menangani aksi penarikan dari input pengguna
window.withdraw = function () {
    try {
        // Mengambil jumlah dari input dan mengonversinya ke angka
        const amount = parseFloat(document.getElementById("amount").value);
        // Melakukan penarikan dari akun
        account.withdraw(amount);
        // Memperbarui tampilan saldo
        updateBalance();
        // Mengosongkan pesan error jika berhasil
        document.getElementById("error-message").innerText = "";
    } catch (error) {
        // Menampilkan pesan error jika terjadi kesalahan
        document.getElementById("error-message").innerText = error.message;
    }
}

// Memperbarui tampilan saldo saat halaman dimuat pertama kali
updateBalance();