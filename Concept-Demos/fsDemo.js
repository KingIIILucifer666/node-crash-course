// import fs from "fs";
import fs from "fs/promises";

//readFile - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;

//   console.log(`Asynchronous : ${data}}`);
// });

//readFileSync - Synchrounous Version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(`Synchronous : ${data}`);

//readFile - Promise .then() .catch()

// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log("Promise : ", data))
//   .catch((err) => console.log(err));

//readFile - async await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(`Async Await:\n${data}`);
  } catch (err) {
    console.log(err);
  }
};

//writeFile

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am writing to this file.");
    console.log("File Written To...");
  } catch (err) {
    console.log(err);
  }
};

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nHello, I am appending to this file.");
    console.log("File Appended To...");
  } catch (err) {
    console.log(err);
  }
};

// writeFile();
// appendFile();
readFile();
