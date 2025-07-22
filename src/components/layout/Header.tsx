import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/', icon: 'Home' },
    { name: 'Услуги', href: '/services', icon: 'Car' },
    { name: 'Бронирование', href: '/booking', icon: 'Calendar' },
    { name: 'Галерея', href: '/gallery', icon: 'Camera' },
    { name: 'О нас', href: '/about', icon: 'Users' },
    { name: 'Отзывы', href: '/reviews', icon: 'MessageSquare' },
    { name: 'Контакты', href: '/contacts', icon: 'Phone' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-wash-clean p-2 rounded-full">
              <Icon name="Droplets" size={24} className="text-white" />
            </div>
            <h1 className="font-exo text-2xl font-bold text-wash-text">
              ГРЯЗНАЯ МАШИНА
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-full font-roboto font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActive(item.href)
                    ? 'bg-wash-clean text-white'
                    : 'text-gray-700 hover:bg-wash-clean/10 hover:text-wash-clean'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/location">
              <Button 
                variant="outline"
                className="border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white rounded-full"
              >
                <Icon name="MapPin" size={18} className="mr-2" />
                Как добраться
              </Button>
            </Link>
            <Button 
              className="bg-wash-success hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-wash-text" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-roboto font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-wash-clean text-white'
                      : 'text-gray-700 hover:bg-wash-clean/10 hover:text-wash-clean'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t space-y-2">
              <Link to="/location" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="outline"
                  className="w-full border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white rounded-full"
                >
                  <Icon name="MapPin" size={18} className="mr-2" />
                  Как добраться
                </Button>
              </Link>
              <Button 
                className="w-full bg-wash-success hover:bg-green-600 text-white rounded-full font-medium"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;