// src/pages/NotFound/NotFound.styled.js
import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F1F1F1;
`;

export const NotFoundBlock = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 50px 60px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #565EEF;
  margin-bottom: 20px;
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: #94A6BE;
  margin-bottom: 30px;
`;

export const NotFoundLink = styled.button`
  padding: 12px 24px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #33399b;
  }
`;