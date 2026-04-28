/**
 * Savina.vn - Home Page
 * "Education & Technology for the AI Era"
 * CSS animations + IntersectionObserver — zero runtime deps
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ReadOutlined,
  LaptopOutlined,
  BulbOutlined,
  RobotOutlined,
  BarChartOutlined,
  RocketOutlined,
} from '@ant-design/icons';
import usePageMeta from 'hooks/usePageMeta';
import FadeInSection from 'components/FadeInSection';
import HeroParticles from 'components/HeroParticles';
import SectionHeader from 'components/SectionHeader';
import FloatingContact from 'components/FloatingContact';
import TestimonialSection from 'components/TestimonialSection';
import './HomePage.css';

const services = [
  { key: 'enrollment', icon: <ReadOutlined /> },
  { key: 'elearning', icon: <LaptopOutlined /> },
  { key: 'edtech', icon: <BulbOutlined /> },
  { key: 'training', icon: <RobotOutlined /> },
  { key: 'assessment', icon: <BarChartOutlined /> },
  { key: 'career', icon: <RocketOutlined /> },
];

const statsData = [
  { value: '10+', key: 'years' },
  { value: '5000+', key: 'students' },
  { value: '4', key: 'countries' },
  { value: '15+', key: 'partners' },
];

const partners = ['ĐH Thành Đông', 'ĐH Đồng Tháp'];

export default function Home() {
  const { t } = useTranslation();
  usePageMeta(
    'Savina - ' + t('hero.title') + ' ' + t('hero.titleHighlight'),
    t('hero.subtitle')
  );

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section className="hero-section">
        <div className="hero-orbit"><div className="orbit-dot" /></div>
        <div className="hero-orbit"><div className="orbit-dot" /></div>
        <div className="hero-orbit" />

        <HeroParticles count={35} />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            AI Era
          </div>

          <h1 className="hero-title">
            {t('hero.title')}{' '}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <div className="hero-actions">
            <Link to="/enrollment" className="hero-btn-primary">
              {t('hero.cta')}
            </Link>
            <Link to="/about" className="hero-btn-secondary">
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="hero-scroll-hint"><span /></div>
      </section>

      {/* ===== STATS BAR ===== */}
      <div className="stats-bar">
        <div className="stats-bar-inner">
          {statsData.map((stat) => (
            <div key={stat.key}>
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{t(`stats.${stat.key}`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SERVICES ===== */}
      <section className="services-section" id="services">
        <FadeInSection>
          <SectionHeader
            tag={t('services.title')}
            title={t('services.subtitle')}
          />
        </FadeInSection>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <FadeInSection key={svc.key} delay={idx * 0.1}>
              <div className="service-card">
                <div className="service-icon">{svc.icon}</div>
                <div className="service-title">{t(`services.${svc.key}.title`)}</div>
                <p className="service-desc">{t(`services.${svc.key}.desc`)}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="partners-section">
        <FadeInSection>
          <SectionHeader
            tag={t('partners.title')}
            title={t('partners.subtitle')}
          />
        </FadeInSection>

        <FadeInSection>
          <div className="partners-grid">
            {partners.map((name) => (
              <div className="partner-card" key={name}>{name}</div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <TestimonialSection
        tag={t('partners.title')}
        title="Học viên Savina nói gì?"
      />

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <FadeInSection>
          <div className="cta-inner">
            <h2 className="cta-title">{t('cta.title')}</h2>
            <p className="cta-desc">{t('cta.subtitle')}</p>
            <Link to="/contact" className="cta-btn">
              {t('cta.button')}
              <span>&#8594;</span>
            </Link>
          </div>
        </FadeInSection>
      </section>

      <FloatingContact />
    </div>
  );
}
