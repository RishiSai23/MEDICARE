import { useState, useEffect } from "react";

const statsData = [
  { id: 1, label: "Patients Treated", value: 12500 },
  { id: 2, label: "Successful Surgeries", value: 9500 },
  { id: 3, label: "Expert Doctors", value: 50 },
  { id: 4, label: "Years of Experience", value: 30 },
];

const services = [
  { id: 1, title: "Cardiology", desc: "Advanced heart care and diagnostics.", icon: "❤️" },
  { id: 2, title: "Neurology", desc: "Comprehensive nervous system treatment.", icon: "🧠" },
  { id: 3, title: "Pediatrics", desc: "Complete care for newborns and children.", icon: "👶" },
  { id: 4, title: "Orthopedics", desc: "Bone and joint care with modern techniques.", icon: "🦴" },
];

const testimonials = [
  { id: 1, name: "Jane Doe", feedback: "The doctors and staff at HospitalAI made me feel cared for every step of the way. Highly recommend!", image: "https://i.pravatar.cc/100?img=32" },
  { id: 2, name: "John Smith", feedback: "Excellent facilities and professional team. My recovery was faster than expected.", image: "https://i.pravatar.cc/100?img=33" },
  { id: 3, name: "Maria Lopez", feedback: "Friendly staff and highly skilled doctors. I felt safe and informed during my treatment.", image: "https://i.pravatar.cc/100?img=34" },
];

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    if (end === 0) return;
    const increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

const MainPage = () => {
  return (
    <main className="bg-hospital-light text-hospital-dark font-sans">
      <section className="bg-hospital-primary text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to HospitalAI</h1>
        <p className="max-w-xl mx-auto mb-8 text-lg md:text-xl">Advanced Healthcare Management System with expert care & modern facilities.</p>
        <button className="bg-hospital-accent hover:bg-yellow-500 text-hospital-dark font-semibold px-8 py-3 rounded-md shadow-lg transition" onClick={() => alert("Booking functionality coming soon!")}>Book an Appointment</button>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:flex md:items-center md:gap-16">
      <img src="/doc-index.png" alt="Hospital" className="rounded-2xl shadow-lg w-full max-w-md mx-auto"/>
        <div className="md:flex-1">
          <h2 className="text-3xl font-bold text-hospital-primary mb-4">About HospitalAI</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">At HospitalAI, we are committed to providing comprehensive medical services backed by state-of-the-art technology and compassionate care. Our team of expert doctors and medical staff ensure every patient receives personalized treatment.</p>
          <p className="text-gray-700 leading-relaxed">From diagnostics to post-operative care, we focus on delivering the highest quality healthcare services to improve the wellbeing of every individual.</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-hospital-primary mb-12">Our Services</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {services.map(({ id, title, desc, icon }) => (
            <div key={id} className="bg-hospital-light rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-default">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-hospital-primary mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hospital-dark text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Stats</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {statsData.map(({ id, label, value }) => {
            const count = useCountUp(value);
            return (
              <div key={id}>
                <p className="text-5xl font-extrabold mb-2">{count.toLocaleString()}</p>
                <p className="uppercase tracking-wide font-semibold">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-hospital-primary text-center mb-12">What Our Patients Say</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, feedback, image }) => (
            <div key={id} className="bg-hospital-light rounded-lg shadow-md p-6 flex flex-col items-center">
              <img src={image} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="italic text-gray-800 mb-4">"{feedback}"</p>
              <p className="font-semibold text-hospital-primary">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hospital-primary text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Consultation?</h2>
        <p className="mb-8 max-w-xl mx-auto">Schedule your appointment with our expert doctors today.</p>
        <button className="bg-hospital-accent hover:bg-yellow-500 text-hospital-dark font-semibold px-8 py-3 rounded-md shadow-lg transition" onClick={() => alert("Booking functionality coming soon!")}>Book Appointment</button>
      </section>

      <section className="bg-white py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-hospital-primary mb-6">Contact Us</h2>
          <p className="mb-4"><strong>Address:</strong> 123 Health St, Wellness City, HC 45678</p>
          <p className="mb-4"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="mb-4"><strong>Email:</strong> contact@hospitalai.com</p>
          <p className="mb-4"><strong>Working Hours:</strong> Mon - Fri, 8:00 AM - 6:00 PM</p>
        </div>
        <div>
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0862493793833!2d-122.41941528468127!3d37.77492977975981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74d08f93%3A0x9113b1e05ee6e264!2sGeneral%20Hospital!5e0!3m2!1sen!2sus!4v1696900000000!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default MainPage;
