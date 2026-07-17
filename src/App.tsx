import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageTransition } from './components/ui/PageTransition';
import { Loader } from './components/ui/Loader';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Destinations = lazy(() => import('./pages/Destinations').then((m) => ({ default: m.Destinations })));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail').then((m) => ({ default: m.DestinationDetail })));
const Packages = lazy(() => import('./pages/Packages').then((m) => ({ default: m.Packages })));
const PackageDetail = lazy(() => import('./pages/PackageDetail').then((m) => ({ default: m.PackageDetail })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogDetail = lazy(() => import('./pages/BlogDetail').then((m) => ({ default: m.BlogDetail })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Booking = lazy(() => import('./pages/Booking').then((m) => ({ default: m.Booking })));
const FAQ = lazy(() => import('./pages/FAQ').then((m) => ({ default: m.FAQ })));
const Privacy = lazy(() => import('./pages/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then((m) => ({ default: m.Terms })));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<Suspense fallback={<Loader full />}><PageTransition><About /></PageTransition></Suspense>} />
            <Route path="/destinations" element={<Suspense fallback={<Loader full />}><PageTransition><Destinations /></PageTransition></Suspense>} />
            <Route path="/destinations/:id" element={<Suspense fallback={<Loader full />}><PageTransition><DestinationDetail /></PageTransition></Suspense>} />
            <Route path="/packages" element={<Suspense fallback={<Loader full />}><PageTransition><Packages /></PageTransition></Suspense>} />
            <Route path="/packages/:id" element={<Suspense fallback={<Loader full />}><PageTransition><PackageDetail /></PageTransition></Suspense>} />
            <Route path="/blog" element={<Suspense fallback={<Loader full />}><PageTransition><Blog /></PageTransition></Suspense>} />
            <Route path="/blog/:id" element={<Suspense fallback={<Loader full />}><PageTransition><BlogDetail /></PageTransition></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<Loader full />}><PageTransition><Contact /></PageTransition></Suspense>} />
            <Route path="/booking" element={<Suspense fallback={<Loader full />}><PageTransition><Booking /></PageTransition></Suspense>} />
            <Route path="/faq" element={<Suspense fallback={<Loader full />}><PageTransition><FAQ /></PageTransition></Suspense>} />
            <Route path="/privacy" element={<Suspense fallback={<Loader full />}><PageTransition><Privacy /></PageTransition></Suspense>} />
            <Route path="/terms" element={<Suspense fallback={<Loader full />}><PageTransition><Terms /></PageTransition></Suspense>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
