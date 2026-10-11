# 🛒 বাজার দর | BazarDor

**Essential Commodity Price Tracker in Bangladesh**

বাজার দর is a responsive web application that helps users explore the latest prices of essential commodities in Bangladesh. Users can browse products, compare market prices, view price changes, and access detailed product information after signing in.

## 🌟 Features

1. **📊 Product Price Tracking** — Browse essential commodities with current prices, units, and daily price changes.
2. **📈 Price Increase & Decrease** — Explore the top products whose prices have increased or decreased.
3. **🔍 Product Details** — View minimum, maximum, and average prices along with market-wise price information.
4. **📂 Category & Sorting** — Browse products by category and sort them by price in ascending or descending order.
5. **🔐 Authentication** — Secure sign-in and sign-up using Better Auth with email/password and social login.
6. **👤 Profile Management** — View profile information and update your name.
7. **📱 Fully Responsive Design** — Optimized for mobile phones, tablets, and desktop screens.
8. **🔔 Toast Notifications** — Get feedback for authentication, validation, and profile update actions.
9. **⏳ Loading Skeletons** — Display loading indicators while product data is being fetched.
10. **🚫 Custom 404 Page** — Show a friendly error page with a link to return home.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js (App Router) | Application framework and routing |
| React | Building interactive UI components |
| TypeScript / JavaScript | Application logic |
| Tailwind CSS | Styling and responsive layouts |
| DaisyUI / Component Library | Reusable UI components |
| Better Auth | Authentication and user management |
| MongoDB | Database and user data storage |
| React Hot Toast | Success and error notifications |
| Git & GitHub | Version control and source code management |
| Vercel | Application deployment |

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd bajar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the required environment variables.

```env
BETTER_AUTH_SECRET=your_secure_random_secret
BETTER_AUTH_URL=http://localhost:3000

MONGODB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

**Important:** Replace the example values with your actual credentials. Configure Google and GitHub OAuth callback URLs according to your Better Auth setup. Never commit your `.env` file or expose your secrets in the repository.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## 🔑 Authentication

BazarDor uses Better Auth to manage user authentication.

- Email and password registration.
- Email and password login.
- Google and GitHub social authentication.
- Protected product detail pages.
- User profile and name update functionality.
- Success and error notifications.

Social authentication requires valid OAuth credentials and correctly configured callback URLs.

## 📱 Responsive Design

The interface is designed to work across:

- Mobile devices
- Tablets
- Laptops
- Desktop computers

Responsive product grids, navigation links, price tickers, and hero sections help provide a consistent experience across screen sizes.

## 🌐 Deployment

This project can be deployed on [Vercel](https://vercel.com/).

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables in Vercel Project Settings.
4. Update `BETTER_AUTH_URL` to your production website URL.
5. Configure the Google and GitHub OAuth redirect URLs for production.
6. Deploy the project and test authentication, product routes, and page refreshes.

**Note:** Never upload database credentials, OAuth secrets, or authentication secrets to GitHub.

## 🔗 Project Links

- **Live Website:** YOUR_LIVE_WEBSITE_URL
- **GitHub Repository:** YOUR_GITHUB_REPOSITORY_URL

## 📌 Project Information

**Project Name:** বাজার দর (BazarDor)

**Project Type:** Full-Stack Web Application

**Purpose:** To make essential commodity prices easier to explore and compare in Bangladesh.

**Developed By:** Siyam Rahman

---

*বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।*

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।*
