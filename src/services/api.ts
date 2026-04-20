import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
  },
})

// Intercepteur pour ajouter le token d'authentification
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getFruit = () => api.get('/fruit')
export const getProduit = () => api.get('/produit')
export const getNatura = () => api.get('/natura')
export const getMiel = () => api.get('/miel')
export const getPresentation = () => api.get('/presentation')


