class CuacaStation {
    constructor() {
        this.suhu = 0;
        this.pengamat = [];
    }

    tambahPengamat(p) {
        this.pengamat.push(p);
    }

    hapusPengamat(p) {
        this.pengamat = this.pengamat.filter(obs => obs !== p);
    }

    setSuhu(nilaiBaru) {
        console.log(`Update suhu ke: ${nilaiBaru}°C`);
        this.suhu = nilaiBaru;
        this.beritahuSemua();
    }

    beritahuSemua() {
        this.pengamat.forEach(obs => obs.perbarui(this.suhu));
    }
}

module.exports = CuacaStation;
