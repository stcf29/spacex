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
        <Header className='header'>
          <p></p>
        </Header>
      </div>
      <div className='menu'>
        <nav>
          <ul>
            <li>
              <Link className='links' to="/">Cadastrar Endereço</Link>
            </li>
            <li>
              <Link className='links' to="/edit">Editar Endereço</Link>
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
                  <button  to="/edit" className='botaoedit' type='submit' onClick={() => setCurrentAddress(address)}>
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
              <p>Não existe um endereço cadastrado, favor selecionar o endereço na página de cadastro e tente novamente.</p>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;