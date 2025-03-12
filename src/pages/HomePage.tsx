import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 0.5rem;

  &:hover {
    opacity: 0.9;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeInfo = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid ${props => props.theme.border};
  border-radius: 8px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
`;

const HomePage: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();
  
  return (
    <HomeContainer>
      <Title>React 프로젝트에 오신 것을 환영합니다!</Title>
      <ThemeInfo>
        <Subtitle>현재 테마: {themeMode}</Subtitle>
        <p>
          {themeMode === 'light' 
            ? '밝은 테마를 사용 중입니다. 다크 모드로 전환해보세요!' 
            : '어두운 테마를 사용 중입니다. 라이트 모드로 전환해보세요!'}
        </p>
      </ThemeInfo>
      <div>
        <Button onClick={toggleTheme}>테마 변경</Button>
        <NavLink to="/about">About 페이지로 이동</NavLink>
      </div>
    </HomeContainer>
  );
};

export default HomePage; 