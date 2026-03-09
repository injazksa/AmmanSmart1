import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Contact from './pages/Contact';
import IPRights from './pages/IPRights';
import FutureVision from './pages/FutureVision';
import SmartInitiatives from './pages/SmartInitiatives';
import ThankYou from './pages/ThankYou';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'الرئيسية',
    path: '/',
    element: <Home />
  },
  {
    name: 'المبادرات الذكية',
    path: '/smart-initiatives',
    element: <SmartInitiatives />
  },
  {
    name: 'شكراً لك',
    path: '/thank-you',
    element: <ThankYou />,
    visible: false
  },
  {
    name: 'مبادرات المدينة',
    path: '/projects',
    element: <Projects />
  },
  {
    name: 'دليل الخدمات',
    path: '/services',
    element: <Services />
  },
  {
    name: 'لوحة بيانات المدينة',
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    name: 'الأخبار والمستجدات',
    path: '/news',
    element: <News />
  },
  {
    name: 'رؤية عمان 2030',
    path: '/future-vision',
    element: <FutureVision />
  },
  {
    name: 'تواصل معنا',
    path: '/contact',
    element: <Contact />
  },
  {
    name: 'حقوق الملكية الفكرية',
    path: '/ip-rights',
    element: <IPRights />,
    visible: false
  }
];

export default routes;
