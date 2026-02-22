// src/components/Header/Header.jsx
import React, { useState } from "react";
import {
  StyledHeader,
  StyledHeaderBlock,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderButton,
  StyledHeaderUser
} from './Header.styled';

function Header({ onOpenNewCard }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <StyledHeader className="header">
      <div className="container">
        <StyledHeaderBlock className="header__block">
          <StyledHeaderLogo className="header__logo _show _light">
            <a href="#" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </StyledHeaderLogo>
          <StyledHeaderLogo className="header__logo _dark">
            <a href="#" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </StyledHeaderLogo>
          <StyledHeaderNav className="header__nav">
            <StyledHeaderButton 
              className="header__btn-main-new _hover01" 
              id="btnMainNew" 
              onClick={(e) => {
                e.preventDefault();
                onOpenNewCard(); 
              }}
            >
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
            
            <div 
              className="header__pop-user-set pop-user-set" 
              id="user-set-target"
              style={{ display: isUserMenuOpen ? 'block' : 'none' }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </StyledHeaderNav>
        </StyledHeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default Header;