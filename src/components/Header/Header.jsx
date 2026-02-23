// src/components/Header/Header.jsx
import React, { useState } from "react";
import {
  StyledHeader,
  StyledHeaderBlock,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderButton,
  StyledHeaderUser,
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  ThemeCheckbox,
  PopUserButton
} from './Header.styled';
import { Link } from 'react-router-dom';

function Header({ onOpenNewCard }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <StyledHeader className="header">
      <div className="container">
        <StyledHeaderBlock className="header__block">
          <StyledHeaderLogo className={`header__logo ${isDarkTheme ? '_dark' : '_show _light'}`}>
            <a href="#" target="_self">
              <img src={isDarkTheme ? "/logo_dark.png" : "/logo.png"} alt="logo" />
            </a>
          </StyledHeaderLogo>
          <StyledHeaderNav className="header__nav">
            <StyledHeaderButton onClick={onOpenNewCard}>
              Создать новую задачу
            </StyledHeaderButton>
            
            <StyledHeaderUser 
              href="#user-set-target" 
              className="header__user _hover02" 
              onClick={(e) => {
                e.preventDefault();
                toggleUserMenu();
              }}
            >
              Ivan Ivanov
            </StyledHeaderUser>
            
            <PopUserSet 
              className={isUserMenuOpen ? 'active' : ''}
            >
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <ThemeCheckbox 
                  checked={isDarkTheme}
                  onChange={toggleTheme}
                />
              </PopUserTheme>
              <Link to="/exit">
                <PopUserButton>
                  Выйти
                </PopUserButton>
              </Link>
            </PopUserSet>
          </StyledHeaderNav>
        </StyledHeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;