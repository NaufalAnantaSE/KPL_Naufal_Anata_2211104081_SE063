
const AljabarLibraries = {
  AkarPersamaanKuadrat: function (persamaan) {
    const [a, b, c] = persamaan;
    const diskriminan = b * b - 4 * a * c;

    if (a === 0) {
      throw new Error("Bukan persamaan kuadrat (a tidak boleh 0)");
    }

    if (diskriminan < 0) {
      return [];
    } else if (diskriminan === 0) {
      const akar = -b / (2 * a);
      return [akar];
    } else {
      const akar1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
      const akar2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
      return [akar1, akar2];
    }
  },

  HasilKuadrat: function (persamaan) {
    const [a, b] = persamaan;
    const x2 = a * a;
    const x = 2 * a * b;
    const c = b * b;
    return [x2, x, c];
  }
};

module.exports = AljabarLibraries;
