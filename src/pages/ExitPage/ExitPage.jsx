// src/pages/ExitPage/ExitPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import {
  ExitPageContainer,
  ExitPageBlock,
  ExitPageTitle,
  ExitPageText,
  ExitPageButtons,
  ExitPageButton
} from './ExitPage.styled';

function ExitPage({ setIsAuth }) {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    navigate('/login');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <ExitPageContainer>
      <ExitPageBlock>
        <ExitPageTitle>Выход из аккаунта</ExitPageTitle>
        <ExitPageText>Вы действительно хотите выйти?</ExitPageText>
        <ExitPageButtons>
          <ExitPageButton $primary onClick={handleExit}>
            Да, выйти
          </ExitPageButton>
          <ExitPageButton onClick={handleCancel}>
            Нет, остаться
          </ExitPageButton>
        </ExitPageButtons>
      </ExitPageBlock>
    </ExitPageContainer>
  );
}

export default ExitPage;