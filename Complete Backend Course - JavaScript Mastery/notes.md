# Complete Backend Course

[Complete Backend Course | Build and Deploy Your First Production-Ready API](https://www.youtube.com/watch?v=rOpEN1JDaD0)

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

continue...

---

## Explore  

* How many IPV6 addresses are there?
* Can we map IPV4 address to IPV6? If yes then how? Are current domain names have IPV4 or IPV6?
* Are new domains using IPV4 or IPV6?
