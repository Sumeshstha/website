# Sumesh Shrestha - Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark/light mode toggle, smooth animations, and a contact form with backend integration.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Backend integration with MongoDB for message storage
- **Scroll Spy**: Active navigation highlighting based on scroll position
- **Mobile Menu**: Collapsible hamburger menu for mobile devices

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending (optional)
- **Helmet** - Security middleware
- **Express Rate Limit** - Rate limiting

## 📁 Project Structure

```
test/
├── frontend/                 # React frontend
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar/      # Navigation component
│   │   │   ├── Hero/        # Hero section
│   │   │   ├── About/       # About section
│   │   │   ├── Skills/      # Skills section
│   │   │   ├── Projects/    # Projects section
│   │   │   ├── Contact/     # Contact form
│   │   │   └── Footer/      # Footer component
│   │   ├── context/         # React context
│   │   └── index.css        # Global styles
│   ├── package.json
│   └── tailwind.config.js   # Tailwind configuration
├── backend/                 # Node.js backend
│   ├── server.js           # Main server file
│   ├── package.json
│   └── env.example         # Environment variables example
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up Environment Variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/sumesh-portfolio
   FRONTEND_URL=http://localhost:3000
   ```

5. **Start MongoDB**
   - Local: Make sure MongoDB is running on your system
   - Cloud: Use MongoDB Atlas or similar service

### Running the Application

#### Option 1: Use the startup script
```bash
# Windows
./start-portfolio.bat

# Linux/Mac
chmod +x start-portfolio.sh
./start-portfolio.sh
```

#### Option 2: Manual startup
```bash
# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend
cd frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:

```javascript
colors: {
  light: {
    bg: '#F9FAFB',
    text: '#111827',
    primary: '#2563EB',
    cta: '#EF4444',
    footer: '#1F2937',
  },
  dark: {
    bg: '#0F172A',
    text: '#F9FAFB',
    primary: '#3B82F6',
    cta: '#F87171',
    footer: '#111827',
  }
}
```

### Content
Update the content in each component:
- **Hero**: `src/components/Hero/Hero.js`
- **About**: `src/components/About/About.js`
- **Skills**: `src/components/Skills/Skills.js`
- **Projects**: `src/components/Projects/Projects.js`
- **Contact**: `src/components/Contact/Contact.js`

### Images
Replace placeholder images in the `public` folder:
- `resume.pdf` - Your resume/CV
- Add your profile images to the components

## 📧 Contact Form Setup

The contact form is integrated with the backend and MongoDB. To enable email notifications:

1. **Set up email credentials** in `.env`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@example.com
   ```

2. **For Gmail**: Use App Passwords instead of your regular password

3. **Test the form**: Submit a message through the contact form

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Update `FRONTEND_URL` in backend environment variables

### Backend (Render/Heroku)
1. Set environment variables in your hosting service
2. Deploy the backend folder
3. Update the API URL in frontend contact form

### Database
- Use MongoDB Atlas for cloud database
- Update `MONGODB_URI` in environment variables

## 🔧 Development

### Available Scripts

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### API Endpoints

- `GET /` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PATCH /api/contact/:id/read` - Mark message as read
- `GET /api/health` - Server health status

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **CORS Issues**
   - Verify `FRONTEND_URL` in backend `.env`
   - Check if frontend URL matches exactly

3. **Port Already in Use**
   - Change `PORT` in `.env` file
   - Kill existing processes using the port

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Sumesh Shrestha**
- Computer Engineering Undergraduate at Kathmandu University
- Tech Enthusiast | Problem Solver
- GitHub: [@sumeshshrestha](https://github.com/sumeshshrestha)
- LinkedIn: [Sumesh Shrestha](https://linkedin.com/in/sumeshshrestha)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- React and Tailwind CSS communities
- Framer Motion for smooth animations

