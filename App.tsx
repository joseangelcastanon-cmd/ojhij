
import React, { useState, useEffect } from 'react';
import { 
  Logo, 
  PROVINCES, 
  SHELTER_TYPES, 
  STATS, 
  FEATURED_SHELTERS, 
  ACTION_CARDS 
} from './constants';
import Button from './components/Button';
import ShelterCard from './components/ShelterCard';
import { getAdoptionAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [province, setProvince] = useState(PROVINCES[0]);
  const [shelterType, setShelterType] = useState(SHELTER_TYPES[0]);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  useEffect(() => {
    const fetchInitialAdvice = async () => {
      setLoadingAdvice(true);
      const res = await getAdoptionAdvice('perro o gato');
      setAdvice(res || '');
      setLoadingAdvice(false);
    };
    fetchInitialAdvice();
  }, []);

  const handleSearch = () => {
    alert(`Buscando albergues en ${province} de tipo ${shelterType}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#ebf3e7] dark:border-white/10 px-4 md:px-10 lg:px-20 xl:px-40 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="size-10 md:size-12" />
            <div className="flex flex-col">
              <h1 className="text-[#121b0d] dark:text-white text-base md:text-lg font-bold leading-tight tracking-tight">Red de Albergues</h1>
              <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-primary leading-none">de Mascotas</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex flex-1 justify-center gap-8">
            {['Albergues', 'Adoptar', 'Voluntariado', 'Donar'].map((item) => (
              <a key={item} href="#" className="text-sm font-semibold hover:text-primary transition-colors text-zinc-600 dark:text-zinc-300">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-4 items-center">
            <Button variant="primary" className="hidden sm:flex h-10 px-4 text-xs">
              Publicar Albergue
            </Button>
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 md:size-10 border-2 border-primary/20 cursor-pointer" 
              style={{ backgroundImage: `url("https://picsum.photos/seed/user123/100/100")` }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 md:px-10 lg:px-20 xl:px-40 py-8 md:py-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative min-h-[480px] md:min-h-[560px] flex flex-col items-center justify-center gap-8 rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.75) 100%), url("https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=2000")` 
                }}
              />
              
              <div className="relative z-10 flex flex-col gap-6 text-center px-6 max-w-4xl">
                <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Conectando albergues.<br/>Salvando vidas.
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                  La red nacional que une a protectores, voluntarios y familias para transformar el bienestar animal en España.
                </p>
              </div>

              <div className="relative z-10 w-full max-w-4xl px-4 md:px-6">
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20 flex flex-col lg:row-span-1 md:flex-row gap-4 items-end">
                  <div className="flex flex-col flex-1 w-full">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">Provincia</p>
                    <select 
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full h-12 rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:ring-primary focus:border-primary transition-all"
                    >
                      {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col flex-1 w-full">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 px-1">Tipo de Albergue</p>
                    <select 
                      value={shelterType}
                      onChange={(e) => setShelterType(e.target.value)}
                      className="w-full h-12 rounded-xl border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-sm focus:ring-primary focus:border-primary transition-all"
                    >
                      {SHELTER_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <Button onClick={handleSearch} className="w-full md:w-auto h-12 px-8 flex gap-2">
                    <span className="material-symbols-outlined">search</span>
                    Buscar Albergues
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary/5 dark:bg-primary/5 py-12 border-y border-primary/10">
          <div className="max-w-[1280px] mx-auto px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="text-4xl md:text-5xl font-black text-primary mb-1 transition-transform group-hover:scale-110 duration-300">{stat.value}</p>
                <p className="text-xs md:text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-20 bg-zinc-50 dark:bg-zinc-950/30">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl">
                <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">Red Nacional</span>
                <h3 className="text-3xl md:text-4xl font-black mt-3 text-zinc-800 dark:text-white leading-tight">Encuentra un albergue en tu zona</h3>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-lg">Explora el mapa interactivo o revisa nuestras protectoras destacadas por su gran labor reciente.</p>
              </div>
              <a href="#" className="text-primary font-bold flex items-center gap-2 group hover:gap-3 transition-all">
                Ver todos en el mapa <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800">
                  <div 
                    className="w-full h-full bg-cover bg-center opacity-60 dark:opacity-40 grayscale" 
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1500")` }}
                  />
                </div>
                {/* Simulated Map Controls */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  <button className="size-11 bg-white dark:bg-zinc-900 rounded-xl shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button className="size-11 bg-white dark:bg-zinc-900 rounded-xl shadow-lg flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>
                {/* Map Marker */}
                <div className="absolute top-[40%] left-[45%]">
                  <div className="relative flex flex-col items-center group cursor-pointer">
                    <div className="bg-primary text-[#121b0d] px-4 py-2 rounded-full text-xs font-black shadow-xl mb-2 scale-100 group-hover:scale-110 transition-transform">
                      Protectora Madrid
                    </div>
                    <span className="material-symbols-outlined text-primary text-5xl drop-shadow-2xl">location_on</span>
                    <div className="size-4 bg-primary/20 rounded-full absolute -bottom-1 animate-ping" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="font-black text-xl px-2 uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <span className="size-2 bg-primary rounded-full" />
                  Destacadas
                </h4>
                {FEATURED_SHELTERS.map((shelter) => (
                  <ShelterCard key={shelter.id} shelter={shelter} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Insight Section */}
        {advice && (
          <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-12 bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8 bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-primary/10">
              <div className="size-16 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-black mb-2 flex items-center gap-2">
                  Consejo de Adopción IA 
                  {loadingAdvice && <span className="text-xs font-normal animate-pulse text-zinc-400">(Generando...)</span>}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 italic leading-relaxed">"{advice}"</p>
              </div>
              <Button 
                variant="outline" 
                className="whitespace-nowrap h-10 px-4 text-xs"
                onClick={async () => {
                  setLoadingAdvice(true);
                  const res = await getAdoptionAdvice('mascota senior');
                  setAdvice(res || '');
                  setLoadingAdvice(false);
                }}
              >
                Nuevo Consejo
              </Button>
            </div>
          </section>
        )}

        {/* Action Cards Section */}
        <section className="px-4 md:px-10 lg:px-20 xl:px-40 py-24 bg-white dark:bg-background-dark">
          <div className="max-w-[1280px] mx-auto text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">¿Cómo quieres ayudar hoy?</h3>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
              Cada pequeña acción cuenta para mejorar el futuro de miles de animales esperando una segunda oportunidad.
            </p>
          </div>
          
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8">
            {ACTION_CARDS.map((card) => (
              <div key={card.title} className="flex flex-col items-center p-10 bg-zinc-50 dark:bg-zinc-900 rounded-3xl group border-2 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-300">
                <div className="size-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:rotate-3 duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-5xl">{card.icon}</span>
                </div>
                <h4 className="text-2xl font-black mb-4 text-zinc-800 dark:text-white">{card.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-center mb-8 text-base leading-relaxed">
                  {card.description}
                </p>
                <Button fullWidth className="h-14 rounded-2xl">
                  {card.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-4 md:px-10 lg:px-20 xl:px-40 py-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Logo className="size-10" />
              <h2 className="text-xl font-black">Red de Albergues</h2>
            </div>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Trabajamos incansablemente por el bienestar animal en cada rincón de España. Unidos somos más fuertes frente al abandono.
            </p>
            <div className="flex gap-4 mt-2">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a key={social} href="#" className="size-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-zinc-400">Plataforma</h4>
            <ul className="space-y-4 text-base font-semibold text-zinc-600 dark:text-zinc-400">
              {['Directorio de Albergues', 'Busca una Mascota', 'Mapa Interactivo', 'Adopta un Senior'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-zinc-400">Recursos</h4>
            <ul className="space-y-4 text-base font-semibold text-zinc-600 dark:text-zinc-400">
              {['Consejos de Adopción', 'Marco Legal España', 'FAQs', 'Blog de Bienestar'].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-zinc-400">Contacto</h4>
            <ul className="space-y-6 text-base font-semibold text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="break-all">info@redalbergues.es</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">phone</span>
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span>Calle Animalista 24, Madrid</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:row-span-1 md:flex-row justify-between gap-6 text-sm font-medium text-zinc-400">
          <p>© 2024 Red de Albergues de Mascotas de España. Hecho con amor por los animales.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
