import crypto from "crypto";

// createHash() method is used to create a Hash object that can be used to generate hash digests using the given algorithm.
// const hash = crypto.createHash("sha256");

// update() method is used to update the hash content with the given data.
// hash.update("password1234");

// digest() method is used to calculate the digest of all the data passed to the hash.
// const digest = hash.digest("hex");
// console.log(digest); // 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8

// randomBytes() method is used to generate cryptographically strong pseudo-random data.
// crypto.randomBytes(16, (err, buf) => {
//   if (err) throw err;
//   console.log(`Random Bytes: ${buf.toString("hex")}`);
// });

// Encrypting and Decrypting Data - Cypher and Decypher Text

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// createCipheriv() method is used to create a Cipher object that can be used to encrypt data using the given algorithm and key.
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Hello, this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(`Encrypted Text:\n${encrypted}`);

// createDecipheriv() method is used to create a Decipher object that can be used to decrypt data using the given algorithm and key.
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(`Decrypted Text:\n${decrypted}`);
