# Rentify - Find Your Perfect Place 🏠

## Features
### Here are some of the current features that Rentify has:

- 🔐 User authentication with Google & Next Auth
- 🔓 User authorization
- 🚧 Route protection
- 👤 User profile with user listings
- 🏠 Property Listing CRUD
- 📷 Property image upload (Multiple)
- 🔍 Property search
- 📬 Internal messages with 'unread' notifications
- 🖼️ Photoswipe image gallery
- 🗺️ Mapbox maps
- 🔔 Toast notifications
- 📌 Property bookmarking / saved properties
- 📤 Property sharing to social media
- ⏳ Loading spinners
- 📱 Responsive design (Tailwind)
- ❌ Custom 404 page

### Rentify uses the following technologies:

- ⚛️ Next.js
- 🖥️ React
- 🎨 Tailwind CSS
- 🗄️ MongoDB
- 📂 Mongoose
- 🔒 NextAuth.js
- 🖍️ React Icons
- 🖼️ Photoswipe
- ☁️ Cloudinary
- 🗺️ Mapbox
- 🗺️ React Map GL
- 📍 React Geocode
- 🔄 React Spinners
- 🗣️ React Toastify
- 🔗 React Share


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Prerequisites

- **Node.js** version 18 or higher
- **MongoDB Atlas** account and a cluster. Sign up and create a cluster at [MongoDB](https://www.mongodb.com/cloud/atlas)
- **Cloudinary** account. Sign up at [Cloudinary](https://cloudinary.com/)
- **Google Console** account. Sign up at [Google Cloud](https://console.cloud.google.com/)
- **Mapbox** account. Sign up at [Mapbox](https://www.mapbox.com/)

## .env File

Rename the `env.example` file to `.env` and fill in the following environment variables:

- Get your MongoDB connection string from your MongoDB Atlas cluster and add it to `MONGODB_URI`.
- Get your Google client ID and secret from your Google console account and add them to `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Add a secret to `NEXTAUTH_SECRET`. You can generate it with the following command:
  ```sh
  openssl rand -base64 32
- Get your Cloudinary cloud name, API key, and API secret from your Cloudinary account and add them to `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET`.
- Get your Mapbox token from your Mapbox account and add it to `NEXT_PUBLIC_MAPBOX_TOKEN`.
- Get your Google Geocoding API key from your Google console account and add it to `NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY`.


First, run the development server:

```bash
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
