import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import usePageMeta from 'hooks/usePageMeta';

export default function NotFound() {
  const { t } = useTranslation();
  usePageMeta('404 - Savina');

  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
    }}>
      <Result
        status="404"
        title="404"
        subTitle={t('notFound', 'Trang bạn tìm kiếm không tồn tại.')}
        extra={
          <Link to="/">
            <Button type="primary" size="large">{t('nav.home')}</Button>
          </Link>
        }
      />
    </div>
  );
}
