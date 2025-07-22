import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все работы', icon: 'Grid3X3' },
    { id: 'before-after', name: 'До и После', icon: 'ArrowLeftRight' },
    { id: 'detailing', name: 'Детейлинг', icon: 'Sparkles' },
    { id: 'interior', name: 'Салон', icon: 'Armchair' },
    { id: 'exterior', name: 'Кузов', icon: 'Car' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'before-after',
      title: 'Полная мойка седана',
      description: 'Результат стандартной мойки',
      image: 'https://v3.fal.media/files/elephant/2wNtkIlZdOZmRh8oBPa1V_output.png',
      service: 'Стандарт'
    },
    {
      id: 2,
      category: 'detailing',
      title: 'Премиум детейлинг',
      description: 'Полировка и защитное покрытие',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      service: 'Премиум'
    },
    {
      id: 3,
      category: 'interior',
      title: 'Химчистка салона',
      description: 'Глубокая очистка кожаных сидений',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      service: 'VIP комплекс'
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Полировка кузова',
      description: 'Восстановление блеска лакокрасочного покрытия',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      service: 'Премиум'
    },
    {
      id: 5,
      category: 'before-after',
      title: 'Мойка внедорожника',
      description: 'Очистка после бездорожья',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      service: 'Стандарт'
    },
    {
      id: 6,
      category: 'detailing',
      title: 'Керамическое покрытие',
      description: 'Защитное покрытие премиум класса',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      service: 'VIP комплекс'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const stats = [
    { number: '1000+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '5000+', label: 'Помытых автомобилей', icon: 'Car' },
    { number: '3', label: 'Года работы', icon: 'Calendar' },
    { number: '4.9', label: 'Средняя оценка', icon: 'Star' }
  ];

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">ГАЛЕРЕЯ РАБОТ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Посмотрите на результаты нашей работы и убедитесь в качестве услуг
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-wash-clean/20">
                <CardContent className="p-6">
                  <Icon name={stat.icon as any} size={32} className="mx-auto mb-3 text-wash-clean" />
                  <div className="font-orbitron text-2xl md:text-3xl font-bold text-wash-trust mb-1">
                    {stat.number}
                  </div>
                  <p className="font-roboto text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`rounded-full px-6 py-2 ${
                  selectedCategory === category.id 
                    ? 'bg-wash-clean text-white' 
                    : 'border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <Icon name={category.icon as any} size={18} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-wash-success text-white">
                      {item.service}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-exo text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-roboto text-gray-600 mb-4">{item.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-wash-clean text-wash-clean hover:bg-wash-clean hover:text-white"
                  >
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">РЕЗУЛЬТАТЫ ДО И ПОСЛЕ</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="relative">
                <img 
                  src="https://v3.fal.media/files/elephant/2wNtkIlZdOZmRh8oBPa1V_output.png" 
                  alt="Результат мойки до и после"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white text-lg px-4 py-2">ДО</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-wash-success text-white text-lg px-4 py-2">ПОСЛЕ</Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-exo text-2xl font-bold mb-2">Премиум детейлинг</h3>
                  <p className="font-roboto">Полная трансформация автомобиля за 45 минут</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-exo text-3xl font-bold text-center mb-12">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей М.',
                rating: 5,
                text: 'Отличная мойка! Машина стала как новая. Персонал вежливый, работают быстро.',
                service: 'Премиум'
              },
              {
                name: 'Мария К.',
                rating: 5,
                text: 'Очень довольна результатом химчистки салона. Все пятна исчезли!',
                service: 'VIP комплекс'
              },
              {
                name: 'Дмитрий П.',
                rating: 5,
                text: 'Удобное расположение, быстрое обслуживание. Рекомендую!',
                service: 'Стандарт'
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 mr-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                      {review.service}
                    </Badge>
                  </div>
                  <p className="font-roboto text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-roboto font-medium text-wash-text">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;