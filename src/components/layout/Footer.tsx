import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import Logo from '../common/Logo';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Logo className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold text-benin-green-700 dark:text-benin-green-400">
                Djofo.bj
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('app.description')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-500 hover:text-benin-green-600 dark:text-gray-400 dark:hover:text-benin-green-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-benin-green-600 dark:text-gray-400 dark:hover:text-benin-green-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-benin-green-600 dark:text-gray-400 dark:hover:text-benin-green-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-benin-green-600 dark:text-gray-400 dark:hover:text-benin-green-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('nav.content')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/podcasts"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  {t('nav.podcasts')}
                </Link>
              </li>
              <li>
                <Link
                  to="/videos"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  Vidéos
                </Link>
              </li>
              <li>
                <Link
                  to="/animations"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  Animations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/training"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  {t('nav.training')}
                </Link>
              </li>
              <li>
                <Link
                  to="/investigations"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  {t('nav.investigations')}
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
                >
                  {t('nav.community')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="flex items-center space-x-3 mb-3">
              <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <a
                href="mailto:contact@djofo.bj"
                className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 transition-colors"
              >
                contact@djofo.bj
              </a>
            </div>
            <form className="mt-4">
              <div className="mb-3">
                <label
                  htmlFor="newsletter"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Newsletter
                </label>
                <input
                  type="email"
                  id="newsletter"
                  placeholder="votre@email.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-benin-green-500 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-benin-green-600 hover:bg-benin-green-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Djofo.bj - {t('footer.rights')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 text-sm transition-colors"
              >
                {t('footer.about')}
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 text-sm transition-colors"
              >
                {t('footer.contact')}
              </Link>
              <Link
                to="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 text-sm transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-benin-green-600 dark:hover:text-benin-green-400 text-sm transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;