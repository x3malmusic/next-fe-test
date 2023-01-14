import axios from 'axios'

import { ICategory } from '../pages/api/categories';
import { IRecipe } from '../pages/api/recipes/[id]';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

export const getCategories = () => http.get<ICategory[]>('/api/categories')
export const getRecipeById = (id: string) => http.get<IRecipe>(`/api/recipes/${id}`)
