import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const AboutContainer = styled.div`
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

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.primary};
  text-decoration: none;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeIndicator = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
`;

const AboutPage: React.FC = () => {
  const { themeMode } = useTheme();
  
  return (
    <AboutContainer>
      <Title>About 페이지</Title>
      <ThemeIndicator>현재 테마: {themeMode}</ThemeIndicator>
      <Description>
        이 프로젝트는 React와 TypeScript를 기반으로 구축되었으며, 다양한 최신 웹 개발 도구와 
        라이브러리를 활용하고 있습니다. 프로젝트는 Vite를 빌드 도구로 사용하며, 
        styled-components로 스타일링을 관리합니다. 또한 React Router를 통한 라우팅과 
        React Query를 이용한 데이터 관리를 구현하고 있습니다.
      </Description>
      <NavLink to="/">홈으로 돌아가기</NavLink>
    </AboutContainer>
  );
};

export default AboutPage; 