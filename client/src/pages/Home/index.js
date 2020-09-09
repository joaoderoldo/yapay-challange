import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RiUserAddLine } from 'react-icons/ri';

import { UserContext } from '../../contexts/UserContext';

import Panel from '../../components/Panel';
import Heading from '../../components/Heading';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';

import UserItem from './UserItem';

import { Container, UserList, Title } from './styles';

function Home() {
  const { users } = useContext(UserContext);

  return (
    <Container>
      <Panel>
        <Heading>
          <PageTitle>User List</PageTitle>
          <Button as={Link} to="/users/new" id="create-user">
            <span>Add User</span>
            <RiUserAddLine id="create-user-icon" />
          </Button>
        </Heading>
        <UserList>
          {users?.map((user) => (
            <UserItem data={user} key={user.id} />
          ))}
        </UserList>
      </Panel>
    </Container>
  );
}

export default Home;
