const CuacaStation = require('./CuacaStation');
const PengamatDisplay = require('./PengamatDisplay');
const PengamatLogger = require('./PengamatLogger');

const station = new CuacaStation();

const display = new PengamatDisplay();
const logger = new PengamatLogger();

station.tambahPengamat(display);
station.tambahPengamat(logger);

station.setSuhu(27);
station.setSuhu(32);
