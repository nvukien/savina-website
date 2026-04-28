/**
 * Analytics — runtime injection cho GA4 (qua GTM) + Google Site Verification.
 * No-op nếu env vars không được set → cho phép dev local sạch.
 *
 * Init một lần khi app mount (gọi trong src/index.jsx).
 */

const GA_ID = import.meta.env.VITE_GA_ID;
const GTM_ID = import.meta.env.VITE_GTM_ID;
const GSC_VERIFY = import.meta.env.VITE_GSC_VERIFY;

let _initialized = false;

/**
 * Khởi tạo analytics scripts một lần. Idempotent.
 */
export function initAnalytics() {
  if (_initialized) return;
  if (typeof window === 'undefined') return;
  _initialized = true;

  // GSC verification meta tag
  if (GSC_VERIFY && !document.head.querySelector('meta[name="google-site-verification"]')) {
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = GSC_VERIFY;
    document.head.appendChild(meta);
  }

  // GTM (preferred — qua đó load GA4)
  if (GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    // Noscript iframe fallback (không phải tất cả browser hỗ trợ JS)
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
    return;
  }

  // GA4 trực tiếp (fallback nếu không dùng GTM)
  if (GA_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { send_page_view: true });
  }
}

/**
 * Track 1 event (đẩy vào dataLayer cho GTM/GA4).
 * @param {string} name - event name (snake_case theo GA4 convention)
 * @param {object} params - custom params
 */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });

  // Also send via gtag if directly loaded GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

/**
 * Track page_view manually (gọi khi route đổi trong SPA).
 */
export function trackPageView(path, title) {
  trackEvent('page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

export const analyticsEnabled = Boolean(GTM_ID || GA_ID);
