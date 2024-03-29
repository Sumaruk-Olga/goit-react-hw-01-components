import PropTypes from 'prop-types';
import {Paper, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from 'components/Profile/Profile.styled';
import { NameOfTask } from 'components/HomeworkTitle/HomeworkTitle.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  
  return (    
<Paper>
  <NameOfTask>Social network profile</NameOfTask>
  <Description>
    <Avatar src={ avatar } alt="User avatar" />
        <Name>{ username }</Name>
        <Tag>@{ tag }</Tag>
        <Location>{ location }</Location>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
          <Quantity>{ stats.followers }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
          <Quantity>{ stats.views }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
          <Quantity>{ stats.likes }</Quantity>
    </StatsItem>
  </Stats>
</Paper>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
