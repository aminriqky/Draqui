//Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var personObj = {
    nama : "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}

console.log(personObj.nama);
console.log(personObj.jenisKelamin);
console.log(personObj.hobi);
console.log(personObj.tahunLahir);

//Soal 2
var buah = [{nama: "strawberry", warna: "merah", adaBijinya: "tidak", harga: "9000"}, 
{nama: "jeruk", warna: "oranye", adaBijinya: "ada", harga: "8000"}, 
{nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: "10000"},
{nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: "5000"}]

var arrayBuahFilter = buah.filter(function(item){
    return item.nama == "strawberry";
 })
 
 console.log(arrayBuahFilter);

 //Soal 3
var dataFilm = [];
 
function tambahFilm(film) {
    return dataFilm.splice(0, 0, film);
}

var film = {
    nama: "A Whisker Away", 
    durasi: "1 Jam 44 Menit", 
    genre: "Animation/Fantasy", 
    tahun: "2020"
}

var data = tambahFilm(film);
console.log(dataFilm);

//Soal 4
class Animal {
    constructor(sheep) {
        this._name = sheep;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }
    set name(x) {
        return this._name = x;
    }

    get legs() {
        return this._legs;
    }
    set legs(x) {
        return this._legs = x;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }
    set cold_blooded(x) {
        return this._cold_blooded = x;
    }
}
class Ape extends Animal{
    constructor (sungokong) {
        super(sungokong);
        this._apeName = sungokong;
        this._apeLegs = 2;
    }
    yell() {
        return console.log("Auooo");
    }
}
class Frog extends Animal{
    constructor (kodok) {
        super(kodok);
        this._frogName = kodok;
        this._frogLegs = 2;
    }
    jump() {
        return console.log("hop hop");
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

var sungokong = new Ape("kera sakti")
sungokong.yell()

var kodok = new Frog("buduk");
kodok.jump();

//Soal 5
class Clock {
    constructor ({ template }) {
    
        var timer;
    
        function render() {
            var date = new Date();
        
            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
        
            console.log(output);
        }
    
        this.stop = function() {
            clearInterval(timer);
        };
    
        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        }
    }
}
  
var clock = new Clock({template: 'h:m:s'});
clock.start();