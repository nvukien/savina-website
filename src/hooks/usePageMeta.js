import { useEffect } from 'react';

/**
 * Update document <title> + meta description + Open Graph + Twitter + canonical per route.
 * Phase 0 — minimal client-side update. Phase 1+ sẽ migrate sang Next.js metadata API.
 */
function setMeta(selector, attr, value) {
  if (!value) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    // selector ví dụ: 'meta[property="og:title"]' → property="og:title"
    const match = selector.match(/\[(\w+)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const usePageMeta = (title, description) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMeta('meta[property="og:title"]', 'content', title);
      setMeta('meta[name="twitter:title"]', 'content', title);
    }

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    // Canonical theo URL hiện tại
    const canonicalUrl = window.location.origin + window.location.pathname;
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
  }, [title, description]);
};

export default usePageMeta;
