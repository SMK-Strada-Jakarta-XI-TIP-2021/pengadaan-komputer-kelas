// fungsi menentukan jumlah komputer
function jumlahKomputer (a, b) {
    var baris;
    var kolom;
    var total;
    
    baris = a;
    kolom = b;
    
    total = baris * kolom;
    
    return total;
    
    }

    // total jumlah komputer setiap kelas
    console.log ("Komputer kelas 1 =" + jumlahKomputer(8, 10));
    console.log ("Komputer kelas 2 =" + jumlahKomputer(4, 3));
    console.log ("Komputer kelas 3 =" + jumlahKomputer(15, 12));
    console.log ("Komputer kelas 4 =" + jumlahKomputer(6, 8));
    
    // fungsi menentukan jumlah harga komputer
    function hargaKomputer (a , b) {
        var harga;
        var harga;
        var total;
    
        harga = a ;
        harga = b ;
        total = a * b;
    
        return total;
    }
    // total harga jumlah komputer
    console.log('Harga Komputer' + ' 1 ' + ' = ' + hargaKomputer(80, 100000));
    console.log('Harga Komputer' + ' 2 ' + ' = ' + hargaKomputer(12, 152685));
    console.log('Harga Komputer' + ' 3 ' + ' = ' + hargaKomputer(180, 305578));
    console.log('Harga Komputer' + ' 4 ' + ' = ' + hargaKomputer(48, 979567));