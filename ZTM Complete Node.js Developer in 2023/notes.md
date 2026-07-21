# Complete Node.js Developer by ZTM Udemy

**Index**

1. [Section 1: Introduction](./1784528248726.md)
2. [Section 2: Node.js Fundamentals: Foundations and Environment Setup](./1784528817835.md)
3. [Section 3: Node.js Fundamentals: Internals](./1784529764551.md)
4. [Appendix: How JavaScript Works](./1784541960477.md)
5. [Appendix: Asynchronous JavaScript](./1784549020530.md)
6. [Section 4: Node.js Fundamentals: Module System](./1784554385750.md)
7. [Section 5: Node.js Fundamentals: Package Management](./1784613835867.md)
8. [Section 6: Node.js File I/O - Planets Project](./1784630445576.md)

---

## #69 What is a Web Server?

![What is a Web Server?](images/what-is-a-web-server.png "What is a Web Server?")

Node.js is used to build back-ends of Web/Mobile applications.

Background  
Client/browser make request to our Web/Mobile application servers by hitting a URL.
These request URLs have the domain name of our application.
First the request goes to DNS server where domain name is resolved and it gives mapped internet address/IP address of the application server.
IP address is then cached and used in subsequent requests to the application server.
Client and Server communicate using HTTP/HTTPS protocol.

---

## #70 Introduction to HTTP Requests and Responses

Reference  
[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

---

## #71 HTTP Requests

HTTP Requests Example  
![HTTP Requests](images/http-requests.png "HTTP Requests")

HTTP Request Format  
![HTTP Request Format](images/http-request-format.png "HTTP Request Format")

An HTTP Request is consist of 4 things:  

- Method/HTTP Verbs
    GET, POST, PUT, DELETE etc.
- Path/Resource
    The resource that we want to access, create, delete etc.
- Headers
    They are data about data - meta data.
    There is always at least one header in each of the request, it is "Host".
- Body (Optional)
    The request data that we may provide while making a request.

More about Request Headers:  

- These are optional depending on your use case, but there's one header that every single request needs
to have.
- It's the "host" header, which specifies which server your request is being sent to, including sometimes
the port number for that site.
- The "host" needs to be specified to verify that you're sending your message to the right server.

Reference  
[What is an API?](https://www.mulesoft.com/resources/api/what-is-an-api)  
Many people ask themselves, "What is an API?" API is the acronym for application programming interface - a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.

APIs are all around us. Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you're using an API.

---

## #72 HTTP Responses

HTTP Response Format  
![HTTP Response Format](images/http-response-format.png "HTTP Response Format")

An HTTP Request is consist of 3 things:  

- Headers
- Body
- Status Codes

Reference  
[HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

---

## #73 Our First Webserver

**Code Examples**  
Check "21-first-http-server" application.

---

## #74 HTTP APIs and Routing

**Code Examples**  
Check "22-first-http-server-v2" application.

---

## #75 Parameterized URLs

**Code Examples**  
Check "22-first-http-server-v2" application.

---

## #76 Same Origin Policy

What is an Origin?
![Origin](images/origin.png "Origin")

Origin is made up of 3 things:  
Origin = Protocol + Host + Port

Why this is important?  
Because your browser/JavaScript uses the Same Origin Policy.

**Same Origin Policy**  

The same origin policy is a security feature by your browser that restricts what your
browser is allowed to load when you're browsing pages on the internet.

Say you're browsing a page on https://www.wikipedia.org. In general, will the following requests succeed, or fail?

1. A JavaScript GET request to www.bank.com.

2. A JavaScript POST request to www.bank.com.

3. Clicking an HTML link to a video on www.bank.com.

There are possible exceptions, but in general the following will be true:

1. This request will FAIL, because requests to get information from a cross-origin domain are not allowed by the browser. The browser is trying to protect your privacy by preventing https://www.wikipedia.org from stealing your private information from https://www.bank.com.

2. This request will SUCCEED. This is a little known exception to the Same Origin Policy! The decision to allow POST requests is mostly historical, but there is also a lower chance that a POST request will steal your private information. POST requests are used to write data to a server, rather than GET data from it, so it's less likely the response will contain private information.

3. This request will SUCCEED. The Same Origin Policy applies only to scripts and not static resources like HTML tags.

---

## #78 CORS (Cross Origin Resource Sharing)

**CORS**  

As a security feature, Browsers by default,
block cross origin requests so that you don't leak your data
to a site unintentionally.

We can allow cross origin requests that we expect
by sending this special header "Access-Control-Allow-Origin" in the response.

"Access-Control-Allow-Origin": "*"
Allows all requests from any site.

"Access-Control-Allow-Origin": ""
Whitelisting a specific set of sites (this is security best practice).

It's a way of relaxing the restrictions that the same origin policy puts on us developers.
So that we can make applications that potentially span many different domains and origins because the
same origin policy generally limits us in the browser to talking to just one origin.

Example,
Check how Wikipedia loads contents on its website.
https://en.wikipedia.org/wiki/Machine_learning
Check requests in the "Network" tab.

Check how the images are loaded in the "Network" tab.
They are loaded from a different domain - https://en.wikipedia.org.
For all of them if we check their Response Headers we can see that "access-control-allow-origin" is set to "*".
That is why it is possible to load images on the Browser even if it is coming from the different domain.

This CORS header ("access-control-allow-origin" set to "*") allows us as developers to allow an exception when we know requests from a different
domain are safe and expected.
This header is always set on the response.
And as controlled by the server who owns the data.

CORS follows the practice of "whitelisting".

**Whitelisting**  

> Whitelisting is the practice of explicitly allowing
> access to a particular privilege or service.
> It is the opposite of Blacklisting.

You can only allow requests to your server from the list of domains you trust by setting the CORS header.
"access-control-allow-origin"

When you follow blacklisting, it's really easy to miss one of the people or privileges that you want to block.

In whitelisting, you deny access by default and only allow access to a pre-approved list of people or services.

Blacklisting => Allow by default, block a list of people/services.
Whitelisting => Block by default, allow a list of people/services.

When it comes to security,
it's always better to whitelist than it is to blacklist.

And that's what the "access-control-allow-origin" header does.

The origins that you allow in the header are your whitelist.
And you're denying all other origins.

---

## #79 POSTing data to the server

**Code Examples**  
Check "22-first-http-server-v2" application.

---

## #80 Requests and Responses as Streams

**Code Examples**  
Check "22-first-http-server-v2" application.

---

## #84 Introduction to Express

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #86 Route Parameters

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #88 Development Dependencies

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #89 Middleware

Without Middleware  

![Without Middleware](images/without-middleware.png "Without Middleware")

With Middleware  

![With Middleware](images/with-middleware.png "With Middleware")

**Code Examples**  
Check "23-hello-expressjs" application.

**Built-in middleware**  

Express has the following built-in middleware functions:  

- [express.static](https://expressjs.com/en/5x/api.html#express.static) serves static assets such as HTML files, images, and so on.
- [express.json](https://expressjs.com/en/5x/api.html#express.json) parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
- [express.urlencoded](https://expressjs.com/en/5x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+

References  
[Writing middleware for use in Express apps](https://expressjs.com/en/guide/writing-middleware.html)

---

## #92 MVC (Model View Controller)

MVC Pattern  
![MVC (Model View Controller)](images/MVC-Pattern.png "MVC (Model View Controller)")

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #94 Express Routers

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #95 RESTful APIs

**RESTful APIs**  

REST is an acronym for:  
REpresentational
State
Transfer

General ideas for the RESTful APIs:  

- Use existing standards (HTTP, JSON, URL)
- Endpoints are collections of data
- Use GET, POST, PUT & DELETE HTTP verbs
- Make sense for the Client - Server architecture
- Requests are stateless and cacheable

---

## #96 CRUD (Create Read Update Delete)

References  
[REST Quick Tips](https://restapitutorial.com/introduction/restquicktips)

---

## #97 Sending Files

**Code Examples**  
Check "23-hello-expressjs" application.

---

## #98 Serving Websites with Node.js

For serving static files or contents we should use CDN like AWS CloudFront.
They are the best for this job.

---

## #107 API Server Setup

Need to revisit this setup code.
Not fully understand it.

Express is just a fancy listener function for our built-in Node.js HTTP server.

That is why server setup in "ztm-nasa-project" application is possible.

Benefits of using this approach

- handle HTTP requests
- use web sockets for real time communication

This is a structure that we can use for any scale of node application.

**Code Examples**  
Check "ztm-nasa-project" application.

---

## #108 Environment Variables On Windows

References  
[cross-env](https://www.npmjs.com/package/cross-env)

---

## #110 CORS Middleware

URL origin includes protocol, hostname and port.
Origin = Protocol + Hostname + Port

References  
[CORS Middleware Package](https://www.npmjs.com/package/cors)

**Code Examples**  
Check "ztm-nasa-project" application.

---

## #111 Models vs Controllers vs Routers

As in "ztm-nasa-project" application,
why it is a good idea to keep models separate from routers and controllers?

It is good to have related code together, that is why we keep routers and controllers together.
Because there is always a controller for a router for sure.

Routers <=> Controllers
Many to One

Generally each router will have its own unique controller.
In case of RESTful APIs we will have multiple resources routes handled by one Resource controller.

Models <=> Controllers
Many to Many

But for our models,
we might have multiple models used in one controller.
OR
A model can be used in multiple controllers as well.

---

Pre-Flight request??


