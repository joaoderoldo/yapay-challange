import React, { createContext, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../services/api';
import { API_BASE_URL } from '../config/constants';

const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  const createUser = useCallback(async (data) => {
    const formData = new FormData();
    formData.append('file', data.avatar);

    const uploadAvatar = await api.post('/upload', formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
      },
    });

    const { filename: avatarURL } = uploadAvatar.data;

    const userData = {
      ...data,
      avatar: `${API_BASE_URL}/image/${avatarURL}`,
    };
    const response = await api.post('/users', userData);
    const { data: newUser } = response;

    setUsers((state) => [...state, newUser]);

    return response;
  }, []);

  const deleteUser = useCallback(async (id) => {
    try {
      await api.delete(`/users/${id}`);

      setUsers((state) => state.filter((user) => user.id !== id));
    } catch (err) {
      toast.error('Error trying to delete a user');
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/users');

        setUsers(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <UserContext.Provider value={{ users, createUser, deleteUser }}>
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { UserContext, UserProvider };
