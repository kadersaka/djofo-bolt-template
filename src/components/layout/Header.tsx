import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageType } from '../../types';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLanguageChange = (lang: LanguageType) => {
    setLanguage(lang);
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.content'), href: '/content' },
    { name: t('nav.training'), href: '/training' },
    { name: t('nav.community'), href: '/community' },
    { name: t('nav.investigations'), href: '/investigations' },
    { name: t('nav.podcasts'), href: '/podcasts' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-benin-green-700 dark:text-benin-green-400">
                Djofo.bj
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-benin-green-600 dark:text-gray-300 dark:hover:text-benin-green-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Controls (Dark Mode, Language) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-benin-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            <div className="relative group">
              <button
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center"
                aria-label="Change language"
              >
                <Languages className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="ml-1 text-sm uppercase">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top-right">
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === 'fr'
                      ? 'bg-benin-green-100 dark:bg-benin-green-900 text-benin-green-700 dark:text-benin-green-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    language === 'en'
                      ? 'bg-benin-green-100 dark:bg-benin-green-900 text-benin-green-700 dark:text-benin-green-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-benin-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-benin-green-100 dark:hover:bg-benin-green-900 hover:text-benin-green-700 dark:hover:text-benin-green-300"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}

            <div className="px-3 py-2">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {language === 'fr' ? 'Langue' : 'Language'}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleLanguageChange('fr')}
                  className={`px-3 py-1 rounded ${
                    language === 'fr'
                      ? 'bg-benin-green-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded ${
                    language === 'en'
                      ? 'bg-benin-green-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;