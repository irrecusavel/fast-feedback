# Fast Feedback

A simple and fast API for managing user feedback, built with Fastify and Prisma.

## Overview

Fast Feedback is a lightweight API that provides endpoints for submitting, listing, and managing suggestions, compliments, and bug reports. Built with performance and simplicity in mind.

## Technologies

- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework for Node.js
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- TypeScript - For type safety and better developer experience

## Features

- Submit feedback (suggestions, compliments, bug reports)
- List and manage feedback items
- Simple and intuitive API endpoints
- Built with performance in mind
- Type-safe with TypeScript

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/irrecusavel/fast-feedback.git
cd fast-feedback
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment example file:
```bash
cp .env.example .env
```

4. Set up your environment variables in the `.env` file

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

## API Documentation

### Endpoints

#### Create Feedback
- **POST** `/feedback`
- Creates a new feedback entry
- Request Body:
```json
{
  "type": "suggestion" | "bug" | "compliment",
  "message": "string",
}
```
- Response: Returns the created feedback object.

#### List Feedbacks
- **GET** `/feedback`
- Returns a list of all feedback entries.
- Response: Array of feedback objects.

#### Update Feedback
- **PUT** `/feedback/{id}`
- Updates an existing feedback entry.
- Response: Returns the updated feedback object.

#### Delete Feedback
- **DELETE** `/feedback/{id}`
- Deletes a specific feedback entry.
- Response: Returns a message confirming the deletion.

### Example Usage

Using curl to create a feedback:
```bash
curl -X POST http://localhost:3000/feedback \
  -H "Content-Type: application/json" \
  -d '{
    "type": "suggestion",
    "message": "It would be great to have dark mode!",
  }'
```