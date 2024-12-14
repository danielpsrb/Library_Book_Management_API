# 📚 Library Book Management API

A robust and efficient **Library Book Management API** built using **Express JS**, **Prisma ORM**, and **MySQL**. This API provides complete CRUD functionality for managing books and book reviews. It supports operations like creating, retrieving, updating, and deleting books and their reviews, with full flexibility for partial and complete updates.

---

## 🚀 Features

- **Books Management**:

  - Add new books with metadata (e.g., ISBN, author, genre, cover image, etc.).
  - Update book information partially (PATCH) or completely (PUT).
  - Delete books from the library.
  - Retrieve detailed information for a single book or a list of all books.

- **Reviews Management**:

  - Add reviews for books with a rating system (1-5 stars).
  - Update review content.
  - Delete reviews.
  - Retrieve reviews for a specific book or all reviews.

- **File Upload**:
  - Supports cover image upload for books.

---

## 🛠️ Technology Stack

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database ORM**: [Prisma ORM](https://www.prisma.io/)
- **Database**: MySQL
- **File Uploads**: Multer
- **Validation**: Custom middleware
- **Dev Tools**: Postman, Nodemon

---

## 📂 API Endpoints

### **Books API**

| HTTP Method | Endpoint            | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| `GET`       | `/api/v1/books`     | Get a list of all books.                 |
| `GET`       | `/api/v1/books/:id` | Get details of a specific book.          |
| `POST`      | `/api/v1/books`     | Add a new book.                          |
| `PUT`       | `/api/v1/books/:id` | Update all data for a specific book.     |
| `PATCH`     | `/api/v1/books/:id` | Partially update book information.       |
| `DELETE`    | `/api/v1/books/:id` | Delete a specific book from the library. |

---

### **Reviews API**

| HTTP Method | Endpoint                  | Description                            |
| ----------- | ------------------------- | -------------------------------------- |
| `GET`       | `/api/v1/reviews`         | Get a list of all reviews.             |
| `GET`       | `/api/v1/reviews/:bookId` | Get reviews for a specific book.       |
| `POST`      | `/api/v1/reviews/:bookId` | Add a review for a book.               |
| `PUT`       | `/api/v1/reviews/:id`     | Update all data for a specific review. |
| `PATCH`     | `/api/v1/reviews/:id`     | Partially update review information.   |
| `DELETE`    | `/api/v1/reviews/:id`     | Delete a specific review.              |

---

## 🧑‍💻 How to Run Locally

###  **1. Clone or download repository**
````bash
git clone https://github.com/danielpsrb/Library_Book_Management_API
cd library-book-management
```

