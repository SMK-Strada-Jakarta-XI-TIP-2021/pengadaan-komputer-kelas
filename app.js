// //jumlah komputer
function jumlahKomputer(kolom,baris) {
    const jumlah = kolom * baris;
    return jumlah;
}

// jumlah harga komputer
function totalHargaKomputer(kolom,baris,harga) {
    let totalPc = jumlahKomputer(kolom,baris);
    return  totalPc * harga;
}

// function komputer(kolom, baris) {
//     let jumlahKomputer = kolom * baris;
//     function totalHarga(harga) {
//         let total = jumlahKomputer * harga;
//         return total
//     }
//     return totalHarga();
// }

console.log(jumlahKomputer(8, 10));
console.log(totalHargaKomputer(8,10,100000))

// hasil
// pc1
console.log("Max sedang membeli komputer sebanyak " + jumlahKomputer(8, 10) + " dengan seharga : " + totalHargaKomputer(8, 10, 100000));

// pc2
console.log("Johan sedang membeli komputer sebanyak " + jumlahKomputer(4, 3) + " dengan seharga : " + totalHargaKomputer(4, 3, 152685));

// pc3
console.log("Sulthan sedang membeli komputer sebanyak " + jumlahKomputer(15, 12) + " dengan seharga : " + totalHargaKomputer(15, 12, 305578));

// pc4
console.log("Adri sedang membeli komputer sebanyak " + jumlahKomputer(6,8) + " dengan seharga : " + totalHargaKomputer(6,8,979567));