/**
 * Savina.vn - Footer
 * 4-column layout, dark teal background
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div>
          <div className="footer-brand">SAVINA</div>
          <p className="footer-brand-desc">{t('footer.desc')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="footer-col-title">{t('footer.quickLinks')}</div>
          <Link to="/" className="footer-link">{t('nav.home')}</Link>
          <Link to="/about" className="footer-link">{t('nav.about')}</Link>
          <Link to="/enrollment" className="footer-link">{t('nav.enrollment')}</Link>
          <Link to="/news" className="footer-link">{t('nav.news')}</Link>
        </div>

        {/* Services */}
        <div>
          <div className="footer-col-title">{t('footer.services')}</div>
          <Link to="/enrollment" className="footer-link">{t('services.enrollment.title')}</Link>
          <Link to="/enrollment" className="footer-link">{t('services.elearning.title')}</Link>
          <Link to="/enrollment" className="footer-link">{t('services.training.title')}</Link>
          <Link to="/enrollment" className="footer-link">{t('services.career.title')}</Link>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">{t('footer.contactInfo')}</div>
          <div className="footer-contact-item">
            <EnvironmentOutlined className="footer-contact-icon" />
            <span>{t('contact.info.address')}</span>
          </div>
          <div className="footer-contact-item">
            <PhoneOutlined className="footer-contact-icon" />
            <span>{t('contact.info.phone')}</span>
          </div>
          <div className="footer-contact-item">
            <MailOutlined className="footer-contact-icon" />
            <span>{t('contact.info.email')}</span>
          </div>
          <div className="footer-contact-item">
            <ClockCircleOutlined className="footer-contact-icon" />
            <span>{t('contact.info.hours')}</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>{t('footer.copyright')}</div>
        <div className="footer-legal">
          <Link to="/terms-of-service" className="footer-legal-link">Điều khoản Dịch vụ</Link>
          <span className="footer-legal-sep">|</span>
          <Link to="/privacy-policy" className="footer-legal-link">Chính sách Bảo mật</Link>
        </div>
      </div>
    </footer>
  );
}
