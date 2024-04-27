import React, { useState, useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');
  const [isLoading, setIsLoading] = useState(false);
  const [converted, setConverted] = useState('');

  useEffect(() => {
    async function convert() {
      setIsLoading(true);

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();

      setConverted(data.rates[toCur]);
      setIsLoading(false);
    }

    if (fromCur === toCur) return setConverted(amount);
    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={e => setFromCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCur}
        onChange={e => setToCur(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}

export default App;
