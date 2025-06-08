# Crime Reporting Platform

A comprehensive crime reporting and management system built with Next.js, featuring real-time crime mapping, legal consultation, and community engagement tools.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)](https://prisma.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

The Crime Reporting Platform is a full-stack web application designed to streamline crime reporting, enhance community safety, and provide access to legal assistance. The platform features an intuitive crime reporting system, interactive crime maps powered by Google Maps, lawyer consultation services, and comprehensive analytics for law enforcement and community stakeholders.

## Features

### 🚨 Crime Reporting
- **Easy Reporting Interface**: Streamlined form for reporting crimes with detailed incident information
- **Media Upload**: Support for uploading images, videos, and documents as evidence
- **Anonymous Reporting**: Option to report crimes anonymously for sensitive cases
- **Real-time Status Updates**: Track the progress of reported crimes

### 🗺️ Interactive Crime Maps
- **Google Maps Integration**: Visual representation of crime incidents across different areas
- **Crime Clustering**: Smart clustering of nearby incidents for better visualization
- **Filtering Options**: Filter crimes by type, date range, and severity
- **Heatmap View**: Identify crime hotspots and patterns

### ⚖️ Lawyer Portal
- **Legal Consultation**: Connect victims with qualified lawyers
- **Case Management**: Lawyers can manage their cases and client communications
- **Document Sharing**: Secure document exchange between lawyers and clients
- **Video Consultations**: Built-in video calling for remote consultations

### 👥 Community Features
- **User Authentication**: Secure login with role-based access control
- **Commenting System**: Community discussion on public crime reports
- **Voting System**: Upvote/downvote reports for credibility
- **User Profiles**: Comprehensive user management system

### 📊 Analytics & Administration
- **Admin Dashboard**: Comprehensive analytics for crime trends and patterns
- **Moderation Tools**: Content moderation and user management
- **Reporting Analytics**: Statistical insights into crime data
- **Role Management**: USER, LAWYER, ADMIN, and MODERATOR roles

## Tech Stack

### Frontend
- **Next.js 15.3.0** - React framework with app router
- **TypeScript** - Type-safe JavaScript development
- **TailwindCSS** - Utility-first CSS framework
- **React Hook Form** - Form management and validation
- **Shadcn/UI** - Modern UI component library

### Backend
- **Hono** - Web framework for API routes
- **Prisma ORM** - Database toolkit and ORM
- **PostgreSQL** - Primary database
- **Better Auth** - Authentication and authorization

### Development & Testing
- **Jest** - JavaScript testing framework
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Prisma Studio** - Database management GUI

### External Services
- **Google Maps API** - Interactive mapping and geolocation
- **Cloudinary** - Media storage and optimization
- **Vercel** - Deployment and hosting platform

## Installation

### Prerequisites
- Node.js 18.x or higher
- PostgreSQL database
- Google Maps API key
- Cloudinary account (for media storage)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/crime-reporting-platform.git
   cd crime-reporting-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables in `.env.local`:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/crime_reporting"
   
   # Authentication
   BETTER_AUTH_SECRET="your-auth-secret"
   BETTER_AUTH_URL="http://localhost:3000"
   
   # Google Maps
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## Usage

### For Citizens

1. **Reporting a Crime**
   - Navigate to `/report`
   - Fill in the crime details form
   - Upload relevant media (photos, videos, documents)
   - Submit the report and track its status

2. **Viewing Crime Maps**
   - Visit the main dashboard
   - Use the interactive map to explore crime incidents
   - Apply filters to view specific types of crimes
   - View crime statistics and trends

3. **Finding Legal Help**
   - Browse available lawyers in the lawyer portal
   - Schedule consultations based on your needs
   - Communicate securely with legal professionals

### For Lawyers

1. **Profile Setup**
   - Complete your professional profile
   - Specify areas of expertise
   - Set availability and consultation rates

2. **Case Management**
   - View and manage assigned cases
   - Communicate with clients through the platform
   - Schedule video consultations
   - Share legal documents securely

### For Administrators

1. **Crime Management**
   - Review and moderate crime reports
   - Update case statuses and priorities
   - Generate crime analytics and reports

2. **User Management**
   - Manage user accounts and roles
   - Handle content moderation
   - Monitor platform activity

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `BETTER_AUTH_SECRET` | Secret key for authentication | Yes |
| `BETTER_AUTH_URL` | Base URL for auth callbacks | Yes |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key | Yes |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes |

### Google Maps Setup

1. Enable the following APIs in Google Cloud Console:
   - Maps JavaScript API
   - Geocoding API
   - Places API

2. Set up API key restrictions for security

### Database Configuration

The application uses PostgreSQL with Prisma ORM. The schema includes:

- **Users**: Authentication and profile management
- **Crimes**: Crime report storage and management
- **Lawyers**: Legal professional profiles
- **Media**: File upload and storage references
- **Comments**: Community engagement features
- **Votes**: Report credibility system

## Contributing

We welcome contributions to the Crime Reporting Platform! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and add tests
4. Ensure all tests pass: `npm test`
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature-name`
7. Submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Write tests for new features
- Update documentation as needed
- Follow the existing code style

### Code Style

- Use ESLint and Prettier for code formatting
- Follow the existing naming conventions
- Write clear, self-documenting code
- Add comments for complex logic

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- **Unit Tests**: Located in `__tests__/` directories
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Full user journey testing

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Next.js Team** - For the amazing React framework
- **Prisma Team** - For the excellent ORM and database toolkit
- **Vercel** - For hosting and deployment platform
- **Google Maps** - For mapping and geolocation services
- **Tailwind CSS** - For the utility-first CSS framework
- **Shadcn/UI** - For the beautiful component library
- **Open Source Community** - For the various libraries and tools used

---

**Built with ❤️ for safer communities**

For questions, issues, or contributions, please visit our [GitHub repository](https://github.com/yourusername/crime-reporting-platform) or contact the development team.