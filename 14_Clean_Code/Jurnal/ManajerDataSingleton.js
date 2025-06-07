class ManajerDataSingleton {
    constructor() {
        if (ManajerDataSingleton.instance) {
            throw new Error("Gunakan getInstance() untuk mengakses singleton.");
        }

        this.kumpulanData = [];
        ManajerDataSingleton.instance = this;
    }

    static getInstance() {
        if (!ManajerDataSingleton.instance) {
            new ManajerDataSingleton();
        }
        return ManajerDataSingleton.instance;
    }

    tambahData(nama) {
        this.kumpulanData.push(nama);
    }

    hapusDataBerdasarkanIndex(index) {
        if (index >= 0 && index < this.kumpulanData.length) {
            this.kumpulanData.splice(index, 1);
        } else {
            console.log("Index tidak ditemukan!");
        }
    }

    tampilkanSemuaData() {
        console.log("📦 Isi data saat ini:");
        this.kumpulanData.forEach((data, i) => {
            console.log(`${i}. ${data}`);
        });
    }

    ambilSemuaData() {
        return this.kumpulanData;
    }
}

// ❗ Penting: export class, bukan instance!
module.exports = ManajerDataSingleton;
