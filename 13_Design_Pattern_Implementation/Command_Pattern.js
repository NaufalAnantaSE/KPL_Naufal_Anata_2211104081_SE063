// Command Interface
// Mendefinisikan kontrak untuk semua perintah konkret
class IOrderCommand {
    // Metode abstrak yang harus diimplementasikan oleh semua perintah konkret
    execute() {
        throw new Error('Method execute() belum diimplementasikan!');
    }
}

// Concrete Commands
// Implementasi spesifik dari perintah untuk memesan makanan
class OrderFoodCommand extends IOrderCommand {
    constructor(chef, dish) {
        super();
        this.chef = chef; // Menyimpan referensi ke Chef (Receiver)
        this.dish = dish; // Menyimpan nama hidangan yang dipesan
    }

    // Implementasi metode execute untuk memesan makanan
    execute() {
        this.chef.prepareFood(this.dish);
    }
}

// Implementasi spesifik dari perintah untuk membatalkan pesanan
class CancelOrderCommand extends IOrderCommand {
    constructor(chef, dish) {
        super();
        this.chef = chef; // Menyimpan referensi ke Chef (Receiver)
        this.dish = dish; // Menyimpan nama hidangan yang dibatalkan
    }

    // Implementasi metode execute untuk membatalkan pesanan
    execute() {
        this.chef.cancelFood(this.dish);
    }
}

// Receiver
// Kelas yang melakukan pekerjaan sebenarnya
class Chef {
    // Metode untuk menyiapkan makanan
    prepareFood(dish) {
        console.log(`Chef: Menyiapkan ${dish}`);
    }

    // Metode untuk membatalkan pesanan makanan
    cancelFood(dish) {
        console.log(`Chef: Membatalkan pesanan ${dish}`);
    }
}

// Invoker
// Kelas yang menerima dan menyimpan perintah, kemudian mengeksekusinya
class Waiter {
    constructor() {
        this.orders = []; // Array untuk menyimpan perintah-perintah
    }

    // Metode untuk menerima perintah
    takeOrder(command) {
        this.orders.push(command);
    }

    // Metode untuk mengeksekusi semua perintah yang telah diterima
    placeOrders() {
        console.log("Waiter: Menyampaikan pesanan ke dapur");
        for (let command of this.orders) {
            command.execute();
        }
        this.orders = []; // Mengosongkan daftar perintah setelah dieksekusi
    }
}

// Client code
const chef = new Chef(); // Membuat instance dari Receiver (Chef)
const waiter = new Waiter(); // Membuat instance dari Invoker (Waiter)

// Membuat dan menambahkan perintah-perintah ke Waiter
waiter.takeOrder(new OrderFoodCommand(chef, "Nasi Goreng"));
waiter.takeOrder(new OrderFoodCommand(chef, "Soto Ayam"));
waiter.takeOrder(new CancelOrderCommand(chef, "Nasi Goreng"));
waiter.takeOrder(new OrderFoodCommand(chef, "Es Teh Manis"));

// Mengeksekusi semua perintah yang telah ditambahkan
waiter.placeOrders();