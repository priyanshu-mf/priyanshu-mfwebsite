# Story.mf

**"Where every page breathes another universe."**

A premium, production-ready storytelling platform with stunning animations, immersive reading experiences, and multiple magical themes.

## Features

- 🎭 **Multiple Themes**: Galaxy, Sakura, Ocean, Forest, Rain, Snow, Dark Academia
- 📖 **Immersive Reading**: Physics-based page turning with realistic book experience
- 🎨 **Customization**: Multiple paper styles and reading preferences
- 📊 **Admin Dashboard**: Analytics, story management, and content creation
- ✨ **Smooth Animations**: 60 FPS with Framer Motion and GSAP
- 🔐 **Authentication**: JWT-based auth system
- 📱 **Fully Responsive**: Mobile, tablet, and desktop optimized
- ⚡ **Performance**: Lazy loading, optimized images, PWA support

## Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Three.js
- Lenis (smooth scrolling)

**Backend:**
- Node.js
- Express
- MongoDB
- JWT Authentication
- Cloudinary (image storage)

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Cloudinary account

### Installation

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Setup

Create `.env.local` in frontend:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_CLOUDINARY_NAME=your_cloudinary_name
```

Create `.env` in backend:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### Running Locally

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
story.mf/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── types/
│   ├── public/
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
└── README.md
```

## License

Private - All rights reserved
