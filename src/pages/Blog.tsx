import {
  faAppleAlt,
  faBell,
  faBookmark,
  faBottleDroplet,
  faBrain,
  faHeartbeat,
  faLanguage,
  faMattressPillow,
  faStethoscope,
  faTags,
  faUserMd
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const images = [
  'https://kimssunshine.co.in/wp-content/uploads/2019/08/What-Exactly-Brings-Migraine-Headache-Into-Your-Busy-Schedule-1024x768.jpg',
  'https://www.afge.org/link/db10c77c6c7c4e97899b16dd739ae82a.aspx',
  'https://psrihospital.com/wp-content/uploads/2023/10/PSRI-Blog-banner-2.jpg',
  'https://i.ytimg.com/vi/zWo0reOpf5A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUHXfHoRYcyZBDFLh7PCU89Bot1g'
];

const translations = {
  EN: {
    title: 'Health Blog',
    subtitle: 'Trusted tips & insights from certified professionals.',
    tags: 'Tags:',
    latestArticles: 'Latest Articles',
    stayInformed: 'Stay Informed!',
    subscribeText: 'Subscribe to get updates when we launch full articles.',
    notifyMe: 'Notify Me',
    placeholder: 'you@example.com'
  },
  தமிழ்: {
    title: 'ஆரோக்கிய வலைபதிவு',
    subtitle: 'நம்பகமான தகவல்கள் மற்றும் நிபுணர்களின் ஆலோசனைகள்.',
    tags: 'குறிச்சொற்கள்:',
    latestArticles: 'சமீபத்திய கட்டுரைகள்',
    stayInformed: 'தகவல் பெறுங்கள்!',
    subscribeText: 'நாம் முழுமையான கட்டுரைகள் வெளியிடும் போதெல்லாம் தகவல் பெறுங்கள்.',
    notifyMe: 'என்னை அறிவிக்கவும்',
    placeholder: 'உங்கள் மின்னஞ்சல்'
  }
};

const articleData = {
  EN: [
    {
      icon: faHeartbeat,
      title: '5 Tips for a Healthy Heart',
      summary: 'Simple steps to maintain cardiovascular health naturally.',
      tag: 'Heart',
      link: '#',
      author: 'Dr. Riya Sharma'
    },
    {
      icon: faBrain,
      title: 'Understanding Mental Health',
      summary: 'Explore signs, symptoms, and support for emotional wellness.',
      tag: 'Mental Health',
      link: '#',
      author: 'Dr. Vivek Mehra'
    },
    {
      icon: faAppleAlt,
      title: 'Nutrition Myths Busted',
      summary: 'Get clarity on common diet misconceptions.',
      tag: 'Nutrition',
      link: '#',
      author: 'Dr. Sunita Rao'
    },
    {
      icon: faStethoscope,
      title: 'Managing Blood Pressure',
      summary: 'Diet and lifestyle tips to control hypertension effectively.',
      tag: 'Heart',
      link: '#',
      author: 'Dr. Rajat Kumar'
    },
    {
      icon: faMattressPillow,
      title: 'Stress Management Techniques',
      summary: 'Practical strategies to reduce everyday stress.',
      tag: 'Lifestyle',
      link: '#',
      author: 'Dr. Neha Singh'
    },
    {
      icon: faBottleDroplet,
      title: 'Hydration and Health',
      summary: 'How water intake affects your energy, mood, and skin.',
      tag: 'Nutrition',
      link: '#',
      author: 'Dr. Ramesh Varma'
    }
  ],
  தமிழ்: [
    {
      icon: faHeartbeat,
      title: 'ஆரோக்கியமான இதயத்திற்கு 5 குறிப்புகள்',
      summary: 'இதய ஆரோக்கியத்தை இயற்கையாக பராமரிக்க எளிய வழிகள்.',
      tag: 'Heart',
      link: '#',
      author: 'டாக்டர் ரியா சர்மா'
    },
    {
      icon: faBrain,
      title: 'மனநலத்தை புரிந்துகொள்வது',
      summary: 'மனநலம் குறித்த அறிகுறிகள் மற்றும் ஆதரவு.',
      tag: 'Mental Health',
      link: '#',
      author: 'டாக்டர் விவேக் மெஹ்ரா'
    },
    {
      icon: faAppleAlt,
      title: 'உணவு குறித்த தவறான நம்பிக்கைகள்',
      summary: 'வழக்கமான உணவு தவறுகளை விளக்கும் கட்டுரை.',
      tag: 'Nutrition',
      link: '#',
      author: 'டாக்டர் சுனிதா ராவ்'
    },
    {
      icon: faStethoscope,
      title: 'இரத்த அழுத்தத்தை நிர்வகிப்பது எப்படி',
      summary: 'உணவு மற்றும் வாழ்க்கை முறையை பயன்படுத்தி கட்டுப்படுத்தும் வழிகள்.',
      tag: 'Heart',
      link: '#',
      author: 'டாக்டர் ராஜத் குமார்'
    },
    {
      icon: faMattressPillow,
      title: 'மன அழுத்தம் குறைக்கும் நுட்பங்கள்',
      summary: 'தினசரி மன அழுத்தத்தை குறைக்கும் பயனுள்ள வழிகள்.',
      tag: 'Lifestyle',
      link: '#',
      author: 'டாக்டர் நேஹா சிங்'
    },
    {
      icon: faBottleDroplet,
      title: 'நன்கு நீர்ப்பானம் மற்றும் உடல் நலம்',
      summary: 'நீர் குடிப்பது உங்கள் ஆற்றல், மனநிலை மற்றும் தோல் மீது எவ்வாறு பாதிக்கிறது.',
      tag: 'Nutrition',
      link: '#',
      author: 'டாக்டர் ரமேஷ் வர்மா'
    }
  ]
};

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedTag, setSelectedTag] = useState('All');
  const [email, setEmail] = useState('');
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [language, setLanguage] = useState<'EN' | 'தமிழ்'>('EN');

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const t = translations[language];
  const articles = articleData[language];
  const filteredArticles = selectedTag === 'All' ? articles : articles.filter(a => a.tag === selectedTag);

  const toggleBookmark = (title: string) => {
    setBookmarked((prev) =>
      prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]
    );
  };

  return (
      <div className="min-h-screen text-gray-800">
      <div className="bg-white/70 backdrop-blur-sm min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-10">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-hospital-primary mb-2 tracking-tight">
                <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-red-500 animate-pulse" />
                {t.title}
              </h1>
              <p className="text-lg text-gray-600">{t.subtitle}</p>
            </div>
            <div className="text-sm">
              <button
                onClick={() => setLanguage(prev => (prev === 'EN' ? 'தமிழ்' : 'EN'))}
                className="px-3 py-1 border rounded text-gray-600 hover:text-hospital-primary"
              >
                <FontAwesomeIcon icon={faLanguage} className="mr-1" /> {language}
              </button>
            </div>
          </div>

          <div className="mb-6 flex justify-center flex-wrap gap-3">
            <span className="text-sm text-gray-600 flex items-center gap-1">
              <FontAwesomeIcon icon={faTags} /> {t.tags}
            </span>
            {['All', 'Heart', 'Mental Health', 'Nutrition', 'Lifestyle'].map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full border text-sm transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-hospital-primary text-white border-hospital-primary'
                    : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {filteredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition transform hover:scale-105 border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2 justify-between">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={article.icon} className="text-hospital-primary text-xl" />
                    <h3 className="text-md font-bold text-hospital-primary">
                      {article.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleBookmark(article.title)}
                    className={`text-sm ${bookmarked.includes(article.title) ? 'text-yellow-500' : 'text-gray-400'}`}
                  >
                    <FontAwesomeIcon icon={faBookmark} />
                  </button>
                </div>
                <p className="text-sm text-gray-700 leading-snug mb-1">{article.summary}</p>
                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <FontAwesomeIcon icon={faUserMd} /> {article.author}
                </p>
                <a
                  href={article.link}
                  className="text-sm text-hospital-primary font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faBell} className="text-yellow-500 mr-2 animate-bounce" />
              <h3 className="text-lg font-semibold text-hospital-primary">{t.stayInformed}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">{t.subscribeText}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-hospital-primary w-full"
              />
              <button
                onClick={() => {
                  if (email.trim()) alert(`Subscribed with: ${email}`);
                }}
                className="bg-hospital-primary text-white px-5 py-2 rounded-md hover:bg-hospital-dark transition"
              >
                {t.notifyMe}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
