# Learn Backend Development in 4 Hours | Backend Web Development Full Course

Course Link
[Learn Backend Development in 4 Hours | Backend Web Development Full Course](https://www.youtube.com/watch?v=Q-icS7yZz5k)

Topics

## #1 What is Node.js?

## #2 Node.js installation

## #3 Node.js Application/Project setup from scratch using `npm init`

## #4 Node.js packages and npm

## #5 package.json, package-lock.json and node_modules

## #6 Creating an HTTP server

## #7 Routing, with Node.js only, with Express

## #8 nodemon

## #9 Express

## #10 Express > Middlewares

Explore morgan package

## #11 Creating a form and handling form submission

Example - User signup

built-in middlewares
express.json()
express.urlencoded({extended: true})

## #12 Serving static files

To serve static files, use the following built-in middleware:
`express.static(root, [options])`


---

## #1 What is Node.js?

From the https://nodejs.org/en,
Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Chrome Browser = V8 JavaScript Engine + Browser APIs

Node.js = V8 JavaScript Engine + libuv

Now we can run JavaScript outside of the Browser, in Node.js.
This allows us to develop JavaScript apps that can run outside of the client/browser.

---

## #2 Node.js Installation/Setup

https://nodejs.org/en/download

"nvm" is a cross-platform Node.js version manager. If you encounter any issues please visit [nvm's website](https://github.com/nvm-sh/nvm).

Go for LTS version, if you are planning to deploy your app on Production.

Confirm Node.js installation by checking its version.
`node -v`

Along with Node.js we also get NPM installed. Confirm by checking its version.
`npm -v`

---

## #3 Hello World

Check the below app:
/Users/mitesh_prajapati/node-apps/ztm-nodejs/hello-nodejs

---

## #4 Building an App from Scratch

To build a Node.js application from scratch,
we can start by executing the following command:
`npm init -y`
It initializes Node.js application by creating package.json file.

Package in Node.js
A package is a reuseable code written by one or more developers.

npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

Check the below app:
/Users/mitesh_prajapati/node-apps/hello-cat

**node_modules**
    Contains all project dependencies and their nested dependencies.
    It comes from the [npmjs.com](https://www.npmjs.com/).
    This must be inside .gitignore file. We never version control this folder.
    Because dependencies can be installed later while project setup using information available from the package.json and package-lock.json files.

**package.json**
    The manifest file for the project.
    Tracks all of the project/app dependencies.
    Defines metadata (name, version, scripts).
    Specifies acceptable version ranges for dependencies (e.g., ^1.2.3).
    Must be committed to version control.

**package-lock.json**
    Kinda locks dependencies along with their installed versions, that is why it is called package-lock.json.
    Locks the entire dependency tree (including nested dependencies) to their exact installed versions.
    Guarantees that every developer and deployment environment installs the identical dependency set, regardless of minor updates that may have occurred since the last install.
    Created and updated automatically by npm (or Yarn/pnpm equivalent). Must be committed to version control.

References:  

- [npmjs.com](https://www.npmjs.com/)
- [About npm](https://docs.npmjs.com/about-npm)

---

## #5 Creating a Server

Check the below app:
/Users/mitesh_prajapati/node-apps/http-server-v1

---

## #6 Routing

Check the below app:
/Users/mitesh_prajapati/node-apps/http-server-v2

---

## #7 nodemon

---

## #8 Express

- Setup
- Routing
- Template Engine - EJS
- Middleware
    3 types
    1. Built-in
    2. Custom (built by a developer)
    3. 3rd party (comes from the installed package)

**Todos**

Download files feature.

---

## #9 Creating and submitting a form

- Create a simple sign-up form.
    Sign up form, method = POST, action = POST /api/users
    - First Name
    - Last Name
    - Username
    - Email
    - Password

- Create POST /api/users API endpoint to handle sign up form submission.

- Use `express.urlencoded()` middleware to parse HTML form data.
    `app.use(express.urlencoded({ extended: true }));`

---

## #10 Serving static files

To serve static files, use the following built-in middleware:
`express.static(root, [options])`

References:  
https://expressjs.com/en/5x/api.html#express.static

---

## #11 MongoDB

### MongoDB Setup

#### #1 Prepare Data and Log Directories

Before the MongoDB server (`mongod`) can run, you must create the directories it uses to store database files and logs. On recent versions of macOS, creating these in your home directory is the most reliable approach to avoid permission issues.

Open your Terminal and run these commands:

1. **Create the data directory:**

```bash
mkdir -p ~/data/db
```

2. **Create the log directory:**

```bash
mkdir -p ~/data/log
```

#### #2 Add Binaries to your System's PATH

This step allows you to execute MongoDB commands (`mongod`, `mongosh`, etc.) from any location in your Terminal without typing the full path every time.

1. **Update your shell configuration file** (most modern macOS systems use `zsh` and the file is `~/.zshrc`):

Replace `</path/to/mongodb-directory>` below with the actual location of the extracted folder on your machine (e.g., `/Users/yourusername/Downloads/mongodb-macos-arm64-8.2.1`).

```bash
echo 'export PATH=</path/to/mongodb-directory>/bin:$PATH' >> ~/.zshrc
```

2. **Load the new path** by sourcing the file:

```bash
source ~/.zshrc
```

#### #3 Start the MongoDB Server (`mongod`)

Use the `mongod` executable and point it to the directories you created for data and logs:

```bash
mongod --dbpath ~/data/db --logpath ~/data/log/mongod.log
```

* `--dbpath ~/data/db`: Specifies where the database files will be stored.
* `--logpath ~/data/log/mongod.log`: Specifies the log file.

#### #4 Connect to the Server

Once the server is running, you can connect to it.

**Install the MongoDB Shell (`mongosh`):** The modern MongoDB shell is a separate download from the Community Server binaries you downloaded. If you haven't done so, you should download and install the **MongoDB Shell** tool from the MongoDB Download Center. You can also install it via Homebrew: `brew install mongosh`.

**Connect:** Open a **new** Terminal window (to ensure the PATH is loaded) and run the shell command:

```bash
mongosh
```

This will connect to the running `mongod` instance on the default port (`localhost:27017`).

You can now use this shell to interact with your MongoDB server, or proceed to use the **Compass GUI tool** you also downloaded, which should connect by default to `localhost:27017`.

**Install Compass GUI Tool**

Open Compass and connect to "mongodb://localhost:27017".

---

## Packages

- cat-me
- nodemon
- express
- ejs
- morgan
    HTTP request logger middleware for Node.js
- dotenv - https://www.npmjs.com/package/dotenv
- express-validator - https://express-validator.github.io/docs

Create your own request logger package
    - log request data - method, uri
    - in case of POST method log request body
    - ability to mask personal/sensitive data while logging
    - calculate time taken to process the request
    - log response status, just the HTTP status

---

http-server-2
Create a repo.

Static pages along with static assets (images, CSS etc.)
    Home, About, Contact

RESTful APIs
    CRUD

# PUT vs PATCH in REST APIs

The choice between **PUT** and **PATCH** for updating a resource depends entirely on the **type of update** you are performing: a complete replacement or a partial modification. Both are valid HTTP verbs for the Update (U) operation in CRUD.

-----

## 1\. PUT: Complete Replacement (Idempotent)

You should use **PUT** when you intend to **replace the entire resource** with the new data sent in the request body.

  * **Meaning:** The request payload contains the **full, complete representation** of the resource *after* the update.
  * **Behavior:** The server takes the new state and overwrites the existing resource at the specified URI. Any fields of the existing resource that are **not** included in the PUT request body will typically be **cleared, reset, or set to null**.
  * **Idempotency:** PUT is **idempotent**. Sending the exact same PUT request multiple times will result in the same resource state, without any further effect.

**Example:**

If a `product` has fields for `title`, `price`, and `description`, and you send a PUT request with *only* `title` and `price`, the `description` field on the server might be erased.

```json
// PUT /products/1004
{
    "id": 1004,
    "title": "New Shorts Title",
    "price": 85000 
    // Description field is missing, so it may be deleted on the server.
}
```

-----

## 2\. PATCH: Partial Modification

You should use **PATCH** when you intend to apply **only partial modifications** to the existing resource.

  * **Meaning:** The request payload contains **only the changes** you want to make.
  * **Behavior:** The server selectively applies the changes provided in the request body to the existing resource. Fields of the existing resource that are **not** included in the PATCH request body are **left untouched**.
  * **Idempotency:** PATCH is **not guaranteed to be idempotent**. Sending the same PATCH request multiple times *could* result in different outcomes, depending on how the server processes the patch (though many REST APIs design their PATCH operations to be as idempotent as possible).

**Example:**

Using PATCH to update only the `price` will leave the `title` and `description` untouched.

```json
// PATCH /products/1004
{
    "price": 85000 
    // Only the price is changed; title and description remain as they were.
}
```

---

## Recommendation

In modern API development, **PATCH is generally preferred** for typical "update" scenarios (like changing a product's price or status) because it is more efficient, requiring less data to be sent, and safer, as you avoid accidentally overwriting unrelated fields.

**Use PUT only when you are truly sending a complete, full replacement of the resource.**

---

## Node.js Interview Questions

setTimeout
setImmediate
nextTick

worker thread, child process
clustering

how to scale Node.js horizontally

how to define load balancer in Node.js

cape theorm

message queue

handling

streams = read, write

stream vs buffer

Unit test

redis

---

## List of NPM packages

- express
- ejs
- nodemon
- morgan
    HTTP request logger middleware for Node.js
- dotenv - https://www.npmjs.com/package/dotenv
- express-validator - https://express-validator.github.io/docs
- csv-parse - https://csv.js.org/parse/
- mongoose
- jest
- bcrypt
    A library to help you hash passwords.
- uuid
- cookie-parser
- zod - zod.dev
- cat-me
