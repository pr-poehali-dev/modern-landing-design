import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="flex justify-center mb-8 md:mb-12">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#0088cc] rounded-full flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={32} />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-1">
                <div className="w-8 h-1 bg-[#ff8c00] rounded-full"></div>
                <div className="w-8 h-1 bg-[#ff8c00] rounded-full"></div>
                <div className="w-8 h-1 bg-[#ff8c00] rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mt-2">ПОТОК</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider">система маркетинга</p>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4 md:mb-6 leading-tight px-4">
            НОВАЯ ФОРМУЛА ЗАГОЛОВКА ЛЕНДИНГА - КОТОРАЯ ДАЁТ ЦЕЛЕВЫЕ ЗАЯВКИ ПО 750-860Р. ИЗ ЯНДЕКС ДИРЕКТ
          </h2>

          <p className="text-base md:text-lg text-center text-gray-600 mb-8 md:mb-10 px-4">
            Даже в 626 и сложных нишах с длинным циклом сделки и высокой конкуренцией
          </p>

          <div className="flex justify-center mb-8 md:mb-12 relative">
            <div className="absolute -left-16 top-8 hidden lg:block">
              <svg width="120" height="120" viewBox="0 0 120 120" className="text-red-500">
                <path
                  d="M 100 30 Q 70 10, 40 30 Q 30 40, 35 55 Q 40 70, 50 75"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 50 75 L 40 72 L 47 68"
                  fill="currentColor"
                />
              </svg>
            </div>
            
            <Button 
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-semibold text-base md:text-lg px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              <Icon name="Send" className="mr-3" size={22} />
              Получить формулу в Telegram
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Что вы получите<br />в Telegram:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#22c55e] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Check" className="text-white" size={32} strokeWidth={3} />
                  </div>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed pt-3">
                    Подробное описание формулы которую я проверил на 125 проектах
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#22c55e] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Check" className="text-white" size={32} strokeWidth={3} />
                  </div>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed pt-3">
                    25 примеров применения формулы в разных нишах
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#22c55e] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Check" className="text-white" size={32} strokeWidth={3} />
                  </div>
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed pt-3">
                    Доступ в канал где еще 30+ секретов из моей личной практики
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0088cc]/20 to-[#0088cc]/5 rounded-3xl transform rotate-12 -z-10"></div>
                
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/f74af0b1-1da1-40cd-a131-7ed8a6829a5e/files/10f28eca-1908-4fae-a192-adfe1731c76a.jpg"
                    alt="Сергей Езепенко"
                    className="w-full h-auto object-cover"
                  />
                  
                  <div className="absolute top-6 right-6 bg-[#0088cc] text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <Icon name="Send" size={24} />
                      <div className="text-left">
                        <div className="text-xs font-semibold uppercase tracking-wide">Формула</div>
                        <div className="text-sm font-bold">заголовка</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center lg:text-right space-y-2">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Сергей Езепенко
                  </h4>
                  <p className="text-lg md:text-xl text-gray-600 font-medium">
                    8 лет в маркетинге
                  </p>
                  <blockquote className="text-base md:text-lg text-gray-700 italic pt-2 max-w-md mx-auto lg:ml-auto">
                    "Я не настраиваю рекламу - я системно привожу клиентов и продажи"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 md:mt-16">
            <Button 
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0077b3] text-white font-semibold text-base md:text-lg px-12 py-6 md:py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              <Icon name="ArrowRight" className="mr-3" size={22} />
              Получить формулу в Telegram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
