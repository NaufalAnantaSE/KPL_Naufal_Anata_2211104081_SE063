// Target Interface: Mendefinisikan antarmuka yang diharapkan oleh client
class EnglishSpeaker {
    // Metode yang diharapkan untuk berbicara dalam bahasa Inggris
    speak(message) {
        return message;
    }
}

// Adaptee: Kelas yang perlu diadaptasi (dalam hal ini, pembicara bahasa Indonesia)
class IndonesianSpeaker {
    // Metode untuk berbicara dalam bahasa Indonesia
    berbicaraDalamIndonesia(pesan) {
        return pesan;
    }
}

// Adapter: Kelas yang menghubungkan Adaptee dengan Target Interface
class IndonesianToEnglishTranslator extends EnglishSpeaker {
    constructor(indonesianSpeaker) {
        super();
        this.indonesianSpeaker = indonesianSpeaker;
    }

    // Implementasi metode speak dari EnglishSpeaker
    // Metode ini menerjemahkan pesan, meneruskannya ke IndonesianSpeaker, dan menerjemahkan kembali hasilnya
    speak(message) {
        const indonesianMessage = this.translateToIndonesian(message);
        const spokenInIndonesian = this.indonesianSpeaker.berbicaraDalamIndonesia(indonesianMessage);
        return this.translateToEnglish(spokenInIndonesian);
    }

    // Metode pembantu untuk menerjemahkan dari bahasa Inggris ke Indonesia
    translateToIndonesian(englishMessage) {
        const translations = {
            "Hello": "Halo",
            "How are you?": "Apa kabar?",
            "Thank you": "Terima kasih"
        };
        return translations[englishMessage] || englishMessage;
    }

    // Metode pembantu untuk menerjemahkan dari bahasa Indonesia ke Inggris
    translateToEnglish(indonesianMessage) {
        const translations = {
            "Halo": "Hello",
            "Apa kabar?": "How are you?",
            "Terima kasih": "Thank you"
        };
        return translations[indonesianMessage] || indonesianMessage;
    }
}

// Client Code: Simulasi penggunaan Adapter dalam konteks pertemuan internasional
console.log("Pertemuan Internasional dimulai:");

// Membuat instance dari Adaptee (pembicara Indonesia)
const indonesianDelegate = new IndonesianSpeaker();
// Membuat instance dari Adapter
const translator = new IndonesianToEnglishTranslator(indonesianDelegate);

// Daftar pesan dalam bahasa Inggris yang akan diuji
const englishMessages = ["Hello", "How are you?", "Thank you"];

// Iterasi melalui setiap pesan dan mendemonstrasikan proses terjemahan
englishMessages.forEach(message => {
    console.log(`\nPeserta berbahasa Inggris mengatakan: "${message}"`);
    // Menerjemahkan ke bahasa Indonesia
    const translatedToIndonesian = translator.translateToIndonesian(message);
    console.log(`Penerjemah menyampaikan ke delegasi Indonesia: "${translatedToIndonesian}"`);
    console.log(`Delegasi Indonesia merespon dalam bahasa Indonesia: "${translatedToIndonesian}"`);
    // Menerjemahkan kembali ke bahasa Inggris
    const translatedBackToEnglish = translator.translateToEnglish(translatedToIndonesian);
    console.log(`Penerjemah menerjemahkan kembali ke bahasa Inggris: "${translatedBackToEnglish}"`);
});

console.log("\nPertemuan Internasional selesai.");