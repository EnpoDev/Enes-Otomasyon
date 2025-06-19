import {useState, useEffect, useRef} from 'react'
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    CheckCircle,
    ArrowRight,
    Clock,
    Users,
    Shield,
    Zap,
    Play,
    Star,
    Award,
    TrendingUp,
    Cpu,
    Settings,
    BarChart,
    Sparkles,
    ArrowUpRight,
    Globe,
    Headphones
} from 'lucide-react'
import './App.css'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeService, setActiveService] = useState(0)
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    // SEO Meta Tags Effect
    useEffect(() => {
        // Set page title and meta tags
        document.title = "Enes Otomasyon | Endüstriyel Otomasyon ve AI Çözümleri | Bursa"

        // Remove existing meta tags and add new ones
        const existingMetas = document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name="twitter:"], meta[name="robots"]')
        existingMetas.forEach(meta => meta.remove())

        const metaTags = [{
            name: 'description',
            content: 'Enes Otomasyon ile endüstriyel otomasyon, akıllı fabrika çözümleri ve AI destekli üretim sistemleri. %400 verimlilik artışı, Fortune 500 referansları. Bursa\'da hizmet.'
        }, {
            name: 'keywords',
            content: 'endüstriyel otomasyon, PLC programlama, SCADA, HMI, akıllı fabrika, Industry 4.0, robotik sistemler, enerji yönetimi, predictive maintenance, AI otomasyon, Bursa otomasyon, otomasyon firması'
        }, {
            name: 'robots',
            content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }, {name: 'author', content: 'Enes Otomasyon'}, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0'
        }, {name: 'googlebot', content: 'index, follow'}, {name: 'bingbot', content: 'index, follow'},

            // Open Graph tags
            {property: 'og:title', content: 'Enes Otomasyon | Türkiye\'nin Lider Endüstriyel Otomasyon Şirketi'}, {
                property: 'og:description',
                content: 'AI destekli endüstriyel otomasyon çözümleri ile üretim verimliliğinizi %400 artırın. Fortune 500 şirketlerinin tercihi.'
            }, {property: 'og:type', content: 'website'}, {
                property: 'og:url',
                content: 'https://enesotomasyon.com'
            }, {property: 'og:image', content: 'https://enesotomasyon.com/og-image.jpg'}, {
                property: 'og:site_name',
                content: 'Enes Otomasyon'
            }, {property: 'og:locale', content: 'tr_TR'},

            // Twitter Card tags
            {name: 'twitter:card', content: 'summary_large_image'}, {
                name: 'twitter:title',
                content: 'Enes Otomasyon | Endüstriyel Otomasyon ve AI Çözümleri'
            }, {
                name: 'twitter:description',
                content: 'AI destekli endüstriyel otomasyon ile üretim verimliliğinizi %400 artırın. Hemen ücretsiz demo alın!'
            }, {name: 'twitter:image', content: 'https://enesotomasyon.com/twitter-image.jpg'},

            // Geo tags
            {name: 'geo.region', content: 'TR-16'}, {name: 'geo.placename', content: 'Bursa'}, {
                name: 'geo.position',
                content: '40.1826;29.0665'
            }, {name: 'ICBM', content: '40.1826, 29.0665'},

            // Business tags
            {
                name: 'business:contact_data:street_address',
                content: 'Bursa, Türkiye'
            }, {name: 'business:contact_data:locality', content: 'Bursa'}, {
                name: 'business:contact_data:region',
                content: 'Marmara'
            }, {
                name: 'business:contact_data:postal_code',
                content: '16000'
            }, {name: 'business:contact_data:country_name', content: 'Türkiye'},]

        metaTags.forEach(({name, property, content}) => {
            const meta = document.createElement('meta')
            if (name) meta.name = name
            if (property) meta.setAttribute('property', property)
            meta.content = content
            document.head.appendChild(meta)
        })

        // Add structured data (JSON-LD)
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Enes Otomasyon",
            "alternateName": "Enes Automation",
            "url": "https://enesotomasyon.com",
            "logo": "https://enesotomasyon.com/logo.png",
            "description": "Türkiye'nin lider endüstriyel otomasyon ve AI çözümleri şirketi. Industry 4.0 teknolojileri ile üretim verimliliğini artırıyoruz.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bursa",
                "addressLocality": "Bursa",
                "addressRegion": "Marmara",
                "postalCode": "16000",
                "addressCountry": "TR"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-534-982-22-69",
                "contactType": "customer service",
                "email": "enesotomasyon@gmail.com",
                "availableLanguage": ["Turkish", "English"]
            },
            "sameAs": ["https://linkedin.com/company/enes-otomasyon", "https://twitter.com/enesotomasyon"],
            "foundingDate": "2020",
            "numberOfEmployees": "50-100",
            "industry": "Industrial Automation",
            "slogan": "Geleceğin Teknolojilerini Bugün",
            "hasOfferCatalog": {
                "@type": "OfferCatalog", "name": "Endüstriyel Otomasyon Hizmetleri", "itemListElement": [{
                    "@type": "Offer", "itemOffered": {
                        "@type": "Service",
                        "name": "Endüstriyel Otomasyon Sistemleri",
                        "description": "PLC, SCADA, HMI sistemleri ile tam otomasyon çözümleri"
                    }
                }, {
                    "@type": "Offer", "itemOffered": {
                        "@type": "Service",
                        "name": "Akıllı Fabrika Çözümleri",
                        "description": "Industry 4.0 teknolojileri ile dijital dönüşüm"
                    }
                }, {
                    "@type": "Offer", "itemOffered": {
                        "@type": "Service",
                        "name": "Robotik Sistemler",
                        "description": "Collaborative robot ve AI destekli robotik çözümler"
                    }
                }]
            },
            "aggregateRating": {
                "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "247", "bestRating": "5"
            }
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(structuredData)
        document.head.appendChild(script)

        // Add local business structured data
        const localBusinessData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Enes Otomasyon",
            "image": "https://enesotomasyon.com/business-image.jpg",
            "telephone": "+90-534-982-22-69",
            "email": "enesotomasyon@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bursa",
                "addressLocality": "Bursa",
                "addressRegion": "Marmara",
                "postalCode": "16000",
                "addressCountry": "TR"
            },
            "geo": {
                "@type": "GeoCoordinates", "latitude": 40.1826, "longitude": 29.0665
            },
            "url": "https://enesotomasyon.com",
            "priceRange": "€€€",
            "openingHours": "Mo-Fr 08:00-18:00",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "currenciesAccepted": "TRY, EUR, USD"
        }

        const localScript = document.createElement('script')
        localScript.type = 'application/ld+json'
        localScript.text = JSON.stringify(localBusinessData)
        document.head.appendChild(localScript)

        return () => {
            // Cleanup
            const addedMetas = document.querySelectorAll('meta[name], meta[property]')
            const addedScripts = document.querySelectorAll('script[type="application/ld+json"]')
            addedMetas.forEach(meta => meta.remove())
            addedScripts.forEach(script => script.remove())
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const services = [{
        title: "Endüstriyel Otomasyon Sistemleri",
        description: "PLC, SCADA ve HMI teknolojileri ile üretim süreçlerinizi %400'e varan verimlilik artışıyla dönüştürün",
        icon: <Cpu className="w-8 h-8"/>,
        features: ["AI Destekli PLC Programlama", "IoT Entegrasyonu", "Predictive Maintenance", "Digital Twin Teknolojisi"],
        color: "from-purple-600 to-pink-600",
        stats: {efficiency: "+47%", cost: "-32%", roi: "6 ay"},
        keyword: "endüstriyel otomasyon"
    }, {
        title: "Akıllı Fabrika Çözümleri",
        description: "Industry 4.0 ve dijital dönüşüm teknolojileri ile fabrikanızı geleceğe taşıyın",
        icon: <Settings className="w-8 h-8"/>,
        features: ["MES/ERP Entegrasyonu", "Gerçek Zamanlı İzleme", "AI Kalite Kontrolü", "Blockchain Takibi"],
        color: "from-blue-600 to-cyan-600",
        stats: {efficiency: "+52%", cost: "-41%", roi: "4 ay"},
        keyword: "akıllı fabrika"
    }, {
        title: "Enerji Yönetimi & Sürdürülebilirlik",
        description: "Smart Grid ve yenilenebilir enerji teknolojileri ile karbon ayak izinizi azaltın",
        icon: <TrendingUp className="w-8 h-8"/>,
        features: ["Smart Grid Sistemleri", "Yenilenebilir Enerji Entegrasyonu", "ISO 50001 Uyumu", "Carbon Tracking"],
        color: "from-green-600 to-emerald-600",
        stats: {efficiency: "+38%", cost: "-45%", roi: "8 ay"},
        keyword: "enerji yönetimi"
    }, {
        title: "Robotik & Cobot Sistemleri",
        description: "Collaborative robot teknolojileri ile insan-robot işbirliğini optimize edin",
        icon: <Sparkles className="w-8 h-8"/>,
        features: ["Collaborative Robots", "AI Vision Sistemleri", "Force Control", "No-Code Programming"],
        color: "from-orange-600 to-red-600",
        stats: {efficiency: "+65%", cost: "-28%", roi: "10 ay"},
        keyword: "robotik sistemler"
    }]

    const stats = [{
        number: "2M+",
        label: "Optimize Edilen Üretim Hattı",
        icon: <BarChart className="w-6 h-6"/>
    }, {number: "97%", label: "Müşteri Memnuniyeti", icon: <Star className="w-6 h-6"/>}, {
        number: "50+",
        label: "Uluslararası Proje",
        icon: <Globe className="w-6 h-6"/>
    }, {number: "24/7", label: "AI Destekli Teknik Destek", icon: <Headphones className="w-6 h-6"/>}]

    const testimonials = [{
        name: "Zeynep Aksoy",
        company: "Fortune 500 Üretim Şirketi",
        text: "Enes Otomasyon'un AI destekli endüstriyel otomasyon çözümleriyle üretim kapasitemiz %300 arttı. ROI'mız 3 ayda gerçekleşti.",
        rating: 5,
        image: "👩‍💼",
        result: "+€2.5M Yıllık Tasarruf"
    }, {
        name: "Can Yılmaz",
        company: "Avrupa Tekstil Grubu",
        text: "Akıllı fabrika dönüşüm projemizde mükemmel bir partner. Enerji maliyetlerimiz %60 azaldı.",
        rating: 5,
        image: "👨‍💼",
        result: "-%60 Enerji Maliyeti"
    }, {
        name: "Elif Demir",
        company: "Global Otomotiv Tedarikçisi",
        text: "PLC programlama ve SCADA sistemleri ile sıfır hata üretim yapıyoruz. Kalite kontrol sistemleri mükemmel.",
        rating: 5,
        image: "👩‍💼",
        result: "%99.97 Kalite Oranı"
    }]

    const caseStudies = [{
        title: "Mercedes-Benz Türk Endüstriyel Otomasyon Projesi",
        increase: "+385%",
        metric: "Üretim Hızı Artışı"
    }, {
        title: "Arçelik Global Akıllı Fabrika Dönüşümü",
        increase: "-€4.2M",
        metric: "Yıllık Maliyet Tasarrufu"
    }, {title: "THY Teknik Predictive Maintenance Projesi", increase: "+97%", metric: "Bakım Verimliliği"}]

    return (<div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* SEO Hidden Content for Search Engines */}
            <div className="sr-only">
                <h1>Enes Otomasyon - Türkiye'nin Lider Endüstriyel Otomasyon Şirketi</h1>
                <p>Bursa merkezli Enes Otomasyon, PLC programlama, SCADA sistemleri, HMI çözümleri, robotik sistemler ve
                    Industry 4.0 teknolojileri ile endüstriyel otomasyon alanında hizmet vermektedir. AI destekli akıllı
                    fabrika çözümleri, enerji yönetimi, predictive maintenance ve dijital dönüşüm projelerinde
                    uzmanız.</p>
                <p>Hizmet alanlarımız: Endüstriyel otomasyon, PLC programlama, SCADA, HMI, robotik sistemler, enerji
                    yönetimi, akıllı fabrika, Industry 4.0, dijital dönüşüm, predictive maintenance, collaborative
                    robots, AI otomasyon çözümleri.</p>
                <p>Bölge: Bursa, İstanbul, Ankara, İzmir, Kocaeli, Sakarya, Eskişehir ve tüm Türkiye genelinde
                    hizmet.</p>
            </div>

            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px] opacity-20 animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20 animate-pulse"
                    style={{animationDelay: '2s'}}></div>
            </div>

            {/* Navigation */}
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : ''}`}
                role="navigation" aria-label="Ana navigasyon">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                ENES OTOMASYON
                            </h1>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home"
                               className="text-gray-300 hover:text-white transition-colors font-medium relative group"
                               aria-label="Ana sayfa">
                                Ana Sayfa
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#services"
                               className="text-gray-300 hover:text-white transition-colors font-medium relative group"
                               aria-label="Otomasyon çözümleri">
                                Çözümler
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#case-studies"
                               className="text-gray-300 hover:text-white transition-colors font-medium relative group"
                               aria-label="Müşteri başarı hikayeleri">
                                Başarı Hikayeleri
                                <span
                                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#contact" className="relative group" aria-label="Ücretsiz demo al">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                <span
                                    className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full inline-block font-semibold">
                  Ücretsiz Demo
                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Mobil menü"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (<div
                            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10">
                            <div className="flex flex-col p-6 space-y-4">
                                <a href="#home" className="text-gray-300 hover:text-white">Ana Sayfa</a>
                                <a href="#services" className="text-gray-300 hover:text-white">Çözümler</a>
                                <a href="#case-studies" className="text-gray-300 hover:text-white">Başarı Hikayeleri</a>
                                <a href="#contact"
                                   className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-center">
                                    Ücretsiz Demo
                                </a>
                            </div>
                        </div>)}
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center">
                <div className="container mx-auto px-6 pt-20 relative z-10">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Trust Badge */}
                        <div
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/20">
                            <Award className="w-4 h-4 text-yellow-400"/>
                            <span
                                className="text-sm">2024 Yılının En İnovatif Endüstriyel Otomasyon Şirketi - Bursa</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span
                    className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Endüstriyel
              </span>

                            <br/>
                            <span
                                className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Otomasyon
              </span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
                            PLC programlama, SCADA sistemleri ve akıllı fabrika çözümleriyle üretim
                            verimliliğinizi <span className="text-white font-semibold">%400'e kadar</span> artırın
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                            <a href="tel:+905349822269"
                               className="group relative inline-flex items-center justify-center"
                               aria-label="Enes Otomasyon'u hemen arayın">
                <span
                    className="relative border-2 border-white/20 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold hover:bg-white hover:text-black transition-all">
                  Hemen Arayın: +90 534 982 22 69 <ArrowUpRight
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                </span>
                            </a>
                        </div>

                        {/* Live Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (<div key={index}
                                                              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center justify-center mb-2 text-purple-400">
                                        {stat.icon}
                                    </div>
                                    <div
                                        className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>))}
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronRight className="w-6 h-6 rotate-90 text-white/50"/>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Endüstriyel Otomasyon Çözümlerimiz
              </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Industry 4.0 ve AI teknolojileri ile Bursa'dan tüm Türkiye'ye hizmet
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Service Cards */}
                        <div className="space-y-4">
                            {services.map((service, index) => (<article
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeService === index ? 'bg-gradient-to-r ' + service.color + ' text-white shadow-2xl scale-105' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`p-3 rounded-xl ${activeService === index ? 'bg-white/20' : 'bg-white/5'}`}>
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                            <p className={`text-sm ${activeService === index ? 'text-white/90' : 'text-gray-400'}`}>
                                                {service.description}
                                            </p>
                                            {activeService === index && (<div className="mt-4 grid grid-cols-3 gap-4">
                                                    {Object.entries(service.stats).map(([key, value]) => (
                                                        <div key={key} className="text-center">
                                                            <div className="text-2xl font-bold">{value}</div>
                                                            <div className="text-xs uppercase opacity-75">{key}</div>
                                                        </div>))}
                                                </div>)}
                                        </div>
                                    </div>
                                </article>))}
                        </div>

                        {/* Service Detail */}
                        <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                            <div
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${services[activeService].color} mb-6`}>
                                <Sparkles className="w-4 h-4"/>
                                <span className="text-sm font-semibold">Öne Çıkan Özellikler</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-6">{services[activeService].title}</h3>

                            <div className="space-y-4 mb-8">
                                {services[activeService].features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 group">
                                        <div
                                            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${services[activeService].color} flex items-center justify-center flex-shrink-0`}>
                                            <CheckCircle className="w-5 h-5 text-white"/>
                                        </div>
                                        <span
                                            className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                    </div>))}
                            </div>

                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gray-400">Ortalama Geri Dönüş Süresi</span>
                                    <span
                                        className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {services[activeService].stats.roi}
                  </span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${services[activeService].color}`}
                                        style={{width: '75%'}}></div>
                                </div>
                            </div>

                            <a href="#contact"
                               className="w-full mt-6 bg-white text-black py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                                Detaylı Bilgi Al <ArrowRight className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry 4.0 Features Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Neden Enes Otomasyon?
              </span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            AI destekli endüstriyel otomasyon çözümleri ile rekabette öne geçin
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <article className="group relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div
                                className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Predictive Maintenance</h3>
                                <p className="text-gray-400 mb-6">AI algoritmaları ile arızaları önceden tahmin edin,
                                    plansız duruşları %95 azaltın</p>
                                <div
                                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">-95%
                                </div>
                                <div className="text-sm text-gray-400">Plansız Duruş Azalması</div>
                            </div>
                        </article>

                        <article className="group relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div
                                className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                                    <BarChart className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Real-Time SCADA Analytics</h3>
                                <p className="text-gray-400 mb-6">Anlık veri analizi ve SCADA sistemleri ile üretim
                                    kararlarını optimize edin</p>
                                <div
                                    className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">+67%
                                </div>
                                <div className="text-sm text-gray-400">Karar Doğruluğu Artışı</div>
                            </div>
                        </article>

                        <article className="group relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div
                                className="relative bg-black/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full">
                                <div
                                    className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                                    <TrendingUp className="w-8 h-8 text-white"/>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">AI Quality Control</h3>
                                <p className="text-gray-400 mb-6">Görüntü işleme ve makine öğrenmesi ile %99.9 kalite
                                    kontrolü</p>
                                <div
                                    className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">%99.9
                                </div>
                                <div className="text-sm text-gray-400">Kalite Kontrolü Oranı</div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section id="case-studies" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Başarılı Endüstriyel Otomasyon Projeleri
              </span>
                        </h2>
                        <p className="text-xl text-gray-400">Fortune 500 şirketleri neden Enes Otomasyon'u tercih
                            ediyor?</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {caseStudies.map((study, index) => (<article key={index} className="group relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                                    <div
                                        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                        {study.increase}
                                    </div>
                                    <p className="text-gray-400">{study.metric}</p>
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <span
                                            className="text-sm text-purple-400">PLC • SCADA • HMI • AI Integration</span>
                                    </div>
                                </div>
                            </article>))}
                    </div>

                    {/* Customer Testimonials */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (<article key={index} className="group relative">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div
                                    className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-5xl">{testimonial.image}</div>
                                        <div>
                                            <div className="flex mb-2">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>))}
                                            </div>
                                            <div className="font-semibold">{testimonial.name}</div>
                                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                                        </div>
                                    </div>

                                    <blockquote className="text-gray-300 mb-6 italic">"{testimonial.text}"</blockquote>

                                    <div className="pt-6 border-t border-white/10">
                                        <div
                                            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                            {testimonial.result}
                                        </div>
                                    </div>
                                </div>
                            </article>))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-green-600/50">
                            <Sparkles className="w-4 h-4 text-green-400"/>
                            <span className="text-sm text-green-300">Ücretsiz Keşif ve Analiz</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Endüstriyel Otomasyonda 2025'te Öne Geçin
              </span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            PLC programlama, SCADA sistemleri ve akıllı fabrika çözümleri için hemen arayın!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="tel:+905349822269" className="group relative"
                               aria-label="Enes Otomasyon telefon numarası">
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                <span
                                    className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full inline-flex items-center text-lg font-semibold">
                  Hemen Ara: +90 534 982 22 69 <ArrowRight
                                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
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
                            <div className="text-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span
                      className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Endüstriyel Otomasyonun Geleceğini Birlikte İnşa Edelim
                  </span>
                                </h2>

                                <p className="text-xl text-gray-400 mb-10">
                                    PLC, SCADA, HMI ve robotik sistemler ile dijital dönüşüm yolculuğunuza bugün
                                    başlayın
                                </p>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4 justify-center">
                                        <div
                                            className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-purple-400"/>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-400">7/24 Teknik Destek Hattı</p>
                                            <a href="tel:+905349822269"
                                               className="text-lg font-semibold hover:text-purple-400 transition-colors">+90
                                                (534) 982 22 69</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 justify-center">
                                        <div
                                            className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-purple-400"/>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-400">Proje Danışmanlığı</p>
                                            <a href="mailto:enesotomasyon@gmail.com"
                                               className="text-lg font-semibold hover:text-purple-400 transition-colors">enesotomasyon@gmail.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 justify-center">
                                        <div
                                            className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-purple-400"/>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-400">Merkez Ofis</p>
                                            <p className="text-lg font-semibold">Bursa, Türkiye</p>
                                            <p className="text-sm text-gray-400">Tüm Türkiye'ye hizmet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                ENES OTOMASYON
                            </h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Bursa merkezli endüstriyel otomasyon şirketi. PLC programlama, SCADA sistemleri, HMI
                                çözümleri ve AI destekli akıllı fabrika teknolojileri ile Türkiye'nin dijital dönüşüm
                                lideri.
                            </p>
                            <p className="text-sm text-gray-500 mb-6">
                                Hizmet alanları: Endüstriyel otomasyon, PLC programlama, SCADA, HMI, robotik sistemler,
                                enerji yönetimi, akıllı fabrika, Industry 4.0, predictive maintenance, collaborative
                                robots.
                            </p>
                            <div className="flex gap-4">
                                <a href="#"
                                   className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                   aria-label="LinkedIn">
                                    <span className="text-sm">in</span>
                                </a>
                                <a href="#"
                                   className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                   aria-label="Twitter">
                                    <span className="text-sm">X</span>
                                </a>
                                <a href="#"
                                   className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                                   aria-label="YouTube">
                                    <span className="text-sm">YT</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Otomasyon Çözümleri</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">PLC Programlama</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">SCADA Sistemleri</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">HMI Çözümleri</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Robotik Sistemler</a>
                                </li>
                                <li><a href="#" className="hover:text-white transition-colors">Enerji Yönetimi</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Akıllı Fabrika</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Şirket</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Referanslar</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Bursa Ofis</a></li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 Enes Otomasyon. Tüm hakları saklıdır. Bursa, Türkiye merkezli endüstriyel otomasyon
                            şirketi.
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
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
                     onClick={() => setIsVideoPlaying(false)}>
                    <div
                        className="relative max-w-4xl w-full aspect-video bg-white/10 rounded-2xl flex items-center justify-center">
                        <button className="absolute top-4 right-4 w-8 h-8 cursor-pointer"
                                onClick={() => setIsVideoPlaying(false)} aria-label="Videoyu kapat">
                            <X className="w-8 h-8"/>
                        </button>
                        <Play className="w-16 h-16 text-white/50"/>
                        <p className="absolute bottom-4 left-4 text-sm text-gray-400">Endüstriyel otomasyon demo
                            videosu</p>
                    </div>
                </div>)}

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-8 right-8 z-40">
                <a href="https://wa.me/905349822269?text=Merhaba%2C%20end%C3%BCstriyel%20otomasyon%20%C3%A7%C3%B6z%C3%BCmleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                   target="_blank" rel="noopener noreferrer" className="group relative"
                   aria-label="WhatsApp ile iletişime geç">
                    <div
                        className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div
                        className="relative bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                    </div>
                </a>
            </div>

            {/* Breadcrumbs for SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{
                        "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://enesotomasyon.com"
                    }, {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Endüstriyel Otomasyon",
                        "item": "https://enesotomasyon.com#services"
                    }, {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "İletişim",
                        "item": "https://enesotomasyon.com#contact"
                    }]
                })}
            </script>
        </div>)
}

export default App