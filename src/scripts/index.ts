import { greet } from './greeter/greeting-string';

setup.greeting = greet("world " + random(200));

console.log("Hello from TS!");