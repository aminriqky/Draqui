//Soal 1
const luas = () => 3.14*jari*jari;
const keliling = () => 2*3.14*jari;

let jari = 14
console.log('Luas Lingkaran = '+luas()+' cm²');
console.log('Keliling Lingkaran = '+keliling()+' cm²');

//Soal 2
let kalimat = ""

const kata1 = "saya"
const kata2 = "adalah"
const kata3 = "seorang"
const kata4 = "frontend"
const kata5 = "developer"

const hasil = () => kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;

hasil();
console.log(kalimat);

//Soal 3
class Book{
    constructor(buku, halaman, harga){
        this.name = buku;
        this.totalPage = halaman;
        this.price = harga;
    }
}
class Komik extends Book{
    constructor(){
        super()
        this.isColorful=true;
    }
    output(){
        return "Nama Komik = "+buku.name+"\nJumlah Halaman = "+buku.totalPage+"\nHarga = "+buku.price+"\nBerwarna = "+this.isColorful
    }
}

let buku = new Book("Naruto", 223, 125.000);
let komik = new Komik();
console.log(komik.output());