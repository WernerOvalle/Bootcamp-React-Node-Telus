const highOrder = (data, cb) => {
  if (typeof cb === "function") {
    setTimeout(() => {
      cb(data);
    }, 1000);
  } else {
    throw new Error("cb is not a function");
  }
};


const myCallback = (data) => {
    console.log("myCallback:", data);
};
const myCallback2= "";

try {
  highOrder("Hola", myCallback);
} catch (error) {
  console.log(error.message);
}
