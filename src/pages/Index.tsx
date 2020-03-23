import React from 'react';
import './Index.module.scss';
import { Nav, CustomThemeProvider } from '../component.exports';

const Index: React.FC = () => (
  <CustomThemeProvider>
    <Nav navBarTitle="Team Gecko Nav" />
  </CustomThemeProvider>
);

export default Index;
