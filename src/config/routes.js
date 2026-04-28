import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Contact = lazy(() => import('pages/Contact'));
const Enrollment = lazy(() => import('pages/Enrollment'));
const Enroll = lazy(() => import('pages/Enroll'));
const News = lazy(() => import('pages/News'));
const Courses = lazy(() => import('pages/Courses'));
const CourseDetail = lazy(() => import('pages/Courses/CourseDetail'));
const TermsOfService = lazy(() => import('pages/Legal/TermsOfService'));
const PrivacyPolicy = lazy(() => import('pages/Legal/PrivacyPolicy'));
const NotFound = lazy(() => import('pages/NotFound'));

const routes = [
  { path: '/', element: Home, exact: true },
  { path: '/about', element: About },
  { path: '/chuong-trinh', element: Courses },
  { path: '/chuong-trinh/:slug', element: CourseDetail },
  { path: '/enrollment', element: Enrollment },
  { path: '/dang-ky', element: Enroll },
  { path: '/news', element: News },
  { path: '/contact', element: Contact },
  { path: '/terms-of-service', element: TermsOfService },
  { path: '/privacy-policy', element: PrivacyPolicy },
  { path: '*', element: NotFound },
];

export default routes;
