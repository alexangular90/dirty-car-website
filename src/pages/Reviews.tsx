import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Алексей Михайлов',
      rating: 5,
      date: '15.12.2024',
      service: 'Премиум',
      text: 'Отличная мойка! Машина стала как новая. Персонал вежливый, работают быстро и качественно. Особенно понравилась полировка кузова. Обязательно приеду еще!',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Мария Козлова',
      rating: 5,
      date: '12.12.2024',
      service: 'VIP комплекс',
      text: 'Очень довольна результатом химчистки салона. Все пятна исчезли, запах стал свежим. Цена соответствует качеству. Рекомендую всем!',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      rating: 4,
      date: '10.12.2024',
      service: 'Стандарт',
      text: 'Хорошая мойка, быстро и недорого. Единственный минус - иногда бывают очереди в выходные. В остальном все отлично.',
      verified: true,
      helpful: 5
    },
    {
      id: 4,
      name: 'Елена Сидорова',
      rating: 5,
      date: '08.12.2024',
      service: 'Экспресс мойка',
      text: 'Быстро и качественно! За 15 минут машина стала чистой. Удобное расположение, есть парковка. Буду пользоваться постоянно.',
      verified: false,
      helpful: 3
    },
    {
      id: 5,
      name: 'Игорь Волков',
      rating: 5,
      date: '05.12.2024',
      service: 'Премиум',
      text: 'Профессиональный подход к делу. Мастера знают свое дело. Результат превзошел ожидания. Спасибо за качественную работу!',
      verified: true,
      helpful: 15
    },
    {
      id: 6,
      name: 'Анна Новикова',
      rating: 4,
      date: '03.12.2024',
      service: 'VIP комплекс',
      text: 'Очень хорошая мойка, но немного дороговато. Качество на высоте, персонал приветливый. В целом рекомендую.',
      verified: true,
      helpful: 7
    }
  ];

  const stats = [
    { label: 'Средняя оценка', value: '4.8', icon: 'Star', color: 'text-yellow-500' },
    { label: 'Всего отзывов', value: '247', icon: 'MessageSquare', color: 'text-blue-500' },
    { label: 'Рекомендуют', value: '96%', icon: 'ThumbsUp', color: 'text-green-500' },
    { label: 'Повторных клиентов', value: '78%', icon: 'RotateCcw', color: 'text-purple-500' }
  ];

  const ratingDistribution = [
    { stars: 5, count: 189, percentage: 77 },
    { stars: 4, count: 35, percentage: 14 },
    { stars: 3, count: 15, percentage: 6 },
    { stars: 2, count: 5, percentage: 2 },
    { stars: 1, count: 3, percentage: 1 }
  ];

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const serviceMatch = selectedService === 'all' || review.service === selectedService;
    return ratingMatch && serviceMatch;
  });

  const renderStars = (rating: number, size: number = 16) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={size}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-wash-background text-wash-text">
      {/* Header */}
      <section className="bg-gradient-to-r from-wash-clean to-wash-trust text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-exo text-4xl md:text-5xl font-bold mb-4">ОТЗЫВЫ КЛИЕНТОВ</h1>
          <p className="font-roboto text-xl max-w-2xl mx-auto">
            Читайте отзывы наших клиентов и делитесь своим опытом
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-wash-clean/20">
                <CardContent className="p-6">
                  <Icon name={stat.icon as any} size={32} className={`mx-auto mb-3 ${stat.color}`} />
                  <div className="font-orbitron text-2xl md:text-3xl font-bold text-wash-trust mb-1">
                    {stat.value}
                  </div>
                  <p className="font-roboto text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rating Distribution */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-exo text-2xl font-bold text-center mb-8">РАСПРЕДЕЛЕНИЕ ОЦЕНОК</h2>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {ratingDistribution.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 w-20">
                        <span className="font-roboto font-medium">{item.stars}</span>
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-wash-success h-3 rounded-full transition-all duration-300"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="font-roboto text-sm text-gray-600 w-12">{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Фильтр по оценке" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все оценки</SelectItem>
                <SelectItem value="5">5 звезд</SelectItem>
                <SelectItem value="4">4 звезды</SelectItem>
                <SelectItem value="3">3 звезды</SelectItem>
                <SelectItem value="2">2 звезды</SelectItem>
                <SelectItem value="1">1 звезда</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Фильтр по услуге" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все услуги</SelectItem>
                <SelectItem value="Экспресс мойка">Экспресс мойка</SelectItem>
                <SelectItem value="Стандарт">Стандарт</SelectItem>
                <SelectItem value="Премиум">Премиум</SelectItem>
                <SelectItem value="VIP комплекс">VIP комплекс</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-wash-clean/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={24} className="text-wash-clean" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-roboto font-medium">{review.name}</h3>
                          {review.verified && (
                            <Badge className="bg-wash-success text-white text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверен
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="font-roboto text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-wash-clean/10 text-wash-clean">
                      {review.service}
                    </Badge>
                  </div>
                  
                  <p className="font-roboto text-gray-700 mb-4 leading-relaxed">
                    {review.text}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-500 hover:text-wash-clean"
                    >
                      <Icon name="ThumbsUp" size={16} className="mr-2" />
                      Полезно ({review.helpful})
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-500 hover:text-wash-clean"
                    >
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Ответить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Write Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Icon name="Edit" size={48} className="mx-auto mb-4 text-wash-clean" />
                  <h2 className="font-exo text-2xl font-bold mb-2">ОСТАВИТЬ ОТЗЫВ</h2>
                  <p className="font-roboto text-gray-600">
                    Поделитесь своим опытом с другими клиентами
                  </p>
                </div>
                
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
                        Услуга *
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="express">Экспресс мойка</SelectItem>
                          <SelectItem value="standard">Стандарт</SelectItem>
                          <SelectItem value="premium">Премиум</SelectItem>
                          <SelectItem value="vip">VIP комплекс</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-roboto font-medium mb-2">
                      Оценка *
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Icon name="Star" size={24} className="text-gray-300 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-roboto font-medium mb-2">
                      Отзыв *
                    </label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте посещения нашей мойки"
                      rows={5}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-roboto font-medium mb-2">
                      Email (не публикуется)
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <Button 
                    className="w-full bg-wash-success hover:bg-green-600 text-white py-3 text-lg font-roboto font-medium rounded-full"
                    size="lg"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    ОТПРАВИТЬ ОТЗЫВ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;