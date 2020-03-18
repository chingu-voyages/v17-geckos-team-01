import React from 'react';
import './Index.module.scss';
import { Nav, Hero } from '../component.exports';
import { Layout } from 'antd';

const Index: React.FC = () => (
  <Layout>
    <Nav />
    <Hero />
  </Layout>
);

export default Index;
