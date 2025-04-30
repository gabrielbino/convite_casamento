import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import AdminButton from './AdminButton.tsx';
import { useNavigate } from 'react-router-dom';
import AlertBox from './AlertBox.tsx';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);

  const menuItems = [
    { href: '/', label: 'INÍCIO' },
    { href: '/gifts', label: 'PRESENTES' },
    { href: '/ceremony', label: 'CERIMÔNIA' },
    { href: '/confirmed', label: 'CONFIRMAÇÃO' },
    { href: '/photos', label: 'GALERIA' },
  ];

  const handleAdminAccess = (password) => {
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setAlert({ message: 'Senha incorreta!', type: 'error' });
    }
  };

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    checkScreenSize();
    handleScroll();

    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-12 py-3 flex items-center justify-between ${
          isScrolled && !isMobile ? 'bg-white shadow text-[#354B25]' : 'bg-transparent text-white'
        }`}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        {menuItems.map(({ href, label }) => (
          <Link
            key={href}
            to={href}
            className="hover:text-white hover:bg-[#9CB983] hover:rounded transition text-sm font-medium px-4 py-2"
          >
            {label}
          </Link>
        ))}
        <AdminButton onLogin={handleAdminAccess}/>
        {alert && <AlertBox message={alert.message} type={alert.type} />}
      </div>

      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-3 shadow-md sm:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Bars3Icon className="w-6 h-6 text-[#F3FDE8]" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 left-0 z-50 h-full bg-white w-4/5 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-[#426221] text-lg">D 💚 K</h2>
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="w-6 h-6 text-[#426221]" />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4 text-[#426221] font-medium">
          {menuItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                to={href}
                onClick={() => setIsOpen(false)}
                className="hover:bg-[#9CB983] px-4 py-2 rounded"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <AdminButton onLogin={(password) => {
              setIsOpen(false);
              handleAdminAccess(password);
            }} />
            {alert && <AlertBox message={alert.message} type={alert.type} />}
          </li>
        </ul>
      </div>
    </nav>
  );
}
