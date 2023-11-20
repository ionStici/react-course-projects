import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Button from './Button';

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  useEffect(() => {
    setBill('');
    setPaidByUser('');
    setWhoIsPaying('user');
  }, [selectedFriend]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={({ target }) => setBill(+target.value)}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={({ target }) => {
          setPaidByUser(+target.value > bill ? paidByUser : +target.value);
        }}
      />

      <label>👫 {selectedFriend.name}&apos;s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={({ target }) => setWhoIsPaying(target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

FormSplitBill.propTypes = {
  selectedFriend: PropTypes.object,
  onSplitBill: PropTypes.func,
};

export default FormSplitBill;
