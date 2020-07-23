//Soal 1
var kode = 2;
console.log('LOOPING PERTAMA');
while(kode <= 20) {
  console.log(kode+' - I love coding');
  kode++;
  kode++;
}

var code = 20;
console.log('LOOPING KEDUA');
while(code >= 2) {
  console.log(code+' - I will become a frontend developer');
  code--;
  code--;
}

//Soal 2
for (var angka = 1; angka <= 20; angka++) {
  if (angka%3==0&&angka%2==1) {
    console.log(angka+' - I Love Coding');
  }else if (angka%2==1) {
    console.log(angka+' - Santai');
  }else if (angka%2==0) {
    console.log(angka+' - Berkualitas');
  }
}

//Soal 3
for (var segitiga="#";segitiga.length<=7;segitiga=segitiga+"#")
console.log(segitiga);

//Soal 4
var kalimat="saya sangat senang belajar javascript"
var kalimat=kalimat.split(" ");
console.log(kalimat);

//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var daftarBuah = daftarBuah.sort();
var buah = daftarBuah.length;
for (var i = 0; i < buah; i++) {
  console.log(daftarBuah[i]);
}