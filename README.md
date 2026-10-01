# 🏡 Wanderlust — Travel & Stay Listing Platform

**Wanderlust** is a full-stack travel and accommodation listing web application where users can explore, create, review, and manage property listings.

The application provides a complete platform for discovering stays across different categories with authentication, image uploads, location-based maps, reviews, and listing management.

## ✨ Features

* 🔐 User Registration & Login
* 👤 User Authentication using Passport.js
* 🏠 Create, Edit & Delete Property Listings
* 🔍 Browse and Explore Listings
* ⭐ Add & Manage Reviews
* 🖼️ Image Upload & Cloud Storage
* ☁️ Cloudinary integration for image management
* 🗺️ Mapbox integration for location-based listings
* 🛡️ Joi-based server-side validation
* 📱 Responsive UI using Bootstrap
* 🔒 Authorization to protect user-specific actions
* 📂 Category-based listing discovery
* 🚀 Deployed on Render

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* EJS
* EJS-Mate
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Validation

* Passport.js
* Passport-Local
* Joi

### Cloud & APIs

* Cloudinary
* Mapbox

### Deployment

* Render

---

## 📂 Project Structure

```text
Wanderlust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   ├── css/
│   └── js/
│
├── utils/
├── init/
├── middleware.js
├── app.js
├── schema.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run Wanderlust locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Aman3071/Wanderlust.git
```

### 2. Navigate to the Project

```bash
cd Wanderlust
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
```

> Never commit your `.env` file or secret credentials to GitHub.

### 5. Start the Application

```bash
npm start
```

For development:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:8080
```

---

## 🗄️ Database

Wanderlust uses **MongoDB** with **Mongoose** for database management.

Main data models include:

* User
* Listing
* Review

Mongoose is used for schema definition, validation, relationships, and database operations.

---

## 🔐 Authentication & Authorization

The application uses **Passport.js with Passport-Local** for authentication.

Users can:

* Register an account
* Login and logout
* Create their own listings
* Edit their own listings
* Delete their own listings
* Add reviews
* Delete their own reviews

Authorization middleware ensures users can only perform actions they are permitted to perform.

---

## ☁️ Image Upload

Property images are uploaded and stored using **Cloudinary**.

The application integrates Cloudinary with the backend to provide:

* Image upload
* Cloud storage
* Image URLs
* Image management

---

## 🗺️ Map Integration

**Mapbox** is integrated to display listing locations on an interactive map.

When creating a listing, users can provide a location and the application uses geocoding to determine the corresponding coordinates.

---

## 📌 Listing Categories

Wanderlust supports multiple categories to make browsing easier, such as:

* Trending
* Rooms
* Mountain Cities
* Castles
* Camping
* Arctic
* Farms
* Amazing Pools

---

## 📸 Application Screens

### Home / Listings

Explore available properties and browse different categories.

### Listing Details

View property information, location, images, reviews, and other details.

### Create Listing

Authenticated users can create new property listings.

### Map

View listing locations using the integrated Mapbox map.

---

## 🧠 What I Learned

Building Wanderlust helped me gain practical experience with:

* Building RESTful applications with Express.js
* MVC architecture
* MongoDB database design
* Mongoose ODM
* Authentication & authorization
* Express middleware
* Server-side validation
* Image uploads and cloud storage
* Geocoding and map integration
* CRUD operations
* Session management
* EJS templating
* Responsive UI development
* Deployment using Render

---

## 🔮 Future Improvements

Potential improvements include:

* Advanced search and filtering
* Wishlist / Favorites
* Online booking system
* Payment integration
* User profile management
* Email notifications
* Admin dashboard
* Improved recommendation system

---

## 👨‍💻 Author

**Aman Tinmekar**

Python Full Stack Developer | MERN Stack Developer

* GitHub: https://github.com/Aman3071


---

## ⭐ If you Like the Project

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.
