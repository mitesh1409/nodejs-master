# Complete Backend Course

[Complete Backend Course | Build and Deploy Your First Production-Ready API](https://www.youtube.com/watch?v=rOpEN1JDaD0)

## Index

* Intro
* HTTP, DNS, IPs & Networks
* APIs - The Backends Messenger
* Types of APIs - REST & GraphQL
* Backend Languages from Python to JavaScript
* Databases The Backbone of Your Backend
* Backend Architectures
* API Demo & Setup
* Create Express.js Server
* Config


## Intro

Topics

* Frontend & Backend
* Client-Server Architecture
* Request & Response

---

## HTTP, DNS, IPs & Networks

Topics

* HTTP Protocol, Backbone of the Internet
* DNS (Domain Name System)
* IP Address

Client and Server communicates using HTTP/HTTPS protocol.

DNS (Domain Name System)

Humans need easy to remember names to access a website whereas  
computers need exact IP addresses to find each other.  
DNS is like internet's phone book - it translates/maps domain names into IP addresses.  

When you type google.com into browser's address bar, browser checks if it already has  
its IP address, if not then it makes a request to DNS resolver to get its IP address,  
after getting the IP address browser uses that IP address to connect to the Google server.  

IP Address  
IP Address is a unique number that identifies every device on the internet.  
Think of it like a property address - each property on the earth has a unique address.  

There are two types:  

* IPV4
    * Classic format
    * Made up of 4 bytes (32 bits)
    * We are running out of this
* IPV6
    * Newer format designed to support more devices

---

## APIs - The Backends Messenger

Topics

* What is an API?
* CRUD
* HTTP Methods/Verbs

What is an API?  
Understanding with a Restaurant analogy - Customer (Client) checks the menu (API documentation), then calls the waiter to take his order (calling an API), then kitchen receives an order (server receives a request), prepares food as per the order (processing client request and generating a response), waiter then delivers the order (client receives a response). Customer's order is fulfilled (request-response cycle is completed).
Client and server communicate using APIs.  

API = Headers + HTTP Method/Verb + Endpoint

Headers  
Headers contain extra information or metadata about the request or a response.
For example,  
auth tokens, content type, caching instructions etc.

HTTP Methods/Verbs  
APIs use HTTP Methods/Verbs to define what kind of action to take on a specific resource.  

GET    - Get/retrieve data from the server.  
POST   - Create a new resource.  
PATCH  - Update an existing resource.  
DELETE - Delete/remove a resource.

Endpoint  
Endpoint is a full URL that represents a specific resource in the backend.  
It may contain query parameters as well.

Request Body  
In case of POST/PUT request, client sends data to the server in the request body.  

Response Body  
Server sends data back to the client in the response body.  

Status Codes  
Server sends status code to the client along with the response.  
Using status code client can know the status of the request.  

For example,  
Status Code -> Meaning  
200 OK -> request was successful  
201 Created -> a new resource was created  
400 Bad Request -> request was invalid  
404 Not Found -> requested resource was not found  
500 Internal Server Error -> Something went wrong on server side  
etc.  

---

## Types of APIs - REST & GraphQL

RESTful APIs  
Representational State Transfer APIs  
It follows a structured approach where clients interact with resources using URLs  
and standard HTTP methods like GET, POST, PUT, PATCH, DELETE etc.  
They are stateless, which means each request is independent and does not rely on  
previous ones.  
They typically use JSON for the request & response data format, making it super compatible  
across all the apps.  
They are organized, predictable and easy to implement, that is why they are widely used in  
web development.

GraphQL APIs  
Developed by "facebook".  
Offers more flexibility than REST APIs by letting clients request exactly the data they  
want.  
Instead of multiple endpoints for different data GraphQL uses one/single GraphQL endpoint.  
Then clients can specify exact fields they want.  
Super efficient for complex applications with lots of interconnected data.  
GraphQL really shines when you are dealing with large data sets.  
Reduces "Over Fetching" & "Under Fetching" data.  

---

## Backend Languages from Python to JavaScript

Backend Languages are:  

* Python
* Ruby
* Java
* JavaScript
    JavaScript Runtime Environments like:  
    * Node.js
    * Bun
    * Deno

Writing backend using this languages alone is not a good idea, as you will need to write  
a lot of boilerplate code (routing, configuration, middleware, error handling etc.) that does not provide any business value.  

Instead we choose framework to develop the application.  
Frameworks provide better code structure, robust platform and they handle  
repeatitive tasks or the boilerplate code (routing, configuration, middleware, error handling etc.).  
Using frameworks developer can focus more on writing business logic.  

Some of the most popular backend frameworks are:  

* Node.js -> [express](https://expressjs.com/)
* Node.js -> [Hono](https://hono.dev/)
* Node.js -> [nestjs](https://nestjs.com/)
* Python -> [django](https://www.djangoproject.com/)
* Ruby -> [Ruby on Rails](https://rubyonrails.org/)
* Java -> [spring](https://spring.io/)
* PHP -> [Laravel](https://laravel.com/)

---

## Databases The Backbone of Your Backend

You may think - why not just store the data directly on the application server (server where the application is deployed)?

We dont't store data directly into the application server because that is inefficient and  
does not scale as your application grows. That is why every backend application relies on  
dedicated storage solutions commonly known as databases.

Databases are broadly classified into two main types:  

* Relational Databases
* Non-Relational/NoSQL Databases

**Relational Databases**  
Relational databases store data in structured tables with rows and columns  
much like a spreadsheet. They uses "SQL" (Structured Query Language) to query  
and manipulate data.  
Most popular relational databases are - MySQL, PostgreSQL.

When to use relational databases?  

If your application needs structured data with clear relationships then go with  
relational/SQL databases.  
When your data is highly structured and relationship between entities are important.  
For example, banking systems, e-commerce platforms, inventory management etc.  

**Non-Relational/NoSQL Databases**  
Non-Relational/NoSQL databases offer more flexibility and don't rely on a rigid structure  
of tables. They can handle unstructured or semi-structured data making them perfect  
when data relationships are less complex.  

There are subtypes of Non-Relational databases -  

* Document based like MongoDB which stores data into JSON documents
* Redis which stores data into key-value pairs

When to use Non-Relational/NoSQL databases?  

Non-Relational/NoSQL databases are great for  

* handling large volumes of data
* real-time analytics
* flexible data models

If you are handling massive unstructured data or need flexibility then go with  
Non-Relational/NoSQL databases.  

They are suitable for social media apps, IOT devices or big data analytics.

**How application server interacts with databases?**

There are two ways application server can interact with databases:  

* Raw Queries
* ORM (Object Relational Mapper)

Using Raw Queries we can perform CRUD operations on database.  
This gives developers full control but this approach is tedious, lengthy and error prone  
as developer need to write more code.

That is why many developers use ORMs to interact with databases.  
ORMs simplify database interactions by letting you write queries in a syntax of your  
programming language of choice.  

For SQL databases popular ORMs are  
* [Prisma](https://www.prisma.io/)
* [drizzle](https://orm.drizzle.team/)
* [sequelize](https://sequelize.org/)

For NoSQL databases popular ORMs are  
* [mongoose](https://mongoosejs.com/)

ORMs help developer speed up the development and prevent errors especially in larger projects.  

---

## Backend Architectures

There are a few popular architectures that developers follow depending on their project needs.  

* Monolithic Architecture
* Microservices Architecture
* Serverless Architecture

**Monolithic Architecture**  

In a Monolithic Architecture all components of your application are combined into  
a single unified codebase.  
Everything is in one place.  
Backend handles everything, for example - user management, business logic,  
database interactions etc.  

It is simple to develop and deploy, easier to debug since everything is in one place.  

But as the application grows, gradually the codebase becomes messy.  
Scaling specific parts of the application can be tricky or even impossible.  
Everything scales together since everything is in one place, which is not cost effective.  

Suitable for smaller scale projects with small team sizes.  
Or you can go with Monolith Architecture when you want to quickly start and ship MVP phase  
of the application.

**Microservices Architecture**  

In Microservices Architecture the application is broken down into smaller independent services.  
Each service handles a specific business function/feature.  

For example in an e-commerce application we may have the following microservices:  

* Product Catalog
* Shopping Cart
* Checkout
* Authentication
* Payment
* Notification
* Order Tracking

These microservices communicate with each other via APIs.

Microservices Architecture is suitable for the large scale systems or enterprise systems  
where flexibility and scalability are important.  

**Serverless Architecture**

Serverless Architecture lets you write code without worrying about the underlying infrastructure.  

"AWS Lambda" and "Vercel" handles provisioning scaling and server management for you.  

Fullstack NEXT.js applications use serverless backend.  

Serverless Architecture is suitable for  

* Startups
* Rapid Prototyping
* Apps with spiky traffic

---

## API Demo & Setup

X Create a GitHub repo.
X Clone into local machine.
X Do npm init
X Add "type": "module" line in package.json file to use ESM.
X ESLint & Prettier setup for Node.js + Express.js using JavaScript.
X Install nodemon.
X Set required scripts.

---

## Explore  

* How many IPV6 addresses are there?
* Can we map IPV4 address to IPV6? If yes then how? Are current domain names have IPV4 or IPV6?
* Are new domains using IPV4 or IPV6?
* [httpie](https://httpie.io/)
* [upstash](https://upstash.com/)
* [Arcjet](https://app.arcjet.com/auth/signin)

---

## Temporary

Reference: https://claude.ai/chat/4a7e8cc0-6d2d-4f7d-8a1f-9eeeb3dc8a13

Prettier owns all formatting; ESLint owns code quality.

Here's a comprehensive step-by-step guide to set up ESLint + Prettier for your Node.js + Express (JavaScript) project.

---

## The stack

- **ESLint** — linting (catches bugs, enforces code quality)
- **Prettier** — formatting (handles style: indentation, quotes, semicolons, etc.)
- **`eslint-config-airbnb-base`** — the most widely adopted JS ruleset in the industry
- **`eslint-config-prettier`** — disables ESLint rules that conflict with Prettier
- **`eslint-plugin-import`** — enforces clean ES module import/export patterns (required by airbnb-base)
- **`eslint-plugin-node`** or **`eslint-plugin-n`** — Node.js-specific rules

---

## Step 1 — Initialize your project

If you haven't already:

```bash
npm init -y
```

---

## Step 2 — Install ESLint and Prettier

```bash
npm install --save-dev eslint prettier
```

**Reference links:**  

- ESLint docs: https://eslint.org/docs/latest/
- Prettier docs: https://prettier.io/docs/en/

---

## Step 3 — Install the industry-standard ruleset and plugins which are compatible with flag config

```bash
npm install --save-dev \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-n \
  @eslint/eslintrc

npm install --save-dev eslint-config-airbnb-base --legacy-peer-deps
```

**A known peer dependency conflict - `eslint-config-airbnb-base` depends on ESLint v7/v8 but you may have ESLint v9 installed**

eslint-config-airbnb-base@15.0.0  →  expects eslint "^7.32.0 || ^8.2.0"
your project                      →  has eslint@9.39.4

This is a known peer dependency conflict. `eslint-config-airbnb-base@15.0.0` was built for ESLint v7/v8, but you have ESLint v9 installed. This is exactly the reason we use the `FlatCompat` shim — but the package still needs to be physically installed regardless.

```bash
npm install --save-dev eslint-config-airbnb-base --legacy-peer-deps
```

`--legacy-peer-deps` tells npm to ignore the peer dependency version conflict and install anyway. This is safe here because:

- `eslint-config-airbnb-base` is only used as a **config/rules source**
- The actual ESLint engine running is still your v9
- `FlatCompat` acts as the bridge between the two — it was specifically designed to handle this exact situation

* `eslint-config-airbnb-base` — https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
* `eslint-config-prettier` — https://github.com/prettier/eslint-config-prettier
* `eslint-plugin-import` — https://github.com/import-js/eslint-plugin-import
* `eslint-plugin-n` — https://github.com/eslint-community/eslint-plugin-n
* `@eslint/eslintrc` - To use `FlatCompat` utility from this package

> **Why airbnb-base?** It's the most widely used ESLint config in the JS ecosystem. It enforces a strong, well-documented set of rules based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

> **Note on `eslint-config-airbnb-base`:** The classic `eslint-config-airbnb-base` package **does not officially support flat config yet** as of early 2025. The community-maintained drop-in replacement for flat config is **`eslint-config-airbnb-base`** via a compatibility utility, or better — use **`@eslint/eslintrc`**'s `FlatCompat` helper to wrap it. This is the official migration path recommended by the ESLint team.

Reference:  

* https://eslint.org/docs/latest/use/configure/migration-guide
* https://github.com/eslint/eslintrc?tab=readme-ov-file#user-content-flatcompat

---

## Step 4 — Create your ESLint config

First, make sure your `package.json` has `"type": "module"` **or** name the file `eslint.config.mjs`. Using `"type": "module"` is the cleaner approach for a modern project:

```json
// package.json
{
  "type": "module"
}
```

Now create **`eslint.config.js`** in your project root:

```js
import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import path from 'path';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';
import prettier from 'eslint-config-prettier';

// Required to use __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FlatCompat lets you use legacy configs (like airbnb-base) in flat config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // 1. Files/folders to ignore (replaces .eslintignore)
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },

  // 2. Apply airbnb-base via FlatCompat shim
  ...compat.extends('airbnb-base'),

  // 3. Your main config block
  {
    files: ['**/*.js'],
    plugins: {
      import: pluginImport,
      n: pluginN,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'consistent-return': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'eslint.config.js', // allow dev imports in ESLint config file
            '**/*.test.js', // allow dev imports in test files
            '**/*.spec.js', // allow dev imports in spec files
          ],
        },
      ],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['__filename', '__dirname'], // these are Node.js conventions
        },
      ],
    },
  },

  // 4. Prettier MUST be last — disables conflicting formatting rules
  prettier,
];
```

---

## Step 5 — Create your Prettier config

Create `.prettierrc` in your project root:

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always"
}
```

These are sane, widely-used defaults. Reference: https://prettier.io/docs/en/options.html

Also create `.prettierignore`:

```
node_modules
dist
build
coverage
```

---

## Step 6 — Add scripts to `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

Usage:
- `npm run lint` — check for lint errors
- `npm run lint:fix` — auto-fix fixable lint errors
- `npm run format` — format all files with Prettier
- `npm run format:check` — check if files are already formatted (useful in CI)

> Note: With flat config you no longer need `--ext .js` — ESLint v9 uses the `files` glob pattern inside `eslint.config.js` instead.

---

## Step 7 — (Optional but recommended) Add lint-staged + Husky for pre-commit hooks

This ensures code is always linted and formatted before it's committed.

```bash
npm install --save-dev husky lint-staged
npx husky init
```

Add to `package.json`:

```json
{
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

Then set the pre-commit hook in `.husky/pre-commit`:

```bash
npx lint-staged
```

**Reference links:**
- Husky: https://typicode.github.io/husky/
- lint-staged: https://github.com/lint-staged/lint-staged

---

## Step 8 — VS Code integration (optional)

Install these extensions:
- **ESLint** — https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- **Prettier** — https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Add to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.enable": true,
  "eslint.useFlatConfig": true
}
```

---

## Final project structure

```
your-project/
├── eslint.config.js        ← replaces .eslintrc.json
├── .prettierrc
├── .prettierignore
├── .husky/
│   └── pre-commit
├── package.json            ← needs "type": "module"
└── src/
    └── app.js
```

---

## Quick reference summary

| Package | Purpose | Link |
|---|---|---|
| `eslint` | Core linter | https://eslint.org |
| `prettier` | Code formatter | https://prettier.io |
| `eslint-config-airbnb-base` | Industry-standard rules | https://github.com/airbnb/javascript |
| `eslint-plugin-import` | Import/export rules | https://github.com/import-js/eslint-plugin-import |
| `eslint-plugin-n` | Node.js-specific rules | https://github.com/eslint-community/eslint-plugin-n |
| `eslint-config-prettier` | Disables ESLint formatting conflicts | https://github.com/prettier/eslint-config-prettier |
| `husky` | Git hooks | https://typicode.github.io/husky |
| `lint-staged` | Run linters on staged files | https://github.com/lint-staged/lint-staged |

This setup is what you'll find in the vast majority of production Node.js projects and open source repos. The airbnb-base config is opinionated but well-documented — every rule has a rationale you can look up at https://github.com/airbnb/javascript.

---

## Key migration reference links

| Topic | Link |
|---|---|
| ESLint v9 flat config overview | https://eslint.org/docs/latest/use/configure/configuration-files |
| Migrating from `.eslintrc` to flat config | https://eslint.org/docs/latest/use/configure/migration-guide |
| `FlatCompat` API (for legacy configs) | https://github.com/eslint/eslintrc#flatcompat |
| `eslint-config-prettier` flat config usage | https://github.com/prettier/eslint-config-prettier#installation |
| `eslint-plugin-n` flat config usage | https://github.com/eslint-community/eslint-plugin-n#-usage |

The `FlatCompat` shim is a temporary bridge — once `eslint-config-airbnb-base` officially ships flat config support, you'll be able to import it directly without the shim and simplify the config further.
