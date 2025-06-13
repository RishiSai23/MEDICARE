import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faBrain,
  faAppleAlt,
  faBell,
  faMattressPillow,
  faBottleDroplet,
  faStethoscope,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

// Carousel images (ensure these exist in /public/)
const images = [
  'https://kimssunshine.co.in/wp-content/uploads/2019/08/What-Exactly-Brings-Migraine-Headache-Into-Your-Busy-Schedule-1024x768.jpg',
  'https://www.afge.org/link/db10c77c6c7c4e97899b16dd739ae82a.aspx',
  'https://psrihospital.com/wp-content/uploads/2023/10/PSRI-Blog-banner-2.jpg',
  'https://i.ytimg.com/vi/zWo0reOpf5A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDUHXfHoRYcyZBDFLh7PCU89Bot1g',
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  const articles = [
    {
      icon: faHeartbeat,
      title: '5 Tips for a Healthy Heart',
      summary: 'Simple steps to maintain cardiovascular health naturally.',
    },
    {
      icon: faBrain,
      title: 'Understanding Mental Health',
      summary: 'Explore signs, symptoms, and support for emotional wellness.',
    },
    {
      icon: faAppleAlt,
      title: 'Nutrition Myths Busted',
      summary: 'Get clarity on common diet misconceptions.',
    },
    {
      icon: faStethoscope,
      title: 'Managing Blood Pressure',
      summary: 'Diet and lifestyle tips to control hypertension effectively.',
    },
    {
      icon: faMattressPillow,
      title: 'Stress Management Techniques',
      summary: 'Practical strategies to reduce everyday stress.',
    },
    {
      icon: faBottleDroplet,
      title: 'Hydration and Health',
      summary: 'How water intake affects your energy, mood, and skin.',
    },
  ];

  return (
    <div className="min-h-screen bg-hospital-light text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Blog Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-hospital-primary mb-1">
            <FontAwesomeIcon icon={faHeartbeat} className="mr-2 text-red-500" />
            Health Blog
          </h1>
          <p className="text-base text-gray-600">
            Trusted health tips & insights from medical professionals.
          </p>
        </div>

        {/* Flex Layout */}
        <div className="lg:flex lg:gap-6 items-stretch">
  {/* Left: Articles */}
  <div className="lg:w-2/3 w-full">
    <div className="bg-white rounded-md shadow-md p-6 h-full flex flex-col min-h-[100%]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-hospital-primary">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-2 text-green-500" />
          Latest Articles
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 flex-grow">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-hospital-light rounded-md p-4 shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 mb-2">
              <FontAwesomeIcon
                icon={article.icon}
                className="text-hospital-primary text-lg"
              />
              <h3 className="text-md font-bold text-hospital-primary">
                {article.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right: Subscribe + Carousel */}
  <div className="lg:w-1/3 w-full flex flex-col">
    <div className="text-center bg-white rounded-md shadow p-4 h-full flex flex-col justify-between min-h-full">
      <div>
        <h3 className="text-md font-semibold text-hospital-primary mb-1">
          <FontAwesomeIcon icon={faBell} className="mr-2 text-yellow-500" />
          Stay Informed!
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Subscribe to get notified when the full blog is live.
        </p>

        {/* Carousel */}
        <div className="w-full h-56 overflow-hidden rounded relative mb-3">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === currentIndex ? 'bg-hospital-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-3">
        <input
          type="email"
          placeholder="you@example.com"
          className="px-3 py-2 rounded border border-gray-300 text-sm focus:ring-1 focus:ring-hospital-primary w-full sm:w-auto"
        />
        <button className="bg-hospital-primary text-white text-sm px-4 py-2 rounded hover:bg-hospital-dark transition w-full sm:w-auto">
          Notify Me
        </button>
      </div>
    </div>
  </div>
</div>
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Hospital Name. All rights reserved.
          </p>
          <p>
            <a
              href="/privacy-policy"
              className="text-hospital-primary hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
