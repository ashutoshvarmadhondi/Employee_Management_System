# Full Stack Employee Management System
# Tech Stack:
    Frontend: Vite + ReactJS
    Backend: Java Spring Boot
    Database: MySQL
# Prerequisites: 
    Front End:
     - VS Code
     - Node JS
     - Npm(use this cmd "npm install" in your terminal or command prompt)
    Back End:
     - STS/Eclipse/Intellij any of the tool 
    Database
     - MySQL workbench 
     - MYSQL Server

Make sure you install all this and configure your database(MySQL workbench and MYSQL Server)
know the DB_URL, DB USER_NAME, DB_PASSWORD

# Downloading/cloning the projec
  1. Download the project using <>code and download the zip(if you have done this you can skip 2 and 3)
  2. Or clone the project by using git copy the url from the code
  3. Use one from HTTPS or SSH or GitHub CLI to clone

# How to Run the code?
    - In the front end open the project of ems-front-end
    - Inside the ems-front-end run the "npm install" in the terminal for node_modules
    - you should be able to see node_modules folder 
    - Run the cmd in your terminal as "npm run dev"

    - In the backend open the project of ems-back-end
    - right click of the project and update the project(this will make sure that all the maven dependencies are installed and up to date)
    - create a file of application.properties and configure the credentials with your database(template is given in the file applicaiton-sample.properties)
    - Give your DB URL, Username and password to the application.properties and ensure that all the properties are present which are in application-sample.properties
    - Go to src/main/java > com.ems.backend > EmsBackendApplication.java
    - Right click on EmsBackendApplication.java > run as > SpringbootApp(Run only after configuring the application.properties make sure you have given DB_URL, DB USER_NAME, DB_PASSWORD)

Insert your data from the front-end, It will use the backend services and your data will be saved in SQL 
     
# Product Requirements Document:



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

# 🟢 P4 – Search and Filter 
    Search by name, email, or ID


# 4. User Stories / Use Cases
    Priority	Role	User Story
      P1	        Admin  	As an admin, I want to add new employees with complete details so I can maintain staff records.
      P1	        Admin  	As an admin, I want to update or delete employee data so I can manage changes.
      P2	        Admin  	As an admin, I want a clean dashboard to view all employees.
      P3	        User   	As a user, I want input validations to prevent errors during submission.
      P4	        User   	As a user, I want to search for employees quickly for details.
 
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




