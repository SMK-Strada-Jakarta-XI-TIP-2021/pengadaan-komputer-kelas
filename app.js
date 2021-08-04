// jumlah komputer
function jumlahKomputer(kolom, baris) {
    let totalSeluruhPc = kolom * baris;
    return totalSeluruhPc;
}

// jumlah harga komputer
function totalHargaKomputer(harga) {
    let totalHargaPc = jumlahKomputer() * harga;
    return totalHargaPc;
}

console.log(jumlahKomputer(8,10));
console.log(100000);

// hasil
console.log("Reza sedang membeli komputer sebanyak " + jumlahKomputer(8, 10) + " dengan total seharga : " + totalHargaKomputer(100000));