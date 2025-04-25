class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(
                `Data ${index + 1
                } berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[
                    index
                ].toUTCString()}`
            );
        });
    }
}

function main() {
    const db = new SimpleDataBase();

    db.AddNewData(22);
    db.AddNewData(40);
    db.AddNewData(81);

    db.PrintAllData();
}

main();