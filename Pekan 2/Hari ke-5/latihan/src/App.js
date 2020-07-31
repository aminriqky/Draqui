import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Form Pembelian Buah</h1>
        <b id="Nama">Nama Pelanggan</b><input type="text"></input>
        </header>
        <br></br>
        <div class="item">
            <input type="checkbox"></input><label for="Semangka">Semangka</label><br></br>
            <input type="checkbox"></input><label for="Jeruk">Jeruk</label><br></br>
            <input type="checkbox"></input><label for="Nanas">Nanas</label><br></br>
            <input type="checkbox"></input><label for="Salak">Salak</label><br></br>
        </div>
        <br></br>
        <b id="rapi">Daftar Item</b><input type="checkbox" id="anggur"></input><label for="Anggur">Anggur</label><br></br>
        <p><input type="button" value="Kirim" id="kirim"></input></p>
    </div>
  );
}

export default App;
