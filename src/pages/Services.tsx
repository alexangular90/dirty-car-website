import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'Экспресс мойка',
      description: 'Быстрая мойка кузова и колес',
      price: 500,
      duration: '15 мин',
      icon: 'Zap',
      features: ['Мойка кузова', 'Мойка колес', 'Сушка']
    },
    {
      name: 'Стандарт',
      description: 'Полная мойка + салон пылесос',
      price: 800,
      duration: '25 мин',
      icon: 'Car',
      features: ['Мойка кузова', 'Мойка колес', 'Пылесос салона', 'Протирка панели']
    },
    {
      name: 'Премиум',
      description: 'Детейлинг + химчистка салона',
      price: 1500,
      duration: '45 мин',
      icon: 'Sparkles',
      features: ['Полная мойка', 'Химчистка салона', 'Полировка кузова', 'Чернение шин']
    },
    {
      name: 'VIP комплекс',
      description: 'Полный детейлинг + защитная полировка',
      price: 2500,
      duration: '60 мин',
      icon: 'Crown',
      features: ['Детейлинг мойка', 'Глубокая химчистка', 'Защитная полировка', 'Обработка кожи']
    }
  ];

  const additionalServices = [
    { name: 'Химчистка сидений', price: 300, icon: 'Armchair' },
    { name: 'Полировка фар', price: 200, icon: 'Lightbulb' },
    { name: 'Чернение шин', price: 150, icon: 'Circle' },
    { name: 'Ароматизация салона', price: 100, icon: 'Flower' },
    { name: 'Обработка кожи', price: 400, icon: 'Shield' },
    { name: 'Мойка двигателя', price: 600, icon: 'Cog' }
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">НАШИ УСЛУГИ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Профессиональная мойка и детейлинг автомобилей любой сложности
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ОСНОВНЫЕ ПАКЕТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4 group-hover:bg-wash-clean/20 transition-colors">
                      <Icon name={service.icon as any} size={32} className="text-wash-clean" />
                    </div>
                    <h3 className="font-exo text-xl font-bold mb-2">{service.name}</h3>
                    <p className="font-roboto text-gray-600 text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <div className="text-center space-y-3 mb-4">
                    <div className="font-orbitron text-3xl font-bold text-wash-trust">
                      {service.price} ₽
                    </div>
                    <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                      <Icon name="Timer" size={14} className="mr-1" />
                      {service.duration}
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-roboto font-medium mb-2">Включает:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-wash-success mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-wash-success hover:bg-green-600 text-white rounded-full">
                      ВЫБРАТЬ
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-wash-clean/10 p-3 rounded-full">
                        <Icon name={service.icon as any} size={24} className="text-wash-clean" />
                      </div>
                      <div>
                        <h3 className="font-roboto font-medium">{service.name}</h3>
                        <p className="font-orbitron text-lg font-bold text-wash-trust">
                          {service.price} ₽
                        </p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white">
                      Добавить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-wash-success to-green-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Gift" size={32} className="mr-3" />
                  <h3 className="font-exo text-2xl font-bold">ПЕРВОЕ ПОСЕЩЕНИЕ</h3>
                </div>
                <p className="font-roboto text-lg mb-4">Скидка 20% на любую услугу</p>
                <p className="font-roboto text-sm opacity-90">
                  Действует для новых клиентов при предъявлении документа
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-wash-trust to-blue-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Users" size={32} className="mr-3" />
                  <h3 className="font-exo text-2xl font-bold">КОРПОРАТИВНЫМ КЛИЕНТАМ</h3>
                </div>
                <p className="font-roboto text-lg mb-4">Скидка до 15% при заключении договора</p>
                <p className="font-roboto text-sm opacity-90">
                  Индивидуальные условия для автопарков
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;