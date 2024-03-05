"use strict";

let saldo = 0;

function tampilSaldo() {
  document.getElementById("nilaiSaldo").textContent = saldo;
}
tampilSaldo(); // Memanggil fungsi tampilSaldo untuk menampilkan saldo awal

function tambahSaldo() {
  // Meminta pengguna memasukkan jumlah saldo yang ingin ditambahkan
  let tambahUang = parseInt(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan: ")
  );

  // Validasi input pengguna
  if (tambahUang <= 0) {
    window.alert("Input tidak valid.");
    return;
  }

  // Menambahkan jumlah saldo
  saldo += tambahUang;

  tampilSaldo(); // Memanggil fungsi tampilSaldo setelah saldo diperbarui
  return;
}

function kurangiSaldo() {
  // Meminta pengguna memasukkan jumlah saldo yang ingin dikurangi
  let kurangiUang = parseInt(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );

  // Validasi input pengguna
  if (kurangiUang <= 0) {
    window.alert("Input tidak valid.");
    return;
  }

  let saldoSetelahPengurangan = saldo - kurangiUang;

  if (saldoSetelahPengurangan < 0) {
    window.alert("Saldo tidak mencukupi jumlah minimum saldo.");
    return;
  }

  saldo = saldoSetelahPengurangan;
  tampilSaldo(); // Memanggil fungsi tampilSaldo setelah saldo diperbarui
  return;
}

// Menambahkan event listener ke tombol-tombol
document.querySelector(".btnTambah").addEventListener("click", tambahSaldo);
document
  .getElementById("kurangiButton")
  .addEventListener("click", kurangiSaldo);

