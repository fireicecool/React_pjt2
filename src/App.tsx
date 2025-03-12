import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './context/ThemeContext';
import styled, { createGlobalStyle } from 'styled-components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
  }

  button, input, select, textarea {
    font-family: inherit;
  }
`;

// 앱 컨테이너 스타일
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;

// React Query 클라이언트 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// App 컴포넌트
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router>
          <GlobalStyle />
          <AppContainer>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
