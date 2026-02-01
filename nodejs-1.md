# Node.js Master

## Node.js Architecture. How it works?

Topics

- What is Node.js?
- Node.js Architecture
- How Node.js code is executed
- How Node.js is different from other multi-threading languages (C, C++, Java, Go etc.)?
- Difference between Browser and Node.js execution, is there any difference or both are the same?
- Reference link of the official Node.js documentation
- Code example with same level callbacks
- Code example with nested level callbacks
- Code example for Thread Pool

---

### What is Node.js?

Node.js = V8 + libuv

V8
JavaScript Engine which executes JavaScript code.

libuv
libuv is a multi-platform support library with a focus on asynchronous I⁠/⁠O.
Written in C.

JavaScript is single threaded language.

libuv provides Event Loop & Thread Pool.
