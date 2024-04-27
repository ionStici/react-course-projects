import { useSelector } from 'react-redux';
import React from 'react';

function Customer() {
  const customer = useSelector(store => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
