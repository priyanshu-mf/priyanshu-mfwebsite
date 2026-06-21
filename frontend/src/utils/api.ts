import axios from 'axios'
import { getToken } from './auth'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Handle responses
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error)
  }
)

export const storyAPI = {
  getAll: () => apiClient.get('/stories'),
  getById: (id: string) => apiClient.get(`/stories/${id}`),
  create: (data: any) => apiClient.post('/stories', data),
  update: (id: string, data: any) => apiClient.put(`/stories/${id}`, data),
  delete: (id: string) => apiClient.delete(`/stories/${id}`),
  search: (query: string) => apiClient.get(`/stories/search?q=${query}`),
  getByGenre: (genre: string) => apiClient.get(`/stories/genre/${genre}`),
}

export const poemAPI = {
  getAll: () => apiClient.get('/poems'),
  getById: (id: string) => apiClient.get(`/poems/${id}`),
  create: (data: any) => apiClient.post('/poems', data),
  update: (id: string, data: any) => apiClient.put(`/poems/${id}`, data),
  delete: (id: string) => apiClient.delete(`/poems/${id}`),
}

export const commentAPI = {
  getByStory: (storyId: string) => apiClient.get(`/comments/story/${storyId}`),
  create: (data: any) => apiClient.post('/comments', data),
  delete: (id: string) => apiClient.delete(`/comments/${id}`),
  update: (id: string, data: any) => apiClient.put(`/comments/${id}`, data),
}

export const likeAPI = {
  toggleStoryLike: (storyId: string) => apiClient.post(`/likes/story/${storyId}`),
  togglePoemLike: (poemId: string) => apiClient.post(`/likes/poem/${poemId}`),
}

export const bookmarkAPI = {
  getAll: () => apiClient.get('/bookmarks'),
  add: (storyId: string) => apiClient.post(`/bookmarks/${storyId}`),
  remove: (storyId: string) => apiClient.delete(`/bookmarks/${storyId}`),
}

export const authAPI = {
  register: (email: string, password: string, username: string) =>
    apiClient.post('/auth/register', { email, password, username }),
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  logout: () => apiClient.post('/auth/logout'),
  getCurrentUser: () => apiClient.get('/auth/me'),
}

export const adminAPI = {
  getAnalytics: () => apiClient.get('/admin/analytics'),
  getReaders: () => apiClient.get('/admin/readers'),
  getActivity: () => apiClient.get('/admin/activity'),
  uploadMedia: (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    return apiClient.post('/admin/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

export default apiClient
