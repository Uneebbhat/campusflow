
# CampusFlow – School Management Platform

## 1. Project Overview

**CampusFlow** is a web-based School Management System (SMS) designed for private schools to manage academic and administrative operations. The system focuses on:

- Attendance tracking
- Grades and assessment management
- Timetable management
- Role-based access and dashboards
- Internal communication between teachers, students, and parents

The platform is **B2B**, meaning only the school administrator (owner) signs up initially. Teachers, principals, and students join via invitations.

The main goal is to provide a structured, scalable system that helps schools digitize core operations without unnecessary features like video hosting or fee management.

---

## 2. Core Features

### 2.1 Authentication & Roles

- **User authentication** is centralized in a `User` table.
- Roles are defined via a `role` field:
  - `ADMIN` – School owner/administrator
  - `PRINCIPAL` – Branch-level manager
  - `TEACHER` – Educator
  - `STUDENT` – Student
  - `PARENT` – Optional for future access
- Role-specific data stored in separate tables (`Admin`, `Principal`, `Teacher`, `Student`).
- After login, the backend determines the role and redirects the user to the appropriate dashboard.

---

### 2.2 School & Branch Management

- **School entity**: Represents the institution.
- **Branch entity**: Schools can have multiple branches.
- **Admin** manages the school.
- **Principal** is assigned to each branch.
- Teachers and students are assigned to branches.

---

### 2.3 Academic Structure

- **AcademicSession**: Represents a school year (e.g., 2024–2025).
- **Class**: Grades (e.g., Grade 1, Grade 2…).
- **Section**: Subdivision of a class (e.g., A, B, C).
- **Enrollment**: Links a student to a section and an academic session.
- Teachers are assigned to **subjects within sections** via a many-to-many relationship (`TeacherSubject`).

---

### 2.4 Attendance & Grades

- Attendance records are tracked per student per subject per date.
- Grades and assessments are linked to **student enrollment and teacher assignments**.
- Admin approval is required to modify historical attendance or grades.

---

### 2.5 Timetable

- Timetables are section-based.
- Each slot references:
  - Section
  - Teacher
  - Subject
  - Day of the week
  - Period number
- System prevents teacher and section schedule conflicts.

---

### 2.6 Internal Communication

- Messaging system allows:
  - Teachers ↔ Students
  - Teachers ↔ Parents
- Conversations retain history
- All messages are stored within the platform; no personal contact information is required.

---

## 3. Onboarding & Login Flow

### 3.1 Signup (Admin Only)

1. Landing Page → Admin Signup form
   - Fields: Full Name, Email, Password
2. Email verification
3. Redirect to **School Setup Wizard**

---

### 3.2 School Setup Wizard

1. Create School (Name, Address, Website)
2. Create Branch (Name, Branch Code)
3. Create Academic Sessions, Classes, Sections
4. Create Principal (Optional)
5. Invite Teachers (Optional)
6. Completion → Admin Dashboard

---

### 3.3 Login

- User enters **email + password**.
- Backend queries `User` table for authentication.
- **Role-based redirect** happens automatically:
  - Admin → Admin Dashboard
  - Principal → Principal Dashboard
  - Teacher → Teacher Dashboard
  - Student → Student Dashboard
  - Parent → Parent Dashboard
- Optionally, minimal login response can return a greeting with role only.
- Full login response can include role-specific data for dashboard initialization.

---

## 6. Frontend Flow Summary

1. **Landing Page** → Signup/Login
2. **Admin Signup** → Email Verification
3. **School Setup Wizard** → School, Branch, Academic Setup, Principal, Teachers
4. **Dashboard** → Role-based view
5. **Teacher/Student/Parent Login** → Invitation-based access
6. **Internal APIs** provide all necessary data for dashboards

---

## 7. Notes for Cursor / Code Assistants

- Role logic is centralized in the `User` table.
- Use role field to route users, role tables are for additional data only.
- Dashboard should fetch role-specific data after login.
- Minimal login can return `{ role }` for greetings; full login includes related entities.
- System is designed for **scalable multi-school, multi-branch architecture**.
- Follow best practices: JWT for authentication, bcrypt for password hashing.

---

## 8. Next Steps for Implementation

1. Implement **signup + email verification**
2. Implement **school setup wizard APIs**
3. Implement **login API** with role-based redirect
4. Build **dashboard skeletons** per role
5. Implement **attendance, grades, timetable APIs**
6. Add **internal messaging system**
7. Test multi-school and multi-branch scenarios
