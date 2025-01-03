import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

//basename {File name}
console.log(path.basename(filePath)); // test.txt

//dirname {Directory name}
console.log(path.dirname(filePath)); // ./dir1/dir2

//extname {Extension name}
console.log(path.extname(filePath)); // .txt

//parse {Parse the file path}
console.log(path.parse(filePath));

//Format {Format the file path}
const __filename = url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log("File Name: ", __filename);
console.log("Dir Name: ", __dirname);

//Join {Join the file path}

// Example:
// MAC & Linux : users/your-name
// Windows : users\your-name

const filePathJoin = path.join(__dirname, "dir1", "dir2", "test.txt");

console.log("File Path Join: ", filePathJoin);

//Resolve {Resolve the file path}
const filePathResolve = path.resolve(__dirname, "dir1", "dir2", "test.txt");

console.log("File Path Resolve: ", filePathResolve);
