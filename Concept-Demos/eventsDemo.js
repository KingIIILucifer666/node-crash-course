import { EventEmitter } from "events";

// Create an instance of EventEmitter, which is a class that allows us to create custom events and listen for them.
//  e.g: real-time chat applications, games, etc.
const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log("Hello " + name);
};

const goodbyeHandler = (name) => {
  console.log("Goodbye " + name);
};

// Register the event listener
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit the event
myEmitter.emit("greet", "Robert");
myEmitter.emit("goodbye", "Robert");

// Error event : If an error event is emitted and no listeners are registered, the error will be thrown, which will crash the application.
myEmitter.on("error", (err) => {
  console.error("An Error Occuered: ", err);
});

myEmitter.emit("error", new Error("Something went wrong!"));
