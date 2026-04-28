import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackEvent, trackPageView } from 'lib/analytics';

/**
 * Re-export trackEvent để components import 1 chỗ.
 */
export { trackEvent };

/**
 * useTrackPageView — gắn vào layout để auto-track SPA navigation.
 */
export function useTrackPageView() {
  const location = useLocation();
  useEffect(() => {
    // Wait next tick để document.title được hooks usePageMeta cập nhật
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 50);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
}

export default useTrackPageView;
