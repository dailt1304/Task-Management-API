# Task Management API

A simple REST API for managing tasks, built with **Node.js** and **Express**. Uses in-memory storage — no database required.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Storage:** In-memory array

---

## Project Structure

```
task-api/
├── src/
│   ├── controllers/
│   │   └── task.controller.js      # Business logic
│   ├── middlewares/
│   │   ├── validate.middleware.js  # Request validation
│   │   └── error.middleware.js     # Global error handler
│   ├── routes/
│   │   └── task.routes.js          # Route definitions
│   ├── store.js                    # In-memory data store
│   ├── app.js                      # Express app setup
│   └── server.js                   # Entry point
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/dailt1304/Task-Management-API.git
cd Task-Management-API
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the server
```bash
# Development (auto-restart on file change)
npm run dev

# Production
npm start
```

Server will be running at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint      | Description      |
|--------|---------------|------------------|
| POST   | `/tasks`      | Create new task  |
| GET    | `/tasks`      | Get all tasks    |
| GET    | `/tasks/:id`  | Get task by ID   |
| PUT    | `/tasks/:id`  | Update task      |
| DELETE | `/tasks/:id`  | Delete task      |

---

## Request & Response Examples

### Create Task
**Request**
```
POST /tasks
Content-Type: application/json

{
  "title": "Learn Express"
}
```
**Response** `201 Created`
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false,
    "createdAt": "2026-03-25T08:00:00.000Z"
  }
}
```

---

### Get All Tasks
**Request**
```
GET /tasks
```
**Response** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn Express",
      "completed": false,
      "createdAt": "2026-03-25T08:00:00.000Z"
    }
  ],
  "total": 1
}
```

---

### Get Task by ID
**Request**
```
GET /tasks/1
```
**Response** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express",
    "completed": false,
    "createdAt": "2026-03-25T08:00:00.000Z"
  }
}
```

---

### Update Task
**Request**
```
PUT /tasks/1
Content-Type: application/json

{
  "title": "Learn Express Updated",
  "completed": true
}
```
**Response** `200 OK`
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Learn Express Updated",
    "completed": true,
    "createdAt": "2026-03-25T08:00:00.000Z",
    "updatedAt": "2026-03-25T09:00:00.000Z"
  }
}
```

---

### Delete Task
**Request**
```
DELETE /tasks/1
```
**Response** `200 OK`
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

### Error Response
```json
{
  "success": false,
  "error": "Task not found"
}
```
