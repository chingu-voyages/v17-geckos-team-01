import React from 'react';
import { Layout, Menu } from 'antd';
import './Nav.module.scss';

const { Header } = Layout;

const Nav: React.FC = () => (
  <>
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3 </Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Menu.Item key="5">nav 5</Menu.Item>
      </Menu>
    </Header>
  </>
);

export default Nav;
