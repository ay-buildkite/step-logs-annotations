// Using a deprecated method: process.nextTick()
process.nextTick(() => {
  console.log("This is a callback using process.nextTick");
});

// Using a deprecated property: Buffer() constructor
const buf = new Buffer(10); // This will trigger a deprecation warning

// Using a deprecated API: url.parse() without the 'new' keyword
const url = require('url');
const parsedUrl = url.parse('http://example.com', true); // Also triggers a deprecation warning

// Trigger deprecated event
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err);
});
myEmitter.emit('error', new Error('This is an error event'));

// Using deprecated Promise rejection handling
Promise.reject('This is a rejected promise').catch(err => {
  console.log(err);
});
