<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL VI**  
**DESIGN BY CONTRACT & DEFENSIVE PROGRAMING**

![logo tel-u](https://github.com/user-attachments/assets/3a44181d-9c92-47f6-8cf0-87755117fd99)

Disusun Oleh :

**Naufal Ananta (2211104081)**  
**SE-06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL


MENAMBAHKAN KODE AWAL SAYATUBEVIDEO
Buatlah dua file class baru yang berisi detail sebagai berikut:

- Class bernama “SayaTubeUser” dan “SayaTubeVideo”.
- Struktur dari class tersebut dapat dilihat pada gambar di bawah ini:
- Konstruktor pada kelas “SayaTubeVideo” menerima dua parameter yaitu judul video. Pada saat
  objek dibuat, nilai “id” akan di-generate secara random sepanjang 5 digit (bisa coba gunakan class
  Random bawaan bahasa pemrograman yang digunakan) dan nilai “playCount” akan diisi dengan 0.
- Pada class “SayaTubeVideo”, tambahkan sebuah method dengan nama “IncreasePlayCount” yang
  menerima jumlah angka yang akan ditambahkan ke “playCount”.
- Class “SayaTubeVideo” juga mempunyai method “PrintVideoDetails” yang melakukan print baik
  dari id, title dan playCount dengan format bebas.
- Konstruktor kelas “SayaTubeUser” mirip dengan kelas “SayaTubeVideo”, bedanya adalah property
  Username dan list kosong dari uploadedVideos.
- Pada kelas “SayaTubeUser”, terdapat method GetTotalVideoPlayCount() yang mengembalikan
  jumlah playCount dari semua video yang ada di list uploadedVideos. Selain itu, juga terdapat
  method AddVideo yang dapat menambahkan elemen baru ke list uploadedVideos.
- Method terakhir di kelas tersebut adalah PrintAllVideoPlaycount() yang melakukan print terhadap
  semua judul video yang ditambahkan dengan format:
  _ “User: <username>”
  _ “Video 1 judul: <judul_video1>” \* “Video 2 judul: <judul_video2>”
  dst.
- Panggil semua method yang dibuat dari kedua kelas pada fungsi/method utama dengan membuat.
  Gunakan nama panggilan praktikan untuk username dan judul video dengan format “Review Film
  <judul_film> oleh <nama_praktikan>”. Tambahkan minimal 10 judul film yang menurut praktikan
  bagus untuk ditonton.

**Source Code**

- sayaTubeVideo

  ```js
    class SayaTubeVideo {
        constructor(title) {
            if (!title || title.length > 200) {
                throw new Error("Judul video tidak boleh kosong dan maksimal 200 karakter.");
            }

            this.id = Math.floor(10000 + Math.random() * 90000); // ID 5 digit random
            this.title = title;
            this.playCount = 0;
        }

        increasePlayCount(count) {
            if (count < 0 || count > 25000000) {
                throw new Error("Penambahan play count harus antara 0 - 25.000.000.");
            }

            const newTotal = this.playCount + count;
            if (newTotal > Number.MAX_SAFE_INTEGER) {
                throw new Error("Overflow: play count melebihi batas maksimum.");
            }

            this.playCount = newTotal;
        }

        printVideoDetails() {
            console.log("== Video Details ==");
            console.log("ID Video   :", this.id);
            console.log("Judul      :", this.title);
            console.log("Play Count :", this.playCount);
            console.log("===================");
        }
    }

    module.exports = SayaTubeVideo;


  ```

- sayaTubeUser

  ```js
    const SayaTubeVideo = require('./SayaTubeVideo');

    class SayaTubeUser {
        constructor(username) {
            if (!username || username.length > 100) {
                throw new Error("Username tidak boleh kosong dan maksimal 100 karakter.");
            }

            this.username = username;
            this.uploadedVideos = [];
        }

        addVideo(video) {
            if (!(video instanceof SayaTubeVideo)) {
                throw new Error("Video harus instance dari SayaTubeVideo.");
            }

            this.uploadedVideos.push(video);
        }

        getTotalVideoPlayCount() {
            return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
        }

        printAllVideoPlaycount() {
            console.log(`User: ${this.username}`);
            this.uploadedVideos.forEach((video, index) => {
                console.log(`Video ${index + 1} judul: ${video.title}`);
            });
        }
    }

    module.exports = SayaTubeUser;
  ```

- main.js 

  ```js
    const SayaTubeUser = require('./SayaTubeUser');
    const SayaTubeVideo = require('./SayaTubeVideo');


    const namaPraktikan = "Naufal";
    const user = new SayaTubeUser(namaPraktikan);


    const filmList = [
        "The Shawshank Redemption",
        "The Godfather",
        "Schindler's List",
        "The Dark Knight",
        "Pulp Fiction",
        "Forrest Gump",
        "The Matrix",
        "Inception",
        "Interstellar",
        "The Prestige"
    ];


    filmList.forEach(judul => {
        const video = new SayaTubeVideo(`Review Film ${judul} oleh ${namaPraktikan}`);
        video.increasePlayCount(1000000); 
        user.addVideo(video);
    });


    user.printAllVideoPlaycount();
    console.log(`Total semua play count: ${user.getTotalVideoPlayCount()}`);


  ```


**Output**
![Image]()

--
