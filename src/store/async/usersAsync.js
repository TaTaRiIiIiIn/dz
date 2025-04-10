import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://fakestoreapi.com/users';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch(API_URL);
  return await response.json();
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
});
