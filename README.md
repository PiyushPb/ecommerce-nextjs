# 👕 Whisper Clothing – E-Commerce Platform

*(Demo hosted on Vercel: [whisper-ecommerce.vercel.app](https://whisper-ecommerce.vercel.app/))*

Whisper Clothing is a modern **full-stack e-commerce application** built with **Next.js App Router**, **MongoDB**, and **API Routing** in Next.js.  
It provides a seamless shopping experience with authentication, cart management, product browsing, and secure checkout flow.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 14+ (App Router)](https://nextjs.org/docs/app)
- **Frontend:** React, TailwindCSS, ShadCN UI
- **Backend:** Next.js API Routes (serverless functions)
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JWT with HttpOnly cookies + Context API
- **Deployment:** [Vercel](https://vercel.com)

---

## ✨ Features

- 🔐 **Authentication & Authorization** (Sign up, login, protected routes)
- 🛍️ **Product Listing & Details** (categories, filters, images)
- 🛒 **Shopping Cart** (add, update, remove items, persistent storage)
- 📦 **Order Management** (user orders, admin product/order control – extendable)
- 🎨 **Modern UI/UX** using TailwindCSS + ShadCN
- 📱 **Responsive Design** optimized for all devices

---

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/PiyushPb/ecommerce-nextjs.git
cd ecommerce-nextjs
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
NEXT_PUBLIC_API_URL=http://localhost:3000
```
Make sure MONGODB_URI points to a valid MongoDB cluster (Atlas or local).

### 4. Run the development server
```bash
npm run dev
```
App will be available at: http://localhost:3000

---

## Screenshots
Home page
<img width="1904" height="1080" alt="image" src="https://github.com/user-attachments/assets/96a6cb65-95aa-40e5-afbc-70c5a23db437" />

Products Page
<img width="1904" height="1080" alt="image" src="https://github.com/user-attachments/assets/f36abdff-6227-48a9-a791-5739c3d9f6c5" />
<img width="379" height="822" alt="image" src="https://github.com/user-attachments/assets/cb0f5d7a-dc3c-41d1-80cc-0d74ab43fd02" />


Product Page
<img width="1906" height="1080" alt="image" src="https://github.com/user-attachments/assets/8747e4b9-c911-4c46-890e-ad3c6b5c430a" />
<img width="377" height="820" alt="image" src="https://github.com/user-attachments/assets/a3ba3bb3-cce3-4075-8ce0-37883086ef06" />


Cart Page (Empty cart)
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/79f5a317-e951-42c3-9046-7dc9d86e0cf4" />
<img width="380" height="821" alt="image" src="https://github.com/user-attachments/assets/955cbf63-8104-4a4c-b814-0d10f2bdd7d5" />

Cart Page
<img width="1906" height="1080" alt="image" src="https://github.com/user-attachments/assets/ee1fc9ec-f91f-475d-8dd8-2fd952cac6f4" />
<img width="379" height="819" alt="image" src="https://github.com/user-attachments/assets/e5262d20-c9a6-4c0f-8a3a-5d9eb7a9c14b" />

---

## Deployment
This project is deployed on Vercel
To deploy your own version:
1. Push your code to GitHub.
2. Import the repo into Vercel.
3. Set the environment variables (MONGODB_URI, JWT_SECRET).
4. Deploy!

---

##🔑 Authentication Flow
1. Users can sign up/login.
2. JWT is issued on login and stored in an HttpOnly cookie.
3. The frontend stores basic user info in Context + localStorage for quick access.
4. Middleware checks authentication for protected routes.


---

## 🧑‍💻 Contributing

Contributions are welcome! 🚀

1. **Fork** the repo  
2. **Create a feature branch**  
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

--- 
## 📬 Contact

- **Author:** [Piyush Pardeshi](https://github.com/PiyushPb)  
- **Project Demo:** [whisper-ecommerce.vercel.app](https://whisper-ecommerce.vercel.app)  
- **Repository:** [ecommerce-nextjs](https://github.com/PiyushPb/ecommerce-nextjs)
