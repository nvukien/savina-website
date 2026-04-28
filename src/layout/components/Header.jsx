/**
 * Savina.vn - Header
 * Sticky glassmorphism header with language switcher
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Drawer, Dropdown, Button, Space } from 'antd';
import { MenuOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';
import { trackEvent } from 'hooks/useTrackEvent';
import './Header.css';

const languages = [
  { key: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { key: 'en', label: 'English', flag: '🇬🇧' },
  { key: 'ja', label: '日本語', flag: '🇯🇵' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = languages.find((l) => l.key === i18n.language) || languages[0];

  // Terms & Privacy moved to footer only (declutter header).
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/chuong-trinh', label: t('nav.courses') },
    { path: '/enrollment', label: t('nav.enrollment') },
    { path: '/news', label: t('nav.news') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const langMenuItems = languages.map((lang) => ({
    key: lang.key,
    label: (
      <span onClick={() => {
        trackEvent('language_change', { from: i18n.language, to: lang.key });
        i18n.changeLanguage(lang.key);
      }}>
        {lang.flag} {lang.label}
      </span>
    ),
  }));

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="header-logo">
            <div className="header-logo-circle">
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path
                  d="M30 55 C30 38, 48 26, 58 36 C68 46, 54 56, 48 50 C42 44, 54 32, 65 40 C76 48, 68 62, 50 62 C38 62, 30 55, 30 55 Z"
                  stroke="#2B8E96"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <span className="header-logo-text">SAVINA</span>
          </Link>

          <nav className="header-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`header-nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-right">
            <Dropdown menu={{ items: langMenuItems }} trigger={['click']}>
              <Button type="text" size="small" icon={<GlobalOutlined />}>
                <Space>
                  {currentLang.flag}
                  <DownOutlined style={{ fontSize: 10 }} />
                </Space>
              </Button>
            </Dropdown>

            <Link to="/enrollment" className="header-cta">
              {t('nav.register')}
            </Link>

            <button
              className="header-mobile-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </header>

      <Drawer
        title="SAVINA"
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        width={280}
      >
        <div className="mobile-nav-list">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`header-nav-link ${isActive(item.path) ? 'active' : ''}`}
              style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid #f5f5f5', fontSize: 16 }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/enrollment"
            className="header-cta"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'block', textAlign: 'center', marginTop: 20 }}
          >
            {t('nav.register')}
          </Link>
        </div>
      </Drawer>
    </>
  );
}
