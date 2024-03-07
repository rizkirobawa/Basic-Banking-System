"use strict";

class BankAccount {
  constructor(balance = 50000) {
    this.balance = balance;
    this.updateBalance();
  }

  async deposit() {
    return new Promise((resolve, reject) => {
      const amount = parseInt(
        window.prompt("Masukkan jumlah uang yang ingin Anda deposit:")
      );
      setTimeout(() => {
        if (amount > 0 && !isNaN(amount)) {
          this.balance += amount;
          resolve(
            `Anda berhasil melakukan deposit sebesar ${this.formatRupiah(
              amount
            )}.\nTotal Saldo Anda sekarang adalah : ${this.formatRupiah(
              this.balance
            )}`
          );
          this.updateBalance();
        } else if (isNaN(amount)) {
          return reject(window.alert("Wrong input!"));
        } else {
          return reject(
            window.alert("Jumlah saldo yang diinput tidak boleh 0 atau negatif")
          );
        }
      }, 3000);
      window.alert(`Mohon tunggu sebentar...`);
    });
  }

  async withdraw() {
    return new Promise((resolve, reject) => {
      const amount = parseInt(
        window.prompt("Masukkan jumlah uang yang ingin Anda withdraw:")
      );
      setTimeout(() => {
        if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          resolve(
            `Anda berhasil melakukan deposit sebesar ${this.formatRupiah(
              amount
            )}.\nTotal Saldo Anda sekarang adalah : ${this.formatRupiah(
              this.balance
            )}`
          );
          this.updateBalance();
        } else if (isNaN(amount)) {
          return reject(window.alert("Wrong input!"));
        } else if (amount <= 0) {
          return reject(
            window.alert("Jumlah saldo yang diinput tidak boleh 0 atau negatif")
          );
        } else {
          return reject(
            window.alert(
              `Saldo yang diinput tidak boleh lebih besar dari saldo awal!`
            )
          );
        }
      }, 3000);
      window.alert(`Mohon tunggu sebentar...`);
    });
  }

  formatRupiah(amount) {
    let formatSaldo = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatSaldo.format(amount);
  }

  updateBalance() {
    document.getElementById("nilaiSaldo").textContent = this.formatRupiah(
      this.balance
    );
  }
}

const myAccount = new BankAccount();

const depositButton = document.getElementById("depositButton");

depositButton.addEventListener("click", async () => {
  try {
    await transactionDeposit();
  } catch (error) {
    console.log(error);
  }
});

async function transactionDeposit() {
  try {
    window.alert(`Selamat Datang di BanK root`);
    // window.alert(`Mohon tunggu sebentar...`);
    const result = await myAccount.deposit();
    window.alert(result);
    setTimeout(() => {
      window.alert(
        `Transaksi selesai. Menunggu beberapa saat sebelum keluar...`
      );
      setTimeout(() => {
        window.alert(`Terima Kasih`);
      }, 1000);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}

document
  .getElementById("withdrawButton")
  .addEventListener("click", async () => {
    try {
      await transactionWithdraw();
    } catch (error) {
      console.log(error);
    }
  });

async function transactionWithdraw() {
  try {
    window.alert(`Selamat Datang di BanK root`);
    // window.alert(`Mohon tunggu sebentar...`);
    const result = await myAccount.withdraw();
    window.alert(result);
    setTimeout(() => {
      window.alert(
        `Transaksi selesai. Menunggu beberapa saat sebelum keluar...`
      );
      setTimeout(() => {
        window.alert(`Terima Kasih`);
      }, 1000);
    }, 2000);
  } catch (error) {
    console.log(error);
  }
}
