# Complete Node.js Developer by ZTM Udemy

**Index**

1. [Section 1: Introduction](./1784528248726.md)
2. [Section 2: Node.js Fundamentals: Foundations and Environment Setup](./1784528817835.md)
3. [Section 3: Node.js Fundamentals: Internals](./1784529764551.md)
4. [Appendix: How JavaScript Works](./1784541960477.md)
5. [Appendix: Asynchronous JavaScript](./1784549020530.md)
6. [Section 4: Node.js Fundamentals: Module System](./1784554385750.md)

---

## Section 5: Node.js Fundamentals: Package Management

### #48 NPM: The Node Package Manager

**About npm**  

npm is the package manager for Node.js.  

Packages are bundles of code that we can reuse.  

Node.js has really really large ecosystem of libraries,  
we can find them at [npmjs.com](https://www.npmjs.com/).  

We use "npm" cli tool to manage and work with 3rd party packages in our application.  

**Refer**  
[npmjs.com](https://www.npmjs.com/)

---

### #49 Creating Our First NPM Package

**module vs package**  

A module is a file that contains some code which we can export to use it.  
A package is a collection of modules that have been packaged together to deliver a feature/functionality.  

**Initialize as package**  

Run `npm init` command to initialize our application as an npm package.  
It will create `package.json` file that contains all the necessary information.  

**Install a package**  

We can install a package using `npm install` command.  

**Setting up a start script**  

Set a start script to run our application using `npm run start` or `npm start` command.  

```JSON
/* inside package.json file */
  "scripts": {
    "start": "node https.js",
```

**Refer**  
[npm CLI](https://docs.npmjs.com/cli/v9/commands)

---

### #50 Packages And The NPM Registry

**Packages And The NPM Registry**  

package.json file only exists inside the Node.js packages.  
Most Node.js programs/applications are actually packages.  
They need to be packages in order to make use of other npm packages.  

We might not publish our package on [npmjs.com](https://npmjs.com).  

[npmjs.com](https://npmjs.com) is the registry where many reuseable packages are registered
and available for free to use to everyone.  

---

### #51 Using Third Party Modules

**axios package**  
Install and use axios package into our project.

**Code Examples**  
Check "apps/19-package-example" application.

---

### #52 The node_modules Folder

**node_modules**  

node_modules folder is at the root of our package/application.  
It contains all the 3rd party packages that we have installed using npm CLI tool.  

When we install any package using npm CLI tool, it gets downloaded from the npm registry  
and then it is saved into the node_modules folder.  

Now Node.js will load the dependencies from the node_modules folder.  

**Never ever modify the code inside node_modules**  

Its a bad idea to modify the code of the packages that are into node_modules folder.  
The 3rd party packages should be managed (install, update or remove) by npm CLI tool only.  

**node_modules contains all the dependencies**  

node_modules folder contains direct as well as indirect dependencies of our application.  
In other words node_modules contains direct dependencies and also contains dependencies  
of those dependencies (also called transitive dependencies).  

npm downloads and puts all the dependencies side by side into the node_modules folder.  
It does not create any nested folder structure.  

For example,  
When we install "axios" package, its dependency "follow-redirects" is also installed.  
npm puts "axios" and "follow-redirects" side by side into the node_modules folder.  

So it looks like:  
node_modules  
|-- axios  
|-- follow-redirects  

Our application dependencies create a dependency tree.  

**Heaviest object in the Universe meme**  

![Heaviest object in the Universe](images/heaviest-object-in-the-universe.png "Heaviest object in the Universe")

This comes from the early days of Node.js when the dependencies were duplicated,  
and we would have to do things like remove node_modules folder if things became  
corrupt during an install, which would happen fairely often.  

But now npm has improved exponentially, especially in the past few years.  

**node_modules must be inside .gitignore**  

We don't need to share application dependencies when we share our code.  
Application dependencies can be installed from scratch using `npm install`  
command using the information provided in the package.json & package-lock.json files.  
So we put node_modules inside .gitignore file.  

---

### #53 Semantic Versioning

**MAJOR.MINOR.PATCH**  

Given a version number MAJOR.MINOR.PATCH,  
increment the:  

1. MAJOR version when you make incompatible API changes  
2. MINOR version when you add functionality in a backward compatible manner  
3. PATCH version when you make backward compatible bug fixes OR security fixes  

**MAJOR**  
It can introduce breaking changes, major changes to the previous/current version.  
One or more features/functionality may be deprecated.  

**MINOR**  
Additional functionality with backward compatibility.  
It must not introduce any breaking changes.  

**PATCH**  
No new functionality.  
Security Fixes OR Bug Fixes which are important for the ongoing support/maintenance.  
It must not introduce any breaking changes.  

**Refer**  

- [Semantic Versioning](https://semver.org/)
- [About Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)

---

### #54 package-lock.json and Versioning

**When package.json & package-lock.json are created, updated?**  
`npm init` at the beginning $\rightarrow$ `package.json` is created.  
`npm install` first time $\rightarrow$ `package.json` is updated, `package-lock.json` is created.  
`npm install` subsequent $\rightarrow$ `package.json` is updated, `package-lock.json` is updated.  
`npm update` $\rightarrow$ `package.json` is updated, `package-lock.json` is updated.  

**Dependency Information**  
package-lock.json contains information about what all the dependencies are installed in our application
with their exact version.

Check the following example:

```JSON
  "dependencies": {
    ...
    "axios": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.3.3.tgz",
      "integrity": "sha512-eYq77dYIFS77AQlhzEL937yUBSepBfPIe8FcgEDN35vMNZKMrs81pgnyrQpwfy4NF4b4XWX1Zgx7yX+25w8QJA==",
      "requires": {
        "follow-redirects": "^1.15.0",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    },
    ...
```

version  
The exact version installed.

resolved  
The location from where the dependency is resolved/coming.

integrity  
It confirms that the installed package is not corrupted.

requires  
What are the dependencies of it.

> By using package-lock.json we ensure that the same version of dependencies will be
> installed whenever a project is setup again on the same or different system.

**Sementic Versioning Calculator**  
We can use [npm semver calculator](https://semver.npmjs.com/) to check the range of a  
dependency which can be installed/updated.

MAJOR.MINOR.PATCH  

* `>` or `>=` allows to update MAJOR, MINOR & PATCH versions.
* `^` allows to update MINOR & PATCH versions.
* `~` allows to update only PATCH versions.

Special Case for pre 1.0 versions:  
For example, go to [npm semver calculator](https://semver.npmjs.com/) and  
check "lodash" package for "^0.8.0" version.  
MINOR version is treated as a MAJOR version,  
and so in this case it allows to update only PATCH version.

---

### #55 Vulnerabilities In Dependencies

**Identifying and fixing security vulnerabilities**  
`npm audit`  
Runs a security audit.  

`npm audit fix`  
Fixes security vulnerabilities by updating the packages.  

`npm audit` will only highlight issues that have been already reported/discovered.  
And it can fix them automatically using `npm audit fix` if there is an available update for it.  
If there is no update available for the reported package then we need to switch to  
an alternative package which is more secure.

Do not ignore issues highlighted by `npm audit`.  
We should run `npm audit` periodically and fix highlighted issues.  

---

### #56 Installing NPM Tools: nodemon

**Refer**  
[nodemon](https://www.npmjs.com/package/nodemon)

---

## #58 Code For This Section

**Refer**  
[Planets Project](https://github.com/odziem/planets-project)

---

## #59 Exploring Planets With Node.js

**Refer**  
[NASA's Kepler Spacecraft](https://www.nasa.gov/mission_pages/kepler/launch/index.html)

---

## #60 Importing Kepler Space Telescope Data

**Refer**  
[NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/docs/data.html)

---

## Setting scripts for the project

In the package.json file we can set scripts for the project.
For example check the following:
```
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
Here we have set 3 scripts - start, dev & test.

We can execute the available script using `npm run <script-name>` command.

---

## #61 Setting Up Our CSV Parser

**File System Module or csv-parse package**  
We can read data from a file using Node.js [File System](https://nodejs.org/api/fs.html) module.
But we will use 3rd party package [csv-parse](https://www.npmjs.com/package/csv-parse) to read and parse the CSV file.

**Refer**  
[Node.js | File System](https://nodejs.org/api/fs.html)
[CSV parser for Node.js and the web](https://www.npmjs.com/package/csv-parse)
[CSV Parser for Node.js | Documentation](https://csv.js.org/parse/)
[Are we alone in the universe?](https://exoplanets.nasa.gov/search-for-life/can-we-find-life/)

---

## #63 Streaming Large Data Files

**Streams in Node.js**  
In Node.js all streams are implemented using the event emitter.
Where the events are emitted by Node.js and we just react to the events
on that stream using the "on" function.

**Refer**  
[csv-parse | Node.js Stream API](https://csv.js.org/parse/api/stream/)

---

## #64 Reading Our Planets Data

**fs.createReadStream**  
Read the file using [fs.createReadStream](https://nodejs.org/api/fs.html#fscreatereadstreampath-options) function.

**Refer**  
[Creating Read Streams in Node.js](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)

**Code Examples**  
Check "20-planets-project" application.

---

## #65 Parsing Our Planets Data

**`readable.pipe(writable);`**
`fs.createReadStream('./kepler_data.csv')` is piped to a writable stream.

![A read stream is piped to a write stream](images/readStream-pipe-writeStream.png "A read stream is piped to a write stream")

A readable stream provides input for a writable stream.
`readable.pipe(writable);`

readable stream = the data that comes in from some source.
writable stream = the data that will be processed.

**Code Examples**  
Check "20-planets-project" application.

---

## #66 Finding Habitable Planets

**Refer**  
[Review of the Best Habitable Planet Candidates](https://www.centauri-dreams.org/2015/01/30/a-review-of-the-best-habitable-planet-candidates/)

---

## #67 Exploring Habitable Planets

**Refer**  
[The Habitable Exoplanets Catalog](https://phl.upr.edu/projects/habitable-exoplanets-catalog)

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


