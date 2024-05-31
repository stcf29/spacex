// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AddressForm from './components/AddressForm';
import EditAddress from './components/EditAddress';
import Header from './components/Header/index';

const App = () => {
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAddAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const handleEditAddress = (address) => {
    setAddresses(
      addresses.map((addr) => (addr === currentAddress ? address : addr))
    );
    setCurrentAddress(null);
  };

  return (
    <Router>
      <div className='header'>
        <Header>
          <p>teste </p>
        </Header>
      </div>
      <div className='menu'>
        <nav>
          <ul>
            <li>
              <Link to="/">Cadastrar Endereço</Link>
            </li>
            <li>
              <Link to="/edit">Editar Endereço</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <AddressForm onSubmit={handleAddAddress} />
            <ul>
              {addresses.map((address, index) => (
                <li key={index}>
                  {address.planet} - {address.code}
                  <button onClick={() => setCurrentAddress(address)}>
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </Route>
          <Route path="/edit">
            {currentAddress ? (
              <EditAddress
                initialAddress={currentAddress}
                onSubmit={handleEditAddress}
              />
            ) : (
              <p>Selecione um endereço para editar.</p>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;