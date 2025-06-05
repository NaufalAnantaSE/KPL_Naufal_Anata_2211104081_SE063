const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// Menggunakan plugin sinon-chai untuk assertion pada stub
chai.use(sinonChai);

const UserService = require('../../src/userService');

// Grup test untuk kelas UserService
describe('UserService', function() {
  let userService;
  let mockDatabase;

  // Membuat mock database dan instance UserService baru sebelum setiap test
  beforeEach(function() {
    mockDatabase = {
      findUserById: sinon.stub(),
      findUserByEmail: sinon.stub(),
      saveUser: sinon.stub()
    };
    
    userService = new UserService(mockDatabase);
  });

  // Membersihkan stub setelah setiap test
  afterEach(function() {
    sinon.restore();
  });

  // Test untuk metode getUserById
  describe('getUserById', function() {
    // Test ketika ID tidak disediakan
    it('harus melempar error jika id tidak disediakan', async function() {
      try {
        await userService.getUserById();
        expect.fail('Seharusnya melempar error');
      } catch (error) {
        expect(error.message).to.equal('ID pengguna diperlukan');
      }
    });

    // Test ketika pengguna tidak ditemukan
    it('harus mengembalikan null jika pengguna tidak ditemukan', async function() {
      mockDatabase.findUserById.resolves(null);
      
      const result = await userService.getUserById(1);
      
      expect(result).to.be.null;
      expect(mockDatabase.findUserById).to.have.been.calledWith(1);
    });

    // Test ketika pengguna ditemukan
    it('harus mengembalikan pengguna jika ditemukan', async function() {
      const mockUser = { id: 1, name: 'Budi Santoso', email: 'budi@contoh.com' };
      mockDatabase.findUserById.resolves(mockUser);
      
      const result = await userService.getUserById(1);
      
      expect(result).to.deep.equal(mockUser);
      expect(mockDatabase.findUserById).to.have.been.calledWith(1);
    });
  });

  // Test untuk metode createUser
  describe('createUser', function() {
    // Test ketika nama tidak disediakan
    it('harus melempar error jika nama tidak disediakan', async function() {
      try {
        await userService.createUser({ email: 'budi@contoh.com' });
        expect.fail('Seharusnya melempar error');
      } catch (error) {
        expect(error.message).to.equal('Nama dan email diperlukan');
      }
    });

    // Test ketika email tidak disediakan
    it('harus melempar error jika email tidak disediakan', async function() {
      try {
        await userService.createUser({ name: 'Budi Santoso' });
        expect.fail('Seharusnya melempar error');
      } catch (error) {
        expect(error.message).to.equal('Nama dan email diperlukan');
      }
    });

    // Test ketika email sudah digunakan
    it('harus melempar error jika pengguna dengan email sudah ada', async function() {
      const userData = { name: 'Budi Santoso', email: 'budi@contoh.com' };
      mockDatabase.findUserByEmail.resolves({ id: 1, ...userData });
      
      try {
        await userService.createUser(userData);
        expect.fail('Seharusnya melempar error');
      } catch (error) {
        expect(error.message).to.equal('Pengguna dengan email ini sudah ada');
        expect(mockDatabase.findUserByEmail).to.have.been.calledWith(userData.email);
      }
    });

    // Test ketika data valid
    it('harus menyimpan dan mengembalikan pengguna jika valid', async function() {
      const userData = { name: 'Budi Santoso', email: 'budi@contoh.com' };
      const savedUser = { id: 1, ...userData };
      
      mockDatabase.findUserByEmail.resolves(null);
      mockDatabase.saveUser.resolves(savedUser);
      
      const result = await userService.createUser(userData);
      
      expect(result).to.deep.equal(savedUser);
      expect(mockDatabase.findUserByEmail).to.have.been.calledWith(userData.email);
      expect(mockDatabase.saveUser).to.have.been.calledWith(userData);
    });
  });
});
