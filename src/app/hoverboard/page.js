import { 
  Star, 
  Flower, 
  Zap, 
  Shield, 
  Package, 
  Smartphone, 
  Truck, 
  Phone, 
  Send,
  Play,
  Download,
  ShoppingCart,
  Clock,
  MapPin
} from 'lucide-react'

export default function HoverboardPage() {
  const technicalSpecs = [
    { icon: "🔧", label: "Тип / Чипсет", value: "Гироскутер" },
    { icon: "⚙️", label: "Диаметр колес", value: "6.5 дюймов" },
    { icon: "⚡", label: "Время зарядки", value: "2-3 часа" },
    { icon: "🏃", label: "Мин / Макс скорость", value: "1/15 км/ч" },
    { icon: "⚖️", label: "Вес", value: "10 кг" },
    { icon: "👤", label: "Макс нагрузка", value: "100 кг" },
    { icon: "⏱️", label: "Пробег", value: "3-4 часа" },
    { icon: "🔋", label: "Аккумулятор", value: "36V 4.4Ah" }
  ]

  const boxItems = [
    { id: 1, name: "Гироскутер", image: "🛴" },
    { id: 2, name: "Сумка", image: "👜" },
    { id: 3, name: "Набор защиты", image: "🛡️" },
    { id: 4, name: "Сумка-чехол", image: "🎒" },
    { id: 5, name: "Зарядное устройство", image: "🔌" },
    { id: 6, name: "Инструкция", image: "📖" }
  ]

  const features = [
    {
      title: "НАДЕЖНОСТЬ",
      description: "Наши гироскутеры проходят строгий контроль качества и соответствуют всем международным стандартам безопасности.",
      image: "🛴",
      color: "purple"
    },
    {
      title: "КРАСОЧНОЕ ПРИЛОЖЕНИЕ",
      description: "• Подключение через Bluetooth\n• Воспроизведение музыки\n• Контроль скорости\n• Диагностика устройства",
      image: "📱",
      color: "blue",
      badges: ["App Store", "Google Play"]
    },
    {
      title: "ГИРОСКУТЕР - ЭТО ПРОСТО!",
      description: "Научиться кататься на гироскутере очень просто! Всего несколько минут тренировки, и ваш ребенок будет уверенно кататься.",
      image: "🛴",
      color: "blue"
    },
    {
      title: "ЗАЩИТА В ПОДАРОК",
      description: "В комплект входит полный набор защиты: шлем, налокотники и наколенники для безопасного катания.",
      image: "🛡️",
      color: "blue"
    },
    {
      title: "УДОБНАЯ СУМКА",
      description: "Специальная сумка для переноски гироскутера с удобными ручками и дополнительными карманами.",
      image: "👜",
      color: "blue"
    }
  ]

  const processSteps = [
    { step: 1, title: "Оставьте заявку", description: "на сайте", icon: "✍️" },
    { step: 2, title: "Менеджер свяжется", description: "с вами и уточнит детали", icon: "📞" },
    { step: 3, title: "Вы получите заказ", description: "по указанному адресу", icon: "📦" }
  ]

  return (
    <div className="min-h-screen bg-blue-400 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-yellow-300 text-2xl">⭐</div>
        <div className="absolute top-40 right-20 text-pink-300 text-xl">🌸</div>
        <div className="absolute top-60 left-1/4 text-green-300 text-lg">🦋</div>
        <div className="absolute top-80 right-1/3 text-pink-400 text-xl">🦋</div>
        <div className="absolute top-32 left-1/3 text-orange-300 text-lg">🍬</div>
        <div className="absolute top-96 right-10 text-yellow-400 text-xl">⭐</div>
        <div className="absolute top-1/2 left-20 text-pink-300 text-lg">🌸</div>
        <div className="absolute top-1/2 right-1/4 text-green-400 text-xl">🦋</div>
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-600 rounded-full border-4 border-yellow-400 mb-4">
            <span className="text-white text-xl font-bold">СМЕШАРИКИ</span>
          </div>
          
          {/* Tagline */}
          <h2 className="text-white text-2xl font-semibold mb-8">
            Гироскутеры с персонажами любимого мультика
          </h2>

          {/* Characters */}
          <div className="flex justify-center items-center space-x-16 mb-8">
            <div className="text-center">
              <div className="text-6xl mb-2">🐰</div>
              <div className="text-white text-sm">Krosh</div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐑</div>
              <div className="text-white text-sm">Nyusha</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-b from-green-300 to-green-400 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            ПОРАДУЙТЕ СВОЕГО РЕБЕНКА
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            ЗАКАЖИТЕ УНИКАЛЬНЫЙ ГИРОСКУТЕР С ГЕРОЯМИ ЛЮБИМОГО МУЛЬТФИЛЬМА И КОМПЛЕКТОМ ЗАЩИТЫ
          </p>
          
          {/* Characters on Hoverboards */}
          <div className="flex justify-center items-center space-x-16 mb-8">
            <div className="text-center">
              <div className="text-8xl mb-2">🐰</div>
              <div className="w-32 h-8 bg-blue-600 rounded-lg mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-2">🐷</div>
              <div className="w-32 h-8 bg-purple-600 rounded-lg mx-auto"></div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-black text-xl font-bold px-12 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg">
            ЗАКАЗАТЬ СЕЙЧАС
          </button>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{spec.icon}</div>
                <div className="font-semibold text-gray-800 mb-1">{spec.label}</div>
                <div className="text-gray-600">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Character */}
          <div className="text-center mt-12">
            <div className="text-8xl mb-2">🐻</div>
            <div className="text-gray-600">Kopatych</div>
          </div>
        </div>
      </section>

      {/* What's in the Box */}
      <section className="relative z-10 bg-yellow-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">ЧТО В КОРОБКЕ?</h2>
          
          {/* Product Box */}
          <div className="bg-white rounded-2xl p-8 mb-12 max-w-2xl mx-auto shadow-xl">
            <div className="text-center">
              <div className="text-8xl mb-4">📦</div>
              <div className="text-2xl font-bold text-gray-800 mb-2">Гироскутер для детей</div>
              <div className="text-gray-600">С персонажами Смешарики</div>
            </div>
          </div>

          {/* Items List */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {boxItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-3">{item.image}</div>
                <div className="font-semibold text-gray-800">{item.name}</div>
              </div>
            ))}
          </div>

          {/* Character */}
          <div className="text-center mt-12">
            <div className="text-8xl mb-2">🦌</div>
            <div className="text-gray-600">Losyash</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className={`mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-12`}>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{feature.description}</p>
                {feature.badges && (
                  <div className="flex space-x-4 mt-4">
                    {feature.badges.map((badge, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 text-center">
                <div className="text-8xl mb-4">{feature.image}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Section */}
      <section className="relative z-10 bg-gradient-to-r from-yellow-300 to-yellow-400 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">ПОЛУЧИТЕ СКИДКУ!</h2>
          
          {/* Price */}
          <div className="mb-8">
            <div className="text-6xl font-bold text-yellow-600 mb-2">15 000 РУБ</div>
            <div className="text-2xl text-gray-600 line-through">17 000 РУБ</div>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-400 text-black text-xl font-bold px-12 py-4 rounded-xl hover:bg-yellow-300 transition-colors shadow-lg mb-12">
            ЗАКАЗАТЬ ГИРОСКУТЕР
          </button>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="text-4xl mb-3">{step.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{step.step}</div>
                <div className="font-semibold text-gray-700 mb-1">{step.title}</div>
                <div className="text-gray-600">{step.description}</div>
              </div>
            ))}
          </div>

          {/* Characters */}
          <div className="flex justify-center items-center space-x-16 mt-12">
            <div className="text-center">
              <div className="text-6xl mb-2">🐰</div>
              <div className="w-24 h-6 bg-blue-600 rounded-lg mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-2">🐻</div>
              <div className="w-24 h-6 bg-purple-600 rounded-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 bg-yellow-200 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ОСТАЛИСЬ ВОПРОСЫ? СПРОСИТЕ У НАС - ПОДСКАЖЕМ И РАССКАЖЕМ!
          </h2>
          
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <input 
              type="text" 
              placeholder="Ваше имя" 
              className="w-full p-4 border border-gray-300 rounded-xl mb-4 text-lg"
            />
            <button className="bg-green-500 text-white text-xl font-bold px-12 py-4 rounded-xl hover:bg-green-600 transition-colors">
              ОТПРАВИТЬ
            </button>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6 mb-8">
            {['VK', 'Telegram', 'Instagram', 'Facebook', 'YouTube'].map((platform) => (
              <div key={platform} className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                {platform[0]}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-gray-700">
            <div className="text-xl font-semibold">+7 (999) 999-99-99</div>
            <div>Работаем с 09:00 до 21:00 ежедневно</div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-gray-600">
            © 2023 Смешарики
          </div>
        </div>
      </section>
    </div>
  )
} 