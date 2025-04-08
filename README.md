# 🛒 Grocery Booking API

A RESTful API for grocery item management and order booking, built with **Node.js**, **TypeScript**, **Express**, **MySQL**, and **Sequelize**. It supports **role-based access control** for Admin and User operations.

---

## ✨ Features

- Role-based access (Admin & User)
- Admin can manage grocery items
- User can view and place orders
- Type-safe with TypeScript
- Sequelize ORM with MySQL
- Unit testing with Jest & Supertest
- Used Docker to containerize it

---

## 📁 Folder Structure

```
src/
├── config/         // Sequelize database config
├── controllers/    // Route logic
├── middlewares/    // Role-based access check
├── models/         // Sequelize models
├── routes/         // Route definitions
├── services/       // Business logic layer
├── app.ts          // Express app setup
└── index.ts       // Application entry point
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/grocery-booking-api.git
cd grocery-booking-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup MySQL

Create a MySQL database and configure your credentials in `src/config/db.ts`:

### 4. Run migrations (optional, if applicable)

You can sync models directly via Sequelize or run migrations manually if you've set them up.

### 5. Start the server

```bash
npm run dev
```

App will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Role-Based Access

Simulate roles using HTTP headers:

```
role: admin   // for admin routes
role: user    // for user routes
```

---

## 📬 API Endpoints

### Admin Routes (require `role: admin`)

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/admin/grocery`     | Fetch all grocery items  |
| POST   | `/admin/grocery`     | Add a new grocery item   |
| PUT    | `/admin/grocery/:id` | Update item by ID        |
| PATCH  | `/admin/grocery/:id/inventory` | Update inventory |
| DELETE | `/admin/grocery/:id` | Delete item by ID        |

---

### User Routes (require `role: user`)

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/user/groceries`  | View available items      |
| POST   | `/user/order`    | Place multiple grocery items in an order |

---

## Docker Requirements
- Docker
- Docker Compose

## Running the application on your machine using Docker
1. Clone this repository
2. Navigate to the project directory
3. Run `docker-compose up`
4. Access the application at [http://localhost:3000](http://localhost:3000)

## 🧪 Running Tests

Run unit tests with coverage:

```bash
npm test
```

Uses **Jest** and **Supertest** for route testing.

---

## Development Notes

During the development of this project, I utilized AI assistants such as Claude and ChatGPT to help with code generation, debugging, and problem-solving. While these tools provided valuable assistance, I've taken care to understand each line of code, resolve bugs independently, and ensure the architecture aligns with best practices. This approach allowed me to learn efficiently while maintaining full ownership and comprehension of the codebase.

## 👨‍💻 Author

Made with ❤️ by **Jigish Vyas**

