# DocAppoint — Doctor Appointment Management System

DocAppoint is a full-stack MERN application for discovering doctors, booking appointments, managing schedules, and handling healthcare administration.

## Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT
- **Image/File Storage:** Cloudinary
- **Payments:** Razorpay
- **API Communication:** REST APIs
- **Deployment:** Frontend/Admin can be deployed separately; backend can run as a Node/Express service

## Roles

- **Patient:** Register/login, browse doctors, book and manage appointments, update profile, and make payments.
- **Doctor:** Manage profile, availability and appointments, view patients and earnings.
- **Admin:** Manage doctors and appointments and monitor platform statistics.

## Project Structure

```text
DocAppoint/
├── frontend/   # Patient-facing React application
├── admin/      # Admin dashboard
├── backend/    # Express REST API, MongoDB models and authentication
└── README.md
```

## Core Features

- Role-based authentication with JWT
- Doctor search and specialty filtering
- Appointment scheduling and cancellation
- Doctor and patient profile management
- Admin dashboard and doctor management
- Doctor appointment/earnings dashboard
- Razorpay payment integration
- Cloudinary-based image handling
- Responsive React UI

## Local Setup

Install dependencies in `backend`, `frontend`, and `admin`, then configure the required environment variables for MongoDB, JWT, Cloudinary and Razorpay before starting the services.

> This project is a customized version of the original Appointy codebase, with branding and project documentation adapted for DocAppoint.
