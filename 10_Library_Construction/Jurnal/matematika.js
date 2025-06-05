
const MatematikaLibraries = {
  FPB: function (a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  KPK: function (a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function (persamaan) {
    let hasil = '';
    let pangkat = persamaan.length - 1;

    for (let i = 0; i < persamaan.length - 1; i++) {
      let koef = persamaan[i];
      let turunan = koef * pangkat;

      if (turunan === 0) {
        pangkat--;
        continue;
      }

      if (hasil !== '' && turunan > 0) {
        hasil += ' + ';
      } else if (turunan < 0) {
        hasil += ' - ';
      }

      hasil += Math.abs(turunan);
      if (pangkat - 1 > 1) {
        hasil += `x${pangkat - 1}`;
      } else if (pangkat - 1 === 1) {
        hasil += 'x';
      }

      pangkat--;
    }

    return hasil.trim();
  },

  Integral: function (persamaan) {
    let hasil = '';
    let pangkat = persamaan.length - 1;

    for (let i = 0; i < persamaan.length; i++) {
      let koef = persamaan[i];
      let pangkatBaru = pangkat + 1;
      let hasilKoef = koef / pangkatBaru;

      if (hasil !== '' && hasilKoef > 0) {
        hasil += ' + ';
      } else if (hasilKoef < 0) {
        hasil += ' - ';
      }

      hasil += Math.abs(hasilKoef) === 1 ? '' : Math.abs(hasilKoef).toFixed(1).replace(/\.0$/, '');
      if (pangkatBaru === 1) {
        hasil += 'x';
      } else if (pangkatBaru > 1) {
        hasil += `x${pangkatBaru}`;
      }

      pangkat--;
    }

    hasil += ' + C';
    return hasil.trim();
  }
};

module.exports = MatematikaLibraries;
