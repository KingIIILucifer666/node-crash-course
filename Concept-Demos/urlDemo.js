import url, { URLSearchParams } from "url";

const urlString = "https://www.google.com/search?q=hello+world";

// Parse the URL string into a URL object
const urlObject = url.parse(urlString);

console.log(urlObject);

// format the URL object back into a URL string
const formattedUrl = url.format(urlObject);

console.log(formattedUrl);

// import.meta.url ; Is a special variable that contains the URL of the current module
console.log(import.meta.url);

// fileUrlToPath() ; method is used to convert a file URL to a file path
console.log(url.fileURLToPath(import.meta.url));

//URL Search & URLSearchParams

console.log(urlObject.search);

const searchParams = new URLSearchParams(urlObject.search);

console.log(searchParams);

// Get the value of the query parameter
console.log(searchParams.get("q"));

// append() ; method is used to append a new query parameter to the URLSearchParams object
searchParams.append("limit", "5");
console.log(searchParams);

//delete() ; method is used to delete a query parameter from the URLSearchParams object
searchParams.delete("limit");
console.log(searchParams);
