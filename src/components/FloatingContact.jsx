/**
 * FloatingContact — floating chat/contact button
 * Messenger + Zalo + Phone options
 */
import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const toggle = useCallback(() => setOpen(prev => !prev), []);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest('.float-contact')) setOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [open]);

  return (
    <div className="float-contact">
      <div className={`float-contact-menu ${open ? 'open' : ''}`}>
        <a
          href="https://zalo.me/3420418196937207390"
          target="_blank"
          rel="noopener noreferrer"
          className="float-contact-option"
          onClick={() => setOpen(false)}
        >
          <span className="float-contact-icon zalo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.28-.02-.12.03-2.07 1.32-5.84 3.87-.55.38-1.05.56-1.5.55-.49-.01-1.44-.28-2.15-.51-.87-.28-1.56-.43-1.5-.91.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.26-3.54 3.94-1.63 4.76-1.91 5.3-1.92.12 0 .38.03.55.17.14.12.18.28.2.47.02.06.01.24-.01.38z"/>
            </svg>
          </span>
          Zalo
        </a>

        <a
          href="https://m.me/tuxa.daihocthanhdong"
          target="_blank"
          rel="noopener noreferrer"
          className="float-contact-option"
          onClick={() => setOpen(false)}
        >
          <span className="float-contact-icon messenger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.434 5.503 3.678 7.2V22l3.378-1.854c.9.25 1.854.384 2.944.384 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.076 12.457-2.55-2.72-4.98 2.72 5.474-5.81 2.612 2.72 4.918-2.72-5.474 5.81z"/>
            </svg>
          </span>
          Messenger
        </a>

        <a
          href="tel:0901234567"
          className="float-contact-option"
          onClick={() => setOpen(false)}
        >
          <span className="float-contact-icon phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </span>
          {t('nav.contact')}
        </a>
      </div>

      <button
        className={`float-contact-btn ${open ? 'open' : ''}`}
        onClick={toggle}
        aria-label="Contact"
      >
        {!open && <span className="float-contact-ping" />}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          {open ? (
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          ) : (
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
          )}
        </svg>
      </button>
    </div>
  );
}
