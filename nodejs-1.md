# Node.js Master

## Node.js Architecture. How it works?

Topics

1. What is Node.js?
2. Node.js Architecture
3. How Node.js code is executed
4. How Node.js is different from other multi-threading languages (C, C++, Java, Go etc.)?
5. Difference between Browser and Node.js execution, is there any difference or both are the same?
6. Reference link of the official Node.js documentation
7. Code example with same level callbacks
8. Code example with nested level callbacks
9. Code example for Thread Pool

---

## #1 What is Node.js?

Node.js = V8 + libuv

V8
JavaScript Engine which executes JavaScript code.

libuv
libuv is a multi-platform support library with a focus on asynchronous I⁠/⁠O.
Written in C.

JavaScript is single threaded language.

libuv provides Event Loop & Thread Pool.
