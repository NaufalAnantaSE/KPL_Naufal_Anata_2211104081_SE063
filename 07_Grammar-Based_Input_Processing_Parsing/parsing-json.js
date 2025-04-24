// Contoh input JSON (dalam bentuk string)
const json = `{
    "Date": "2020-09-06T11:31:01.923395-07:00",
    "TemperatureC": -1,
    "Summary": "Cold"
  }`;
  
  // Menampilkan data JSON mentah
  console.log("Input JSON:", json);
  
  // Mengubah JSON (teks biasa) menjadi objek JavaScript (deserialisasi)
  const prakiraanCuaca = JSON.parse(json);
  
  // Mengakses dan menampilkan isi dari objek
  console.log("prakiraanCuaca.Tanggal:", new Date(prakiraanCuaca.Date).toString()); // Diubah ke objek Date agar bisa dibaca
  console.log("prakiraanCuaca.SuhuC:", prakiraanCuaca.TemperatureC);
  console.log("prakiraanCuaca.Ringkasan:", prakiraanCuaca.Summary);
  
  // Mengubah kembali objek ke bentuk JSON string (serialisasi)
  const jsonHasil = JSON.stringify(prakiraanCuaca);
  console.log("Output JSON:", jsonHasil);
  
  // Versi kedua: forecast2 (sama aja sebenarnya di JavaScript)
  const prakiraanCuaca2 = JSON.parse(json);
  console.log("prakiraanCuaca2.Tanggal:", new Date(prakiraanCuaca2.Date).toString());
  console.log("prakiraanCuaca2.SuhuC:", prakiraanCuaca2.TemperatureC);
  console.log("prakiraanCuaca2.Ringkasan:", prakiraanCuaca2.Summary);
  
  // Serialisasi versi kedua
  const jsonHasil2 = JSON.stringify(prakiraanCuaca2);
  console.log("Output JSON (versi 2):", jsonHasil2);