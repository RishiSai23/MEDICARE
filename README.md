# 🏥 HospitalAI - MERN Stack Hospital Management System

A comprehensive digital healthcare management platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## 🌟 Features

### Frontend (React.js + Tailwind CSS)
- **Professional Medical UI** with hospital color scheme 
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Interactive Navigation** with sticky navbar and smooth animations
- **Modular Components** for easy maintenance and scalability

### Backend (Node.js + Express.js)
- **RESTful API** architecture with proper error handling
- **MongoDB Integration** using Mongoose ODM
- **Environment Configuration** with .env support
- **Scalable Structure** with controllers, routes, and models

### Core Modules
- 🏠 **Home** - Landing page with hero section and services
- 📅 **Appointments** - Schedule and manage medical appointments
- 📰 **News** - Hospital announcements and health news
- 👤 **Patient Dashboard** - Personal health records and portal
- 👨‍⚕️ **Doctor Dashboard** - Medical practice management
- 💳 **Billing** - Payment processing and invoice management
- 📝 **Blog** - Health education and medical insights
- 📦 **Inventory** - Medical supplies and equipment tracking
- 🚚 **Delivery** - Medicine and supply delivery services
- ⚙️ **Admin** - Hospital administration and settings

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd hospital-ai
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
npm install
cd ..
```

4. **Setup environment variables**
```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and other configurations
```

5. **Run the development servers**

**Option 1: Run both frontend and backend together (Recommended)**
```bash
npx concurrently "npm run dev" "cd backend && npm run dev"
```

**Option 2: Run separately**

Frontend (Terminal 1):
```bash
npm run dev
```

Backend (Terminal 2):
```bash
cd backend
npm run dev
```

### 🌐 Access Points
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health
- **API Test Endpoint**: http://localhost:5000/api/test

## 📁 Project Structure

```
hospital-ai/
├── 📁 frontend/ (React App)
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── Footer.tsx
│   │   ├── 📁 pages/
│   │   │   ├── Index.tsx
│   │   │   ├── Appointments.tsx
│   │   │   ├── PatientDashboard.tsx
│   │   │   └── ... (other pages)
│   │   └── App.tsx
│   ├── tailwind.config.ts
│   └── package.json
├── 📁 backend/ (Node.js API)
│   ├── 📁 routes/
│   │   └── api.js
│   ├── 📁 controllers/
│   │   └── testController.js
│   ├── 📁 models/
│   │   └── index.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🎨 Design System

### Color Palette (60-30-10 Rule)
- **Primary (60%)**: `#0A4D68` - Professional medical blue for headers, navbars
- **Secondary (30%)**: `#88CFE0` - Light blue for backgrounds, buttons
- **Accent (10%)**: `#F4B400` - Golden yellow for highlights, CTAs, icons

### Typography & Spacing
- Clean, medical-grade typography with proper contrast
- Consistent spacing using Tailwind CSS utilities
- Responsive design patterns for all device sizes

### Components
- Shadcn UI components for consistent design language
- Custom hospital-themed components with professional styling
- Hover animations and smooth transitions

## 🔧 Development

### Frontend Development
- Built with **Vite** for fast development and building
- **TypeScript** for type safety
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Shadcn UI** for component library

### Backend Development
- **Express.js** server with middleware
- **MongoDB** with Mongoose ODM
- **CORS** enabled for frontend communication
- **Environment-based configuration**
- **Error handling** and logging

### API Endpoints

#### Base Endpoints
- `GET /health` - Server health check
- `GET /api/test` - API functionality test
- `POST /api/test` - API POST test

#### Future Endpoints (To be implemented)
- `/api/auth` - Authentication and authorization
- `/api/patients` - Patient management
- `/api/doctors` - Doctor management
- `/api/appointments` - Appointment scheduling
- `/api/billing` - Billing and payments
- `/api/inventory` - Inventory management

## 🔐 Environment Variables

Copy `backend/.env.example` to `backend/.env` and configure:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/hospitalai
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=24h
FRONTEND_URL=http://localhost:8080
```

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Collapsible navigation menu
- Touch-friendly interface elements
- Optimized layouts for different screen sizes

## 🔮 Future Enhancements

### Phase 1 - Core Functionality
- [ ] User authentication and authorization
- [ ] Patient registration and profiles
- [ ] Doctor scheduling system
- [ ] Appointment booking with calendar integration

### Phase 2 - Advanced Features
- [ ] Medical record management
- [ ] Prescription handling
- [ ] Billing and insurance processing
- [ ] Real-time notifications

### Phase 3 - Integration & Analytics
- [ ] Third-party integrations (insurance, pharmacy)
- [ ] Analytics dashboard
- [ ] Telemedicine capabilities
- [ ] Mobile app development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🛠️ Built With

- **Frontend**: React.js, TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **UI Components**: Shadcn UI, Radix UI
- **Icons**: Lucide React
- **Development**: Concurrently, Nodemon

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

---

**HospitalAI** - Revolutionizing healthcare management with modern web technologies 🚀
