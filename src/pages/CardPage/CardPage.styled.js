// src/pages/CardPage/CardPage.styled.js
import styled from 'styled-components';

export const CardPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F1F1F1;
`;

export const CardPageBlock = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 40px 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CardPageTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
  text-align: center;
`;

export const CardPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardPageInfo = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
  strong {
    color: #565EEF;
  }
`;

export const CardPageBackLink = styled.button`
  padding: 12px 24px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #33399b;
  }
`;