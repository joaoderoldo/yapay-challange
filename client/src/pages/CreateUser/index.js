import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UserContext } from '../../contexts/UserContext';

import Panel from '../../components/Panel';
import Heading from '../../components/Heading';
import PageTitle from '../../components/PageTitle';
import AvatarInput from '../../components/AvatarInput';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  UserForm,
  FormAction,
  FormInputs,
  Avatar,
  FormWrapper,
} from './styles';

const ErrorList = ({ data }) => (
  <ul>
    {data.map((item, index) => (
      <li key={`${Date.now() + index}`}>&bull; {item}</li>
    ))}
  </ul>
);

function CreateUser() {
  const history = useHistory();
  const { createUser } = useContext(UserContext);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          username: Yup.string().required(),
          email: Yup.string().email().required(),
          phone: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { status } = await createUser(data);

        if (status === 201) {
          toast.success('User created successfully', {
            autoClose: 3000,
          });

          setTimeout(() => {
            history.push('/');
          }, 3000);
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          toast.error(<ErrorList data={err.errors} />);
        }
      }
    },
    [history, createUser],
  );

  return (
    <Container>
      <Panel>
        <Heading>
          <Button as={Link} to="/" id="back-button">
            <FaAngleLeft />
            <span>Back</span>
          </Button>
          <PageTitle>Create User</PageTitle>
        </Heading>
        <UserForm as={Form} onSubmit={handleSubmit}>
          <FormWrapper>
            <Avatar>
              <AvatarInput data-testid="avatar-input" name="avatar" />
            </Avatar>
            <FormInputs>
              <Input name="name" type="text" placeholder="Name" />
              <Input name="username" type="text" placeholder="Username" />
              <Input name="email" type="text" placeholder="E-mail" />
              <Input name="phone" type="text" placeholder="Phone" />
            </FormInputs>
          </FormWrapper>
          <FormAction>
            <Button type="submit">Create</Button>
          </FormAction>
        </UserForm>
      </Panel>
    </Container>
  );
}

ErrorList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CreateUser;
