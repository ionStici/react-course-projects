import CreateCustomer from './features/customers/CreateCustomer.jsx';
import Customer from './features/customers/Customer.jsx';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay.jsx';
import { useSelector } from 'react-redux';
import React from 'react';

function App() {
  const fullName = useSelector(state => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
