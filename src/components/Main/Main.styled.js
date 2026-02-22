// src/components/Main/Main.styled.js
import styled from 'styled-components';
import { media } from '../../lib/breakpoints';

export const MainContainer = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;  // Убираем горизонтальные отступы

  ${media.xl} {
    padding: 40px 0 64px;
  }

  ${media.md} {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  margin: 0;  // Убираем отрицательные отступы

  ${media.xl} {
    display: block;
  }
`;

export const LoadingText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #94A6BE;
  padding: 50px;
  width: 100%;
`;