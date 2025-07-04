import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { name: name, quantity: quantity, checked: false, id: Date.now() };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
  }


  // membuat sebuah variabel array yang isi nya 20 buah undefined 'cth: [undifine, undifine, ...]' menggunakan spread operator '[... Array...]'
  const quantityNum = [...Array(20)].map((_, i) => (
    <option value={i+1} key={ i + 1 } >{ i + 1 }</option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <button>Tambah</button>
    </form>
  )
}