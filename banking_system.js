class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount <= 0 && isNaN(amount)) {
          return reject("Wrong input!");
        } else {
          this.balance += amount;
          resolve(
            `Anda berhasil melakukan deposit sebesar ${amount}. Total Saldo Anda sekarang adalah : ${this.balance}`
          );
        }
      }, 3000);
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(amount)) {
          return reject("Wrong input!");
        } else if (amount >= this.balance) {
          return reject("Saldo Anda tidak mencukupi untuk melakukan withdraw");
        } else {
          this.balance -= amount;
          resolve(
            `Anda berhasil melakukan withdraw sebesar ${amount}. Total Saldo Anda sekarang adalah : ${this.balance}`
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
    console.log(await myAccount.deposit(100));
    console.log(await myAccount.withdraw(50));
    console.log(`Transaksi selesai. Menunggu beberapa saat sebelum keluar...`);
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await transaction();
  setTimeout(() => {
    console.log(`Terima Kasih`);
  }, 4000);
})();
