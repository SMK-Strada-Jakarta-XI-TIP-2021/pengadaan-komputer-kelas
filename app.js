//menghitung jumlah komputer
function tampilkanKolomBaris(kolom, baris) {
    return kolom * baris;
}
function kolomBaris(kolom, baris, harga) {
    return harga * kolom * baris;
}
console.log(' komputer satu = ' + tampilkanKolomBaris(8, 10))
console.log(' harga = ' + kolomBaris(8, 10, 100000))
console.log(' komputer dua = ' + tampilkanKolomBaris(4, 3))
console.log(' harga = ' + kolomBaris(4, 3, 152685))
console.log(' komputer tiga = ' + tampilkanKolomBaris(15, 12))
console.log(' harga = ' + kolomBaris(15, 12, 305578))
console.log(' komputer empat = ' + tampilkanKolomBaris(6, 8))
console.log(' harga = ' + kolomBaris(6, 8, 979567))

