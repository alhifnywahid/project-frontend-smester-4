# Berkah Teknik - Air Conditioner Online Store

A full-featured e-commerce web application for an Air Conditioner shop, built with React and Vite. This project was developed as a frontend assignment for the 4th semester, covering everything from product browsing, comparison, and cart management to integrated online payment.

Read this documentation in another language: [Bahasa Indonesia](./README.md)

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Project](#running-the-project)
- [Pages and Routes](#pages-and-routes)
- [Overview](#overview)
- [License](#license)

---

## About the Project

Berkah Teknik is a web-based e-commerce platform offering a wide variety of Air Conditioner products from well-known brands. Users can browse products, compare specifications, add items to their cart, and complete purchases online through the Midtrans Payment Gateway.

---

## Features

### Products
- Product listing with skeleton loading
- Real-time product search
- Filter products by brand, condition (new/used), and price range
- Side-by-side product comparison for up to 3 products with full technical specifications
- Pagination for easy product navigation
- Product detail page (name, price, images, technical specifications)

### Authentication
- Login with email and password
- New account registration with form validation (password pattern, password confirmation)
- Social login support (Google and Facebook)
- Forgot password feature

### Cart and Checkout
- Shopping cart management (add and remove products)
- Checkout process with delivery address selection (saved address or new address)
- Address management with Indonesian regional data (province, city/regency, district, village, postal code)
- Midtrans Snap integration for online payment
- Order summary with price breakdown

### User Account
- Profile page and personal data management
- Order history
- Delivery address management

### Others
- Photo gallery page for services
- Services page (maintenance, installation, etc.)
- Contact page
- Partnership / collaboration page
- Responsive navigation (desktop and mobile)
- Toast notifications for user feedback

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3, DaisyUI 4 |
| Routing | React Router DOM 6 |
| HTTP Client | Axios |
| Payment Gateway | Midtrans Snap |
| UI Components | React Icons, React Toastify, React Spinners |
| Carousel | React Slick, @notbaldrick/react-crossfade-carousel |
| Photo Viewer | React Photo View |
| Pagination | RC Pagination, React Paginate |
| Skeleton Loading | React Loading Skeleton |
| Linter | ESLint |
| Formatter | Prettier |

---

## Project Structure

```
air-conditioning-shop/
├── public/
│   ├── brand/          # AC brand logos (Panasonic, Sharp, Daikin, etc.)
│   ├── layanan/        # Service images
│   ├── payment-logo/   # Payment method logos
│   └── ...             # Other image assets
├── src/
│   ├── api/            # API configuration
│   ├── components/     # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── CardProduct.jsx
│   │   ├── SearchProduct.jsx
│   │   ├── NavMobile.jsx
│   │   └── ...
│   ├── context/        # React Context (CartProvider, SearchProvider)
│   ├── layouts/        # Main application layouts
│   ├── pages/          # Application pages
│   │   ├── Home.jsx
│   │   ├── Auth.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── DetailProduct.jsx
│   │   ├── Galery.jsx
│   │   ├── Layanan.jsx
│   │   ├── Kontak.jsx
│   │   ├── KerjaSama.jsx
│   │   ├── Account.jsx
│   │   └── OutletAkun/
│   ├── routes/         # Application routing definitions
│   ├── service/        # API call functions (auth, products, midtrans, etc.)
│   └── utils/          # Utility functions (IDR formatter, etc.)
├── .env                # Environment variables (not committed)
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## System Requirements

- Node.js version 18 or higher
- Yarn (recommended) or npm
- A running backend API (required for product data, authentication, and orders)
- Midtrans account (Sandbox for development)

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/alhifnywahid/air-conditioning-shop.git
```

2. Navigate to the project directory:

```bash
cd air-conditioning-shop
```

3. Install all dependencies:

```bash
yarn
```

---

## Environment Configuration

Create a `.env` file in the project root with the following content:

```env
# Backend API URL
VITE_BASE_URL="https://your-backend-url.com"

# Midtrans Client Key (use Sandbox for development)
VITE_MIDTRANS_CK="your-midtrans-client-key"

# Midtrans Merchant ID
VITE_MIDTRANS_MI="your-midtrans-merchant-id"
```

To obtain your Midtrans Client Key and Merchant ID, register at [dashboard.midtrans.com](https://dashboard.midtrans.com) and use Sandbox mode for development.

---

## Running the Project

Start the development server:

```bash
yarn dev
```

The application will run at `http://localhost:5173` by default.

To build for production:

```bash
yarn build
```

To preview the production build:

```bash
yarn preview
```

---

## Pages and Routes

| Route | Description |
|---|---|
| `/` | Home page: product listing, filters, search, comparison |
| `/masuk` | Login page |
| `/daftar` | Registration page |
| `/ganti-akun` | Forgot password page |
| `/produk/:id` | Product detail page |
| `/keranjang` | Shopping cart page |
| `/checkout/*` | Checkout and payment page |
| `/galeri` | Photo gallery page |
| `/layanan` | Services page |
| `/kontak` | Contact page |
| `/kerja-sama` | Partnership / collaboration page |
| `/akun` | Account profile page |
| `/akun/pesanan` | Order history |
| `/akun/alamat` | Address management |

---

## Overview

<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/8ea9927afbf49ec99e5e6.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/9ced4c131c562302f5405.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/30e98f7c79e457b5bbf19.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/ff5d5b45c49f9e3a646f6.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/305636c5ed14c98ea4c51.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/817399feff9c2d4593f12.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/565ac4962f4004e20a1ff.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/1c71f2febd25e4b429aa0.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/ff0ffbe181b58d453e3d0.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/19cce874b2d06388d91e4.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/73b18c767ca00d2a85295.png" /></p>
<p align="center"><img align="center" width="100%" src="https://telegra.ph/file/08b626a9b6c40170b38c7.png" /></p>

---

## License

This project is licensed under the [MIT License](./LICENSE).
