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




---

Explore -> Session vs. Cookie

Doubt/query/question

While implementing stateful authentication,
what if we store sessions (session id + user data) inside database.
It should not be a problem then?

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

Cookies are domain specific.

Only server can create cookies, client cannot.

Authorization Header
https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Authorization
https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/

Format
Authorization: Bearer <token>

There are two ways to send authorization token:  

- Using Cookies
    Server validates user credentials, if ok then generates an authorization token.
    Server sends this token to client using a cookie.
    Client then sends cookie back to server in subsequent requests.
    Server gets back the token from cookie received in the request, validates it and allows access if all ok.
    Cookie saves and sends token automatically, we don't need to do anything.
    Only Server can create cookie, client cannot.
    Cookies are available for browser/web platforms only.
- JSON Response
    Server validates user credentials, if ok then generates an authorization token.
    Server sends this token to client directly in the JSON response.
    Client needs to save this token on its side, so that it can then use it in subsequent requests.
    Client sends this token to server using "Authorization" request header.
    Authorization: Bearer <token>
    Server gets back the token from request header, validates it and allows access if all ok.
    Suitable for all platforms - browser/web, mobile etc.

---

## Authorization in Node.js

Authentication vs Authorization


