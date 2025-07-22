import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-wash-clean to-wash-trust text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-exo text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ПРИЕХАЛ — ПОМЫЛ — УЕХАЛ
          </h2>
          <p className="font-orbitron text-3xl md:text-4xl font-bold mb-8 text-cyan-100">
            ЗА 30 МИНУТ
          </p>
          <p className="font-roboto text-xl mb-12 max-w-2xl mx-auto text-cyan-50">
            Современная автомойка самообслуживания в центре города. 
            Быстро, качественно, без очередей!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/location">
              <Button 
                size="lg" 
                className="bg-wash-success hover:bg-green-600 text-white px-8 py-4 rounded-full font-roboto font-medium text-lg shadow-lg transition-all transform hover:scale-105"
              >
                <Icon name="MapPin" size={24} className="mr-2" />
                ЕДУ СЕЙЧАС
              </Button>
            </Link>
            <Link to="/booking">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-roboto font-medium text-lg backdrop-blur-sm"
              >
                <Icon name="Calendar" size={24} className="mr-2" />
                ЗАБРОНИРОВАТЬ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-exo text-3xl font-bold mb-8">ВРЕМЯ РАБОТЫ</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-wash-clean/20">
              <CardContent className="p-6 text-center">
                <Icon name="Sun" size={48} className="mx-auto mb-4 text-wash-trust" />
                <p className="font-roboto font-medium text-gray-600 mb-2">Пн - Пт</p>
                <p className="font-orbitron text-2xl font-bold text-wash-text">08:00 - 22:00</p>
              </CardContent>
            </Card>
            <Card className="border-wash-clean/20">
              <CardContent className="p-6 text-center">
                <Icon name="CloudSun" size={48} className="mx-auto mb-4 text-wash-trust" />
                <p className="font-roboto font-medium text-gray-600 mb-2">Сб - Вс</p>
                <p className="font-orbitron text-2xl font-bold text-wash-text">09:00 - 21:00</p>
              </CardContent>
            </Card>
            <Card className="border-wash-clean/20">
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={48} className="mx-auto mb-4 text-wash-trust" />
                <p className="font-roboto font-medium text-gray-600 mb-2">Среднее время</p>
                <p className="font-orbitron text-2xl font-bold text-wash-success">30 минут</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="font-exo text-4xl font-bold text-center mb-12">НАШИ УСЛУГИ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services">
              <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name="Car" size={48} className="mx-auto mb-4 text-wash-clean group-hover:scale-110 transition-transform" />
                  <h4 className="font-exo text-xl font-bold mb-2">УСЛУГИ</h4>
                  <p className="font-roboto text-gray-600">Полный прайс-лист</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/booking">
              <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-wash-clean group-hover:scale-110 transition-transform" />
                  <h4 className="font-exo text-xl font-bold mb-2">БРОНИРОВАНИЕ</h4>
                  <p className="font-roboto text-gray-600">Забронировать время</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/gallery">
              <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name="Camera" size={48} className="mx-auto mb-4 text-wash-clean group-hover:scale-110 transition-transform" />
                  <h4 className="font-exo text-xl font-bold mb-2">ГАЛЕРЕЯ</h4>
                  <p className="font-roboto text-gray-600">Результаты работ</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/contacts">
              <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name="Phone" size={48} className="mx-auto mb-4 text-wash-clean group-hover:scale-110 transition-transform" />
                  <h4 className="font-exo text-xl font-bold mb-2">КОНТАКТЫ</h4>
                  <p className="font-roboto text-gray-600">Связаться с нами</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;