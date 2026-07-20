# Complete Node.js Developer by ZTM Udemy

**Index**

1. [Section 1: Introduction](./1784528248726.md)
2. [Section 2: Node.js Fundamentals: Foundations and Environment Setup](./1784528817835.md)
3. [Section 3: Node.js Fundamentals: Internals](./1784529764551.md)

---

## Appendix: How JavaScript Works

### #353 JavaScript Engine

JavaScript Engine OR ECMAScript Engine
Using JavaScript Engine computer can understand JavaScript code.
OR
Using JavaScript Engine we can execute JavaScript code.

Examples of JavaScript Engine
- V8 for Google Chrome
- SpiderMonkey for Mozilla Firefox
- JavaScriptCore for Apple Safari

**Who created the first JavaScript Engine?**  

The first JavaScript engine, named SpiderMonkey, was created by Brendan Eich while he was working at Netscape Communications Corporation in 1995. This engine was an interpreter for the JavaScript language (initially called Mocha, then LiveScript) within the Netscape Navigator web browser.  

Brendan Eich designed JavaScript in just ten days to add dynamic and interactive features to static HTML web pages. The language and its original SpiderMonkey engine were written in the C programming language.  

The SpiderMonkey engine is still in use today, primarily in the Mozilla Firefox browser and other Mozilla-based applications. Modern JavaScript engines, including SpiderMonkey, are much more advanced and use just-in-time (JIT) compilation for improved performance compared to the original interpreter.

---

### #355 Inside the JavaScript Engine

**Inside JavaScript Engine**

![Inside JavaScript Engine](./images/javascript-engine.png "Inside JavaScript Engine")

JavaScript Code ---- Input ----> JavaScript Engine
-> Parsing
-> AST
-> Interpreter -> Bytecode
AND
-> Interpreter -> Profiler -> Compiler -> Optimized Code

When JavaScript Code is given as input to JavaScript Engine:
* First it does lexical analysis, which breaks the code into tokens to identify their meanings so that we know what the code is trying to do.
* These tokens form an AST (Abstract Syntax Tree). Try [AST Explorer](https://astexplorer.net/) to get an idea.
* Then comes Interpreter.

**Reference**

* [AST Explorer](https://astexplorer.net/)

---

### #356 JavaScript Engine for all

Since everybody can create their own JavaScript Engine,  
it will just be total chaos if there are no standards followed.

Which is why ECMAScript was created to standardize JavaScript Engines.

ECMAScript tells people, here is the standard way to do things in JavaScript,  
it decides how the JavaScript language should be standardized.  
ECMAScript tells JavaScript Engine creators this is how JavaScript should work,  
but internally, how you build the engine is up to you as long as it conforms  
to the standards.

---

### #357 Interpreters and Compilers

In programming, there are two ways to translate programming language into  
machine language.

* Interpreter
* Compiler

**Interpreter**

We read & translate the code into machine language line by line on the fly.

Pros  
Interpreters are quick to get up and running.
That is why JavaScript used Interpreters at the beginning.

Cons  
Running the same code over and over (for example calling a function from a loop),  
even though it gives the same result, it becomes really slow.  
It does not save the result it Interpretes again and again.  


**Compiler**

Compiler, like an Interpreter, doesn't translate line by line on the fly.
But Compiler, works ahead of time to translate whole file into the language  
that machine can understand.

Pros  
Compiler performs optimizations like it will not repeat the processing of the same code/function.  
It kinda stores the results and uses it directly instead of processing the same code again and again.  
Code execution is faster compared to Interpreter because of code optimizations.

Cons  
Takes a little bit longer to get up and running.
It takes little bit more time to start up because it has to go through that compilation step.

**JIT Compiler**

JIT (Just In-time Compiler) = Compiler + Interpreter
JIT Compiler is the combination of Compiler & Interpreter.

![Inside JavaScript Engine](./images/javascript-engine.png "Inside JavaScript Engine")

JavaScript Code ---- Input ----> JavaScript Engine
-> Parsing
-> AST
-> Interpreter -> Bytecode
AND
-> Interpreter -> Profiler -> Compiler -> Optimized Code

Bytecode is code that is not as low level as machine code,  
but it is code that is able to be interpreted by the JavaScript Engine  
in order to run JavaScript apps.

This is the first step in executing JavaScript code.

Now there is something called "Profiler"/"Monitor",  
it checks/monitors/watches our code as it runs.  
It makes notes on how we can optimize this code.  

And using this Profiler as the code is running through our Interpreter,  
which tells our browser what to do.  
If the same lines of code run a few times,  
we actually pass off some of this code to the Compiler/JIT Compiler,  
because as the code is running, the Interpreter is going to say,  
hey, here is some code for you to optimize, passes it off to the compiler  
and the compiler as the application is running, takes a code and  
compiles it or modifies it, so it does what you ask it to,  
but trying to make optimizations so it runs faster.  

And it then replaces the sections where it could be improved of the bytecode  
with optimized machine code.  
So that optimized code is then used from that point on instead of the slower bytecode,  
so it mixes and matches things, and it constantly runs through this loop.  

This means that the execution speed of the JavaScript code that we entered into  
the JavaScript Engine is going to improve gradually,  
because the Profiler and the Compiler are constantly making updates and changes  
to our Bytecode in order to be as efficient as possible.

So Interpreter allows us to run the code right away,  
and the Compiler and Profiler allows us to optimize  
this code as we're running.  
That's where the name comes from - JIT Compiler (Just In-time Compiler).

**Is JavaScript an interpreted language?**

Earlier versions of JavaScript were interpreted,  
but then JavaScript Engines gradually changed their implementations of  
executing JavaScript code.  
Modern JavaScript Engines come with JIT Compilers to execute JavaScript code.  
JIT Compiler is the combination of Interpreter & Compiler.  

---

### #360 Writing Optimized Code

In order to help JavaScript Engine, you need to be careful with the following:  

* `eval()` - use of `eval()` function.
* arguments - function arguments and how to use parameter destructuring to avoid using arguments
* for in - looping over objects using for in
* with
* delete

Explore about:

* Hidden Classes
* Inline Caching

**References**

* [Managing Arguments](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments)
* [Javascript Hidden Classes and Inline Caching in V8](https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html)

---

### #361 WebAssembly

**Why not just use machine code from the beginning?**

Compiling the code ahead of time or compiling the code in the browser was not feasible at all,  
because back in the day that was really really slow.  

All the browsers will have to agree on the same executable format to run JavaScript.  

Browsers have different ways of doing things, there is no real standard.  

WebAssembly  
We now have the standard binary executable format called web assembly.

---

### #362 Call Stack & Memory Heap

**Memory Heap**  
A place to allocate, use & release memory.  
Takes care of memory.  

**Call Stack**
A place to keep track of where we are in the code so that we can run the code in order.  
Takes care of execution.  

---

### #363 Stack Overflow

```JavaScript

function blowCallStack() {
    blowCallStack();
}

blowCallStack();

```

It gives the below error in console:  
`Uncaught RangeError: Maximum call stack size exceeded`

---

### #364 Garbage Collection

JavaScript is a Garbage Collected language, means it automatically does the job of  
garbage collection or freeing up memory which is not in use.

Garbage collector frees up memory on the heap and prevents memory leaks.

So how does garbage collection actually work in JavaScript?  
Well, it uses something called "mark and sweep algorithm".  
We mark what we need and sweep what we don't.  

---

### #365 Memory Leaks

```JavaScript

// Example #1

let numbers = [];

// Infinite loop to add elements in the array above.
for (let i = 1; i > 0; i++) {
    numbers.push(i);
}

// Example #2
setInterval(() => {
    // referencing variables, objects etc.
    // these are never going to be Garbage Collected until we clear this interval.
}, 1000);
```

Guidelines to avoid Memory Leaks:  

* Avoid too many Global variables
* Event listeners - remove them when they are not in use any more.
* `setInterval` - variables, objects used inside the callback are never going to be Garbage Collected if we have not cleared the interval.

**References**

* [Garbage Collection in Redux Applications](https://developers.soundcloud.com/blog/garbage-collection-in-redux-applications)
* [Window: setInterval() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)

---

### #366 Single Threaded

JavaScript is a Single Threaded programming language.

Well, being single threaded means that only one set of instructions is executed at a time.  
It's not doing multiple things.  

And the biggest way to check that a language is single threaded is, well,  
it has only one call stack.  

This one call stack allows us to run code one at a time.  
We're never running functions in parallel.  

The call stack keeps growing as we push new functions on the stack and  
then we pop them one at a time.

And because of this JavaScript is Synchronous.

---

### #367 Issue with Single Thread

**What problems do you see with Synchronous code?**

Since JavaScript is Single Threaded & Synchronous,  
it becomes really difficult if we have a long running task.  

---

### #368 JavaScript Runtime

JavaScript Runtime has the following components:

* V8 JavaScript Engine
    * Call Stack
    * Memory Heap
* Web APIs
* Event Loop
* Callback Queues (Task Queue, Microtask/Priority Queue etc.)

**Web APIs**  
The Web APIs comes with the browser, Chrome, Microsoft Edge, Safari, Firefox.
Web APIs can do variety of things like - 

* send HTTP requests - using `fetch()` for example.
* listen to DOM events
* use timers - `setTimeout`, `setInterval` etc.
* caching or database storage on the browser, `indexedDB` for example.
* alerting - using `alert()`

All the Web APIs are available under the `window` global object.

**JavaScript Runtime**  

![JavaScript Runtime](./images/javascript-runtime-2.png "JavaScript Runtime")

**Code Example**  

```JavaScript
function printHello() {
    console.log('Hello from baz');
}

function baz() {
    setTimeout(printHello, 3000);
}

function bar() {
    baz();
}

function foo() {
    bar();
}

foo();
```

**References**  

* [loupe - JavaScript Runtime Playground](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

---

### #369 Node.js

Node.js is a free, open-source, cross-platform JavaScript runtime environment  
that lets developers create servers, web apps, command line tools and scripts.

---

## Appendix: Asynchronous JavaScript

### #372 Section Overview

**Asynchronous JavaScript Topics**  

- Web APIs
- Async/Await
- Callbacks
- Microtask Queue (Job Queue)
- Task Queue (Callback Queue)
- Promises
- Event Loop

**JavaScript Runtime**  
![JavaScript Runtime](images/javascript-runtime.png "JavaScript Runtime")

Once JavaScript engine sees something that is asynchronous or something that is timeout which is
the part of the Web API, we send it over to the Web API.
Then the Web API is going to do something for us in the background,
when it is done it will add callback/listener function in the "Callback Queue".
And then the "Event Loop" checks if the "Callstack" is empty and our entire JavaScript file has
been read once. If the "Callstack" is empty it pushes the "Callback" into it.
So the "Event Loop" monitors the "Callstack" and the "Callback Queue".

Once Callstack is empty and entire JavaScript file is read once,
it is time to check and execute callbacks/jobs available in the Callback/Task Queue & Microtask/Priority Queue.

Psuedocode for the Event Loop looks like below:

```
// while Node.js code is running
while (!shouldExit) {
    // process all the events, execute corresponding callback when an event occurs
    // it will push callbacks into "Callback Queue"
    processEvents();

    if (emptyCallStack && !emptyCallbackQueue) {
        // executes callbacks in FIFO order from the "Callback Queue"
        executeCallback();
    }
}
```

The Event Loop is a piece of code in libuv that processes Asynchronous events.

**Refer**  
[replit](https://replit.com/)

---

### #373 Promises

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise

**About Promises**  
Promises are a new feature in JavaScript as of ES6.
Promises are part of JavaScript and they provide "native" way of writing/handling
Asynchronous code in JavaScript.

> A promise is an object that may produce
> a single value some time in the future.
> Either a resolved value,
> or a reason that it is not resolved (rejected).

A promise can be in any one of the following stats:

- Pending
- Resolved/Fulfilled
- Rejected

**Promises Vs Callbacks**  
Prefer Promises over Callbacks.

Nested callbacks make the code hard to read and maintain.
Some examples of the nested callbacks are as below:

"Callback pyramid of doom"

Example #1

```JavaScript
grabTweets('twitter/johnwick', (error, johnWickTweets) => {
    if (error) {
        throw Error;
    }

    displayTweets(johnWickTweets);

    grabTweets('twitter/ironman', (error, ironManTweets) => {
        if (error) {
            throw Error;
        }

        displayTweets(ironManTweets);

        grabTweets('twitter/thor', (error, thorTweets) => {
            if (error) {
                throw Error;
            }

            displayTweets(thorTweets);
        });
    });
});
```

Example #2

```JavaScript
movePlayer(100, 'Left', function() {
    movePlayer(400, 'Left', function() {
        movePlayer(10, 'Right', function() {
            movePlayer(330, 'Left', function() {
                // some code...
            });
        });
    });
});
```

Using Promises we can rewrite the above examples as follows:

Example #2

```JavaScript
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));
```

Promises are very useful in writing Asynchronous code.

`fetch()` function returns a Promise.

NOTE:
Promises execute when we attach "then()" or prefix it with "await".

An Asynchronous function is a Promise which needs to be resolved/rejected.
So when we call such a function it returns a Promise.
We need to wait for the results, so we put await in front of it to get results.

OR the other way is once Promise is fulfilled or rejected then we take next steps.
So we attach "then()" and provide a callback to perform next steps.

**Code Examples**  
Check "apps/5-resolved-rejected-promises" application.  
Check "apps/6-multiple-promises" application.

**Refer**  
[SWAPI - Star Wars API Integrations](https://pipedream.com/apps/swapi)

---

### #374 ES8 - `async`, `await`

**About `async`, `await`**  
`async`, `await` are part of ES8 and they are built on top of Promises.

An async function returns a Promise.

`async`, `await` makes the Asynchronous code look like the Synchronous code,
which is even more readable.

`async` `await` code are just Promises underneath the hood, they are just syntactic sugar.  
We call the syntactic sugar something that still does the same thing,  
but it's just different syntax to make it look prettier.

Examples

```JavaScript
// Using the Promise
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'));

// Using aync await
async function playerStart() {
    await movePlayer(100, 'Left'); // pause
    await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
}

playerStart(); // this will execute asynchronously
// await playerStart(); // this will execute synchronously, we are waiting for playerStart() to complete.


// Using the Promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((jsonResponse) => console.log(jsonResponse));

// Using aync await
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

fetchUsers(); // this will execute asynchronously
// await fetchUsers(); // this will execute synchronously, we are waiting for fetchUsers() to complete.
```

**Code Examples**  
Check "apps/7-async-await" application.

---

### #375 ES9 (ES2018)

**Object Spread Operator**  
[Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Code Examples**  
Check "8-object-spread-operator" application.

---

### #376 ES9 (ES2018) - Async

Using `finally` in the Promises.

Using `for await` to loop through the Promises.

**Code Examples**  
Check "apps/9-promise-finally" application.
Check "apps/7-async-await" application.

---

### #377 Job Queue

**Microtask Queue Vs Task Queue**  
Microtask Queue (Job Queue)
Callbacks in the Asynchronous code which is part of the JavaScript (like Promises)
are put on the Microtask Queue/Job Queue.

Task Queue (Callback Queue)
Callbacks in the Asynchronous code which is not part of the JavaScript (like setTimeout)
are put on the Task Queue/Callback Queue.

setTimeout is a part of the Web API.

> The Microtask Queue/Job Queue has higher priority over the Task Queue/Callback Queue.
> So the Event Loop checks and executes all the callbacks from the Microtask Queue/Job Queue
> first and then the Task Queue/Callback Queue.

![JavaScript Runtime](images/javascript-runtime-2.png "JavaScript Runtime")

**Code Examples**  
Check "apps/3-async-app" application.

---

### #378 Parallel, Sequence & Race

**3 ways to execute Promises**  

Promises can be executed in 3 ways  

- Parallel
- Sequencial
- Race

Parallel
`Promise.all()`
Promises execute in parallel to each other.
Callback will be executed once all of them finishes their execution.

Sequencial
Promises execute in sequence, one after the other.
Callback will be executed once all of them finishes their execution.

Race
`Promise.race()`
Technically all Promises will start at the same time, they run in parallel.
Hence there is a race, the one which finishes first is a winner.
As soon as one of the Promises finishes first, Callback will be executed.

NOTE: Is there a limit for how many promises can run in parallel?

**When to use what?**  
If we want to execute all of the promises regardless of their order of execution
then we should use Parallel method.

If we want to execute all of the promises in a specific order
then we should use Sequence method.

If we want to execute all of the promises but move forward with the one
which finishes first then we should use Race method.

**Parallel, Sequence, Race which is fastest?**  

Lets take an example,
assume there are 3 promises - first, second, third.
first takes 10 milli seconds, second takes 20 milli seconds & third takes 30 milli seconds
to complete.

When using Race, the first promise will be completed first,
so it takes 10 milli seconds.

When using Parallel, all promises will execute in parallel,
it will take at least 30 milli seconds.

When using Sequencial, all promises will execute one after the other,
so it will take at least 10 + 20 + 30 = 60 milli seconds.

Race > Parallel > Sequence

**Code Examples**  
Check "apps/10-promises-parallel" application.
Check "apps/11-promises-race" application.
Check "apps/12-promises-sequence" application.

---

### #379 ES2020: allSettled()

**`all()` vs `allSettled()`**  
`allSettled()` in promises is part of ES2020.

When all the promises inside `Promise.all` are resolved, it executes the callback in `then`.
If anyone of them fails then it executes the callback in `catch`.

When all the promises inside `Promise.allSettled` are settled, it executes the callback in `then`.

When promise finishes its execution it can be in either Fulfilled/Resolved or Rejected status,
and we say that the promise is settled now, it is no more in Pending status.
When a promise is settled, it can be in either Fulfilled or Rejected status.

`allSettled()` executes all the promises regardless of their status,
it gives chance to execute all of the promises.
Whereas `all()` finishes (short circuits) as soon as one of the promises failed to resolve.

`allSettled()` returns an array of settled promises.
When all of the promises resolved `all()` returns an array of result of the resolved promises,
if one or more promises are rejected then `all()` executes catch block to handle failure
or throws an exception if catch block is not present.

**Code Examples**  
Check "apps/13-allSettled" application.

---

### #380 Threads, Concurrency & Parallelism

**Threads, Concurrency & Parallelism**  
A web worker is a JavaScript program running on a different thread in parallel to our main thread.

Concurrency in single core CPU  
Since there is a single CPU, it can only execute one thread at a time.
So CPU switches between multiple threads.

Concurrency & Parallelism in multi core CPU  
Since there are multiple CPUs, it can execute multiple threads simultaneously or in parallel.

![Concurrency in Single-Core CPU Vs Multi-Core CPU](images/single-core-multi-core-cpu.png "Concurrency in Single-Core CPU Vs Multi-Core CPU")

![Multiple Requests Handling by Node.js](images/nodejs-requests-handling.png "Multiple Requests Handling by Node.js")

![Multiple Requests Handling by PHP](images/php-requests-handling.png "Multiple Requests Handling by PHP")

![The Node.js System](images/nodejs-system.png "The Node.js System")

**Refer**  

- [Scaling Node.js Applications](https://www.freecodecamp.org/news/scaling-node-js-applications-8492bd8afadc/)
- [Child processes](https://nodejs.org/api/child_process.html)

---

## Section 4: Node.js Fundamentals: Module System

### #38 The require Function

**Use require to reuse a Module**  
We can breakdown and organize our code into smaller more manageable files - the modules.  
We can reuse the modules as per the requirements.

Node has a built-in function called `require()` which is not part of the JavaScript.  
`require()` takes a JavaScript file, executes it and then returns the code from that file  
so that we can reuse it elsewhere.

We can require any of the built-in modules, like  
`require('http')`  
`require('events')`  
by passing in the name of the module as a string.

![Node.js Modules](./images/node-modules.png "Node.js Modules")

---

### #39 Making HTTP Requests

**Refer**  

- [Node.js | HTTP](https://nodejs.org/dist/latest-v18.x/docs/api/http.html)
- [Node.js | HTTPS](https://nodejs.org/dist/latest-v18.x/docs/api/https.html)

**Code Examples**  
Check "apps/14-http-app" application.

---

### #40 Why Use Modules?

**Module and its benefits**  

What is a Module?  
Imagine a module as a box.  
This box contains some code which is dedicated to doing one thing well.  
We can name/label this box.

We can then combine/use multiple modules to create our app.

So generally an app relies/depends on multiple modules.

Benefits of using modules:

1. Reuse existing code. DRY principle.
2. Organize your code. Clean & maintainable code.
3. Expose only what will be used. Encapsulation. Blackbox.
   Implementation details relevant to the module are kept hidden from the outside world.
   Lower level details remain hidden.
4. Responsible for doing one thing well. S in SOLID - Single Responsibility.

---

### #41 Creating Our Own Modules

**Creating & using modules in our app**  

We can create our modules and use them in our app.

Functions and variables in a module are private to that module,
that means we can't access them from other modules.
To use them in other modules we need to "export" them.

"module" is a global built-in that contains data related to the current module.
`console.log(module);` do this in your module and check the results.

The functions and variables of a module that we want to be available in other modules
need to be set using `module.exports` object.

![require.extensions](./images/require-extensions.png "require.extensions")
require function by default looks for the .js files first,
then it looks for .json and then at last .node files.

binary .node files is an advanced feature, where we can write add-on in C++
and import it as a Node.js module.

**Code Examples**  
Check "apps/15-modules-example" application.

---

### #42 Exporting From Modules

**Exporting From Modules**  
Use the following recommended style to export the things from the module.

```JavaScript
module.exports = {
    one,
    two,
    three
    // and so on...
};
```

Benefits of using this method are,

- all the things which are exported from the module are in one place.
- it becomes very easier to locate and check all the exported things.

---

### #43 CommonJS vs ECMAScript Modules

**CommonJS vs ECMAScript Modules**  

When we use `require` function, we are using CommonJS modules.  
In other words CommonJS modules are imported using `require` function,  
and they are exported using `module.exports`.  
CommonJS is mostly known for being used in Node.js.  
It is also used in MongoDB.

CommonJS modules  
It is the default module system used by Node.js.  
Specifically developed for Node.js.  
import => use `require` function  
export => use `module.exports` statement  
It is used in Node.js and MongoDB.  

ECMAScript Modules are also known as ES6 modules or ESM for short.  
ES6 modules are imported using `import` statements and exported using `export` statement.  

ECMAScript Modules/ES6 Modules  
It was introduced in ES6/ES2015 language specification.  
It is a JavaScript standard and can be used in any JavaScript Runtime (like browsers, Node.js etc.).  
import => use `import` statement  
export => use `export` statement  
It is used in Browser side & Node.js as well.  

**Refer**  

- [CommonJS Modules](https://nodejs.org/dist/latest-v18.x/docs/api/modules.html)
- [ECMAScript Modules](https://nodejs.org/dist/latest-v18.x/docs/api/esm.html)
- [JavaScript import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [JavaScript export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [Modules: CommonJS modules](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)

---

### #44 Creating Our Own ECMAScript Modules

**CommonJS module by default**  

Node.js treats JavaScript file as CommonJS module by default for backwards compatibility.
Node.js has been using CommonJS since it was created.

**To use ES6 module**  

We need to explicitly tell it to treat your code as an ECMAScript module by naming the file
with .mjs extension, where "m" stands for module.

To load an ES6 module, set `"type": "module"` in the `package.json` or use the `.mjs` file extension.

**Code Examples**  
Check "apps/16-es6-modules-examples" application.

**Refer**  

- [ESM](https://nodejs.org/api/esm.html)
- [Mandatory file extensions](https://nodejs.org/api/esm.html#mandatory-file-extensions)

---

### #45 Module Caching

**Module Caching in CommonJS**  

In a large application, it is very likely that we require the same module at multiple places.

Node.js maintains a cache of required modules,  
which is basically a little database of these required modules  
that Node.js checks before loading any module.  

So if the module is already loaded then it will be found in the cache  
and Node.js won't load it again, if the module is not found in cache  
then that module is loaded and then cached.  
That way Node.js ensures that the required modules are loaded only once.  

This cache is "global" and lives under `require.cache` object.  
We can check it using `console.log(require.cache)`.  

Node.js uses built-in module `require` and `require.cache` object to  
implement CommonJS module functionality.  
We can't edit built-in module `require`.  

**Code Examples**  
Check "apps/15-modules-example" application.  

**Module Caching in ESM**  

ESM/ES6 Modules in Node.js handle caching differently than CommonJS modules.  

ES Modules implement their own caching mechanism that is distinct from the  
`require.cache` object used by CommonJS.  

Here's how it works:  

- **Module Identity**: Node.js identifies each ES module by its full, resolved URL. When an `import` statement is executed, Node.js checks a module map to see if that URL has already been loaded.
- **First Import**: The first time a module is imported, Node.js fetches it, parses it, and adds it to the module map.
- **Subsequent Imports**: Any subsequent `import` statement for the same URL will simply return a reference to the already-loaded module from the map.

Unlike `require.cache`, there is no public, built-in object that you can inspect or manipulate  
to view the ESM cache. The caching is handled internally by Node.js, providing a more reliable  
and encapsulated system. This design prevents unintended side effects that could occur from  
directly modifying a global cache.

**Refer**  

- [Modules Caching](https://nodejs.org/api/modules.html#caching)

---

### #46 Using `index.js`

**How `index.js` inside a folder works**  

`index.js` is a special case in Node.js.  
It allows us to treat a folder like a module.  

When we pass path to a folder to the `require()` function,  
it results to the `index.js` file inside of that folder.  

The `index.js` file exports an object that contains all the data & functions  
that we want to export from the folder.  

The `index.js` allows us to import/export multiple modules grouped into a folder.  

**Code Examples**  
Check "apps/17-modules-example-v2" application.

---

### #47 Should We Use `index.js`?

**Should We Use `index.js`?**  

This is a controversial subject among Node.js developers.  
Some love to use it and some don't.  

It is preferred by many developers - not to use `index.js`.  
"Ryan Dahl" himself pointed out this in his talk "10 Things I Regret About Node.js" about this.  
Things are much more simpler when we don't use `index.js`,  
it just adds additional layer around import/export that we can avoid.  

**Refer**  

- [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU](https://www.youtube.com/watch?v=M3BM9TB-8yA)
- [Modules All together](https://nodejs.org/api/modules.html#modules_all_together)

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


