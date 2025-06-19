import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, CheckCircle, ArrowRight, Clock, Users, Shield, Zap, Play, Star, Award, TrendingUp, Cpu, Settings, BarChart, Sparkles, ArrowUpRight, Globe, Headphones } from 'lucide-react'
import "./App.css"
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      title: "Endüstriyel Otomasyon",
      description: "Üretim süreçlerinizi %400'e varan verimlilik artışıyla dönüştürün",
      icon: <Cpu className="w-8 h-8" />,
      features: ["AI Destekli PLC", "IoT Entegrasyonu", "Predictive Maintenance", "Digital Twin"],
      color: "from-purple-600 to-pink-600",
      stats: { efficiency: "+47%", cost: "-32%", roi: "6 ay" }
    },
    {
      title: "Akıllı Fabrika Çözümleri",
      description: "Industry 4.0 ile fabrikanızı geleceğe taşıyın",
      icon: <Settings className="w-8 h-8" />,
      features: ["MES/ERP Entegrasyonu", "Gerçek Zamanlı İzleme", "AI Kalite Kontrolü", "Blockchain Takibi"],
      color: "from-blue-600 to-cyan-600",
      stats: { efficiency: "+52%", cost: "-41%", roi: "4 ay" }
    },
    {
      title: "Enerji Yönetimi & Sürdürülebilirlik",
      description: "Karbon ayak izinizi azaltırken maliyetlerinizi düşürün",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Smart Grid", "Yenilenebilir Enerji", "ISO 50001", "Carbon Tracking"],
      color: "from-green-600 to-emerald-600",
      stats: { efficiency: "+38%", cost: "-45%", roi: "8 ay" }
    },
    {
      title: "Robotik & Cobot Sistemleri",
      description: "İnsan-robot işbirliğiyle üretimi yeniden tanımlayın",
      icon: <Sparkles className="w-8 h-8" />,
      features: ["Collaborative Robots", "AI Vision", "Force Control", "No-Code Programming"],
      color: "from-orange-600 to-red-600",
      stats: { efficiency: "+65%", cost: "-28%", roi: "10 ay" }
    }
  ]

  const stats = [
    { number: "2M+", label: "Optimize Edilen Üretim Hattı", icon: <BarChart className="w-6 h-6" /> },
    { number: "97%", label: "Müşteri Memnuniyeti", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Uluslararası Proje", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI Destekli Destek", icon: <Headphones className="w-6 h-6" /> }
  ]

  const testimonials = [
    {
      name: "Zeynep Aksoy",
      company: "Fortune 500 Üretim Devi",
      text: "Enes Otomasyon'un AI destekli çözümleriyle üretim kapasitemiz %300 arttı. ROI'mız 3 ayda gerçekleşti.",
      rating: 5,
      image: "👩‍💼",
      result: "+€2.5M Yıllık Tasarruf"
    },
    {
      name: "Can Yılmaz",
      company: "Avrupa'nın En Büyük Tekstil Grubu",
      text: "Dijital dönüşüm yolculuğumuzda mükemmel bir partner. Enerji maliyetlerimiz %60 azaldı.",
      rating: 5,
      image: "👨‍💼",
      result: "-%60 Enerji Maliyeti"
    },
    {
      name: "Elif Demir",
      company: "Global Otomotiv Tedarikçisi",
      text: "Sıfır hata ile üretim yapıyoruz. Kalite kontrol sistemleri inanılmaz başarılı.",
      rating: 5,
      image: "👩‍💼",
      result: "%99.97 Kalite Oranı"
    }
  ]

  const caseStudies = [
    { title: "Mercedes-Benz Türk", increase: "+385%", metric: "Üretim Hızı" },
    { title: "Arçelik Global", increase: "-€4.2M", metric: "Yıllık Tasarruf" },
    { title: "THY Teknik", increase: "+97%", metric: "Bakım Verimliliği" }
  ]

  return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]"></div>
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                ENES OTOMASYON
              </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                  Ana Sayfa
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                  Çözümler
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#case-studies" className="text-gray-300 hover:text-white transition-colors font-medium relative group">
                  Başarı Hikayeleri
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full inline-block font-semibold">
                  Ücretsiz Demo
                </span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10">
                  <div className="flex flex-col p-6 space-y-4">
                    <a href="#home" className="text-gray-300 hover:text-white">Ana Sayfa</a>
                    <a href="#services" className="text-gray-300 hover:text-white">Çözümler</a>
                    <a href="#case-studies" className="text-gray-300 hover:text-white">Başarı Hikayeleri</a>
                    <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-center">
                      Ücretsiz Demo
                    </a>
                  </div>
                </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-6 pt-20 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/20">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">2024 Yılının En İnovatif Otomasyon Şirketi</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Üretimi
              </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                AI ile Dönüştürün
              </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                Otomasyon çözümleriyle üretim verimliliğinizi <span className="text-white font-semibold">%400'e kadar</span> artırın
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">

                <a href="#contact" className="group relative inline-flex items-center justify-center">
                <span className="relative border-2 border-white/20 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold hover:bg-white hover:text-black transition-all">
                  Hemen Arayın <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                </a>
              </div>

              {/* Live Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-center mb-2 text-purple-400">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronRight className="w-6 h-6 rotate-90 text-white/50" />
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Geleceğin Teknolojileri
              </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry 5.0'a hazır, AI destekli çözümlerle rekabette öne geçin
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Service Cards */}
              <div className="space-y-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                            activeService === index
                                ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-2xl scale-105'
                                : 'bg-white/5 hover:bg-white/10 border border-white/10'
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${activeService === index ? 'bg-white/20' : 'bg-white/5'}`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                          <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-400'}`}>
                            {service.description}
                          </p>
                          {activeService === index && (
                              <div className="mt-4 grid grid-cols-3 gap-4">
                                {Object.entries(service.stats).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                      <div className="text-2xl font-bold">{value}</div>
                                      <div className="text-xs uppercase opacity-75">{key}</div>
                                    </div>
                                ))}
                              </div>
                          )}
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Service Detail */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${services[activeService].color} mb-6`}>
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Öne Çıkan Özellikler</span>
                </div>

                <h3 className="text-2xl font-bold mb-6">{services[activeService].title}</h3>

                <div className="space-y-4 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${services[activeService].color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </div>
                  ))}
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Ortalama Geri Dönüş Süresi</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {services[activeService].stats.roi}
                  </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className={`h-full rounded-full bg-gradient-to-r ${services[activeService].color}`} style={{width: '75%'}}></div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Detaylı Bilgi Al <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Neden Enes Otomasyon?
              </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
                  <p className="text-gray-400 mb-6">Arızaları olmadan önce tahmin edin, plansız duruşları %95 azaltın</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">-95%</div>
                  <div className="text-sm text-gray-400">Plansız Duruş</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-Time Analytics</h3>
                  <p className="text-gray-400 mb-6">Anlık veri analizi ile üretim kararlarını optimize edin</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">+67%</div>
                  <div className="text-sm text-gray-400">Karar Doğruluğu</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Quality AI</h3>
                  <p className="text-gray-400 mb-6">Görüntü işleme ile %99.9 kalite kontrolü sağlayın</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">%99.9</div>
                  <div className="text-sm text-gray-400">Kalite Oranı</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/*<section id="testimonials" className="py-32 relative">*/}
        {/*  <div className="container mx-auto px-6">*/}
        {/*    <div className="text-center mb-20">*/}
        {/*      <h2 className="text-4xl md:text-6xl font-bold mb-6">*/}
        {/*      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">*/}
        {/*        Müşteri Başarıları*/}
        {/*      </span>*/}
        {/*      </h2>*/}
        {/*      <p className="text-xl text-gray-400">Fortune 500 şirketleri neden bizi tercih ediyor?</p>*/}
        {/*    </div>*/}

        {/*    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">*/}
        {/*      {testimonials.map((testimonial, index) => (*/}
        {/*          <div key={index} className="group relative">*/}
        {/*            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>*/}
        {/*            <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full hover:bg-white/10 transition-colors">*/}
        {/*              <div className="flex items-center gap-4 mb-6">*/}
        {/*                <div className="text-5xl">{testimonial.image}</div>*/}
        {/*                <div>*/}
        {/*                  <div className="flex mb-2">*/}
        {/*                    {[...Array(testimonial.rating)].map((_, i) => (*/}
        {/*                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />*/}
        {/*                    ))}*/}
        {/*                  </div>*/}
        {/*                  <div className="font-semibold">{testimonial.name}</div>*/}
        {/*                  <div className="text-sm text-gray-400">{testimonial.company}</div>*/}
        {/*                </div>*/}
        {/*              </div>*/}

        {/*              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>*/}

        {/*              <div className="pt-6 border-t border-white/10">*/}
        {/*                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">*/}
        {/*                  {testimonial.result}*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-green-600/50">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Sınırlı Süreli Teklif</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                2025'te Rekabette Öne Geçin
              </span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Hemen arayın fiyat teklifinizi alın!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold">
                  Hemen Ara <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Geleceği Birlikte İnşa Edelim
                  </span>
                  </h2>

                  <p className="text-xl text-gray-400 mb-10">
                    Otomasyon yolculuğunuza bugün başlayın
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Destek Hattı</p>
                        <p className="text-lg font-semibold">+90 (534) 982 22 69</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">E-posta</p>
                        <p className="text-lg font-semibold">enesotomasyon@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Ofis</p>
                        <p className="text-lg font-semibold">Bursa, Türkiye</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Contact Form */}
                </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  ENES AUTOMATION
                </h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Yapay zeka destekli otomasyon çözümleriyle Türkiye'nin dijital dönüşüm lideri
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="text-sm">in</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="text-sm">X</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                    <span className="text-sm">YT</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Çözümler</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Endüstriyel Otomasyon</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Akıllı Fabrika</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Enerji Yönetimi</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Robotik Sistemler</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Şirket</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Enes Automation. Tüm hakları saklıdır.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
                <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
                <a href="#" className="hover:text-white transition-colors">KVKK</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Video Modal */}
        {isVideoPlaying && (
            <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setIsVideoPlaying(false)}>
              <div className="relative max-w-4xl w-full aspect-video bg-white/10 rounded-2xl flex items-center justify-center">
                <X className="absolute top-4 right-4 w-8 h-8 cursor-pointer" onClick={() => setIsVideoPlaying(false)} />
                <Play className="w-16 h-16 text-white/50" />
                <p className="absolute bottom-4 left-4 text-sm text-gray-400">Demo video placeholder</p>
              </div>
            </div>
        )}

        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <a href="https://wa.me/905349822269" target="_blank" rel="noopener noreferrer" className="group relative">
            <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
  )
}

export default App