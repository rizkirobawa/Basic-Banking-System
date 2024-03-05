class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 0 && !isNaN(amount)) {
          this.balance += amount;
          resolve(
            `Anda berhasil melakukan deposit sebesar ${amount}. Total Saldo Anda sekarang adalah : ${this.balance}`
          );
        } else if (isNaN(amount)) {
          return reject("Wrong input!");
        } else {
          return reject("Saldo yang diinput tidak boleh 0");
        }
      }, 3000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          resolve(
            `Anda berhasil melakukan deposit sebesar ${amount}. Total Saldo Anda sekarang adalah : ${this.balance}`
          );
        } else if (isNaN(amount)) {
          return reject("Wrong input!");
        } else if (amount <= 0) {
          return reject("Saldo yang diinput tidak boleh 0");
        } else {
          return reject(
            `Saldo yang diinput tidak boleh lebih besar dari saldo awal!`
          );
        }
      }, 3000);
    });
  }
}

const myAccount = new BankAccount();

async function transaction() {
  try {
    console.log(`Selamat Datang di BanK root`);
    console.log(await myAccount.deposit(12000));
    console.log(await myAccount.withdraw(10000));
    setTimeout(() => {
      console.log(
        `Transaksi selesai. Menunggu beberapa saat sebelum keluar...`
      );
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await transaction();
  setTimeout(() => {
    console.log(`Terima Kasih`);
  }, 5000);
})();
