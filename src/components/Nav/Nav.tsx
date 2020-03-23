import React from 'react';
import { AppBar, Toolbar, TextField } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import { StyledIconButton, StyledTypography } from './StyledNavComponents';
import './Nav.module.scss';

type NavProps = {
  navBarTitle: string;
};

const Nav: React.FC<NavProps> = ({ navBarTitle }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <StyledIconButton>
            <Menu />
          </StyledIconButton>
          <StyledTypography variant="h6" color="inherit">
            {navBarTitle}
          </StyledTypography>
          <TextField label="Search" variant="outlined" />
          <div>
            <StyledIconButton>
              <AccountCircle />
            </StyledIconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Nav;
