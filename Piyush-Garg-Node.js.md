# Piyush Garg - Node.js Series

## #1 What is Node.js?

Node.js = V8 + libuv

V8
JavaScript Engine which executes JavaScript code.

libuv
libuv is a multi-platform support library with a focus on asynchronous I/O.
Written in C.

How the following things work together?
Best to draw a chart for all of these.

JavaScript Engine V8
libuv
Event Loop
Task Queue
    Task/Callback/Macro Queue
    Microtask Queue
Call Stack
Node.js APIs
Main Thread
Thread Pool

Node.js REPL

---

## #2 Node.js Installation

Install Node.js & NPM.

There are two types of Node.js versions:  

* LTS (even numbers)
* Current/Non-LTS (odd numbers)

nvm (Node Version Manager)

---

## #3 Hello World Node.js

---

## #4 Modules in Node.js

There are 3 types of modules in Node.js:

* Built-in - e.g., http, https, os, fs etc.
* 3rd party - express, dotenv, lodash etc.
* Custom - developed by developers for the application.

---

## #5 File Handling in Node.js

Challenge: Read/Write data from/to big files (>= 10GB).
Challenge: CSV file processing.

Synchronous & Asynchronous versions of Node.js APIs.

Make sure you use Asynchronous version of Node.js APIs in case of blocking operations.

---

## #6 How NodeJS Works? - You don't Know NodeJS

https://www.youtube.com/watch?v=_eJ6KAb56Gw

### What is Node.js?

Node.js = V8 + libuv

V8
JavaScript Engine which executes JavaScript code.

libuv
libuv is a multi-platform support library with a focus on asynchronous I⁠/⁠O.
Written in C.

JavaScript is single threaded language.

libuv provides Event Loop & Thread Pool.

### How Node.js code is executed?

Check ChatGPT or Gemini conversation done earlier for this topic.

#1
Node.js creates a "Process".
This "Process" runs on a single thread.
This is our "Main Thread" of execution.

#2
Project is initialized.

As per my understanding, following should be correct with this step:
This means Global Execution context is created.
And Memory Allocation phase is done.

#3
Top level code is executed synchronously (line by line from top to bottom).

Top level code = the code which is not part of any function or callback. The code which is part of Global Execution Context.

As per my understanding, following should be correct with this step:
This means Code Execution phase of the Global Execution Context is done.

#4
Require/imported modules are executed.

#5
"Event Callbacks" are registered.

#6
Start "Event Loop".

### Thread Pool

For CPU intensive tasks like

- File System operations (read, write, compress etc.)
- Crypto operations (encryption, decryption etc.)
threads from the Thread Pool are used.

Event Loop offloads all the CPU intensive tasks from the main thread to the Thread Pool.
Threads from the Thread Pool are used to run CPU intensive tasks.

Thread Pool size/capacity
Default 4 threads
Up to 128 threads
We can controll the number of threads.
N threads = N things can happen in parallel

Query:
Where are Thread Pools coming from?
And is the below correct?
Thread Pool size/capacity
Default 4 threads
Up to 128 threads
We can controll the number of threads.
N threads = N things can happen in parallel

### Event Loop

Event Loop is running.

Event Loop executes callbacks in the following sequence:

Expired timer callbacks are given priority.
I/O Polling (FS Callbacks).
setImmediate callbacks.
Close callbacks.

OR

timers
pending callbacks
idle, prepare
poll
check
close callbacks

Is there anything Pending?
    No -> then Event Loop exits.
    Yes -> Event Loop continues...

Promise Callbacks?
Whenever Event Loop phase transitions.

Example:  

```javascript
import fs from 'node:fs';

setTimeout(() => console.log('setTimeout callback...'), 0);

setImmediate(() => console.log('setImmediate callback...'));

console.log('Last line - End of script');
```

### Todos

#1
Hands on example which covers all the Callback/Task Queues & Microtask/Priority Queue.
Observe callstack.
Observe using https://www.jsv9000.app/.

Simple example.
Nested callbacks example.

Thread Pool example.

```JavaScript

// Control Thread Pool size.
process.env.UV_THREADPOOL_SIZE = 2;

// Server start time.
const start = Date.now();

// Time taken
// Date.now() - start

// CPU intensive operation/task.
crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => { 
  console.log(`${Date.now() - start}ms`, 'password1 DONE!')
})
crypto.pbkdf2('password2', 'salt2', 100000, 1024, 'sha512', () => { 
  console.log(`${Date.now() - start}ms`, 'password2 DONE!')
})
crypto.pbkdf2('password3', 'salt3', 100000, 1024, 'sha512', () => { 
  console.log(`${Date.now() - start}ms`, 'password3 DONE!')
})
crypto.pbkdf2('password4', 'salt4', 100000, 1024, 'sha512', () => { 
  console.log(`${Date.now() - start}ms`, 'password4 DONE!')
})

```

#2
Prepare final notes, refer earlier conversation with ChatGPT/Gemini.
Add diagrams.
Difference between Browser and Node.js execution, is there any difference or both are the same?

#3
Refer Node.js Documentation.

#4
How Node.js is different from other multi-threading languages (C, C++, Java, Go etc.)?

---

## #7 Building HTTP Server in Node.js

---

## #8 Handling URL's in Node.js

URL Components  

* Protocol
* Domain
* Path
* Query Parameters

---

## #9 HTTP Methods

GET
POST
PUT
PATCH
DELETE

---

## #10 Getting started with ExpressJS and Node.js

---

## #11 How versioning works in Node.js?

Semantic Versioning

MAJOR.MINOR.PATCH

---

## #12 REST APIs

REST API = RESTful API

REST stands for Representational State Transfer. It is not a standard or a protocol, but rather an architectural style for building networked applications. A service built following the principles of REST is called a RESTful API.

The primary purpose of a RESTful API is to allow clients (like a web browser or a mobile app) to interact with resources (like users, posts, or products) hosted on a server.

Key Principles of REST  

**Client-Server Architecture**

Client and Server should work independently, they should not depend on each other.

For example,  
If we are developing a blog application where our client is Browser,  
then server can send HTML directly (SSR - Server Side Rendering) so that Browser can display it without less or no processing.
Here client (Browser) is dependent on server for how to render blog.

In case we are developing a blog application where our client can be a Browser or a Mobile etc. (cross-platform),  
then server must send data in the JSON format, that can be then processed by client to display a blog.
Here client (Browser, Mobile etc.) is not dependent on server for how to render blog.

**Respect HTTP methods/verbs**

REST API Endpoints for User resource.

Create
POST /users

Read
GET /users
GET /users/:id

Update
PUT /users/:id
PATCH /users/:id

Delete
DELETE /users/:id

---

## #13 Building REST APIs using Node.js and ExpressJS

Generate mock data.
mockaroo.com

Hybrid Server = CSR + SSR

Client Side Rendering
Server returns just the required data to the client.
It is client's responsibility to render the page/view with the data received from the server.
For this we can have a REST API.

Server Side Rendering
Server returns page/view rendered with the required data.
Client depends on server for how to render the page/view.
For this we can have a route to display a page/view.

---

## #14 Introduction to POSTMAN for REST APIs

---

## #15 Express Middleware

There are 3 types of middlewares:

* Built-in - provided by Express
* Custom - built by developer for the app
* 3rd party - provided by 3rd party packages that we install in our app

---

## #16 What are HTTP headers in API

HTTP headers are an important part of the API request and response  
as they represent the meta-data associated with the API request and response.

HTTP headers carry information for the request and response.

Custom headers are prefixed with "X".  
For example, "X-Powered-By", "X-Custom-Header-Name".  

---

## #17 HTTP Response Status Codes

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status](HTTP response status codes)

HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

* Informational responses (100 – 199)
* Successful responses (200 – 299)
* Redirection messages (300 – 399)
* Client error responses (400 – 499)
* Server error responses (500 – 599)

---

## #18 Getting started with MongoDB

`show dbs`
Show databases.

`use <database-name>`
Use a particular database.

`show collections`
Show collections in the database.

`db.users.find({})`
`db.users.insert({...})`

---

## #19 Connecting Node.js with MongoDB | Mongoose + ExpressJS

---

## #20 Model View Controller in NodeJS | MVC Pattern

```javascript

// What is this used for??
mongoose.set("strictQuery", true);

```

---

## #21 Create a Custom URL Shortener using Node.JS and MongoDB

---

## #22 Server Side Rendering with EJS and Node.JS

## Server Side Rendering

SSR = Views are rendered on server side and then sent to the client.

For SSR we have different template engines available like:  

- [EJS](https://ejs.co/)
- [pug](https://pugjs.org/api/getting-started.html)
- [Handlebars](https://handlebarsjs.com/)

---

## #23 Building Node.js Authentication from Scratch

## #24 JWT Authentication in Node.js

There are two types of Authentication Patterns:  

1. Stateful -> server maintains authentication state/data
2. Stateless -> server does not maintain authentication state/data

### #1 Stateful Authentication

**High Level Implementation Pointers**  

* Server maintains authentication state/data using sessions.
  Sessions can be short lived or long lived.
  Based on its lifetime it can be saved into in-memory or database.

* Server generates a cookie, saves session ID into it and then sends it to the client.

* Client then sends this session ID to the server via cookie in the subsequent requests.

* Server receives session ID from the cookie, validates it and processes requests accordingly.

* Server may send session ID using Cookies, Response or Response Headers.
  In case of SSR implementation where client is Browser, Cookies are used.
  In case of CSR implementation (REST APIs) where client can be mobile/web etc., Response or Response Headers are used.

**Low Level Implementation Pointers**  

* Display a login form.
* User logs in by providing username/email and password.
* Server checks/validates credentials.
  If invalid then returns a failure response with 401 "Unauthorized" status.
  If all ok then it generates a session ID and maps required user data with it.
  Server saves this session entry (in-memory or database).
  Server generates a cookie, saves session ID into it and then sends it to the client.
  Here server can send this session ID using any one of the following ways:  
  * cookies (Web applications where the client is browser)
  * response body (Mobile applications where the client is a native application)
  * response headers (Mobile applications where the client is a native application)
* For the subsequent client requests where user authentication is required,
  client sends session ID via cookie to the server,  
  server gets session ID from the cookie sent by client.  
  Server then validates this session ID and gets the user data from this session ID.
  If either session ID or user is not found then it redirects user to login.

So here server saves all the user data/state and maps it with a session ID,  
client only saves session ID.  
Since server maintains state/data, this is called Stateful Authentication.

**Key Pointers**  

* Server maintains the state.
* Server requires more memory to maintain this state. So it is memory intensive.
* This state can be stored inside server's memory (non-persistent) or a database (persistent).
  * If the state is stored in server's memory then it is non-persistent,  
    meaning it will be lost when the server is restarted.
  * If the state is stored in the database then it is persistent,  
    meaning it is there even if the server is restarted.
* Sessions are generally short lived (short lifespan).
* Server has full controll over this state.
* Banking websites generally use sessions for security reasons.

### #2 Stateless Authentication

**High Level Implementation Pointers**  

* Server does not maintain any authentication state/data.

* Server generates a signed token (JWT), and then sends it to the client.
  This token contains all the required data set by server.

* Client can read the token but cannot modify it without a valid signature.
  Only server has this signature.

* Client then sends this token to the server via request headers in the subsequent requests.

* Server receives token from the request headers, validates it and processes requests accordingly.

* Server can send this token to the client using any one of the following ways:
  * cookie (for web applications)
  * directly in the response (for native apps)

**Low Level Implementation Pointers**  

* Server generates a token in a way that -
  * it contains all the required data/state
  * encrypts it using a signature, tokens are signed
  * client can read the token but cannot modify it without a valid signature (only server has this signature)
* Server can send this token to the client using any one of the following ways:
  * cookie (for web applications)
  * directly in the response (for native apps)
* We implement using [JWT](https://www.jwt.io/)
* Tokens are long lived.
* A Token can be stolen to hijack user account.
* Server has limited control.

**Key Pointers**  

* Server does not maintain any state.
* Server depends on 3rd party library to generate and validate tokens.
  Computation is required to generate and validate tokens.
* Tokens are long lived (long lifespan).
* Server has limited controll over this token.
* Generally used in systems where we have native clients with REST APIs in the backend.
* Used in Serverless Architecture.

**Serverless Architecture**  

- sessions or stateful authentication is not possible
- tokens or stateless authentication is used

---

## #25 What are Cookies in Node.js?

**What are Cookies?**  

Cookies are domain specific.
Browser keeps track of all the cookies domain wise and while sending request to a server  
it will send cookies that belongs to that server domain only.

For example, user visited Google and Facebook and accepted incoming cookies.  
Now in his/her browser there are total 4 cookies - 2 for Google, 2 for Facebook.  
When he requests Google again only 2 cookies of the Google will be sent to the Google server by the browser.  
Same for the Facebook request.
All of these is handled by browser, as a developer we don't need to worry about this.

Only server can create cookies, client cannot.

**Authorization Header**  

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization
https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/

Format  
Authorization: Bearer <authorization token>

There are two ways to send authorization token:  

1. Using Cookies
    Server validates user credentials, if ok then generates an authorization token.
    Server sends this token to client using a cookie.
    Client then sends cookie back to server in subsequent requests.
    Server gets back the token from cookie received in the request, validates it and allows access if all ok.
    Cookie saves and sends token automatically, we don't need to do anything.
    Only Server can create cookie, client cannot.
    Cookies are domain specific.
    Cookies are available for browser/web platforms only.
2. Using JSON Response
    Server validates user credentials, if ok then generates an authorization token.
    Server sends this token to client directly in the JSON response.
    Client needs to save this token on its side, so that it can then use it in subsequent requests.
    Client sends this token to server using "Authorization" request header.
    Authorization: Bearer <token>
    Server gets back the token from request header, validates it and allows access if all ok.
    Suitable for all platforms - browser/web, mobile etc.

**Reference**  
[Swagger | Bearer Authentication](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/)

---

## #26 Authorization in Node.js

Authentication Vs Authorization

We can have two middlewares in place in the boilerplate of the Node.js app:  

* authenticate - verifies user identity, sets user in the request
* authorize - verifies user permissions

---

## #27 Creating Discord Bot in Node.js

---

## #28 Uploading Files with Node.js and Multer

---

## #29 Setting Up Project - Node.js Blogging Application with MongoDB

## #30 Setting Up Authentication - Node.js Blogging Application with MongoDB

## #31 Complete Blog App - Node.js Blogging Application with MongoDB

Blogging Application Todos

#1
Setup project - complete boilerplate code
  * Install express, mongoose, handlebars, dotenv, multer, jsonwebtoken, jest etc.
  * Install nodemon or use built-in feature to restart app on every file change.
  * MongoDB connection code.
  * Global error handler.
  * Global middlewares to parse form data, to parse JSON requests, log incoming requests, middleware to serve static files etc.
  * Centralized configuration.
  * Setup required scripts - dev, prod etc.
  * Create Github repo.


#2
Setup for SSR
  * Install handlebars
  * Install Bootstrap
  * Create master layout
  * Navbar with Home, About, Contact, Sign In, Sign Up etc. links.
  * Create static pages - Home, About, Contact, Sign In, Sign Up etc.

```javascript

const path = require("path");

...

app.set("view engine", "handlebars");
app.set("views", path.resolve("./views"));

```


#3
Complete user sign up feature.

Create user schema - firstName, lastName, email, password, salt (to hash password), createdAt, updatedAt, profileImage, role (enum = USER, BLOGGER, ADMIN)

Hash password using "crypto" built-in module of Node.js.

```javascript

// Here we used regular callback function instead of an arrow function,
// so that we get correct "this", in regular function "this" points to the current user.
userSchema.pre("save", function (next) {
  // hash password before saving user

  const user = this;

  // Password not modified, keep it as it is.
  if (!user.isModified("password")) {
    return;
  }

  // Password is modified, so we will hash it.
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac('sha256', salt)
    .update(user.password)
    .digest('hex');

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

```

Add code for error handling on front-end and back-end.

Explore - hashing password using bcrypt vs crypto method, what is the difference?


#4
Complete user sign in feature.

Explore - Mongoose Virtuals

NOTE: Take care of async-await code.

```javascript

// Add this code in the user schema file.
userSchema.static('matchLoginCredentials', function(email, password) {
  const user = this.findOne({email: email});

  if (!user) {
    throw new Error('Failed to login. Either username or password incorrect.');
  }

  const salt = user.salt;
  const currentHashedPassword = user.password;

  const inputHashedPassword = createHmac('sha256', salt)
    .update(password)
    .digest('hex');

  if (inputHashedPassword !== currentHashedPassword) {
    throw new Error('Failed to login. Either username or password incorrect.');
  }

  return {
    ...user,
    password: undefined,
    salt: undefined
  };
});

// Add this code in the login controller.
const {email, password} = req.body;
const user = User.matchLoginCredentials(email, password);

```

Add code for user authentication.
Generate authentication token using JWT upon successful login.

Add code for error handling on front-end and back-end.


#5
Show Dashboard page after user logs in successfully.
Show "Add Blog" button.
Show "Sign Out" link.


#6
Complete user sign out feature.


#7
Add blog feature.

Create blog schema - title, body, coverImage, createdBy, createdAt, updatedAt, publishedAt 

Page to display a form to create a blog.
Route to create a blog when this form is submitted.


#8
Feature - Blog listing.
Display all the blogs on the Home page (latest first OR sorted by createdAt/publishedAt).


#9
Feature - Blog details page.
Show title, cover image, description & created by info.
Update links in the blog listing page.
Use `<pre>` tag to display description.


#10
Commenting feature.
Only logged in users can comment on a blog.

Create comment schema - content, createdBy, blogId, createdBy, updatedBy

Form to submit/post a comment. Only show this if user is logged in.
Otherwise show "Login to post your comments."
Create comment route - create a comment once form is submitted to post a comment.


#11
Feature - show comments for each blog.
This is visible to all users (even if user is not logged in).


---

## #32 Deploy NodeJS Application on AWS - Amazon Web Services | NodeJS

Following changes are required before deploying on AWS:  

#1 Get PORT value from environment file.
We can't use fixed/hard coded PORT value, we need to get this from environment file.

```javascript

// Get PORT value from environment file, if not available then use 8000 as default value.
const PORT = process.env.PORT || 8000;

```

Use "dotenv" package to write & read environment variables.

#2 Get MongoDB connection URL from environment file.

```javascript

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || 'default connection URL';

```

#3 Make sure you have "start" script set in your package.json file. Cloud providers automatically run this script to start our project/application.

#4 While deploying on AWS, we need to name entry point/main file as "app.js".

#5
Deploy application on Amazon Elastic Beanstalk.

#6
Setup cloud MongoDB database and connect it with our application.

Set environment variables on AWS Elastic Beanstalk for MONGODB_CONNECTION_URL.

Go to AWS Elastic Beanstalk -> Configuration -> Software -> Edit -> Add environment variable. Once it is set, AWS will redeploy the application.

#7
Test application deployed on AWS.
Do sign up, sign in, create blog, comment on blog etc. to make sure everything is working fine.
Check database to make sure data is getting saved in the database.

---

## #33 WebSocket in NodeJS | Socket.IO - Real Time Messaging

Client-Server communication is generally request-response based, meaning client sends a request to the server and then server sends a response back to the client.
And then connection is closed, this is how HTTP works.
In this communication pattern, server cannot send any data to the client until it receives a request from the client.

Realtime communication is different, in this communication pattern server can send data to the client without waiting for a request from the client.
For example, in a chat application, when a user sends a message to another user, server can send this message to the recipient user without waiting for any request from the recipient user.

Polling is one way to implement realtime communication, in this approach client sends a request to the server at regular intervals (e.g., every 5 seconds) to check if there is any new data available. If there is new data, server sends it back in the response. This approach is simple but it can be inefficient as it generates a lot of unnecessary requests when there is no new data.
Polling is not scalable, as the number of clients increases, the number of requests to the server also increases, which can lead to performance issues.

Ways to implement realtime communication:

1. WebSocket
2. Server-Sent Events (SSE)

Reference:  

* [MDN | HTTP "Upgrade" Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Upgrade)
* [socket.io](https://socket.io/)

---

## #34 Streams in Node.js

Explore the below package to monitor the performance of our Node.js application:  

[express-status-monitor](https://www.npmjs.com/package/express-status-monitor)

Reading a small file without streams is ok.

But when we are reading a big file (e.g., 10GB) without streams, then it can lead to performance issues and even crash the server, because it tries to read the entire file into memory at once.

To read big files efficiently, we can use streams. Streams allow us to read data in chunks, which is more memory efficient and can handle large files without crashing the server.

Response can also be sent in chunks using streams, this is called "chunked transfer encoding".  
Following header is used to indicate that the response is sent in chunks:  
Transfer-Encoding: chunked  

[Transfer-Encoding header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Transfer-Encoding)

[Node.js Streams](https://nodejs.org/api/stream.html)

---

## #35 How to scale NodeJs applications using the cluster module.

**Problem**  

Problem with single instance of Node.js application is that it runs on a single thread, so it cannot utilize the full power of the server (CPU cores).

Also over the time, as the number of users increases, the load on the server also increases, which can lead to performance issues and even crash the server.

**Solution**  

To scale Node.js applications, we can use the cluster module. The cluster module allows us to create multiple instances of our Node.js application, which can run on different CPU cores. This way we can utilize the full power of the server and handle more load without performance issues.

[Node.js Cluster](https://nodejs.org/api/cluster.html)

```javascript

import os from 'os';
import { availableParallelism } from 'node:os';

const numCPUs = os.cpus().length;
// OR
const numCPUs = availableParallelism();

```

---

## #36 What is NGINX?

NGINX is a powerful web server and uses a  
non-threaded, event-driven architecture to handle multiple connections efficiently.

NGINX can also do other important things like -  

* Load Balancing
* HTTP Caching
* Reverse Proxying

**Forward Proxy**  

Multiple clients -> Forward Proxy -> Server

Multiple clients send requests to the Forward Proxy, which then forwards these requests to the Server. The Server processes the requests and sends responses back to the Forward Proxy, which then relays these responses back to the respective clients.

For a server there is only one client which is the Forward Proxy, it does not know about the multiple clients behind the Forward Proxy.

Example:  
Forward Proxy is used for anonymity, security, content filtering etc.
For example, in a corporate network, employees' devices (clients) send requests to the Forward Proxy (VPN Server), which then forwards these requests to the internet (Server). The Forward Proxy can filter out malicious content, enforce security policies, and provide anonymity for the employees.

**Reverse Proxy**  

Client -> Reverse Proxy -> Multiple Servers

In this setup, the Client sends requests to the Reverse Proxy, which then forwards these requests to one of the Multiple Servers based on load balancing or other criteria. The chosen Server processes the request and sends the response back to the Reverse Proxy, which then relays it back to the Client.

For a client there is only one server which is the Reverse Proxy, it does not know about the multiple servers behind the Reverse Proxy.

Example:  
Reverse Proxy is used for load balancing, security, caching etc.
For example, in a web application, the Reverse Proxy (NGINX) receives incoming requests from clients and forwards them to one of the Multiple Servers (Node.js application instances) based on load balancing algorithms. The Reverse Proxy can also provide security features like SSL termination, caching of responses, and protection against DDoS attacks.

**NGINX**  

* Can handle 10K concurrent requests.
* Cache HTTP requests and responses.
* Act as a Reverse Proxy to distribute incoming requests to multiple servers, which helps in load balancing and improving performance.
* Act as a Load Balancer to distribute incoming traffic across multiple servers, ensuring that no single server is overwhelmed and improving the overall performance and reliability of the application.
* Act as an API Gateway.
* Serve and cache static files like images, videos etc., which can improve the performance of web applications by reducing the load on the application servers and delivering static content more efficiently.
* Handle SSL certificates.

---

## #37 Install and Setup Nginx

Setup NGINX using Docker.

Setup an Ubuntu container using Docker and then install NGINX inside it.

`docker ps`

`docker run -it -p 8080:80 ubuntu`

Verify NGINX is working by going to http://localhost:8080 in the browser.  
OR by typing `curl http://localhost:8080` in the terminal  
OR by typing `nginx -v` in the terminal of the container to check NGINX version.  

We can also check response headers to verify that NGINX is working.  
Following response header indicates that the application is hosted by NGINX:  
Server: nginx/1.25.3 (Ubuntu)

Execute the below command in the terminal of the container to check NGINX files and folders:
`ls /etc/nginx`

Here nginx.conf is the main configuration file of NGINX, where we can write all the configuration for NGINX.

---

## #38 Serve Static Content with Nginx

/etc/nginx/nginx.conf
This is the main configuration file of NGINX, where we can write all the configuration for NGINX.

/etc/nginx/mime.types
This file contains the mapping of file extensions to MIME types. It is used by NGINX to determine the content type of the files it serves. When a client requests a file, NGINX uses the file extension to look up the corresponding MIME type in this file and includes it in the response headers. This helps the client understand how to handle the received file (e.g., display it in the browser, download it, etc.).
We can also add custom MIME types in this file if needed.  
We can include this file in the nginx.conf file using the following line:
`include /etc/nginx/mime.types;`
that way we can use the MIME types defined in this file in our NGINX configuration.

`nginx -s reload`  
This command is used to reload the NGINX configuration without restarting the server. It allows you to apply changes made to the NGINX configuration file (nginx.conf) without interrupting the current connections. When you run this command, NGINX will gracefully reload the configuration, allowing existing connections to continue while applying the new configuration for any new incoming requests.

`nginx -t`
This command is used to test the NGINX configuration for syntax errors. It checks the nginx.conf file for any syntax issues and reports them without actually starting or reloading the NGINX server. This is a useful command to ensure that your configuration changes are valid before applying them with `nginx -s reload`.

---

## #39 Full Node.js Deployment - NGINX, SSL With Lets Encrypt

[Node.js Deployment](https://gist.github.com/piyushgarg-dev/8b14c87c8ff4d626ecbc747b6b9fc57f)

#1  
Create an AWS account.

#2  
Create an EC2 instance, SSH into it.

#3  
Install Node.js, NPM, PM2.

```bash
sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

[Download Node.js](https://nodejs.org/en/download)

#4  
Clone your Node.js application from Github to the EC2 instance.
Then install dependencies using `npm install` command.

#5  
Go to project directory and start the application using PM2.

```bash
cd your-project-directory
pm2 start app.js --name "your-app-name"
```

Other pm2 commands  
pm2 show app
pm2 status
pm2 restart app
pm2 stop app
pm2 logs (Show log stream)
pm2 flush (Clear logs)

To make sure app starts when reboot  
pm2 startup ubuntu

#6  
Set MongoDB connection URL in the environment variables on the EC2 instance.

```bash
export MONGODB_CONNECTION_URL='your-mongodb-connection-url'
```

And then restart the application using PM2 to apply this environment variable.

```bash
pm2 restart your-app-name
```

#7  
Check logs using `pm2 logs -all` command to make sure everything is working fine.

#8  
Edit Security Group of the EC2 instance to allow incoming traffic on port 80 (HTTP) and port 443 (HTTPS).
Add two new rules (one for IPv4 and one for IPv6) with type Custom TCP for port 8001 (application port) to allow incoming traffic on this port as well.

#9  
Get a free domain name from Freenom and point it to the public IP address of your EC2 instance.

Verify that your application is accessible using this domain name using the following command in the terminal:

```bash
curl http://your-domain-name:<port>

# OR

nslookup your-domain-name:<port>
```

#10  
Setup firewall.

```bash
sudo ufw enable
sudo ufw status
sudo ufw allow ssh # (Port 22)
sudo ufw allow http # (Port 80)
sudo ufw allow https # (Port 443)
```

#11  
Install NGINX and configure it to serve your Node.js application.

```bash
sudo apt-get install nginx
```

#12  
sudo certbot --nginx -d piyushgarg-dev.ml -d www.piyushgarg-dev.ml

It will generate SSL certificate.

Verify this by visiting the application in your browser.

certbot renew --dry-run

#13
At the end once application is verified, clean-up AWS account services which are in use.
Terminate EC2 instance.
Release Elastic IP address.

---

## #40 Serverless Framework with NodeJS

## #41 What is Serverless? | Serverless Vs Monolith | AWS Lambda

What is Serverless?

Non-serverless  
We have to manage the server from our end.  
Server instance is always running regardless of the incoming traffick.  
Fixed charges based on server instance.

Serverless  
You don't need to worry about managing server for your application/code.  
Amazon takes care of everything.  
Charged per invocation.  
It autoscales as per the incoming traffick/requests.  
AWS Lambda Service

Cons  
Cold start  
Slow compared to non-serverless architecture  
Stateless  
In case of APIs, each API will have its own AWS Lambda function  

[serverless.com](https://www.serverless.com/)

[The Amazon Prime Video Monolith Shift: Dissecting Microservices, Serverless, and the Real-World Cost](https://medium.com/@abhishekranjandev/the-amazon-prime-video-monolith-shift-dissecting-microservices-serverless-and-the-real-world-ec18e429ad6f)

---

## #42 GraphQL Crash Course - GraphQL NodeJS


What is GraphQL?

What problem does GraphQL solve?  

REST API

Problem with REST API is - we end up fetching more data than it is actually required.

Multiple clients may need different set of data, and if we are serving those requests with a single API with generic response then we have this problem.

For example,

For our REST APIs Server, we have a following API which returns todos data:  
GET /todos - returns all the todos
GET /todos/<id> - returns a todo with an "id"

---

eraser.io

excalidraw.com

---

## Explore -> Session vs. Cookie

Doubt/query/question

While implementing stateful authentication,  
what if we store sessions (session id + user data) inside database.
Is there any problem with this approach?

Problems with this approach are:  

- For each request we need to fetch data from the database, latency is increased per request.
- Also number of read operations on the database are increased, because we need to fetch data  
  from the database for each incoming request where authentication is required, which increases  
  the cost of server operations.
- Session hijacking is easier, we just need a session ID from cookie.


**Latency**  
In software engineering, latency is the time delay between a data request being sent and the response being received, often measured in milliseconds. It measures the total "round trip" time for a data packet to travel from its source to its destination and back, encompassing factors like network congestion, distance, hardware limitations, and processing time. Minimizing latency is crucial for good performance, as high latency leads to lag and a poor user experience.

---

## Cookies



---

## Authorization in Node.js

Authentication vs Authorization


