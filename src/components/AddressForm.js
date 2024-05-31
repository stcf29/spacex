// src/components/AddressForm.js
import React, { useState } from 'react';

const AddressForm = ({ onSubmit }) => {
  const [address, setAddress] = useState({ planet: 'Terra', code: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='label'>
        Planeta:
        <select className='input' name="planet" value={address.planet} onChange={handleChange}>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
        </select>
      </label>
      <br />
      <label className='label'>
        Código do Lote:
        <input className='input'
          type="text"
          name="code"
          value={address.code}
          onChange={handleChange}
          pattern="\d{4}"
          required
        />
      </label>
      <br />
      <button className='botao' type="submit">Cadastrar Endereço</button>
    </form>
  );
};

export default AddressForm;