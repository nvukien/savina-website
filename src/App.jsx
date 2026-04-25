import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import savinaTheme from 'theme/savinaTheme';
import MainLayout from 'layout/MainLayout';
import routes from 'config/routes';
import 'i18n/i18n';
import './App.css';

const Loading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <Spin size="large" />
  </div>
);

export default function App() {
  return (
    <ConfigProvider theme={savinaTheme}>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Suspense>
      </MainLayout>
    </ConfigProvider>
  );
}
