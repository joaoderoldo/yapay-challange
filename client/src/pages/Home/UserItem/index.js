import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

import { TiDelete } from 'react-icons/ti';

import { UserContext } from '../../../contexts/UserContext';

import {
  Container,
  Name,
  Email,
  Picture,
  Phone,
  UserInfo,
  RemoveUser,
} from './styles';

function UserItem({ data }) {
  const { deleteUser } = useContext(UserContext);

  return (
    <Container>
      <Picture src={data.avatar} />
      <UserInfo>
        <Name>
          {data.name}
          <small>{`(${data.username})`}</small>
        </Name>
        <Phone href={`tel:${data.phone}`}>{data.phone}</Phone>
      </UserInfo>
      <Email href={`mailto:${data.email}`}>{data.email}</Email>
      <RemoveUser
        onClick={() => deleteUser(data.id)}
        data-testid={`remove-${data.id}`}
      >
        <TiDelete />
      </RemoveUser>
    </Container>
  );
}

UserItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default memo(UserItem);
