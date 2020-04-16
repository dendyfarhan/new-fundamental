//membuat array
var readline = require('readline-sync');
var n = parseInt(readline.question(' Masukan jumlah data: '));
var a = new Array();
var total = 0.0;
for (let i=0; i<n; i++) {
a[i] = parseFloat(readline.question(` Data ke- ${i+1}: `));
total += a[i];
}
var ratarata = total/a.length;
console.log(` Isi array a: ${a} `);
console.log(` Total data: ${total} `);
console.log(` Rata-rata: ${ratarata} `);

// membuat array asosiatif
var a = new Array();
a['http'] = 'Hypertext Transfer Protocol';
a['html'] = 'Hypertext Markup Language';
a['xml'] = 'Extensible Markup Language';
a['json'] = 'JavaScript Object Notation';
for(key in a) {
console.log(key.toUpperCase() + ' \t= ' + a[key]);
}

//array 2 dimensi
var barang = [
    ['B001', 'Spidol', 8500],
    //elemen kesatu
    ['B002', 'Stabilo', 13000],
    //elemen kedua
    ['B003', 'Pensil', 5500],
    //elemen ketiga
    ['B004', 'Crayon', 12000]
    //elemen keempat
];
    console.log(' KODE \t NAMA BARANG \t HARGA ');
    console.log(' ---- \t ----------- \t ----- ');
    for(let i=0; i<barang.length; i++) {
    for(let j=0; j<barang[i].length; j++) {
        process.stdout.write(barang[i][j].toString());
if(j<barang[i].length-1) {
process.stdout.write(' \t ');
}
}
console.log(); // ganti baris
}

//modul aritmatika
module.exports = {tambah, kurang, kali, bagi};
function tambah(a, b) {
return a + b;
}
function kurang(a, b) {
return a - b;
}
function kali(a, b) {
return a * b;
}
function bagi(a, b) {
return a / b;
}


//modularisasi kode
module.paths = ['./'];
var aritmatika = require('aritmatika');
var aritmatika = require('./aritmatika');
var a=10, b=3;
console.log(` ${a} + ${b} = ` + aritmatika.tambah(a, b) );
console.log(` ${a} - ${b} = ` + aritmatika.kurang(a, b) );
console.log(` ${a} * ${b} = ` + aritmatika.kali(a, b) );
console.log(` ${a} / ${b} = ` + aritmatika.bagi(a, b) );


