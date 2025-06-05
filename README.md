# Project Title: Full Stack Employee Management System
# Tech Stack:
    Frontend: Vite + ReactJS
    Backend: Java Spring Boot
    Database: MySQL

# 1. Objective / Purpose
To develop a responsive and scalable Employee Management System that enables users to manage employee data using a modern frontend (React + Vite), a robust backend (Spring Boot), and persistent storage (MySQL). The system will be RESTful, secure, and modular — ready for both personal and professional deployment.

# 2. Scope
The system will provide:

- CRUD operations for employee management

- Frontend and backend separation with clean API integration

- Prioritized rollout of features (P1 to P4) for effective delivery

# 3. Features and Requirements (Prioritized)
# 🔴 P1 – Employee CRUD via REST API (Must Have)
    Add, View, Update, Delete employee records

    REST endpoints:

    POST /api/employees

    GET /api/employees

    GET /api/employees/{id}

    PUT /api/employees/{id}

    DELETE /api/employees/{id}

    Backend with Spring Boot, Service Layer, JPA Repository

    MySQL persistence layer

# 🟠 P2 – React + Vite UI Integration (Must Have)
    Use Axios to call backend APIs

    Display data in table format

    Forms for add/edit with validation

    Responsive layout with CSS & Bootstrap

    Error and success toast notifications

# 🟡 P3 – Input Validation and Exception Handling (Should Have)
    Backend validation using annotations 

    Frontend form validations (required fields)

    Meaningful error messages displayed to users

🟢 P4 – Search and Filter 
    Search by name, email, or ID


# 4. User Stories / Use Cases
    Priority	Role	User Story
      P1	Admin - 	As an admin, I want to add new employees with complete details so I can maintain staff records.
      P1	Admin - 	As an admin, I want to update or delete employee data so I can manage changes.
      P2	Admin - 	As an admin, I want a clean dashboard to view all employees.
      P3	User - 	  As a user, I want input validations to prevent errors during submission.
      P4	User - 	  As a user, I want to search for employees quickly for details.

# 5. Technical Requirements
      Frontend (Vite + ReactJS)
      React 18+, Vite, React Router, Axios

      UI Libraries: CSS & Bootstrap

      Folder structure: components/, pages/, services/, utils/

      Backend (Java Spring Boot)
      Java 17+, Spring Boot 3+, Spring Data JPA

      MySQL integration

      Layers: Controller → Service → Repository

      DTO pattern for request/response payloads

      Validation & Exception Handling

      Database (MySQL)
      Table: employees

      Fields: id, first_name, last_name, email, job_title


# 6. Design Requirements
      Modular, component-based React design

      RESTful API following best practices

      Reusable backend services

      State management via useState/useEffect

# 7. Success Metrics
# Metric	Target
    API Success Rate	100% CRUD operation reliability
    Page Load Time	< 1 second
    API Response Time	< 500ms
    Validation Coverage	100% of input fields
    Code Reusability & Modularity	High, evaluated in review phase

# 8. Timeline
    Week	Task
      Day 1	Finalize DB schema & API structure (P1)
      Day 1-2	Build backend API with CRUD (P1)
      Day 1	Frontend UI layout + integration (P2)
      Day 2	Form validation + exception handling (P3)
      Day 2	Add search/filter functionality (P4)
      Day 2	Dockerize backend and prepare README (P5)



# Screenshots

<img src = "Assets/Screenshot 2025-06-03 at 1.02.04 PM.png" alt="list of employees" width="500">

<img src = "Assets/Screenshot 2025-06-03 at 1.02.20 PM.png" alt="list of employees" width="500">

<img src = "Assets/Screenshot 2025-06-03 at 1.26.05 PM.png" alt="list of employees" width="500">
