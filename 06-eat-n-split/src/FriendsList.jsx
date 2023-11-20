import PropTypes from 'prop-types';
import Friend from './Friend';

function FriendsList({ friends, onSelection, selectedFriend }) {
  console.log(friends);
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
  onSelection: PropTypes.func,
  selectedFriend: PropTypes.object,
};

export default FriendsList;
