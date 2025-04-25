class HaloGeneric {
  sapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

class DataGeneric {
  constructor() {
    this.data = new Map([
      ["NIM", "2211104081"],
      ["Kelas", "SE 06 03"],
      ["Jurusan", "RPL"]
    ]);
  }

  getData(key) {
    return this.data.get(key) || "Data tidak ditemukan";
  }
}


const halo = new HaloGeneric();
halo.sapaUser("Naufal");

const data = new DataGeneric();
console.log(data.getData("NIM"));
console.log(data.getData("Kelas"));
console.log(data.getData("Jurusan"));
