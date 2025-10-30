import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="flex justify-center mb-12 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/08850a4a-cbd7-47ba-804c-b8b2b8f1490f.png" 
            alt="ПОТОК"
            className="h-16 md:h-20 object-contain"
            style={{ objectPosition: 'center', maxWidth: '200px' }}
          />
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              НОВАЯ ФОРМУЛА ЗАГОЛОВКА ЛЕНДИНГА - КОТОРАЯ ДАЁТ ЦЕЛЕВЫЕ ЗАЯВКИ ПО 750-860Р. ИЗ ЯНДЕКС ДИРЕКТ
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Даже в 626 и сложных нишах с длинным циклом сделки и высокой конкуренцией
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Получить формулу в Telegram
              </Button>

              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base md:text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                <Icon name="Send" className="mr-2" size={20} />
                Получить формулу в Telegram
              </Button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6 border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Что вы получите в Telegram:
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name="CheckCircle2" className="text-secondary" size={24} />
                  </div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed pt-1">
                    Подробное описание формулы которую я проверил на 125 проектах
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name="CheckCircle2" className="text-secondary" size={24} />
                  </div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed pt-1">
                    25 примеров применения формулы в разных нишах
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name="CheckCircle2" className="text-secondary" size={24} />
                  </div>
                  <p className="text-base md:text-lg text-foreground leading-relaxed pt-1">
                    Доступ в канал где еще 30+ секретов из моей личной практики
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl transform rotate-3"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl"></div>
                  <img 
                    src="https://cdn.poehali.dev/files/08850a4a-cbd7-47ba-804c-b8b2b8f1490f.png"
                    alt="Сергей Езепенко"
                    className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Сергей Езепенко
                  </h2>
                  <p className="text-lg md:text-xl text-primary font-semibold">
                    8 лет в маркетинге
                  </p>
                </div>

                <blockquote className="relative">
                  <div className="absolute -left-2 -top-2 text-6xl text-primary/10 font-serif">"</div>
                  <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed px-4 relative z-10">
                    Я не настраиваю рекламу - я системно привожу клиентов и продажи
                  </p>
                  <div className="absolute -right-2 -bottom-6 text-6xl text-primary/10 font-serif">"</div>
                </blockquote>

                <div className="pt-6 w-full">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base md:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://t.me/your_bot', '_blank')}
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Получить формулу в Telegram
                  </Button>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 hidden xl:block">
              <svg className="w-32 h-32 text-primary/20" viewBox="0 0 100 100">
                <path 
                  d="M 20 80 Q 10 50 20 20 Q 50 10 80 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <path 
                  d="M 70 25 L 80 20 L 75 30" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
