# ProductHub - E-commerce Learning Project

A full-featured e-commerce application built with React, TypeScript, Firebase, and Tailwind CSS. This project serves as a learning resource for understanding modern web development practices.

## 🎯 Learning Objectives

- Authentication and Authorization with Firebase
- State Management with Zustand
- Real-time Database Operations
- TypeScript in React Applications
- Responsive Design with Tailwind CSS
- Cart Management and Persistence
- User Profile Management
- Admin Dashboard Implementation

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Backend**: Firebase (Authentication, Firestore)
- **Routing**: React Router
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📚 Project Structure

```
src/
├── components/        # Reusable UI components
│   └── Navbar.tsx
├── contexts/         # React contexts
│   └── AuthContext.tsx
├── hooks/           # Custom hooks
│   └── useCart.tsx
├── lib/             # Utility functions and configurations
│   ├── firebase.ts
│   ├── initializeProducts.ts
│   └── sampleProducts.ts
├── pages/           # Route components
│   ├── Admin.tsx
│   ├── Cart.tsx
│   ├── Login.tsx
│   ├── Products.tsx
│   ├── Profile.tsx
│   └── Signup.tsx
└── types/           # TypeScript type definitions
    └── product.ts
```

## 🔑 Key Features

1. **Authentication**
   - Email/Password Sign Up
   - Login
   - Email Verification
   - Password Reset

2. **User Management**
   - Profile Updates
   - Name Change
   - Password Change
   - Email Verification Status

3. **Product Management**
   - Product Listing
   - Category Filtering
   - Search Functionality
   - Product Details

4. **Shopping Cart**
   - Add/Remove Items
   - Quantity Updates
   - Persistent Cart State
   - Total Calculation

5. **Admin Dashboard**
   - User Management
   - User Deletion
   - User List View

## 👨‍🏫 Instructor Guide

### Teaching Modules

1. **Authentication Module (2-3 hours)**
   - Firebase Setup
   - AuthContext Implementation
   - Protected Routes
   - User Registration Flow

2. **Product Management (2-3 hours)**
   - Firestore Data Structure
   - Product Queries
   - Filtering Implementation
   - Search Functionality

3. **State Management (2-3 hours)**
   - Zustand Store Setup
   - Cart State Management
   - Persistence Layer
   - State Updates

4. **UI/UX Design (2-3 hours)**
   - Tailwind CSS Basics
   - Responsive Design
   - Component Architecture
   - Icon Integration

### Practical Exercises

1. **Authentication Exercise**
   ```typescript
   // Implement email verification reminder
   const EmailVerificationReminder = () => {
     const { currentUser, sendVerificationEmail } = useAuth();
     // Students implement the component
   };
   ```

2. **Cart Management Exercise**
   ```typescript
   // Implement quantity validation
   const updateQuantity = (productId: string, newQuantity: number) => {
     // Students implement quantity validation
   };
   ```

3. **Product Filtering Exercise**
   ```typescript
   // Implement price range filter
   const filterByPriceRange = (products: Product[], min: number, max: number) => {
     // Students implement the filter
   };
   ```

## 👩‍💻 Student Guide

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Copy your Firebase config
   - Update src/lib/firebase.ts

4. Start the development server:
   ```bash
   npm run dev
   ```

### Learning Path

1. **Week 1: Fundamentals**
   - React Basics
   - TypeScript Integration
   - Firebase Setup
   - Authentication Flow

2. **Week 2: State & Data**
   - Zustand State Management
   - Firestore Operations
   - Data Modeling
   - Type Definitions

3. **Week 3: UI/UX**
   - Tailwind CSS Styling
   - Responsive Design
   - Component Architecture
   - Form Handling

4. **Week 4: Advanced Features**
   - Cart Implementation
   - Admin Dashboard
   - Search & Filtering
   - Performance Optimization

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 📝 Assignment Ideas

1. **Feature Extensions**
   - Add wishlist functionality
   - Implement product reviews
   - Add payment integration
   - Create order history

2. **UI Enhancements**
   - Add dark mode
   - Implement infinite scroll
   - Add loading skeletons
   - Create animations

3. **Performance Optimization**
   - Implement lazy loading
   - Add image optimization
   - Improve bundle size
   - Add caching strategies

## 🤝 Contributing

Feel free to submit issues and enhancement requests!