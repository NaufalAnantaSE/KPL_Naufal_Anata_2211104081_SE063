class Penjumlahan {
    static JumlahTigaAngka(a, b, c) {
        return Number(a) + Number(b) + Number(c);
    }
}

function main() {
    const nim = 2211104081;

    const nimStr = nim.toString();
    const firstTwoDigits = parseInt(nimStr.slice(0, 2));   
    const secondTwoDigits = parseInt(nimStr.slice(2, 4));  
    const thirdTwoDigits = parseInt(nimStr.slice(4, 6));   

    const lastDigit = nim % 10;
    let result;

    if (lastDigit === 1 || lastDigit === 2) {
        // float
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = result.toFixed(2);
        console.log(`Tipe: float`);
    } else if (lastDigit === 3 || lastDigit === 4 || lastDigit === 5) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = result.toFixed(5);
        console.log(`Tipe: double`);
    } else if (lastDigit === 6 || lastDigit === 7 || lastDigit === 8) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = Math.floor(result);
        console.log(`Tipe: int`);
    } else if (lastDigit === 9 || lastDigit === 0) {
        result = Penjumlahan.JumlahTigaAngka(firstTwoDigits, secondTwoDigits, thirdTwoDigits);
        result = Math.floor(result);
        console.log(`Tipe: long`);
    }

    console.log(`Hasil penjumlahan: ${result}`);
}

main();
