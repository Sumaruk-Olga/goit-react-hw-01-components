import PropTypes from 'prop-types';
import { Friend, FriendAvatar, FriendName, FriendStatus } from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return <Friend>
        <FriendStatus status={isOnline}></FriendStatus>
        <FriendAvatar src={avatar} alt="User avatar" />
        <FriendName>{name}</FriendName>
    </Friend>
}

FriendListItem.protoTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}