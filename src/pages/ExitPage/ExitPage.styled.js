// src/pages/ExitPage/ExitPage.styled.js
import styled from 'styled-components';

export const ExitPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F1F1F1;
`;

export const ExitPageBlock = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 50px 60px;
  width: 100%;
  max-width: 370px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ExitPageTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ExitPageText = styled.p`
  font-size: 16px;
  color: #94A6BE;
  margin-bottom: 30px;
`;

export const ExitPageButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ExitPageButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  ${({ $primary }) => $primary ? `
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    
    &:hover {
      background-color: #33399b;
    }
  ` : `
    background-color: transparent;
    color: #565EEF;
    border: 0.7px solid #565EEF;
    
    &:hover {
      background-color: #33399b;
      color: #FFFFFF;
      border-color: #33399b;
    }
  `}
`;