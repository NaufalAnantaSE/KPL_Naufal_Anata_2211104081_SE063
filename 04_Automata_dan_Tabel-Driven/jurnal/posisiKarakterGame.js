class PosisiKarakterGame {
    constructor(NIM) {
        this.NIM = NIM;
        this.state = "Berdiri";
    }

    changeState(newState) {
        let previousState = this.state;
        this.state = newState;

        if (this.NIM % 3 === 1) {
            if (newState === "Berdiri") {
                console.log("Posisi standby");
            } else if (newState === "Tengkurap") {
                console.log("Posisi istirahat");
            }
        } else if (this.NIM % 3 === 2) {
            if (previousState === "Terbang" && newState === "Jongkok") {
                console.log("Posisi landing");
            } else if (previousState === "Berdiri" && newState === "Terbang") {
                console.log("Posisi take off");
            }
        }
    }

    simulateKeyPress(key) {
        if (this.NIM % 3 === 0) {
            if (key === "S") {
                console.log("Tombol arah bawah ditekan");
            } else if (key === "W") {
                console.log("Tombol arah atas ditekan");
            }
        }
    }

    getState() {
        return this.state;
    }
}


const posisiKarakter = new PosisiKarakterGame(123456);

posisiKarakter.simulateKeyPress("S");
posisiKarakter.simulateKeyPress("W");

posisiKarakter.changeState("Tengkurap");
posisiKarakter.changeState("Berdiri");
posisiKarakter.changeState("Terbang");
posisiKarakter.changeState("Jongkok");

console.log("Posisi karakter: " + posisiKarakter.getState());
