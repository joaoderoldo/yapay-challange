import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import CreateUser from '../../pages/CreateUser';
import AppProvider from '../../contexts';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }) => children,
  };
});

const apiResponse = [
  {
    id: 1,
    name: 'John Doe',
    username: 'John',
    email: 'test@email.com',
    phone: '(11) 1234-5676',
    avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
];

const apiPostResponse = {
  id: 2,
  name: 'John Doe',
  username: 'John',
  email: 'john@test.com',
  phone: '11999999999',
  avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
};

describe('CreateUser Page', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    apiMock.onGet('users').reply(200, apiResponse);
  });
  it('should be able to render CreateUser page', async () => {
    const component = render(
      <AppProvider>
        <CreateUser />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(component).toBeTruthy();
    });
  });
  it('should be able to render toast with form errors', async () => {
    const { getByRole, getByText } = render(
      <AppProvider>
        <CreateUser />
      </AppProvider>,
    );

    fireEvent.click(getByText('Create'));

    await waitFor(() => {
      expect(getByRole('alert')).toBeTruthy();
    });
  });
  it('should be able to submit a valid data', async () => {
    apiMock.onPost('upload').reply(200, { filename: 'photo' });
    apiMock.onPost('users').reply(201, apiPostResponse);
    global.URL.createObjectURL = jest.fn();
    jest.useFakeTimers();

    const { getByPlaceholderText, getByText, getByTestId } = render(
      <AppProvider>
        <CreateUser />
      </AppProvider>,
    );
    const file = new File(['test'], 'test.png', { type: 'image/png' });

    const avatar = getByTestId('avatar-input');
    const name = getByPlaceholderText('Name');
    const username = getByPlaceholderText('Username');
    const email = getByPlaceholderText('E-mail');
    const phone = getByPlaceholderText('Phone');

    act(() => {
      fireEvent.change(avatar, {
        target: { files: [file] },
      });
      fireEvent.change(name, {
        target: { value: 'John Doe' },
      });
      fireEvent.change(username, {
        target: { value: 'John' },
      });
      fireEvent.change(email, {
        target: { value: 'john@test.com' },
      });
      fireEvent.change(phone, {
        target: { value: '11999999999' },
      });
      fireEvent.click(getByText('Create'));
    });

    jest.runAllTimers();

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
