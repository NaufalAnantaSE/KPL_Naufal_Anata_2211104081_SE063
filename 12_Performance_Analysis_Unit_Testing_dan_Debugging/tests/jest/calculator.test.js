  const Calculator = require('../../src/calculator');

  // Grup test untuk kelas Calculator
  describe('Calculator', () => {
    let calculator;

    // Inisialisasi calculator baru sebelum setiap test
    beforeEach(() => {
      calculator = new Calculator();
    });

    // Test untuk metode add
    describe('add method', () => {
      // Test penjumlahan angka positif
      test('should add two positive numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });

      // Test penjumlahan angka negatif
      test('should handle negative numbers', () => {
        expect(calculator.add(-1, -2)).toBe(-3);
      });

      // Test penjumlahan dengan nol
      test('should handle zero', () => {
        expect(calculator.add(0, 5)).toBe(5);
      });
    });

    // Test untuk metode subtract
    describe('subtract method', () => {
      // Test pengurangan dasar
      test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
      });

      // Test pengurangan yang menghasilkan nilai negatif
      test('should handle negative results', () => {
        expect(calculator.subtract(2, 5)).toBe(-3);
      });

      // Test pengurangan dengan nol
      test('should handle zero', () => {
        expect(calculator.subtract(5, 0)).toBe(5);
      });
    });

    // Test untuk metode multiply
    describe('multiply method', () => {
      // Test perkalian dasar
      test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
      });

      // Test perkalian dengan angka negatif
      test('should handle negative numbers', () => {
        expect(calculator.multiply(-2, 3)).toBe(-6);
      });

      // Test perkalian dengan nol
      test('should handle zero', () => {
        expect(calculator.multiply(5, 0)).toBe(0);
      });
    });

    // Test untuk metode divide
    describe('divide method', () => {
      // Test pembagian dasar
      test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 2)).toBe(3);
      });

      // Test pembagian yang menghasilkan desimal
      test('should handle decimal results', () => {
        expect(calculator.divide(5, 2)).toBe(2.5);
      });

      // Test pembagian dengan nol (harus melempar error)
      test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
      });
    });
  });
