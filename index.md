# Digits Next.js Application

<img src="doc/landingpage.png" alt="Landing Page Screenshot">

**Digits** is a sample **Next.js 16** application designed to manage contacts with user authentication and authorization. Users can add, view, and update contacts, as well as attach timestamped notes to each contact. Admin users have additional privileges to view all users' contacts.

This application demonstrates:

* Standard **Next.js project structure** using `src/`.
* **Bootstrap 5 React** for responsive UI.
* **React Hook Form** for building forms.
* **NextAuth.js** for login, registration, and session management.
* Alerts for success/failure actions using **SweetAlert**.
* Type safety and linting via **ESLint**.

Some advanced features like unit testing, full security audits, and deployment optimizations are intentionally excluded for simplicity.

---

## Installation

1. Install [PostgreSQL](https://www.postgresql.org/download/) and create a database:

```bash
$ createdb digits
Password:
$
```

2. Clone the repository to your local machine.
3. Navigate into the repo and install dependencies:

```bash
$ npm install
```

4. Create a `.env` file from `sample.env` and update `DATABASE_URL` to match your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/digits?schema=public"
```

5. Run Prisma migration:

```bash
$ npx prisma migrate dev
```

6. Generate Prisma client:

```bash
$ npx prisma generate
```

7. Seed the database:

```bash
$ npm run seed
```

---

## Running the App

Start the development server:

```bash
$ npm run dev
```

Access the app at [http://localhost:3000](http://localhost:3000). Users can register, log in, and start managing contacts immediately.

---

## Pages & Screenshots

### Landing Page

<img src="doc/landingpage.png" alt="Landing Page Screenshot">

The landing page provides access to login or registration.

### Sign In Page

<img src="doc/signinpage.png" alt="Sign In Page Screenshot">

Users can log in with their credentials.

### Sign Up / Registration Page

<img src="doc/signuppage.png" alt="Sign Up Page Screenshot">

New users can create an account to start managing contacts.

### User Landing Page

<img src="doc/userlandingpage.png" alt="User Landing Page Screenshot">

After login, users can add contacts, view their contacts, and add timestamped notes to each contact.

### Add Contact Page

<img src="doc/addcontactpage.png" alt="Add Contact Page Screenshot">

Users can create new contacts with all relevant details.

### Admin Landing Page

<img src="doc/adminlandingpage.png" alt="Admin Landing Page Screenshot">

Admin users see additional controls and can view contacts from all users.

### Change Password Page

<img src="doc/changepasswordpage.png" alt="Change Password Page Screenshot">

Users can update their passwords securely.

---

## Features

* **Contact Management:** Add, edit, and list contacts.
* **Timestamped Notes:** Attach notes to contacts that include the time they were added.
* **Authentication & Authorization:** Secure login and registration using NextAuth.js.
* **Admin Privileges:** Admins can view all contacts across users.
* **Responsive Design:** Built using Bootstrap 5 React.
* **Form Validation:** Managed with React Hook Form.
* **Alerts:** SweetAlert displays success or error messages.

---

## Directory Structure

```
src/
  app/
    add/
      page.tsx
    admin/
      page.tsx
    auth/
      change-password/page.tsx
      signin/page.tsx
      signup/page.tsx
    edit/
      page.tsx
    list/
      page.tsx
    layout.tsx
    page.tsx
  components/
    AddContactForm.tsx
    ContactCard.tsx
    EditContactForm.tsx
    Footer.tsx
    LoadingSpinner.tsx
    Navbar.tsx
  lib/
    dbActions.ts
    page-protections.ts
    prisma.ts
    validationSchemas.ts
```

---

## Running Tests

Use **Playwright** for end-to-end testing:

```bash
$ npx playwright test
$ npx playwright test tests/<file>.ts
$ npx playwright test --headed
```

---

## Linting

Check code quality with ESLint:

```bash
$ npm run lint
```

---

## Production Build

Build the app for production:

```bash
$ npm run build
$ npm start
```

---
