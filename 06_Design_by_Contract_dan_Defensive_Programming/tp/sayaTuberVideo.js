class SayaTubeVideo {
    constructor(title) {

        if (!title || title.length > 100) {
            throw new Error("Judul video tidak boleh kosong dan maksimal 100 karakter.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000); 
        this.title = title;
        this.playCount = 0;
    }


    increasePlayCount(count) {

        if (count < 0 || count > 10000000) {
            throw new Error("Penambahan play count harus antara 0 - 10.000.000.");
        }

        try {

            const newTotal = this.playCount + count;
            if (newTotal > Number.MAX_SAFE_INTEGER) {
                throw new Error("Overflow: play count melebihi batas maksimum.");
            }
            this.playCount = newTotal;
        } catch (error) {
            console.error("Error:", error.message);
        }
    }


    printVideoDetails() {
        console.log("== Video Details ==");
        console.log("ID Video   :", this.id);
        console.log("Judul      :", this.title);
        console.log("Play Count :", this.playCount);
        console.log("===================");
    }
}


try {
    const video = new SayaTubeVideo("Tutorial Design By Contract (nopaleon) ");
    video.increasePlayCount(100000); 
    video.printVideoDetails();


    console.log("\nPengujian Overflow dengan penambahan play count sangat besar:");
    for (let i = 0; i < 5; i++) {
        video.increasePlayCount(Number.MAX_SAFE_INTEGER / 10); 
        console.log(`Iterasi ${i + 1}: Play Count = ${video.playCount}`);
    }

} catch (error) {
    console.error("Terjadi error:", error.message);
}
