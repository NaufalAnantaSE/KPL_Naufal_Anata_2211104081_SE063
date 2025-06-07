const ManajerData = require('./ManajerDataSingleton'); // pastikan path benar

const dataA = ManajerData.getInstance();
const dataB = ManajerData.getInstance();

dataA.tambahData("Naufal - Anggota");
dataA.tambahData("Irpan - Anggota");
dataA.tambahData("Faisal - Asisten");

console.log("\n🔍 Menampilkan data dari dataB:");
dataB.tampilkanSemuaData();

dataB.hapusDataBerdasarkanIndex(2);

console.log("\n🧾 Menampilkan ulang data dari dataA setelah penghapusan:");
dataA.tampilkanSemuaData();

console.log(`\n📊 Jumlah data pada dataA: ${dataA.ambilSemuaData().length}`);
console.log(`📊 Jumlah data pada dataB: ${dataB.ambilSemuaData().length}`);
