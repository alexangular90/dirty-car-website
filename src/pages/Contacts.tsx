import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Чистая, д. 15',
      description: 'Заезд с главной дороги'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      description: 'Ежедневно с 8:00 до 22:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@dirty-car.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 08:00-22:00',
      description: 'Сб-Вс: 09:00-21:00'
    }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'Telegram', url: '#', color: 'bg-blue-500' },
    { icon: 'MessageSquare', name: 'WhatsApp', url: '#', color: 'bg-green-500' },
    { icon: 'Instagram', name: 'Instagram', url: '#', color: 'bg-pink-500' },
    { icon: 'Facebook', name: 'VKontakte', url: '#', color: 'bg-blue-600' }
  ];

  const transportOptions = [
    {
      icon: 'Train',
      title: 'Метро',
      description: 'Станция "Чистые Пруды" - 5 минут пешком'
    },
    {
      icon: 'Bus',
      title: 'Автобус',
      description: 'Маршруты: 15, 25, 101 до остановки "Мойка"'
    },
    {
      icon: 'Car',
      title: 'На автомобиле',
      description: 'Бесплатная парковка на 20 мест'
    }
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">КОНТАКТЫ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом или приезжайте к нам
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-wash-clean/20">
                <CardContent className="p-6">
                  <div className="bg-wash-clean/10 p-4 rounded-full inline-block mb-4">
                    <Icon name={info.icon as any} size={32} className="text-wash-clean" />
                  </div>
                  <h3 className="font-exo text-lg font-bold mb-2">{info.title}</h3>
                  <p className="font-orbitron text-lg font-bold text-wash-trust mb-1">
                    {info.content}
                  </p>
                  <p className="font-roboto text-sm text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="font-exo text-2xl font-bold mb-6">КАК НАС НАЙТИ</h2>
              <Card className="overflow-hidden shadow-xl">
                <div className="bg-gray-200 h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="Map" size={64} className="mx-auto mb-4" />
                    <p className="font-roboto text-lg">Интерактивная карта</p>
                    <p className="font-roboto text-sm">будет добавлена</p>
                  </div>
                </div>
              </Card>
              
              {/* Transport Options */}
              <div className="mt-8 space-y-4">
                <h3 className="font-exo text-xl font-bold">КАК ДОБРАТЬСЯ:</h3>
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <div className="bg-wash-clean/10 p-2 rounded-full">
                      <Icon name={option.icon as any} size={20} className="text-wash-clean" />
                    </div>
                    <div>
                      <h4 className="font-roboto font-medium">{option.title}</h4>
                      <p className="font-roboto text-sm text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-exo text-2xl font-bold mb-6">НАПИШИТЕ НАМ</h2>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium mb-2">
                          Имя *
                        </label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-roboto font-medium mb-2">
                          Телефон *
                        </label>
                        <Input type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Тема обращения
                      </label>
                      <Input placeholder="Например: Вопрос по услугам" />
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Сообщение *
                      </label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или предложение"
                        rows={5}
                      />
                    </div>

                    <Button 
                      className="w-full bg-wash-success hover:bg-green-600 text-white py-3 text-lg font-roboto font-medium rounded-full"
                      size="lg"
                    >
                      <Icon name="Send" size={20} className="mr-2" />
                      ОТПРАВИТЬ СООБЩЕНИЕ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-exo text-3xl font-bold mb-8">МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
          <p className="font-roboto text-gray-600 mb-8 max-w-2xl mx-auto">
            Следите за нашими новостями, акциями и получайте полезные советы по уходу за автомобилем
          </p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className={`${social.color} text-white p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <Icon name={social.icon as any} size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gradient-to-r from-wash-clean to-wash-trust text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Icon name="Phone" size={48} className="mx-auto mb-4" />
            <h2 className="font-exo text-2xl font-bold mb-4">СРОЧНАЯ СВЯЗЬ</h2>
            <p className="font-roboto text-lg mb-6">
              Нужна срочная мойка или возникли вопросы? Звоните прямо сейчас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-wash-clean hover:bg-gray-100 px-8 py-4 rounded-full font-orbitron font-bold text-xl"
              >
                <Icon name="Phone" size={24} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-wash-clean px-8 py-4 rounded-full font-roboto font-medium"
              >
                <Icon name="MessageCircle" size={24} className="mr-2" />
                НАПИСАТЬ В TELEGRAM
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;