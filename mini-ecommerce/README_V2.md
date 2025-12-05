# Project Status & Analysis (README V2)

## 🚨 Current Situation Analysis

You have successfully scaffolded the project, but a recent manual change has introduced some inconsistencies that need to be resolved for the app to work correctly.

**The Issue:**
- You changed the **Backend Port** in `backend/server.js` from `3001` to `5172`.
- However, the rest of the application (Client, Admin, Nginx, PM2) is still configured to look for the backend on port `3001`.

**Required Fixes:**
To make the project work with your new port (`5172`), you must update the following files:

1.  **Backend**: Update `backend/.env` to `PORT=5172`.
2.  **Client**: Replace all instances of `http://localhost:3001` with `http://localhost:5172` in:
    -   `client/src/context/AuthContext.jsx`
    -   `client/src/pages/HomePage.jsx`
    -   `client/src/pages/ProductPage.jsx`
3.  **Admin**: Replace all instances of `http://localhost:3001` with `http://localhost:5172` in:
    -   `admin/src/pages/Login.jsx`
    -   `admin/src/pages/ProductList.jsx`
    -   `admin/src/pages/OrderList.jsx`
4.  **Deployment**:
    -   Update `ecosystem.config.js`: Change `PORT: 3001` to `PORT: 5172`.
    -   Update `deployment/nginx.conf`: Change `proxy_pass http://localhost:3001` to `http://localhost:5172`.

---

# Mini E-commerce Store (Updated Guide)

Once you apply the fixes above, here is the complete guide to running your project.

## Project Structure

- `backend/`: Node.js API (Port 5172)
- `client/`: Customer Frontend (Port 3002)
- `admin/`: Admin Panel (Port 3003)
- `landing/`: Landing Page (Port 3000)

## 🚀 Quick Start (Development)

### 1. Start Backend
```bash
cd backend
# Ensure .env has PORT=5172
npm start
# Server runs on http://localhost:5172
```

### 2. Start Client
```bash
cd client
npm run dev
# Vite will likely start on http://localhost:5173 (check terminal)
# Ensure API calls point to http://localhost:5172
```

### 3. Start Admin
```bash
cd admin
npm run dev
# Vite will likely start on http://localhost:5174 (check terminal)
# Ensure API calls point to http://localhost:5172
```

### 4. Start Landing Page
```bash
cd landing
npm run dev
# Next.js runs on http://localhost:3000
```

## 📦 Production Build & Run (PM2)

If you want to run everything in production mode using the provided `ecosystem.config.js`:

1.  **Build Frontends**:
    ```bash
    cd client && npm run build
    cd ../admin && npm run build
    cd ../landing && npm run build
    ```

2.  **Start with PM2**:
    ```bash
    cd ..
    pm2 start ecosystem.config.js
    ```

## 🔧 API Endpoints (Updated Port)

- `GET http://localhost:5172/api/products`
- `POST http://localhost:5172/api/auth/login`
- `POST http://localhost:5172/api/orders`

## 👤 Default Admin Credentials

- **Email**: `admin@example.com`
- **Password**: `123456`
