const readline = require("readline");
const BankTransferConfig = require("./BankTransferConfig");
const config = new BankTransferConfig().config;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lang = config.lang;
const threshold = config.transfer.threshold;
const lowFee = config.transfer.low_fee;
const highFee = config.transfer.high_fee;
const methods = config.methods;
const confirmation = config.confirmation;

const ask = (question) =>
    new Promise((resolve) => rl.question(question, resolve));

(async function main() {
    const askAmount =
        lang === "en"
            ? "Please insert the amount of money to transfer: "
            : "Masukkan jumlah uang yang akan di-transfer: ";

    const amountStr = await ask(askAmount);
    const amount = parseInt(amountStr);

    const fee = amount <= threshold ? lowFee : highFee;
    const total = amount + fee;

    if (lang === "en") {
        console.log(`Transfer fee = ${fee}`);
        console.log(`Total amount = ${total}`);
    } else {
        console.log(`Biaya transfer = ${fee}`);
        console.log(`Total biaya = ${total}`);
    }

    const methodPrompt =
        lang === "en" ? "Select transfer method:" : "Pilih metode transfer:";
    console.log(methodPrompt);
    methods.forEach((method, i) => {
        console.log(`${i + 1}. ${method}`);
    });

    await ask("> ");

    const confirmPrompt =
        lang === "en"
            ? `Please type "${confirmation.en}" to confirm the transaction: `
            : `Ketik "${confirmation.id}" untuk mengkonfirmasi transaksi: `;

    const userConfirm = await ask(confirmPrompt);
    const validConfirm =
        lang === "en"
            ? userConfirm.toLowerCase() === confirmation.en.toLowerCase()
            : userConfirm.toLowerCase() === confirmation.id.toLowerCase();

    if (validConfirm) {
        console.log(
            lang === "en" ? "The transfer is completed" : "Proses transfer berhasil"
        );
    } else {
        console.log(
            lang === "en" ? "Transfer is cancelled" : "Transfer dibatalkan"
        );
    }

    rl.close();
})();