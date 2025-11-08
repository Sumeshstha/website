# Backend API Documentation - Removed Endpoints

## Version History

### Version 1.0.1 (Cleanup - December 2024)
- **Removed Endpoints:**
  - `GET /api/users` - Get all users (unused)
  - `POST /api/users` - Create new user (unused)

- **Removed Components:**
  - User model (`/models/User.js`)
  - Users route (`/routes/users.js`)

### Current Active Endpoints (Version 1.0.1)

#### Base Routes
- `GET /` - API status and version information
- `GET /api/health` - Health check endpoint

#### Contact Form Routes
- `POST /api/contact` - Submit contact form
  - Request body: `{ name, email, subject, message }`
  - Sends email notification (if configured)
  - Stores message in database

- `GET /api/contact` - Get all contact messages (admin)
  - Returns array of contact messages sorted by creation date
  - Limited to 50 most recent messages

- `PATCH /api/contact/:id/read` - Mark message as read
  - Updates message read status
  - Returns updated message object

### Environment Variables
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `FRONTEND_URL` - CORS allowed origin
- `EMAIL_USER` - Gmail account for notifications (optional)
- `EMAIL_PASS` - Gmail app password (optional)
- `ADMIN_EMAIL` - Admin email for notifications (optional)

### Dependencies
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - CORS middleware
- `helmet` - Security middleware
- `express-rate-limit` - Rate limiting
- `nodemailer` - Email notifications (optional)
- `dotenv` - Environment configuration