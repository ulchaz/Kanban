// src/pages/Login/Login.styled.js
import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #F1F1F1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const LoginBlock = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  margin: 0 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  padding: 14px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  
  &::placeholder {
    color: #94A6BE;
  }
  
  &:focus {
    outline: none;
    border-color: #565EEF;
  }
`;

export const LoginButton = styled.button`
  padding: 14px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #33399b;
  }
`;

export const LoginLink = styled.div`
  text-align: center;
  font-size: 14px;
  color: #94A6BE;
  
  a {
    color: #565EEF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LoginError = styled.div`
  color: #ff3333;
  font-size: 14px;
  text-align: center;
`;