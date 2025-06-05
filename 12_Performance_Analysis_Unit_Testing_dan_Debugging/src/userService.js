/**
 * Kelas UserService untuk mengelola operasi terkait pengguna
 */
class UserService {
  // Konstruktor untuk menerima objek database
  constructor(database) {
    this.database = database;
  }

  // Mendapatkan pengguna berdasarkan ID
  // Mengembalikan null jika pengguna tidak ditemukan
  async getUserById(id) {
    if (!id) {
      throw new Error('ID pengguna diperlukan');
    }
    
    const user = await this.database.findUserById(id);
    if (!user) {
      return null;
    }
    
    return user;
  }

  // Membuat pengguna baru dengan nama dan email
  // Memeriksa apakah email sudah digunakan sebelum menyimpan
  async createUser(userData) {
    if (!userData.name || !userData.email) {
      throw new Error('Nama dan email diperlukan');
    }
    
    const existingUser = await this.database.findUserByEmail(userData.email);
    if (existingUser) {
      throw new Error('Pengguna dengan email ini sudah ada');
    }
    
    return this.database.saveUser(userData);
  }
}

module.exports = UserService;