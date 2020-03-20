import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Menu, AccountCircle } from '@material-ui/icons';
import './Nav.module.scss';

// Makes use of the hooks style API
const useStyles = makeStyles({
  root: {
    marginTop: 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

// Making use of the styled-components style API
const StyledIconButton = styled(IconButton)({
  marginLeft: -12,
  marginRight: 20,
});

// Can use type definition for types in components
// Usage: const Nav: React.FC<NavTypes>
// type NavTypes = {
//   navBarTitle: string;
// };

/*
You can define the types directly in the function
Usage: React.FC<{ navBarTitle: string }>
*/

/*
Default function parameters:
Usage: ({ navBarTitle = 'Team Gecko Navbar' })
As opposed to defaultProps which currently has known issues when using React.FC
*/
const Nav: React.FC<{ navBarTitle: string }> = ({ navBarTitle = 'Team Gecko Navbar' }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <StyledIconButton>
            <Menu />
          </StyledIconButton>
          <Typography className={classes.flex} variant="h6" color="inherit">
            {navBarTitle}
          </Typography>
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
