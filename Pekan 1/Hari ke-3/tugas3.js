//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var duabag=kataKedua.substr(1);
var duakap=kataKedua.charAt(0);
var duakap=duakap.toUpperCase();
var dua=duakap+duabag;
var empat=kataKeempat.toUpperCase();

console.log(kataPertama.concat(" "+dua+" "+kataKetiga+" "+empat));

//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var pertama=parseInt(kataPertama);
var kedua=parseInt(kataKedua);
var ketiga=parseInt(kataKetiga);
var keempat=parseInt(kataKeempat);

var hasil=pertama+kedua+ketiga+keempat;

console.log(kataPertama+" + "+kataKedua+" + "+kataKetiga+" + "+kataKeempat+" = "+hasil);

//Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama1 = kalimat.substring(0, 3); 
var kataKedua2 = kalimat.substring(4, 14);
var kataKetiga3 = kalimat.substring(15, 18);
var kataKeempat4 = kalimat.substring(19, 24);
var kataKelima5 = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama1);
console.log('Kata Kedua: ' + kataKedua2); 
console.log('Kata Ketiga: ' + kataKetiga3); 
console.log('Kata Keempat: ' + kataKeempat4); 
console.log('Kata Kelima: ' + kataKelima5);

//Soal 4
var nilai="71";
var intnilai=parseInt(nilai);
if (intnilai>=80) {
    console.log("Nilai = A");
}else if (intnilai>=70&&intnilai<80) {
    console.log("Nilai = B");
}else if (intnilai>=60&&intnilai<70) {
    console.log("Nilai = C");
}else if (intnilai>=50&&intnilai<60) {
    console.log("Nilai = D");
}else if (intnilai<50) {
    console.log("Nilai = E");
}

//Soal 5
var tanggal = 13;
var bulan = 11;
var tahun = 2000;
switch (bulan) {
    case 1:
        bulan="Januari";
        break;
    case 2:
        bulan="Februari";
        break;
    case 3:
        bulan="Maret";
        break;
    case 4:
        bulan="April";
        break;
    case 5:
        bulan="Mei";
        break;
    case 6:
        bulan="Juni";
        break;
    case 7:
        bulan="Juli";
        break;
    case 8:
        bulan="Agustus";
        break;
    case 9:
        bulan="September";
        break;
    case 10:
        bulan="Oktober";
        break;
    case 11:
        bulan="November";
        break;
    case 12:
        bulan="Desember";
        break;
    default:
        break;
}

console.log(tanggal+" "+bulan+" "+tahun);