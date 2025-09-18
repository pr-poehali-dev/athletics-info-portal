import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
  const newsItems = [
    {
      id: 1,
      title: "Рекорд России в беге на 100 метров",
      description: "На чемпионате страны установлен новый национальный рекорд в спринте среди мужчин",
      image: "/img/8e48ef8a-09b4-4f7a-9a4f-d1b5b42912ca.jpg",
      category: "Спринт",
      date: "18 сентября 2024",
      readTime: "3 мин"
    },
    {
      id: 2,
      title: "Подготовка к Олимпиаде 2028",
      description: "Началась интенсивная подготовка сборной команды к Олимпийским играм в Лос-Анджелесе",
      image: "/img/4c7f9ac2-41ff-4abe-be13-649e94c3d847.jpg",
      category: "Олимпиада",
      date: "17 сентября 2024",
      readTime: "5 мин"
    },
    {
      id: 3,
      title: "Чемпионат мира по легкой атлетике",
      description: "Российские спортсмены завоевали 12 медалей на мировом первенстве",
      image: "/img/74e0f74d-686e-4e86-97aa-60846c4f959a.jpg",
      category: "Чемпионат",
      date: "16 сентября 2024",
      readTime: "4 мин"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-energetic to-dynamic rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-energetic to-dynamic bg-clip-text text-transparent">
                  ЛЕГКАЯ АТЛЕТИКА
                </h1>
                <p className="text-sm text-gray-600">Спортивные новости</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-energetic transition-colors font-medium">Главная</a>
              <a href="#" className="text-gray-700 hover:text-energetic transition-colors font-medium">Новости</a>
              <a href="#" className="text-gray-700 hover:text-energetic transition-colors font-medium">События</a>
              <a href="#" className="text-gray-700 hover:text-energetic transition-colors font-medium">Спортсмены</a>
              <a href="#" className="text-gray-700 hover:text-energetic transition-colors font-medium">Результаты</a>
            </nav>

            <Button 
              className="bg-gradient-to-r from-energetic to-dynamic hover:opacity-90 text-white font-semibold"
              onClick={() => window.open('https://t.me/Barbaric_08', '_blank')}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-energetic via-dynamic to-energetic bg-clip-text text-transparent">
              СПОРТ В ДВИЖЕНИИ
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Самые свежие новости, результаты соревнований и достижения в мире легкой атлетики
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-energetic hover:bg-energetic/90 text-white font-semibold px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
              <Button size="lg" variant="outline" className="border-energetic text-energetic hover:bg-energetic hover:text-white font-semibold px-8">
                <Icon name="Trophy" size={20} className="mr-2" />
                Рейтинги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Последние новости</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Будьте в курсе всех событий в мире легкой атлетики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-energetic to-dynamic text-white border-0">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{item.date}</span>
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight hover:text-energetic transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="text-energetic hover:text-energetic/80 hover:bg-energetic/10 p-0 h-auto font-semibold"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-energetic/10 to-dynamic/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-black text-energetic mb-2">150+</div>
              <p className="text-gray-700 font-medium">Спортсменов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-4xl font-black text-dynamic mb-2">45</div>
              <p className="text-gray-700 font-medium">Рекордов</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-black text-energetic mb-2">12</div>
              <p className="text-gray-700 font-medium">Медалей</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-4xl font-black text-dynamic mb-2">25</div>
              <p className="text-gray-700 font-medium">Соревнований</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-energetic to-dynamic rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">ЛЕГКАЯ АТЛЕТИКА</h3>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Следите за спортивными достижениями и новостями легкой атлетики
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Button 
              variant="ghost" 
              size="lg"
              className="text-white hover:text-energetic hover:bg-white/10"
              onClick={() => window.open('https://t.me/Barbaric_08', '_blank')}
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              @Barbaric_08
            </Button>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Легкая Атлетика. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index