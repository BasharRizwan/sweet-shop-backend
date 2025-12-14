# 🍬 Sweet Shop Management System – Backend

This repository contains the backend implementation of the **Sweet Shop Management System**, built as part of a technical assessment using **NestJS**, **PostgreSQL**, and **JWT-based authentication**.

The system provides secure user authentication, protected APIs for managing sweets, and inventory operations such as purchase and restock. The backend follows clean architecture principles and is designed with testability and scalability in mind.

---

## 🚀 Features

- User Registration and Login
- Secure JWT-based Authentication
- Role-ready architecture (USER / ADMIN)
- Protected Sweets APIs
- Inventory Management:
  - Purchase sweets (decreases stock)
  - Restock sweets (increases stock)
- PostgreSQL database integration using TypeORM
- Modular and clean NestJS architecture
- Test-ready setup using Jest

---

## 🛠️ Tech Stack

- **Node.js**
- **NestJS**
- **TypeScript**
- **PostgreSQL**
- **TypeORM**
- **JWT (JSON Web Tokens)**
- **Jest (Testing)**

---

## 📌 API Endpoints

### 🔐 Authentication

| Method | Endpoint        | Description              |
|------|-----------------|--------------------------|
| POST | /auth/register  | Register a new user      |
| POST | /auth/login     | Login and get JWT token  |

---

### 🍭 Sweets (Protected – JWT required)

| Method | Endpoint                   | Description                  |
|------|----------------------------|------------------------------|
| POST | /sweets                    | Add a new sweet              |
| GET  | /sweets                    | Get all sweets               |
| POST | /sweets/:id/purchase       | Purchase a sweet             |
| POST | /sweets/:id/restock        | Restock a sweet              |

---

## 🔑 Authorization

All protected endpoints require a JWT token.

### Header Format

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzY1NzIyNTcwLCJleHAiOjE3NjU3MjYxNzB9.oZ1kT91Rr0uVXKKBqjFM3-m6qp5HKnexTTpr8YmkIpM

## 🗄️ Database

- Database: **PostgreSQL**
- ORM: **TypeORM**
- Database name: `sweetshop`
- Tables:
  - users
  - sweet

The database schema is automatically synchronized during development.

---

## 🧪 Testing

- Jest is configured for unit and integration testing
- Test files are generated alongside services and controllers
- Tests can be executed using:

```bash
npm run test


---

## 🤖 My AI Usage

AI tools were used responsibly as development assistants during this project.

### Tools Used
- ChatGPT (OpenAI)

### How AI Was Used
- To clarify NestJS concepts and project structure
- To get guidance on implementing JWT authentication
- To understand common errors and debugging steps
- To improve code readability and architectural decisions

### What Was Done Manually
- Project setup and configuration
- Database schema design
- Authentication and authorization logic
- Inventory business logic (purchase & restock)
- API testing and debugging
- Git version control and commits

### Reflection
AI helped speed up learning and debugging, but all core logic and decisions were implemented and understood by me. The project reflects my own understanding of backend development concepts, enhanced by modern AI tooling.

## 📸 Screenshots

### Backend Running
![Backend Running](screenshots/backend-running.png)

### User Registration
![Register API](screenshots/register-api.png)

### Login & JWT Token
![Login API](screenshots/login-api-token.png)

### Create Sweet (Authorized)
![Create Sweet](screenshots/create-sweet.png)

### Purchase Sweet
![Purchase Sweet](screenshots/purchase-sweet.png)
