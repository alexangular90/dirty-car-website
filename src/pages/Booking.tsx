import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const services = [
    { name: 'Экспресс мойка', price: 500, duration: '15 мин' },
    { name: 'Стандарт', price: 800, duration: '25 мин' },
    { name: 'Премиум', price: 1500, duration: '45 мин' },
    { name: 'VIP комплекс', price: 2500, duration: '60 мин' }
  ];

  const additionalOptions = [
    { name: 'Химчистка сидений', price: 300 },
    { name: 'Полировка фар', price: 200 },
    { name: 'Чернение шин', price: 150 },
    { name: 'Ароматизация салона', price: 100 }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00'
  ];

  const handleAdditionalServiceChange = (serviceName: string, checked: boolean) => {
    if (checked) {
      setAdditionalServices([...additionalServices, serviceName]);
    } else {
      setAdditionalServices(additionalServices.filter(s => s !== serviceName));
    }
  };

  const calculateTotal = () => {
    const mainService = services.find(s => s.name === selectedService);
    const mainPrice = mainService ? mainService.price : 0;
    const additionalPrice = additionalServices.reduce((total, serviceName) => {
      const service = additionalOptions.find(s => s.name === serviceName);
      return total + (service ? service.price : 0);
    }, 0);
    return mainPrice + additionalPrice;
  };

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">БРОНИРОВАНИЕ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Забронируйте удобное время для мойки вашего автомобиля
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <Icon name="Calendar" size={48} className="mx-auto mb-4 text-wash-clean" />
                    <h2 className="font-exo text-2xl font-bold mb-2">ФОРМА БРОНИРОВАНИЯ</h2>
                    <p className="font-roboto text-gray-600">
                      Заполните форму для бронирования
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Выберите основную услугу *
                      </label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
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

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Дополнительные услуги
                      </label>
                      <div className="space-y-3">
                        {additionalOptions.map((service, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Checkbox
                              id={`additional-${index}`}
                              checked={additionalServices.includes(service.name)}
                              onCheckedChange={(checked) => 
                                handleAdditionalServiceChange(service.name, checked as boolean)
                              }
                            />
                            <label 
                              htmlFor={`additional-${index}`}
                              className="flex-1 text-sm font-roboto cursor-pointer"
                            >
                              {service.name} - {service.price} ₽
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-roboto font-medium mb-2">
                          Дата *
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
                          Время *
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
                        <Input 
                          type="tel" 
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Марка и модель автомобиля
                      </label>
                      <Input placeholder="Например: Toyota Camry" />
                    </div>

                    <div>
                      <label className="block text-sm font-roboto font-medium mb-2">
                        Комментарий
                      </label>
                      <Textarea 
                        placeholder="Дополнительные пожелания или особенности автомобиля"
                        rows={3}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Summary */}
              <div className="space-y-6">
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <h3 className="font-exo text-xl font-bold mb-6">ИТОГО К ОПЛАТЕ</h3>
                    
                    {selectedService && (
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="font-roboto">{selectedService}</span>
                          <span className="font-orbitron font-bold">
                            {services.find(s => s.name === selectedService)?.price} ₽
                          </span>
                        </div>
                        
                        {additionalServices.map((serviceName, index) => {
                          const service = additionalOptions.find(s => s.name === serviceName);
                          return (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span className="font-roboto text-gray-600">{serviceName}</span>
                              <span className="font-orbitron">{service?.price} ₽</span>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-exo text-lg font-bold">ИТОГО:</span>
                        <span className="font-orbitron text-2xl font-bold text-wash-trust">
                          {calculateTotal()} ₽
                        </span>
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-6 bg-wash-success hover:bg-green-600 text-white py-3 text-lg font-roboto font-medium rounded-full transition-all transform hover:scale-105"
                      size="lg"
                    >
                      <Icon name="CheckCircle" size={24} className="mr-2" />
                      ЗАБРОНИРОВАТЬ
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-xl border-0 bg-wash-clean/5">
                  <CardContent className="p-6">
                    <h4 className="font-exo text-lg font-bold mb-4 flex items-center">
                      <Icon name="Info" size={20} className="mr-2 text-wash-clean" />
                      ВАЖНАЯ ИНФОРМАЦИЯ
                    </h4>
                    <ul className="space-y-2 text-sm font-roboto text-gray-600">
                      <li>• Бронирование действительно в течение 15 минут</li>
                      <li>• При опоздании более чем на 10 минут бронь аннулируется</li>
                      <li>• Оплата производится на месте</li>
                      <li>• Возможна предоплата банковской картой</li>
                      <li>• Отмена бронирования за 2 часа до визита</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;