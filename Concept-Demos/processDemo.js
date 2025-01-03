// process is a global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().
// https://nodejs.org/api/process.html
// It is helpful in making CLIs, and in debugging.

// process.argv is an array containing the command line arguments.
// The first element will be 'node'.
// The second element will be the name of the JavaScript file.
// The next elements will be any additional command line arguments.
console.log(process.argv);
console.log(process.argv[3]);

//process.env
// An object containing the user environment.
console.log(process.env);

// pid is the process id of the node process
console.log(process.pid);

// cwd is the current working directory of the node process
console.log(process.cwd());

// title is the title of the node process
console.log(process.title);

// memoryUsage() returns an object describing the memory usage of the Node.js process measured in bytes.
console.log(process.memoryUsage());

// uptime() returns the number of seconds the current Node.js process has been running.
console.log(process.uptime());

// process.on() method is used to bind the process event with the callback function.
// The process object is an instance of EventEmitter.
// The process object emits multiple events. Some of the most commonly used events are:
// exit, beforeExit, uncaughtException, Signal events, etc.

process.on("exit", function (code) {
  console.log("Process is about to exit with code: ", code);
});

// exit() method instructs Node.js to terminate the process as quickly as possible with an exit code of 0.
// Success & Failure
process.exit(0); //process.exit(1);

console.log("Hello from after the exit"); // This will not be executed as the process has been terminated

// process.stdin is a readable stream that is used to read input from the user.
// process.stdout is a writable stream that is used to write output to the user.
// process.stderr is a writable stream that is used to write errors to the user.
process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");
