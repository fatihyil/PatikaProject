import getData from "./app.js";

// getData(2)
//     .then((data) => console.log(data));

const result = await getData(2);
console.log(result);

