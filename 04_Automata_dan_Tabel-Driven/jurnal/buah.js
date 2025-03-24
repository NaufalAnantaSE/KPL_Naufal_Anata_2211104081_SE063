class KodeBuah {
    constructor() {
      this.kodeBuahTable = {
        Apel: "A00",
        Aprikot: "B00",
        Alpukat: "C00",
        Pisang: "D00",
        Paprika: "E00",
        Blackberry: "F00",
        Ceri: "H00",
        Kelapa: "I00",
        Jagung: "J00",
        Kurma: "K00",
        Durian: "L00",
        Anggur: "M00",
        Melon: "N00",
        Semangka: "O00",
      };
    }  
    getKodeBuah(buah) {
      return this.kodeBuahTable[buah] || "Buah tidak ditemukan";
    }
  }

const buah = new KodeBuah();
console.log(buah.getKodeBuah("Apel"));
console.log(buah.getKodeBuah("Aprikot"));
console.log(buah.getKodeBuah("Jeruk"))