# Piyush Garg - Node.js Series

## How NodeJS Works? - You don't Know NodeJS

https://www.youtube.com/watch?v=_eJ6KAb56Gw

Example:  

```javascript
import fs from 'node:fs';

setTimeout(() => console.log('setTimeout callback...'), 0);

setImmediate(() => console.log('setImmediate callback...'));

console.log('Last line - End of script');
```

---

## What is Node.js?

Node.js = V8 + libuv

V8
JavaScript Engine which executes JavaScript code.

libuv
libuv is a multi-platform support library with a focus on asynchronous I⁠/⁠O.
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

---

## How Node.js code is executed?

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
This means Code Execution phase of the Global Context is done.

#4
Require/imported modules are executed.

#5
"Event Callbacks" are registered.

#6
Start "Event Loop".

## Thread Pool

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

## Event Loop

Event Loop is running.

Event Loop executes callbacks in the following sequence:

Expired timer callbacks are given priority.
I/O Polling (FS Callbacks).
setImmediate callbacks.
Close callbacks.
Is there anything Pending?
    No -> then Event Loop exits.
    Yes -> Event Loop continues...

Promise Callbacks?
Whenever Event Loop phase transitions.

---

## REST APIs

What is REST API?
https://www.youtube.com/watch?v=cJAyEOZQUQY&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=12


REST API = RESTful API

REST stands for Representational State Transfer. It is not a standard or a protocol, but rather an architectural style for building networked applications. A service built following the principles of REST is called a RESTful API.

The primary purpose of a RESTful API is to allow clients (like a web browser or a mobile app) to interact with resources (like users, posts, or products) hosted on a server.

Key Principles of REST  

1. Client-Server Architecture

Client and Server should work independently, they should not depend on each other.

For example,  
If we are developing a blog application where our client is Browser,  
then server can send HTML directly (SSR - Server Side Rendering) so that Browser can display it without less or no processing.
Here client (Browser) is dependent on server for how to render blog.

In case we are developing a blog application where our client can be a Browser or a Mobile etc. (cross-platform),  
then server must send data in the JSON format, that can be then processed by client to display a blog.
Here client (Browser, Mobile etc.) is not dependent on server for how to render blog.

2. Respect HTTP methods/verbs.

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

## HTTP Headers

HTTP headers are an important part of the API request and response  
as they represent the meta-data associated with the API request and response.

HTTP headers carry information for the request and response.

It is a good practice to prefix custom headers with "X-".
For example,
X-Some-Header-A
X-Some-Header-B

---

## HTTP Response Status Codes

https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status

---

## MongoDB

`show dbs`
Show databases.

`use <database-name>`
Use a particular database.

`show collections`
Show collections in the database.

`db.users.find({})`
`db.users.insert({...})`

---

## Server Side Rendering

SSR = Views are rendered on server side and then sent to the client.

For SSR we have different template engines available like:  
- [EJS](https://ejs.co/)
- [pug](https://pugjs.org/api/getting-started.html)
- [Handlebars](https://handlebarsjs.com/)

---

## Authentication

There are two types of authentication:

### #1 Stateful

Which maintains state or data on the server side.
Session data is maintained on server side - persistent (in-memory) or non-persistent (database).
Session id is saved into cookie and this cookie is sent to the client.
Client sends this session id via cookie in the subsequent requests.
Server validates session id and processes requests accordingly.

### #2 Stateless

No state or data maintained on the server side.

Explore -> Session vs. Cookie

### Stateful Authentication - order of execution  

* Display login form.
* User logs in by providing username/email and password.
* Server checks/validates credentials.
  If invalid then returns a failure response with 401 "Unauthorized" status.
  If all ok then it generates a session id/token and maps user data with it.
  Server saves this session entry.
  And then it sends session id/token in a cookie to the client.
  Here server can send this session id/token using any one of the following ways:
  * cookies (Web applications where the client is browser)
  * response body (Mobile applications where the client is a native application)
  * response headers (Mobile applications where the client is a native application)
* For the subsequent client requests where user authentication is required,
  client sends session id via cookie to the server,
  server gets session id/token from the cookie sent by client.
  Server then validates this session id and gets the user data from this session id/token.
  If either session id or user is not found then it redirects user to login.

So here server saves all the user data/state and maps it with a session id/token,
client only saves session id/token.
So state/data is maintained by the server.
This is stateful authentication.

Stateful Authentication key points:  

- Server maintains the state.
- Server requires more memory to maintain this state. Memory intensive.
- This state can be stored inside server memory (non-persistent) or a database (persistent).
  * If the state is stored in server memory then it is non-persistent,  
    meaning it will be lost when the server is restarted.
  * If the state is stored in the database then it is persistent,  
    meaning it is there even if the server is restarted.
- Sessions are short lived.
- Server has full controll over this state.
- Banking websites generally use sessions for security reasons.

### Stateless Authentication - order of execution

- Server generates a token in a way that -
  - it contains all the required data/state
  - encrypts it using a signature, tokens are signed
  - client can read the token but cannot modify it without a valid signature (only server has this signature)
- Server can send this token to the client using any one of the following ways:
  - cookie (for web applications)
  - directly in the response (for native apps)
- We implement using [JWT](https://www.jwt.io/)
- Tokens are long lived.
- A Token can be stolen to hijack user account.
- Server has limited control.

For Serverless Architecture  

- sessions or stateful authentication is not possible
- tokens or stateless authentication is used

Doubt/query/question

While implementing stateful authentication,
what if we store sessions (session id + user data) inside database.
It should not be a problem then?

Problems with this approach are:  

- For each request we need to fetch data from the database, latency is increased per request.
- Also number of read operations on the database are increased, because we need to fetch data from the database for each incoming request where authentication is required, which increases the cost of server operations.
- Session hijacking is easier, we just need a session id from cookie.


**latency**
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


