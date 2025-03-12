import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean;
}

// 버튼 크기에 따른 스타일
const getButtonSize = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      `;
    case 'large':
      return css`
        padding: 0.75rem 1.5rem;
        font-size: 1.125rem;
      `;
    case 'medium':
    default:
      return css`
        padding: 0.5rem 1rem;
        font-size: 1rem;
      `;
  }
};

// 버튼 종류에 따른 스타일
const getButtonVariant = (variant?: ButtonVariant) => {
  switch (variant) {
    case 'secondary':
      return css`
        background-color: #f3f4f6;
        color: #374151;
        border: 1px solid #d1d5db;
        
        &:hover:not(:disabled) {
          background-color: #e5e7eb;
        }
      `;
    case 'danger':
      return css`
        background-color: #ef4444;
        color: white;
        
        &:hover:not(:disabled) {
          background-color: #dc2626;
        }
      `;
    case 'success':
      return css`
        background-color: #10b981;
        color: white;
        
        &:hover:not(:disabled) {
          background-color: #059669;
        }
      `;
    case 'primary':
    default:
      return css`
        background-color: #1a73e8;
        color: white;
        
        &:hover:not(:disabled) {
          background-color: #1557b0;
        }
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 500;
  
  ${props => getButtonSize(props.size)}
  ${props => getButtonVariant(props.variant)}
  
  width: ${props => (props.isFullWidth ? '100%' : 'auto')};
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: 2px solid #90caf9;
    outline-offset: 2px;
  }
  
  ${props =>
    props.isLoading &&
    css`
      position: relative;
      color: transparent;
      
      &::after {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        border: 2px solid;
        border-radius: 50%;
        border-color: #fff transparent #fff transparent;
        animation: spin 1.2s linear infinite;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isFullWidth = false,
  isLoading = false,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 