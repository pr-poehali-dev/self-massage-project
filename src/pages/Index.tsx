import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [bodyPartFilter, setBodyPartFilter] = useState<string>('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const techniques = [
    {
      id: 1,
      title: 'Массаж шеи и плеч',
      description: 'Снятие напряжения и улучшение кровообращения в воротниковой зоне',
      duration: '10 минут',
      difficulty: 'Легко',
      bodyPart: 'Шея и плечи',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/d24c6f2d-7a52-408c-88af-71b9170be4c6.jpg',
      icon: 'User'
    },
    {
      id: 2,
      title: 'Точечный массаж лица',
      description: 'Улучшение тонуса кожи и снятие усталости',
      duration: '8 минут',
      difficulty: 'Средне',
      bodyPart: 'Лицо',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/3e16609b-ae17-49e5-bfa5-f9f2d0a4f5b1.jpg',
      icon: 'Smile'
    },
    {
      id: 3,
      title: 'Массаж стоп',
      description: 'Рефлексотерапия для общего оздоровления организма',
      duration: '12 минут',
      difficulty: 'Легко',
      bodyPart: 'Стопы',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/6244e123-a408-4939-b1a9-108592d2ed60.jpg',
      icon: 'Footprints'
    },
    {
      id: 4,
      title: 'Массаж рук и запястий',
      description: 'Профилактика туннельного синдрома и улучшение подвижности',
      duration: '7 минут',
      difficulty: 'Легко',
      bodyPart: 'Руки',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/6244e123-a408-4939-b1a9-108592d2ed60.jpg',
      icon: 'Hand'
    },
    {
      id: 5,
      title: 'Массаж спины',
      description: 'Снятие мышечных зажимов и улучшение осанки',
      duration: '15 минут',
      difficulty: 'Средне',
      bodyPart: 'Спина',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/d24c6f2d-7a52-408c-88af-71b9170be4c6.jpg',
      icon: 'Activity'
    },
    {
      id: 6,
      title: 'Массаж головы',
      description: 'Снятие головной боли и улучшение сна',
      duration: '10 минут',
      difficulty: 'Легко',
      bodyPart: 'Голова',
      videoUrl: 'https://cdn.poehali.dev/projects/b61f4f3f-8afb-4b3c-ab7a-de8cea04a666/files/3e16609b-ae17-49e5-bfa5-f9f2d0a4f5b1.jpg',
      icon: 'Brain'
    }
  ];

  const filteredTechniques = techniques.filter(technique => {
    const matchesDifficulty = difficultyFilter === 'all' || technique.difficulty === difficultyFilter;
    const matchesBodyPart = bodyPartFilter === 'all' || technique.bodyPart === bodyPartFilter;
    return matchesDifficulty && matchesBodyPart;
  });

  const benefits = [
    {
      icon: 'Heart',
      title: 'Улучшение кровообращения',
      description: 'Массаж стимулирует приток крови к тканям, улучшая питание клеток и ускоряя регенерацию'
    },
    {
      icon: 'Zap',
      title: 'Снятие стресса',
      description: 'Регулярный самомассаж помогает снизить уровень кортизола и улучшить общее самочувствие'
    },
    {
      icon: 'Shield',
      title: 'Укрепление иммунитета',
      description: 'Стимуляция лимфатической системы способствует выводу токсинов и повышению защитных сил'
    },
    {
      icon: 'Sparkles',
      title: 'Улучшение сна',
      description: 'Вечерний самомассаж помогает расслабиться и подготовить организм к качественному отдыху'
    },
    {
      icon: 'Dumbbell',
      title: 'Снятие мышечного напряжения',
      description: 'Массаж помогает устранить зажимы и спазмы, улучшая гибкость и подвижность'
    },
    {
      icon: 'Smile',
      title: 'Улучшение настроения',
      description: 'Стимуляция выработки эндорфинов естественным образом повышает эмоциональный фон'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Подготовка',
      description: 'Вымойте руки, создайте комфортную обстановку, при желании используйте масло для массажа',
      tip: 'Оптимальная температура в помещении 20-22°C'
    },
    {
      number: 2,
      title: 'Разогрев',
      description: 'Начните с легких поглаживающих движений, постепенно увеличивая давление',
      tip: 'Разогрев занимает 2-3 минуты'
    },
    {
      number: 3,
      title: 'Основная техника',
      description: 'Используйте круговые движения, надавливания и растирания согласно выбранной методике',
      tip: 'Движения должны быть направлены к сердцу'
    },
    {
      number: 4,
      title: 'Завершение',
      description: 'Закончите сеанс легкими поглаживаниями, дайте телу отдохнуть 5-10 минут',
      tip: 'Выпейте стакан воды после массажа'
    }
  ];

  const contraindications = [
    {
      icon: 'AlertCircle',
      title: 'Острые инфекционные заболевания',
      description: 'При повышенной температуре, гриппе и ОРВИ массаж противопоказан'
    },
    {
      icon: 'Heart',
      title: 'Сердечно-сосудистые заболевания',
      description: 'При гипертонии, тромбозе и серьезных болезнях сердца требуется консультация врача'
    },
    {
      icon: 'AlertTriangle',
      title: 'Кожные заболевания',
      description: 'Избегайте массажа при повреждениях кожи, воспалениях, сыпи и других дерматологических проблемах'
    },
    {
      icon: 'XCircle',
      title: 'Онкологические заболевания',
      description: 'Массаж противопоказан без разрешения онколога'
    },
    {
      icon: 'Ban',
      title: 'Острая боль неясного происхождения',
      description: 'При внезапной острой боли сначала необходимо установить ее причину'
    },
    {
      icon: 'Baby',
      title: 'Беременность',
      description: 'Некоторые виды массажа требуют особой осторожности во время беременности'
    }
  ];

  const faqs = [
    {
      question: 'Как часто можно делать самомассаж?',
      answer: 'Легкий самомассаж можно выполнять ежедневно по 10-15 минут. Более интенсивные техники рекомендуется применять 2-3 раза в неделю, давая организму время на восстановление.'
    },
    {
      question: 'Нужно ли использовать масло или крем?',
      answer: 'Использование масла или крема облегчает скольжение рук и делает процедуру более комфортной. Особенно это важно при массаже лица и шеи. Выбирайте натуральные масла без отдушек.'
    },
    {
      question: 'Можно ли делать массаж при варикозе?',
      answer: 'При варикозном расширении вен массаж ног следует делать очень осторожно, избегая области с выступающими венами. Лучше проконсультироваться с флебологом о безопасных техниках.'
    },
    {
      question: 'Сколько должен длиться сеанс самомассажа?',
      answer: 'Продолжительность зависит от зоны воздействия: лицо - 5-10 минут, шея и плечи - 10-15 минут, ноги или руки - 15-20 минут. Новичкам лучше начинать с коротких сеансов.'
    },
    {
      question: 'Что делать, если во время массажа возникла боль?',
      answer: 'Немедленно прекратите процедуру. Массаж не должен вызывать острую боль. Легкий дискомфорт допустим, но сильная боль - сигнал о проблеме, требующей внимания врача.'
    },
    {
      question: 'Можно ли делать массаж детям?',
      answer: 'Детям можно делать легкий массаж, но техника отличается от взрослой. Движения должны быть очень мягкими. Для детей младше 3 лет лучше проконсультироваться с педиатром.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Activity" className="text-primary" size={28} />
              <h1 className="text-xl md:text-2xl font-bold text-primary">Самомассаж</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'techniques', label: 'Техники', icon: 'Play' },
                { id: 'benefits', label: 'Польза', icon: 'Heart' },
                { id: 'instructions', label: 'Инструкции', icon: 'List' },
                { id: 'warnings', label: 'Предостережения', icon: 'AlertCircle' },
                { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="default" size="sm" onClick={() => scrollToSection('contact')}>
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              Профессиональный подход к здоровью
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Самомассаж для вашего здоровья
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Научитесь эффективным техникам самомассажа для улучшения самочувствия, снятия стресса и повышения качества жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('techniques')} className="gap-2">
                <Icon name="Play" size={20} />
                Смотреть техники
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('instructions')} className="gap-2">
                <Icon name="BookOpen" size={20} />
                Инструкции
              </Button>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'Clock', value: '10-15', label: 'минут в день' },
                { icon: 'TrendingUp', value: '30+', label: 'техник массажа' },
                { icon: 'Users', value: '1000+', label: 'довольных пользователей' }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Icon name={stat.icon} size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="techniques" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              <Icon name="Play" size={16} />
              Видеоинструкции
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Техники самомассажа</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Изучите проверенные техники массажа с подробными видеоинструкциями
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 flex items-center gap-2">
                <Icon name="Filter" size={16} className="text-primary" />
                Фильтр по сложности
              </label>
              <div className="flex flex-wrap gap-2">
                {['all', 'Легко', 'Средне'].map((level) => (
                  <Button
                    key={level}
                    variant={difficultyFilter === level ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDifficultyFilter(level)}
                    className="gap-1"
                  >
                    <Icon name={level === 'all' ? 'Layers' : level === 'Легко' ? 'Check' : 'Zap'} size={14} />
                    {level === 'all' ? 'Все' : level}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 flex items-center gap-2">
                <Icon name="Target" size={16} className="text-secondary" />
                Фильтр по части тела
              </label>
              <div className="flex flex-wrap gap-2">
                {['all', 'Шея и плечи', 'Лицо', 'Стопы', 'Руки', 'Спина', 'Голова'].map((part) => (
                  <Button
                    key={part}
                    variant={bodyPartFilter === part ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setBodyPartFilter(part)}
                  >
                    {part === 'all' ? 'Все' : part}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredTechniques.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Icon name="SearchX" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Техники не найдены</h3>
              <p className="text-muted-foreground mb-6">Попробуйте изменить фильтры</p>
              <Button
                variant="outline"
                onClick={() => {
                  setDifficultyFilter('all');
                  setBodyPartFilter('all');
                }}
                className="gap-2"
              >
                <Icon name="RotateCcw" size={16} />
                Сбросить фильтры
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Найдено техник: <span className="font-semibold text-primary">{filteredTechniques.length}</span> из {techniques.length}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTechniques.map((technique, index) => (
              <Card key={technique.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-primary/50" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img src={technique.videoUrl} alt={technique.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Icon name="Play" size={32} className="text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon name={technique.icon} size={24} />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                        {technique.duration}
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {technique.difficulty}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{technique.title}</CardTitle>
                  <CardDescription className="text-sm">{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="PlayCircle" size={18} />
                    Смотреть инструкцию
                  </Button>
                </CardContent>
              </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section id="benefits" className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Icon name="Heart" size={16} />
              Преимущества
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Польза самомассажа</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Научно доказанные эффекты регулярного самомассажа для здоровья
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
                    <Icon name={benefit.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              <Icon name="List" size={16} />
              Пошаговый план
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Пошаговые инструкции</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Следуйте этим простым шагам для эффективного и безопасного самомассажа
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={step.number} className="overflow-hidden border-l-4 border-l-primary animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-sm mb-3">{step.description}</CardDescription>
                      <div className="flex items-center gap-2 text-xs text-primary bg-primary/5 px-3 py-2 rounded-lg inline-flex">
                        <Icon name="Lightbulb" size={14} />
                        <span className="font-medium">{step.tip}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="warnings" className="py-20 bg-gradient-to-b from-white to-orange-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              <Icon name="AlertCircle" size={16} />
              Важная информация
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Противопоказания и предостережения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ознакомьтесь с ситуациями, когда самомассаж требует особой осторожности или противопоказан
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contraindications.map((item, index) => (
              <Card key={index} className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={28} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-900">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-orange-800">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-2 border-orange-300 bg-orange-50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon name="Info" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2 text-orange-900">Важное напоминание</CardTitle>
                    <CardDescription className="text-sm text-orange-800 leading-relaxed">
                      Перед началом регулярных занятий самомассажем, особенно при наличии хронических заболеваний, рекомендуется проконсультироваться с врачом. Массаж должен приносить только приятные ощущения - при появлении боли немедленно прекратите процедуру.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Icon name="HelpCircle" size={16} />
              Ответы на вопросы
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о самомассаже
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    <div className="flex items-start gap-3">
                      <Icon name="MessageCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-9 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                <Icon name="Mail" size={16} />
                Свяжитесь с нами
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Есть вопросы? Напишите нам, и мы обязательно ответим
              </p>
            </div>
            <Card className="border-2 shadow-lg">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="User" size={16} className="text-primary" />
                      Ваше имя
                    </label>
                    <Input placeholder="Иван Иванов" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="Mail" size={16} className="text-primary" />
                      Email
                    </label>
                    <Input type="email" placeholder="ivan@example.com" className="border-2" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Icon name="MessageSquare" size={16} className="text-primary" />
                      Сообщение
                    </label>
                    <Textarea placeholder="Расскажите о вашем вопросе..." rows={5} className="border-2 resize-none" />
                  </div>
                  <Button type="submit" className="w-full gap-2" size="lg">
                    <Icon name="Send" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Телефон</div>
                        <div className="font-medium">+7 (999) 123-45-67</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name="MapPin" size={20} className="text-secondary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Адрес</div>
                        <div className="font-medium">Москва, ул. Здоровья, 15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Activity" size={32} />
              <h3 className="text-2xl font-bold">Самомассаж</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Ваш путь к здоровью и хорошему самочувствию начинается здесь
            </p>
            <div className="flex gap-4 justify-center mb-6">
              {['Facebook', 'Twitter', 'Instagram', 'Youtube'].map((social) => (
                <button key={social} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="Share2" size={18} />
                </button>
              ))}
            </div>
            <div className="text-sm text-white/60">
              © 2024 Самомассаж. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;