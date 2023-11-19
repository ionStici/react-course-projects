import PropTypes from 'prop-types';
import Friend from './Friend';

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array,
};

export default FriendsList;
