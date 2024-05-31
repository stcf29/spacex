// src/components/EditAddress.js
import React, { useState, useEffect } from 'react';

const EditAddress = ({ initialAddress, onSubmit }) => {
  const [address, setAddress] = useState(initialAddress);

  useEffect(() => {
    setAddress(initialAddress);
  }, [initialAddress]);

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
      <label>
        Planeta:
        <select className='field1' name="planet" value={address.planet} onChange={handleChange}>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
        </select>
      </label>
      <br />
      <label>
        Código do Lote:
        <input 
          className='field2'
          type="text"
          name="code"
          value={address.code}
          onChange={handleChange}
          pattern="\d{4}"
          required
        />
      </label>
      <br />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditAddress;