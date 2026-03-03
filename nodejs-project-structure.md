# Node.js Project Structure (That Scales)

## Project Directory Structure

```markdown
root/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── modules/
│   ├── routes/
│   ├── scripts/
│   ├── services/
│   ├── tests/
│   ├── utils/
│   ├── views/
│   ├── app.js
│   └── server.js
├── logs/
├── .env
├── .env.example
├── .gitignore
├── .eslintrc.js
├── .prettierrc
├── package.json
├── package-lock.json
└── README.md
```

---

## Every Folder & File Explained

**`src/config/`**  
Centralized configuration management. Reads from environment variables and exports clean config objects for the rest of the app to consume. Never scatter `process.env.XYZ` calls throughout your codebase — read them once here and import the config object everywhere else. Includes separate config for database, third-party services, app-level settings etc.

---

**`src/controllers/`**  
Thin HTTP layer only. Receives `req`, calls the appropriate service, and sends back `res`. Contains zero business logic. If a controller is doing more than calling a service and returning a response, that logic belongs in a service instead.

---

**`src/db/`**  
Everything related to the database setup. This includes the connection initialization, ORM/query builder configuration (e.g. Sequelize, Mongoose, Knex), and migrations and seeders if not handled by a separate tool. The rest of the app should never deal with raw DB connection details — they import from here.

---

**`src/middlewares/`**  
All custom Express middlewares. This includes authentication/authorization guards, request validation, rate limiting, request logging, and the global error handler. Each middleware should be in its own file, named clearly by its responsibility (e.g. `auth.middleware.js`, `errorHandler.middleware.js`, `validate.middleware.js`).

---

**`src/models/`**  
Data models — the shape of your data. These are your ORM models (Mongoose schemas, Sequelize models etc.) that map directly to database tables/collections. Models should contain only schema definition and model-level validations. No business logic here.

---

**`src/modules/`**  
For feature-based or domain-driven organization. When a feature grows large enough to have its own models, controllers, services and routes, it becomes a self-contained module (e.g. `modules/auth/`, `modules/payments/`, `modules/notifications/`). This is how the app scales without the top-level folders becoming bloated.

---

**`src/routes/`**  
Route definitions only — maps HTTP methods and URL paths to their controller functions. No logic here whatsoever. Also the right place to attach route-specific middlewares (e.g. attach auth guard only to protected routes). A root `index.js` inside this folder ties all route files together and is imported by `app.js`.

---

**`src/services/`**  
The heart of your application — all business logic lives here. Services are called by controllers, and they interact with models, external APIs, caches, queues etc. Keeping logic here makes it independently testable without needing HTTP context (no `req`/`res` dependency).

---

**`src/tests/`**  
All tests, mirroring the `src/` structure so each file has a clear corresponding test file. Organized into subdirectories — `unit/` for testing services and utils in isolation, `integration/` for testing routes and DB interactions together, and `e2e/` for full end-to-end flow testing. Test utilities and shared fixtures/mocks live here too.

```markdown
src/tests/
    ├── unit/
    ├── integration/
    ├── e2e/
    ├── fixtures/       ← reusable test data
    └── helpers/        ← shared test utilities
```

---

**`src/utils/`**  
Stateless, reusable helper functions with no business logic and no side effects. Things like date formatters, string helpers, custom response builder, pagination helpers, etc. If a utility function starts depending on app state or config, it probably belongs in a service instead.

---

**`src/views/`**  
Only relevant if your app serves server-side rendered HTML (e.g. using a template engine like EJS, Handlebars, or Pug). If you're building a pure REST API consumed by a separate frontend, this folder can be dropped entirely.

---

**`src/scripts/`**  
Standalone one-off scripts that run outside the normal request-response cycle. Database seeders, data migration scripts, scheduled cleanup tasks, bulk import/export jobs etc. These are run manually or via a scheduler (cron) and are never part of the main app boot process.

---

**`src/app.js`**  
Express application setup — creates the Express app instance, registers global middlewares (body parser, CORS, helmet, morgan etc.), mounts the router, and registers the global error handler at the very end. Does **not** start the server. Keeping this separate from `server.js` makes the app easily importable in tests without actually binding to a port.

---

**`src/server.js`**  
The entry point. Imports the configured app from `app.js`, starts the HTTP server by calling `app.listen()`, and handles process-level events (`uncaughtException`, `unhandledRejection`, graceful shutdown on `SIGTERM`/`SIGINT`). This separation means your test suite can import `app.js` without spinning up a real server.

---

**`logs/`**  
Stores log files generated at runtime by your logging library (e.g. Winston, Pino). Typically has subdirectories or separate files per log level — `error.log` for errors only, `combined.log` for all levels. This entire folder goes in `.gitignore` — logs are runtime artifacts, not source code.

---

**`.env`**  
Stores all environment-specific secrets and config values — database credentials, API keys, JWT secrets, port numbers etc. Never committed to version control. Each environment (dev, staging, production) has its own `.env` file on the respective machine/server.

---

**`.env.example`**  
A committed, safe template of `.env` with all the same keys but **no real values**. This is what gets committed to Git so other developers know exactly which environment variables they need to set up when cloning the project. Keeping this in sync with `.env` is a team discipline.

```bash
# .env.example
PORT=
NODE_ENV=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

---

**`.gitignore`**  
Prevents sensitive and unnecessary files from being committed. At minimum should include `node_modules/`, `.env`, `logs/`, `dist/` or `build/` output folders, and OS/editor artifacts like `.DS_Store`.

---

**`.eslintrc.js`**  
ESLint configuration — enforces consistent code style and catches common errors across the team. Ensures everyone writes code to the same standard regardless of editor preferences.

---

**`.prettierrc`**  
Prettier configuration — handles code formatting (indentation, quotes, semicolons, line length etc.). Works alongside ESLint — ESLint catches code quality issues, Prettier handles formatting. Together they remove all style debates from code reviews.

---

**`package.json`**  
Project metadata, dependency list, and npm scripts. The `scripts` section should at minimum have entries for starting the app, running in dev mode with hot reload (nodemon), running tests, and running the linter.

```json
"scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest --coverage",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
}
```

---

**`package-lock.json`**  
Auto-generated by npm — locks exact dependency versions to ensure consistent installs across all environments. Always commit this file.

---

**`README.md`**  
Project documentation. Should include project overview, prerequisites, setup instructions, how to run locally, environment variables reference, and available npm scripts. The first thing a new developer reads — keep it accurate and up to date.

---

This project folder structure is:  

**Clean & Clear**  
Easy to understand.

**Modular**  
Each module has a single responsibility.

**Production Ready**  
Follows best practices for scalability and maintainability.

Isolate your logic into distinct modules. This promotes separation of concerns and makes your codebase easier to maintain and scale.  
