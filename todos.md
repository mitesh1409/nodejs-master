# Todos

1. What is Node.js? Introduction to Node.js.
2. explore how to setup eslint, prettier, npx eslint --init
3. Module systems in Node.js - CommonJS and ESM
4. Event loop
5. ZTM Course -> ### #360 Writing Optimized Code, learn more about this.

## Clustering in Node.js

Basic Example of Clustering in Node.js

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

I have following queries. Please help.

Q #1
Assuming we have 4 core CPU server.
So without clustering in place, Node.js runs on a single thread, so there is single process,  
and it uses only 1 core out of 4 cores. Rest of the 3 cores sit idle.
Server capacity is not fully utilized here.
Is that correct?

Q #2
Assuming we have 4 core CPU server.
With clustering in place, Node.js runs 1 Primary Process + 3 Worker Processes.
Worker Processes are also called Child Processes.
Is that correct? Are there any other names for the Worker Processes?

Q #3
Assuming we have 4 core CPU server.
With clustering in place, Node.js runs 1 Primary Process + 3 Worker Processes.
Primary process just spawns the worker processes, nothing else.
Worker processes does the actual job of processing incoming requests.
So for a 4 core CPU server, we have 3 Worker Processes which does the actual job,  
1 Primary Process handles all of the workers (spawns all the workers at the start, restart a worker when it crashes etc.)
Is that correct?

Q #4
Clustering allows to utilize server's full capacity,  
and then to handle high traffick we do horizontal scaling.

So my question is while creating a Node.js server we should always use clusters (as per the  
available CPU cores on the server). That way we fully utilize the server capacity regardless  
of the incoming traffick (low or high).

Q #5
Assuming we have 4 core CPU server.
With clustering in place, Node.js runs 1 Primary Process + 3 Worker Processes.
How many event loops will be there?

---

Great questions! Let me address each one clearly.

---

**Q1 — Single-threaded, single core without clustering**

You are mostly correct, but with a small nuance. Node.js *does* run on a single thread for JavaScript execution, meaning one process, and that process is generally pinned to one core. However, "the other 3 cores sit completely idle" is not entirely accurate — the OS can use other cores for I/O operations, libuv's thread pool (used for file system, DNS, crypto, etc.), and system-level tasks. But your *JavaScript execution* only ever uses 1 core. So yes, your application logic is under-utilizing the server.

---

**Q2 — 4 cores = 1 Primary + 3 Workers?**

Not quite. The code forks `numCPUs` workers, which equals **4** on a 4-core machine. So it's **1 Primary + 4 Workers = 5 total processes**. This is actually a common debate — some people fork `numCPUs - 1` to leave room for the primary, others fork `numCPUs` because the primary is lightweight.

As for naming, Worker Processes are also called:
- **Child Processes** (most common alternate name)
- **Slave Processes** (older literature, largely deprecated terminology)
- **Forked Processes** (since they are created via `cluster.fork()`)

---

**Q3 — Primary just spawns workers, workers do the real job?**

Mostly correct, but the primary does more than just spawn. Its responsibilities include:

- Spawning workers at startup
- **Distributing incoming connections** to workers (via round-robin by default on Linux/Mac)
- Monitoring worker health and restarting crashed workers
- Optionally passing messages between workers via IPC (Inter-Process Communication)

So the primary is genuinely a coordinator/load balancer, not just a launcher.

---

**Q4 — Always use clustering?**

This is sound thinking, but "always" is a slight overstatement. A few caveats:

- **Stateless architecture required** — sessions, in-memory caches, or WebSocket connections can break if not handled carefully across workers (use Redis or sticky sessions)
- **Overhead for simple/low-traffic apps** — for a small internal tool or a script, clustering adds unnecessary complexity
- **Better alternatives exist** — in production, tools like **PM2** (`pm2 start app.js -i max`) manage clustering for you, with restarts, monitoring, and logging built in. Raw `cluster` module is rarely used directly in production code.

That said, the core principle is correct: **for any production HTTP server, you should be running as many processes as CPU cores**.

---

**Q5 — How many event loops with clustering?**

**Each process gets its own event loop.** So on a 4-core server with 1 Primary + 4 Workers, you have **5 event loops** — one per process.

This is actually the key insight behind clustering: since Node.js can't have multiple threads sharing one event loop, clustering works around this by creating **multiple isolated processes**, each with its own:

- Event loop
- Memory heap
- V8 instance
- Module cache

They share nothing in memory — communication only happens via IPC message passing.

---

git add . && git commit -m "🚀" && git push
