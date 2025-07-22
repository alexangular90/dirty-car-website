import React from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Экспресс мойка', href: '/services' },
    { name: 'Стандартная мойка', href: '/services' },
    { name: 'Премиум детейлинг', href: '/services' },
    { name: 'VIP комплекс', href: '/services' }
  ];

  const quickLinks = [
    { name: 'О нас', href: '/about' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Как добраться', href: '/location' }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', url: '#' },
    { icon: 'MessageSquare', name: 'WhatsApp', url: '#' },
    { icon: 'Instagram', name: 'Instagram', url: '#' },
    { icon: 'Facebook', name: 'VKontakte', url: '#' }
  ];

  return (
    <footer className="bg-wash-text text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-wash-clean p-2 rounded-full">
                <Icon name="Droplets" size={24} className="text-white" />
              </div>
              <h4 className="font-exo text-xl font-bold">ГРЯЗНАЯ МАШИНА</h4>
            </Link>
            <p className="font-roboto text-gray-300 mb-4">
              Автомойка самообслуживания нового поколения. 
              Быстро, качественно, доступно.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="bg-wash-clean/20 p-2 rounded-full hover:bg-wash-clean transition-colors"
                  title={social.name}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-exo text-lg font-bold mb-4">УСЛУГИ</h5>
            <ul className="space-y-2 font-roboto text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="hover:text-wash-clean transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-exo text-lg font-bold mb-4">БЫСТРЫЕ ССЫЛКИ</h5>
            <ul className="space-y-2 font-roboto text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="hover:text-wash-clean transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-exo text-lg font-bold mb-4">КОНТАКТЫ</h5>
            <div className="space-y-3 font-roboto text-gray-300">
              <div className="flex items-start space-x-2">
                <Icon name="MapPin" size={18} className="text-wash-clean mt-1" />
                <div>
                  <p>г. Москва, ул. Чистая, д. 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} className="text-wash-clean" />
                <p className="font-orbitron text-wash-clean">+7 (495) 123-45-67</p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={18} className="text-wash-clean" />
                <p>info@dirty-car.ru</p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={18} className="text-wash-clean" />
                <div>
                  <p>Пн-Пт: 08:00-22:00</p>
                  <p>Сб-Вс: 09:00-21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-roboto text-gray-400 text-center md:text-left">
              © 2024 Автомойка "Грязная машина". Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="font-roboto text-gray-400 hover:text-wash-clean transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/terms" 
                className="font-roboto text-gray-400 hover:text-wash-clean transition-colors text-sm"
              >
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;