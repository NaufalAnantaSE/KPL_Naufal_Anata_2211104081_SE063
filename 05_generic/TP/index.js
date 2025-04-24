class HaloGeneric {
    SapaUser(user) {
      console.log(`Halo user ${user}`);
    }
  }

  class DataGeneric {
    constructor() {
      this.data = {
        NIM: "2211104081",
        Kelas: "SE 06 03",
        Jurusan: "RPL",
      };
    }
  
    getData(key) {
      return this.data[key] || "Data tidak ditemukan";
    }
  }
  const halo = new HaloGeneric();
  halo.SapaUser("Naufal");
  
    const data = new DataGeneric();

    console.log(data.getData("NIM"));
    console.log(data.getData("Kelas"));
    console.log(data.getData("Jurusan"));