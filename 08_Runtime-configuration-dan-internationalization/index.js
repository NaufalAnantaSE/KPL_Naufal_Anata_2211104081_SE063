require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');

const app = express();

// Inisialisasi i18next untuk internationalization
i18next.use(Backend).init({
  lng: process.env.DEFAULT_LANGUAGE || 'en', // Bahasa default dari .env
  fallbackLng: 'en', // Fallback jika bahasa tidak ditemukan
  backend: {
    loadPath: './locales/{{lng}}/translation.json', // Path ke file terjemahan
  },
});

// Middleware untuk membaca query parameter 'lang' untuk mengubah bahasa
app.use((req, res, next) => {
  const lang = req.query.lang || process.env.DEFAULT_LANGUAGE || 'en';
  i18next.changeLanguage(lang, (err) => {
    if (err) console.error('Error changing language:', err);
    next();
  });
});

// Rute untuk halaman utama
app.get('/', (req, res) => {
  const name = req.query.name || 'Guest'; // Nama pengguna dari query parameter
  const welcomeMessage = i18next.t('welcome'); // Terjemahan untuk "welcome"
  const greetingMessage = i18next.t('greeting', { name }); // Terjemahan dengan interpolasi nama
  const farewellMessage = i18next.t('farewell'); // Terjemahan untuk "farewell"

  res.send(`
    <h1>${welcomeMessage}</h1>
    <p>${greetingMessage}</p>
    <p>${farewellMessage}</p>
  `);
});

// Mulai server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});