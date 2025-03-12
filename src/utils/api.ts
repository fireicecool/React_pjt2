import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// 게시물 타입 정의
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// 기본 API 설정
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 - 요청 전에 실행
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 토큰이 있으면 헤더에 추가
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => {
    // 요청 오류 처리
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 응답 받은 후 실행
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답 데이터 처리
    return response;
  },
  (error: unknown) => {
    // 응답 오류 처리
    if (axios.isAxiosError(error) && error.response) {
      // 서버 응답이 있지만 상태 코드가 2xx 범위를 벗어남
      console.error('API 오류:', error.response.status, error.response.data);
      
      // 401 인증 오류 처리
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        // 로그인 페이지로 리다이렉트 등의 처리
      }
    } else if (axios.isAxiosError(error) && error.request) {
      // 요청은 보냈지만 응답을 받지 못함
      console.error('API 응답 없음:', error.request);
    } else {
      // 요청 설정 중 오류 발생
      console.error('API 설정 오류:', error instanceof Error ? error.message : String(error));
    }
    
    return Promise.reject(error);
  }
);

// API 함수들
export const fetchPosts = () => api.get<Post[]>('/posts');
export const fetchPost = (id: number) => api.get<Post>(`/posts/${id}`);
export const createPost = (data: Omit<Post, 'id'>) => api.post<Post>('/posts', data);
export const updatePost = (id: number, data: Partial<Post>) => api.put<Post>(`/posts/${id}`, data);
export const deletePost = (id: number) => api.delete(`/posts/${id}`);

export default api; 