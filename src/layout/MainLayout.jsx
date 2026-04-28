import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTrackPageView } from 'hooks/useTrackEvent';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  useTrackPageView();

  return (
    <Layout style={{ minHeight: '100vh', background: '#fff' }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
