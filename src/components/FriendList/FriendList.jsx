import PropTypes, { arrayOf, shape } from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return <ul className="friend-list">
        {friends.map(({id, name, avatar, isOnline}) => {
            return (<FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline} />)
        })}
        
</ul>
}

FriendList.propTypes = {
    friends: arrayOf(shape({
    id:PropTypes.number.isRequired,
})).isRequired,
}