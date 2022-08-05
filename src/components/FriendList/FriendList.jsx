import PropTypes, { arrayOf, shape } from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";
import {ListofFriends } from 'components/FriendList/FriendList.styled';
import { NameOfTask } from 'components/HomeworkTitle/HomeworkTitle.styled';

export const FriendList = ({friends}) => {
    return <ListofFriends>
        <NameOfTask>List of Friends</NameOfTask>
        {friends.map(({id, name, avatar, isOnline}) => {
            return (<FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline} />)
        })}
        
</ListofFriends>
}

FriendList.propTypes = {
    friends: arrayOf(shape({
    id:PropTypes.number.isRequired,
})).isRequired,
}