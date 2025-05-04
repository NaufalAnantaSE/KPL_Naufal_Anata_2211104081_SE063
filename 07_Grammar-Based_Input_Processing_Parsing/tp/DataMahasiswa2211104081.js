const fs = require("fs");

class dataMahasiswa2211104081 {
    static ReadJSON() {
        const filePath = "tp7_1_2211104081.json";
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const mahasiswa = JSON.parse(jsonData);

        console.log(
            `Nama ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} dengan nim ${mahasiswa.nim
            } dari fakultas ${mahasiswa.fakultas.toLowerCase()}`
        );
    }
}

module.exports = dataMahasiswa2211104081;
