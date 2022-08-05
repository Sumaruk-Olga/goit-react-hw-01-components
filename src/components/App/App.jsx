import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
import { Container } from './App.styled';
import { HomeworkTitle } from 'components/HomeworkTitle/HomeworkTitle.styled';
import { Footer } from 'components/Footer/Footer';

export const App = () => {
  return (
    <Container>
      <HomeworkTitle>homework 1</HomeworkTitle>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />      
      <TransactionHistory items={transactions} />
      <Footer/>    
    </Container>
  );
};
