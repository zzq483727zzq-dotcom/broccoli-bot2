/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Cases from './pages/Cases';
import Research from './pages/Research';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/admin/Dashboard';
import Products from './pages/admin/Products';
import Inquiries from './pages/admin/Inquiries';
import Profile from './pages/admin/Profile';
import { initializeProducts } from './utils/storage';

export default function App() {
  useEffect(() => {
    initializeProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/research" element={<Research />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}