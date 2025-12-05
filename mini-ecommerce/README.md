# Mini E-commerce Store

A complete full-stack e-commerce solution with Backend, Client, Admin Panel, and Landing Page.

## Project Structure

- `backend/`: Node.js + Express + MongoDB API
- `client/`: React + Vite Frontend for Customers
- `admin/`: React + Vite Frontend for Admins
- `landing/`: Next.js Landing Page
- `deployment/`: Nginx configuration
- `ecosystem.config.js`: PM2 configuration

## Prerequisites

- Node.js (v16+)
- MongoDB (Running locally or Atlas URI)
- PM2 (`npm install -g pm2`)
- Serve (`npm install -g serve`)

## Setup & Run

### 1. Backend

```bash
cd backend
npm install
# Update .env if needed
npm run seed # To populate initial data
npm start
```

### 2. Client

```bash
cd client
npm install
npm run build
# Serve the build
serve -s dist -l 3002
```

### 3. Admin

```bash
cd admin
npm install
npm run build
# Serve the build
serve -s dist -l 3003
```

### 4. Landing Page

```bash
cd landing
npm install
npm run build
npm start -- -p 3000
```

## Running with PM2 (Recommended for Production)

From the root directory:

```bash
npm install -g pm2 serve
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Nginx Setup (Ubuntu)

1. Install Nginx: `sudo apt update && sudo apt install nginx`
2. Copy `deployment/nginx.conf` content to `/etc/nginx/sites-available/mini-ecommerce`
3. Link it: `sudo ln -s /etc/nginx/sites-available/mini-ecommerce /etc/nginx/sites-enabled/`
4. Test config: `sudo nginx -t`
5. Restart Nginx: `sudo systemctl restart nginx`

## Default Credentials

- **Admin User**:
  - Email: `admin@example.com`
  - Password: `123456`

## API Endpoints

- `GET /api/products`: List all products
- `GET /api/products/:id`: Get single product
- `POST /api/auth/login`: Login user
- `POST /api/auth/signup`: Register user
- `POST /api/orders`: Create order
