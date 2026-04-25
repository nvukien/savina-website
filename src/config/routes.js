import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Contact = lazy(() => import('pages/Contact'));
const Enrollment = lazy(() => import('pages/Enrollment'));
const News = lazy(() => import('pages/News'));
const TermsOfService = lazy(() => import('pages/Legal/TermsOfService'));
const PrivacyPolicy = lazy(() => import('pages/Legal/PrivacyPolicy'));
const NotFound = lazy(() => import('pages/NotFound'));

const routes = [
  { path: '/', element: Home, exact: true },
  { path: '/about', element: About },
  { path: '/enrollment', element: Enrollment },
  { path: '/news', element: News },
  { path: '/contact', element: Contact },
  { path: '/terms-of-service', element: TermsOfService },
  { path: '/privacy-policy', element: PrivacyPolicy },
  { path: '*', element: NotFound },
];

export default routes;
