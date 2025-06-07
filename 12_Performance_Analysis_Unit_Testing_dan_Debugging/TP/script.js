function cariTandaBilangan(a) {
    if (a < 0) {
        return "Negatif";
    } else if (a > 0) {
        return "Positif";
    } else {
        return "Nol";
    }
}

function cekTanda() {
    const input = document.getElementById("angkaInput").value;
    const output = document.getElementById("outputLabel");

    if (input === "") {
        output.textContent = "Mohon masukkan angka.";
        return;
    }

    const angka = parseInt(input);
    const hasil = cariTandaBilangan(angka);
    output.textContent = `Hasil: ${hasil}`;
}
