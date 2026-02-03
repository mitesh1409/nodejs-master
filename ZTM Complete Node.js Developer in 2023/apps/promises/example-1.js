const foreverPendingPromise = new Promise(function(resolve, reject) {
    // This promise is neither resolved nor rejected.
    // Because there are no calls to either "resolve" or "reject".
    // It remains Pending forever.

    // Do something to resolve/fulfill it.

    // Think of it like - it was promised to do something but never fulfilled.
});

console.log('foreverPendingPromise', foreverPendingPromise);
