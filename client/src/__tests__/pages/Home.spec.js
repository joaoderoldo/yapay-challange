import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';

import Home from '../../pages/Home';
import AppProvider from '../../contexts';

const apiMock = new MockAdapter(api);

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

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Home Page', () => {
  beforeEach(() => {
    apiMock.onGet('users').reply(200, apiResponse);
    jest.resetAllMocks();
  });
  it('should be able to render Home page with users', async () => {
    const { getByText } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
    });
  });
  it('should be able to remove a User', async () => {
    apiMock.onDelete('users/1').reply(200);

    const { findByText, getByTestId } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    const name = await findByText('John Doe');

    await waitFor(() => {
      expect(name).toBeInTheDocument();
    });

    fireEvent.click(getByTestId('remove-1'));

    await waitFor(() => {
      expect(name).not.toBeInTheDocument();
    });
  });
  it('should be able to render Home page without users', async () => {
    jest.spyOn(console, 'log').mockImplementationOnce(jest.fn());
    apiMock.onGet('users').reply(404);

    const component = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    await waitFor(() => {
      expect(component).toBeTruthy();
    });
  });
  it('should be able to catch error when remove a User', async () => {
    apiMock.onDelete('users/1').reply(404);

    const { findByText, getByTestId } = render(
      <AppProvider>
        <Home />
      </AppProvider>,
    );

    const name = await findByText('John Doe');

    await waitFor(() => {
      expect(name).toBeInTheDocument();
    });

    fireEvent.click(getByTestId('remove-1'));

    await waitFor(() => {
      expect(name).toBeInTheDocument();
    });
  });
});
