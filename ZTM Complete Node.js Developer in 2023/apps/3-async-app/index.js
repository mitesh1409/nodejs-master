// The callback goes to Task Queue. It is part of the Web API.
setTimeout(
    (data) => {
        console.log(`Callback for the setTimeout ${data}`);
    },
    40,
    'ONE'
);

// The callback goes to Task Queue. It is part of the Web API.
setTimeout(
    (data) => {
        console.log(`Callback for the setTimeout ${data}`);
    },
    30,
    'TWO'
);

// The callback goes to Task Queue. It is part of the Web API.
setTimeout(
    (data) => {
        console.log(`Callback for the setTimeout ${data}`);
    },
    20,
    'THREE'
);

// The callback goes to Micro-task Queue/Priority Queue. Promises are part of JavaScript as of ES6.
Promise.resolve('One')
        .then(
            (data) => {
                console.log('Callback for the Promise with data', data);
            }
        );

// The callback goes to Micro-task Queue/Priority Queue. Promises are part of JavaScript as of ES6.
Promise.resolve('Two')
        .then(
            (data) => {
                console.log('Callback for the Promise with data', data);
            }
        );

// The callback goes to Micro-task Queue/Priority Queue. Promises are part of JavaScript as of ES6.
Promise.resolve('Three')
        .then(
            (data) => {
                console.log('Callback for the Promise with data', data);
            }
        );

Promise.resolve('Four')
    .then(
        (data) => {
            console.log('Callback for the Promise with data', data);

            setTimeout(
                (data) => {
                    console.log(`Callback for the setTimeout ${data}`);
                },
                10,
                'FOUR'
            );
        }
    );

// Delay loop. Blocks the main thread.
console.time('Delay loop');
for (let i = 1; i <= 100000000; i++) {
    // Delay loop.
}
console.timeEnd('Delay loop');

// It will run synchronously by the JavaScript.
console.log('Last line :)');


// Explanation

/**

~ Synchronous Code Execution ~

First all of the synchronous code will be executed line by line - from top to bottom.

// Following is not correct.
// First 3 setTimeouts will populate "Callback/Task Queue" with callbacks to be executed later on.

// Correction as follows:
First 3 setTimeouts will register their corresponding callbacks, total 3 callbacks are registered and their timers are started.
Please note that timers are executing in the background and as soon as a timer is expired corresponding callback will be pushed to the Callback/Task Queue, from there it will be picked up by Event Loop for execution.

// Following is not correct.
// After this, 4 Promises will populate "Microtask/Job Queue" with callbacks.

// Correction as follows:
After this, 4 Promises will register their corresponding callbacks, total 4 callbacks are registered.

A delay loop will be executed if it is in place (uncommented).

Last line will be executed.

At this point
- 3 callbacks registered by 3 setTimeouts, "Callback/Task Queue" will be populated once timers are expired
- 4 callbacks registered by 4 Promises, "Microtask/Job Queue or Priority Queue" has 4 callbacks

Also since Promises are resolved immediately their corresponding callbacks are ready for execution so they are pushed into the "Microtask/Job Queue or Priority Queue".


~ Asynchronous Code Execution ~

"Microtask/Job Queue or Priority Queue" gets priority over "Callback/Task Queue".

Event Loop first checks if there is any callback available in the "Microtask/Job Queue or Priority Queue".
If there is any callback available then it will be picked up by Event Loop for execution.

Once "Microtask/Job Queue or Priority Queue" is empty, Event Loop then checks "Callback/Task Queue".
If there is any callback available then it will be picked up by Event Loop for execution.

This is how all the callbacks are executed by the Event Loop one by one.

All the 4 Promises are resolved immediately one by one and their corresponding callbacks are ready for execution so they are pushed into the "Microtask/Job Queue or Priority Queue".

Order of execution
callback of Promise 1

callback of Promise 2

callback of Promise 3

callback of Promise 4
    setTimeout will push one more callback in the "Callback/Task Queue",
    so now there will be 4 callbacks in the "Callback/Task Queue"

At this point
"Microtask/Job Queue or Priority Queue" has 0 callbacks
"Callback/Task Queue" has 4 callbacks

callback of setTimeout 1 (considering timer 0)

callback of setTimeout 2 (considering timer 0)

callback of setTimeout 3 (considering timer 0)

callback of setTimeout 4 (considering timer 0)

At this point
"Callback/Task Queue" has 0 callbacks
"Microtask/Job Queue" has 0 callbacks

Now there is nothing left for Event Loop.

End of execution.
;)


When the Delay loop is in place, and setTimeout callbacks have some timer,
then it will execute differently.

For example,
setTimeout 1 callback has timer 40ms
setTimeout 2 callback has timer 30ms
setTimeout 3 callback has timer 20ms
setTimeout 4 callback has timer 10ms

Now delay loop will take some time, let say it takes around 40ms.

When execution reaches to just before the Delay loop,
3 callbacks are registered for setTimeouts 1, 2 & 3.
Now JavaScript starts the timer as soon as a callback is registered.
So during the Delay loop execution, timers are ticking for all three callbacks.
And as soon as Delay loop is over (takes around 40ms), all 3 callbacks are ready for execution.
They are moved into execution queue as soon as their timer gets expired.
So Callback Queue looks like
1 - setTimeout 3 callback has timer 20ms - ready for execution (timer expired)
2 - setTimeout 2 callback has timer 30ms - ready for execution (timer expired)
3 - setTimeout 1 callback has timer 40ms - ready for execution (timer expired)

After synchronous code execution and Microtask/Job Queue is completed,
we have one more callback in the Callback Queue (pushed by the callback of Promise 4 above).

So Callback Queue looks like
1 - setTimeout 3 callback has timer 20ms - ready for execution (timer expired)
2 - setTimeout 2 callback has timer 30ms - ready for execution (timer expired)
3 - setTimeout 1 callback has timer 40ms - ready for execution (timer expired)
4 - setTimeout 4 callback has timer 10ms - ready for execution after timer gets expired
*/


/*

Explanation revised with the help of Gemini.

---

### Synchronous Code Execution

The JavaScript engine processes the code from top to bottom, executing all **synchronous code** first.

1.  **`setTimeout` calls:** The first three `setTimeout` calls are encountered. The browser's or Node.js's **Web API** starts a timer for each one in the background. Their callbacks are **not** immediately placed in any queue; they wait for their timers to expire.
2.  **`Promise` calls:** The four `Promise.resolve().then()` calls are encountered. Since the Promises are immediately resolved, their `then()` callbacks are instantly queued in the **Microtask Queue** (also known as the Job Queue).
3.  **The "Delay loop":** The `for` loop executes. This is **synchronous and blocking**. The JavaScript engine is fully occupied with this loop and cannot process any other tasks. During this time, the `setTimeout` timers are ticking in the background. If the loop takes longer than 40ms, all three of the initial `setTimeout` timers will have expired.
4.  **`console.log('Last line :)')`:** This final line of synchronous code is executed, printing to the console.

At this point, the **Call Stack** is empty. The `setTimeout` timers have expired, so their callbacks have been moved to the **Task Queue** in the order their timers were expired. The Microtask Queue is full with four callbacks. 

---

### Asynchronous Code Execution

The **Event Loop** now begins its work. It operates in a continuous cycle, prioritizing the **Microtask Queue** before the **Task Queue**.

1.  **Process the Microtask Queue:** The Event Loop sees that the Microtask Queue is not empty and processes all four callbacks from the `Promise.then()` calls, in the order they were queued.
    * The callback for `Promise.resolve('One')` executes.
    * The callback for `Promise.resolve('Two')` executes.
    * The callback for `Promise.resolve('Three')` executes.
    * The callback for `Promise.resolve('Four')` executes. This callback contains a **new `setTimeout` call**. This new `setTimeout` registers its callback with the Web API. Since its timer is only 10ms, it expires almost instantly (if it hasn't already) and is placed at the **end of the Task Queue**.

2.  **Process the Task Queue:** With the Microtask Queue now empty, the Event Loop checks the Task Queue. The callbacks are processed in the order they were placed in the queue, based on their timer expiration. Assuming the delay loop took longer than 40ms, all four `setTimeout` callbacks are now in the queue.
    * The callback for the 20ms timer (`'THREE'`) executes.
    * The callback for the 30ms timer (`'TWO'`) executes.
    * The callback for the 40ms timer (`'ONE'`) executes.
    * The callback for the 10ms timer (`'FOUR'`) executes (this one was added last by the Promise callback).

---

### Summary of Final Output Order

The output you'd see in the console would be:

1.  `console.time('Delay loop')` output (the start time).
2.  `console.timeEnd('Delay loop')` output (the end time and duration).
3.  `console.log('Last line :)')`
4.  `console.log('Callback for the Promise with data One')`
5.  `console.log('Callback for the Promise with data Two')`
6.  `console.log('Callback for the Promise with data Three')`
7.  `console.log('Callback for the Promise with data Four')`
8.  `console.log('Callback for the setTimeout THREE')`
9.  `console.log('Callback for the setTimeout TWO')`
10. `console.log('Callback for the setTimeout ONE')`
11. `console.log('Callback for the setTimeout FOUR')`

*/
