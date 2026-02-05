
# CampusFlow – School Management Platform

CampusFlow is a **comprehensive web-based School Management System (SMS)** designed for private schools to manage academic and administrative operations. The platform is focused on simplifying school management by providing role-based access for admins, principals, teachers, students, and parents.

With CampusFlow, schools can efficiently manage:
- Attendance tracking
- Grades and assessments
- Timetables
- Role-based dashboards
- Internal communication between teachers, students, and parents

The platform is built using modern web technologies including **Next.js, Tailwind CSS, Shadcn UI, Prisma, and PostgreSQL**, with authentication handled using **JWT** and **bcrypt** for password hashing.

## Features

- **Role-based Access**: Admins, Principals, Teachers, Students, and Parents have separate dashboards.
- **Attendance Management**: Track attendance per student per subject.
- **Grades & Assessments**: Record and monitor student performance.
- **Timetable Management**: Manage classes, sections, and subject schedules efficiently.
- **Internal Communication**: Secure messaging between teachers, students, and parents.
- **Multi-Branch & Multi-School Support**: Scalable architecture for larger institutions.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS, Shadcn UI
- **Backend**: Next.js API routes, Node.js
- **Database**: PostgreSQL managed via Prisma ORM
- **Authentication**: JWT (jsonwebtoken), Password Hashing (bcrypt)
- **Other Libraries**: Additional helper libraries as needed

## Project Structure (High Level)

- `app/` – Next.js App directory (pages/routes, layouts)
- `components/` – Reusable UI components (Shadcn UI + Tailwind CSS)
- `lib/` – Utility functions (Prisma client, auth helpers, etc.)
- `styles/` – Global styles, Tailwind configuration
- `prisma/` – Prisma schema and migrations
- `public/` – Static assets (images, logos, OG/Twitter images)
- `api/` – Backend API routes (authentication, dashboard data, etc.)

## Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/Uneebbhat/campusflow.git
cd campusflow
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Set up the database**:
- Ensure PostgreSQL is installed and running.
- Create a new database (e.g., `campusflow_db`).
- Update your `.env` file with your PostgreSQL connection string:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="your_super_secret_key"
```
- Run Prisma migrations:
```bash
npx prisma migrate dev --name init
npx prisma generate
```

4. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```
- Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Notes for Developers

- Authentication and role management are centralized in the **User model**.
- Dashboards are **role-based**: the frontend automatically renders components based on the logged-in user's role.
- Tailwind CSS + Shadcn UI is used for a clean, responsive, and accessible UI.
- Backend APIs handle core operations like attendance, grades, timetables, and messaging.
- Security: passwords are hashed with **bcrypt** and sessions handled with **JWT tokens**.

## Future Enhancements

- Parent portal with real-time notifications
- Advanced analytics for performance tracking
- Mobile-friendly version or PWA support
- Multi-language support

## License

MIT License
