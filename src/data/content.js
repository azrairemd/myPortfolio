export const profile = {
  name: 'Azra İrem Dalhasanoğlu',
  role: 'Software Engineer',
  // tagline: '',
  location: 'İstanbul, Türkiye',
  email: 'azradalhasanoglu@gmail.com',
  github: 'https://github.com/azrairemd',
  linkedin: 'https://www.linkedin.com/in/azra-irem-dalhasano%C4%9Flu/',
  githubUsername: 'azrairemd',
  resumeUrl: '#',
}

export const about = {
  paragraphs: [
    'Üniversitede Yazılım Mühendisliği son sınıf öğrencisiyim ve şu anda Wifispot\'ta yazılım stajyeri olarak çalışıyorum.',
    'Full-stack geliştirme ile veri bilimi arasında geziniyorum — bir yandan masaüstü ve web uygulamaları geliştirirken, bir yandan da makine öğrenmesi projeleriyle ilgileniyorum.',
    'Python, Java, C# ve SQL ile çalışıyorum; Spring Boot, Django ve .NET Framework üzerinde projeler geliştirdim. Öğrenmeye ve üretmeye çok istekliyim.',
    'İyi seviyede İngilizce, giriş seviyesinde Almanca biliyorum.',
  ],
}

export const techStack = [
  { name: 'Python', category: 'Diller' },
  { name: 'Java', category: 'Diller' },
  { name: 'C#', category: 'Diller' },
  { name: 'SQL', category: 'Diller' },
  { name: 'Spring Boot', category: 'Frameworkler' },
  { name: 'Django', category: 'Frameworkler' },
  { name: '.NET Framework', category: 'Frameworkler' },
  { name: 'Git', category: 'Araçlar' },
]


export const projects = [
  {
    title: 'TodoApp-WPF',
    description:
      'C# ve WPF ile geliştirilmiş masaüstü todo (yapılacaklar listesi) uygulaması.',
    longDescription:
      'C# ve WPF kullanarak geliştirdiğim masaüstü bir yapılacaklar listesi uygulaması. Görev ekleme, tamamlama ve silme gibi temel işlevlerin yanı sıra WPF ile masaüstü arayüz tasarımı üzerine pratik yapma amacı taşıyor.',
    tags: ['C#', 'WPF', '.NET Framework'],
    image: '/images/projects/Todo.png',
    // demoUrl: '',
    codeUrl: 'https://github.com/azrairemd/TodoApp-WPF',
    // videoUrl: '',
  },
  {
    title: 'Finans Takip',
    description:
      'Gerçek zamanlı kripto para piyasası takibi yapan uygulama.',
    longDescription:
      'Kripto para piyasasındaki fiyat hareketlerini gerçek zamanlı olarak takip etmeyi sağlayan bir uygulama. Güncel piyasa verilerini çekip kullanıcıya anlaşılır bir arayüzde sunuyor.',
    tags: ['Python'],
    image: '/images/projects/finans-takip.png',
    // demoUrl: '',
    codeUrl: 'https://github.com/azrairemd/finans-takip',
    // videoUrl: '',
  },
  {
    title: 'Book Recommendation System',
    description:
      'Makine öğrenmesi tabanlı kitap öneri sistemi.',
    longDescription:
      'Kullanıcıların okuma tercihlerine göre kitap önerileri sunan, makine öğrenmesi tabanlı bir öneri sistemi. Veri ön işleme, benzerlik hesaplama ve öneri üretme adımlarını içeriyor.',
    tags: ['Python', 'Machine Learning'],
    image: '',
    demoUrl: '',
    codeUrl: 'https://github.com/azrairemd/book-recommendation-system',
    videoUrl: '',
  },
  {
    title: 'USD/TRY Exchange Rate Prediction',
    description:
      'Dolar/TL kurunu tahmin etmeye yönelik makine öğrenmesi projesi.',
    longDescription:
      'Geçmiş kur verilerini kullanarak USD/TRY döviz kurunun gelecekteki değerini tahmin etmeye çalışan bir makine öğrenmesi modeli. Veri hazırlama, model eğitimi ve tahmin performansı değerlendirmesi adımlarını içeriyor.',
    tags: ['Python', 'Machine Learning'],
    image: '',
    demoUrl: '',
    codeUrl: 'https://github.com/azrairemd/usdtry-exchange-rate-prediction',
    videoUrl: '',
  },
]


export const certificates = [
  {
   title: 'Veri Bilimi için Python ve TensorFlow”',
   issuer: 'BTK Akademi',
   date: '2025',
   image: '/images/certificates/veri-bilimi-icin-python.png',
  },
    {
   title: 'Makine Öğrenmesi”',
   issuer: 'BTK Akademi',
   date: '2025',
   image: '/images/certificates/makine-ogrenmesi.png',
  },
    {
   title: 'Yeni Başlayanlar için Python Programlama”',
   issuer: 'BTK Akademi',
   date: '2025',
   image: '/images/certificates/yeni-baslayanlar-icin-python.png',
  },
]

export const timeline = [
  {
    date: '2026 Haziran — Şu an',
    title: 'Yazılım Stajyeri',
    place: 'Wifispot, Ataşehir / İstanbul',
    description: 'Yazılım geliştirme süreçlerinde staj yapıyorum.',
  },
  {
    date: '2022 — Şu an',
    title: 'Yazılım Mühendisliği (4. Sınıf)',
    place: 'Muğla Sıtkı Koçman Üniversitesi',
    description: 'Yazılım Mühendisliği lisans eğitimime devam ediyorum.',
  },
]
 