import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    {
      name: 'Экспресс мойка',
      description: 'Быстрая мойка кузова и колес',
      price: 500,
      duration: '15 мин',
      icon: 'Zap'
    },
    {
      name: 'Стандарт',
      description: 'Полная мойка + салон пылесос',
      price: 800,
      duration: '25 мин',
      icon: 'Car'
    },
    {
      name: 'Премиум',
      description: 'Детейлинг + химчистка салона',
      price: 1500,
      duration: '45 мин',
      icon: 'Sparkles'
    },
    {
      name: 'VIP комплекс',
      description: 'Полный детейлинг + защитная полировка',
      price: 2500,
      duration: '60 мин',
      icon: 'Crown'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-wash-clean p-2 rounded-full">
                <Icon name="Droplets" size={24} className="text-white" />
              </div>
              <h1 className="font-exo text-2xl font-bold text-wash-text">
                ГРЯЗНАЯ МАШИНА
              </h1>
            </div>
            <Button 
              className="bg-wash-success hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

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
            <Button 
              size="lg" 
              className="bg-wash-success hover:bg-green-600 text-white px-8 py-4 rounded-full font-roboto font-medium text-lg shadow-lg transition-all transform hover:scale-105"
            >
              <Icon name="MapPin" size={24} className="mr-2" />
              ЕДУ СЕЙЧАС
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-roboto font-medium text-lg backdrop-blur-sm"
            >
              <Icon name="Calendar" size={24} className="mr-2" />
              ЗАБРОНИРОВАТЬ
            </Button>
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

      {/* Price List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="font-exo text-4xl font-bold text-center mb-12">ПРАЙС-ЛИСТ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4 group-hover:bg-wash-clean/20 transition-colors">
                      <Icon name={service.icon as any} size={32} className="text-wash-clean" />
                    </div>
                    <h4 className="font-exo text-xl font-bold mb-2">{service.name}</h4>
                    <p className="font-roboto text-gray-600 text-sm mb-4">{service.description}</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="font-orbitron text-3xl font-bold text-wash-trust">
                      {service.price} ₽
                    </div>
                    <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                      <Icon name="Timer" size={14} className="mr-1" />
                      {service.duration}
                    </Badge>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 bg-wash-success hover:bg-green-600 text-white rounded-full"
                  >
                    ВЫБРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="font-exo text-4xl font-bold text-center mb-12">РЕЗУЛЬТАТЫ НАШЕЙ РАБОТЫ</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://v3.fal.media/files/elephant/2wNtkIlZdOZmRh8oBPa1V_output.png" 
                    alt="Результат мойки до и после"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white">ДО</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-wash-success text-white">ПОСЛЕ</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h4 className="font-exo text-2xl font-bold mb-4">Почему выбирают нас?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-wash-success" />
                    <span className="font-roboto">Профессиональная химия</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-wash-success" />
                    <span className="font-roboto">Современное оборудование</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-wash-success" />
                    <span className="font-roboto">Быстрое обслуживание</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={24} className="text-wash-success" />
                    <span className="font-roboto">Гарантия качества</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-wash-clean/10 rounded-lg">
                  <p className="font-orbitron text-lg font-bold text-wash-clean text-center">
                    БОЛЕЕ 1000 ДОВОЛЬНЫХ КЛИЕНТОВ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-wash-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Icon name="Calendar" size={48} className="mx-auto mb-4 text-wash-clean" />
                  <h3 className="font-exo text-3xl font-bold mb-2">БРОНИРОВАНИЕ</h3>
                  <p className="font-roboto text-gray-600">
                    Забронируйте удобное время без регистрации
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-roboto font-medium mb-2">
                      Выберите услугу
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Выберите тип мойки" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.name}>
                            {service.name} - {service.price} ₽ ({service.duration})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Дата
                      </label>
                      <Input 
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Время
                      </label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-roboto font-medium mb-2">
                      Телефон для связи
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-wash-success hover:bg-green-600 text-white py-3 text-lg font-roboto font-medium rounded-full transition-all transform hover:scale-105"
                    size="lg"
                  >
                    <Icon name="CheckCircle" size={24} className="mr-2" />
                    ЗАБРОНИРОВАТЬ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="font-exo text-4xl font-bold text-center mb-12">КАК НАС НАЙТИ</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <Icon name="Map" size={64} className="mx-auto mb-4" />
                  <p className="font-roboto">Интерактивная карта</p>
                  <p className="font-roboto text-sm">будет добавлена</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-exo text-2xl font-bold mb-4">КОНТАКТНАЯ ИНФОРМАЦИЯ</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" size={24} className="text-wash-clean mt-1" />
                    <div>
                      <p className="font-roboto font-medium">Адрес:</p>
                      <p className="font-roboto text-gray-600">г. Москва, ул. Чистая, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={24} className="text-wash-clean" />
                    <div>
                      <p className="font-roboto font-medium">Телефон:</p>
                      <p className="font-orbitron text-xl text-wash-trust">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Car" size={24} className="text-wash-clean" />
                    <div>
                      <p className="font-roboto font-medium">Парковка:</p>
                      <p className="font-roboto text-gray-600">Бесплатная на 20 мест</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-wash-clean/5 p-6 rounded-lg">
                <h5 className="font-exo text-lg font-bold mb-3">КАК ДОБРАТЬСЯ:</h5>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Train" size={18} className="text-wash-trust" />
                    <span className="font-roboto text-sm">Метро "Чистые Пруды" - 5 мин пешком</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Bus" size={18} className="text-wash-trust" />
                    <span className="font-roboto text-sm">Автобусы: 15, 25, 101 до остановки "Мойка"</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Car" size={18} className="text-wash-trust" />
                    <span className="font-roboto text-sm">Заезд с ул. Чистая, 15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wash-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-wash-clean p-2 rounded-full">
                  <Icon name="Droplets" size={24} className="text-white" />
                </div>
                <h4 className="font-exo text-xl font-bold">ГРЯЗНАЯ МАШИНА</h4>
              </div>
              <p className="font-roboto text-gray-300">
                Автомойка самообслуживания нового поколения. 
                Быстро, качественно, доступно.
              </p>
            </div>
            <div>
              <h5 className="font-exo text-lg font-bold mb-4">УСЛУГИ</h5>
              <ul className="space-y-2 font-roboto text-gray-300">
                <li>Экспресс мойка</li>
                <li>Стандартная мойка</li>
                <li>Премиум детейлинг</li>
                <li>VIP комплекс</li>
              </ul>
            </div>
            <div>
              <h5 className="font-exo text-lg font-bold mb-4">КОНТАКТЫ</h5>
              <div className="space-y-2 font-roboto text-gray-300">
                <p>г. Москва, ул. Чистая, д. 15</p>
                <p className="font-orbitron text-wash-clean">+7 (495) 123-45-67</p>
                <p>Ежедневно: 08:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="font-roboto text-gray-400">
              © 2024 Автомойка "Грязная машина". Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;