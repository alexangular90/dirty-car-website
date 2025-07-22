import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const About = () => {
  const advantages = [
    {
      icon: 'Zap',
      title: 'Быстрое обслуживание',
      description: 'Среднее время мойки - всего 30 минут'
    },
    {
      icon: 'Shield',
      title: 'Качественная химия',
      description: 'Используем только проверенные средства'
    },
    {
      icon: 'Users',
      title: 'Опытные мастера',
      description: 'Команда профессионалов с опытом 5+ лет'
    },
    {
      icon: 'Clock',
      title: 'Удобный график',
      description: 'Работаем ежедневно с 8:00 до 22:00'
    },
    {
      icon: 'CreditCard',
      title: 'Любая оплата',
      description: 'Наличные, карты, безналичный расчет'
    },
    {
      icon: 'MapPin',
      title: 'Удобное расположение',
      description: 'В центре города, рядом с метро'
    }
  ];

  const equipment = [
    {
      name: 'Аппараты высокого давления',
      description: 'Karcher HD 10/25-4 S Plus',
      icon: 'Droplets'
    },
    {
      name: 'Пылесосы промышленные',
      description: 'Karcher WD 6 P Premium',
      icon: 'Wind'
    },
    {
      name: 'Полировальные машины',
      description: 'Rupes LHR 15ES',
      icon: 'RotateCcw'
    },
    {
      name: 'Система очистки воды',
      description: 'Многоступенчатая фильтрация',
      icon: 'Filter'
    }
  ];

  const team = [
    {
      name: 'Алексей Петров',
      position: 'Управляющий',
      experience: '8 лет в автосервисе',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Михаил Сидоров',
      position: 'Мастер детейлинга',
      experience: '6 лет опыта',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Специалист по химчистке',
      experience: '5 лет опыта',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    }
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Основание компании',
      description: 'Открытие первой мойки самообслуживания'
    },
    {
      year: '2022',
      title: 'Расширение услуг',
      description: 'Добавили детейлинг и химчистку салона'
    },
    {
      year: '2023',
      title: 'Новое оборудование',
      description: 'Установили современные аппараты Karcher'
    },
    {
      year: '2024',
      title: 'Онлайн-бронирование',
      description: 'Запустили систему онлайн записи'
    }
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">О НАС</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Современная автомойка с индивидуальным подходом к каждому клиенту
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-exo text-3xl font-bold mb-8">НАША МИССИЯ</h2>
            <p className="font-roboto text-lg text-gray-600 mb-8 leading-relaxed">
              Мы создали автомойку "Грязная машина" с одной целью - предоставить автовладельцам 
              быстрый, качественный и доступный сервис по уходу за автомобилем. Наша команда 
              профессионалов использует только современное оборудование и проверенную химию, 
              чтобы ваш автомобиль всегда выглядел безупречно.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4">
                  <Icon name="Target" size={32} className="text-wash-clean" />
                </div>
                <h3 className="font-exo text-xl font-bold mb-2">КАЧЕСТВО</h3>
                <p className="font-roboto text-gray-600">
                  Используем только профессиональную химию и оборудование
                </p>
              </div>
              <div className="text-center">
                <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4">
                  <Icon name="Clock" size={32} className="text-wash-clean" />
                </div>
                <h3 className="font-exo text-xl font-bold mb-2">СКОРОСТЬ</h3>
                <p className="font-roboto text-gray-600">
                  Быстрое обслуживание без потери качества
                </p>
              </div>
              <div className="text-center">
                <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4">
                  <Icon name="Heart" size={32} className="text-wash-clean" />
                </div>
                <h3 className="font-exo text-xl font-bold mb-2">ЗАБОТА</h3>
                <p className="font-roboto text-gray-600">
                  Индивидуальный подход к каждому автомобилю
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">НАШИ ПРЕИМУЩЕСТВА</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-wash-clean/10 p-3 rounded-full">
                      <Icon name={advantage.icon as any} size={24} className="text-wash-clean" />
                    </div>
                    <div>
                      <h3 className="font-exo text-lg font-bold mb-2">{advantage.title}</h3>
                      <p className="font-roboto text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">НАШЕ ОБОРУДОВАНИЕ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-wash-trust/10 p-4 rounded-full inline-block mb-4">
                    <Icon name={item.icon as any} size={32} className="text-wash-trust" />
                  </div>
                  <h3 className="font-exo text-lg font-bold mb-2">{item.name}</h3>
                  <p className="font-roboto text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">НАША КОМАНДА</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-exo text-xl font-bold mb-1">{member.name}</h3>
                  <p className="font-roboto text-wash-trust font-medium mb-2">{member.position}</p>
                  <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                    {member.experience}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ИСТОРИЯ РАЗВИТИЯ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-wash-clean text-white rounded-full w-16 h-16 flex items-center justify-center font-orbitron font-bold">
                    {event.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-exo text-xl font-bold mb-2">{event.title}</h3>
                    <p className="font-roboto text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-wash-clean to-wash-trust text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-exo text-3xl font-bold mb-6">ГОТОВЫ ДОВЕРИТЬ НАМ СВОЙ АВТОМОБИЛЬ?</h2>
          <p className="font-roboto text-xl mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов и убедитесь в качестве наших услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button 
                size="lg"
                className="bg-white text-wash-clean hover:bg-gray-100 px-8 py-4 rounded-full font-roboto font-medium text-lg"
              >
                <Icon name="Calendar" size={24} className="mr-2" />
                ЗАБРОНИРОВАТЬ
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-wash-clean px-8 py-4 rounded-full font-roboto font-medium text-lg"
              >
                <Icon name="List" size={24} className="mr-2" />
                ПОСМОТРЕТЬ УСЛУГИ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;