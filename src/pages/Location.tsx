import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Location = () => {
  const parkingInfo = [
    { icon: 'Car', text: '20 парковочных мест' },
    { icon: 'Shield', text: 'Видеонаблюдение' },
    { icon: 'Clock', text: 'Круглосуточная охрана' },
    { icon: 'Zap', text: 'Быстрый заезд/выезд' }
  ];

  const nearbyPlaces = [
    { name: 'ТЦ "Чистые Пруды"', distance: '200м', icon: 'ShoppingBag' },
    { name: 'Кафе "Старбакс"', distance: '150м', icon: 'Coffee' },
    { name: 'АЗС "Лукойл"', distance: '300м', icon: 'Fuel' },
    { name: 'Автосервис "Мастер"', distance: '500м', icon: 'Wrench' }
  ];

  const transportRoutes = [
    {
      type: 'Метро',
      icon: 'Train',
      routes: [
        { name: 'Чистые Пруды', line: 'Сокольническая', time: '5 мин пешком', color: 'bg-red-500' },
        { name: 'Тургеневская', line: 'Калужско-Рижская', time: '7 мин пешком', color: 'bg-orange-500' }
      ]
    },
    {
      type: 'Автобус',
      icon: 'Bus',
      routes: [
        { name: '№15', line: 'до ост. "Мойка"', time: '2 мин пешком', color: 'bg-blue-500' },
        { name: '№25', line: 'до ост. "Чистая улица"', time: '3 мин пешком', color: 'bg-green-500' },
        { name: '№101', line: 'до ост. "Мойка"', time: '2 мин пешком', color: 'bg-purple-500' }
      ]
    }
  ];

  const workingHours = [
    { day: 'Понедельник - Пятница', hours: '08:00 - 22:00', isToday: true },
    { day: 'Суббота - Воскресенье', hours: '09:00 - 21:00', isToday: false }
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">НАШЕ МЕСТОПОЛОЖЕНИЕ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Удобное расположение в центре города с отличной транспортной доступностью
          </p>
        </div>
      </section>

      {/* Main Address */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-wash-clean/10 p-6 rounded-full inline-block mb-6">
              <Icon name="MapPin" size={64} className="text-wash-clean" />
            </div>
            <h2 className="font-exo text-3xl font-bold mb-4">г. Москва, ул. Чистая, д. 15</h2>
            <p className="font-roboto text-lg text-gray-600 mb-8">
              Заезд с главной дороги, удобная парковка, рядом с метро
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-wash-success hover:bg-green-600 text-white px-8 py-4 rounded-full font-roboto font-medium"
              >
                <Icon name="Navigation" size={24} className="mr-2" />
                ПОСТРОИТЬ МАРШРУТ
              </Button>
              <Link to="/booking">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white px-8 py-4 rounded-full font-roboto font-medium"
                >
                  <Icon name="Calendar" size={24} className="mr-2" />
                  ЗАБРОНИРОВАТЬ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ИНТЕРАКТИВНАЯ КАРТА</h2>
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gray-200 h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Map" size={80} className="mx-auto mb-4" />
                  <p className="font-roboto text-xl">Интерактивная карта</p>
                  <p className="font-roboto">будет добавлена</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">КАК ДОБРАТЬСЯ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportRoutes.map((transport, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-wash-clean/10 p-3 rounded-full mr-4">
                      <Icon name={transport.icon as any} size={24} className="text-wash-clean" />
                    </div>
                    <h3 className="font-exo text-xl font-bold">{transport.type}</h3>
                  </div>
                  <div className="space-y-4">
                    {transport.routes.map((route, routeIndex) => (
                      <div key={routeIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-4 h-4 rounded-full ${route.color}`}></div>
                          <div>
                            <p className="font-roboto font-medium">{route.name}</p>
                            <p className="font-roboto text-sm text-gray-600">{route.line}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                          {route.time}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parking Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ПАРКОВКА</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-wash-success/10 p-6 rounded-full inline-block mb-4">
                    <Icon name="ParkingCircle" size={48} className="text-wash-success" />
                  </div>
                  <h3 className="font-exo text-2xl font-bold mb-2">БЕСПЛАТНАЯ ПАРКОВКА</h3>
                  <p className="font-roboto text-gray-600">
                    Удобная и безопасная парковка для наших клиентов
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {parkingInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-wash-success/10 p-3 rounded-full inline-block mb-3">
                        <Icon name={info.icon as any} size={24} className="text-wash-success" />
                      </div>
                      <p className="font-roboto text-sm">{info.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">РЕЖИМ РАБОТЫ</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="bg-wash-trust/10 p-6 rounded-full inline-block mb-4">
                    <Icon name="Clock" size={48} className="text-wash-trust" />
                  </div>
                  <h3 className="font-exo text-2xl font-bold mb-2">МЫ РАБОТАЕМ ЕЖЕДНЕВНО</h3>
                  <p className="font-roboto text-gray-600">
                    Удобный график работы для вашего комфорта
                  </p>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 rounded-lg ${
                      schedule.isToday ? 'bg-wash-success/10 border border-wash-success/20' : 'bg-gray-50'
                    }`}>
                      <span className="font-roboto font-medium">{schedule.day}</span>
                      <span className="font-orbitron text-lg font-bold text-wash-trust">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-wash-clean/10 rounded-lg text-center">
                  <p className="font-roboto text-sm text-wash-clean">
                    <Icon name="Info" size={16} className="inline mr-1" />
                    Последний клиент принимается за 30 минут до закрытия
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">РЯДОМ С НАМИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyPlaces.map((place, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-wash-trust/10 p-4 rounded-full inline-block mb-4">
                    <Icon name={place.icon as any} size={24} className="text-wash-trust" />
                  </div>
                  <h3 className="font-roboto font-medium mb-2">{place.name}</h3>
                  <Badge variant="secondary" className="bg-wash-trust/10 text-wash-trust">
                    {place.distance}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-wash-clean to-wash-trust text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-exo text-3xl font-bold mb-6">НЕ МОЖЕТЕ НАЙТИ НАС?</h2>
          <p className="font-roboto text-xl mb-8 max-w-2xl mx-auto">
            Позвоните нам, и мы подробно объясним, как добраться
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-wash-clean hover:bg-gray-100 px-8 py-4 rounded-full font-orbitron font-bold text-xl"
            >
              <Icon name="Phone" size={24} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Link to="/contacts">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-wash-clean px-8 py-4 rounded-full font-roboto font-medium"
              >
                <Icon name="MessageCircle" size={24} className="mr-2" />
                НАПИСАТЬ НАМ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;