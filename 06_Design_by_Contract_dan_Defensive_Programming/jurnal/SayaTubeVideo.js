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
