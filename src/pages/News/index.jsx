import React from 'react';
import { Empty } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import '../pages.css';

export default function News() {
  const { t } = useTranslation();
  usePageMeta(t('nav.news') + ' - Savina');

  return (
    <>
      <section className="page-hero">
        <h1>{t('nav.news')}</h1>
      </section>

      <section style={{ background: '#fff' }}>
        <FadeInSection>
          <div className="page-section" style={{ textAlign: 'center' }}>
            <Empty description="Coming soon" style={{ padding: '40px 0' }}>
              <Link to="/" className="page-cta">{t('nav.home')}</Link>
            </Empty>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
