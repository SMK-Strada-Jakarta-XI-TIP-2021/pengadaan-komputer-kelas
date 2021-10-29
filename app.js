function jumlahKomputer(kolom,baris) {
    const jumlah = kolom * baris;
    return jumlah;
}

// jumlah harga komputer
function totalHargaKomputer(kolom,baris,harga) {
    let totalaptop = jumlahKomputer(kolom,baris);
    return  totalaptop * harga;
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
console.log(totalHargaKomputer(7,10,100000))

// hasil
// pc1
console.log("zefanya sedang membeli komputer sebanyak " + jumlahKomputer(8, 10) + " dengan seharga : " + totalHargaKomputer(7, 10, 100000));

// pc2
console.log("irene sedang membeli komputer sebanyak " + jumlahKomputer(4, 3) + " dengan seharga : " + totalHargaKomputer(4, 3, 152685));

// pc3
console.log("nopia sedang membeli komputer sebanyak " + jumlahKomputer(15, 12) + " dengan seharga : " + totalHargaKomputer(15, 12, 305578));

// pc4
console.log("wanda sedang membeli komputer sebanyak " + jumlahKomputer(6,8) + " dengan seharga : " + totalHargaKomputer(6,8,979567));