const { Buffer } = require("buffer");

const memoryContainer = Buffer.alloc(3);

memoryContainer.writeInt8(0x48, 0);
memoryContainer.writeInt8(0x68, 1);
memoryContainer.writeInt8(0x21, 2);

console.log(memoryContainer.toString("utf8"));

// method 2
const memoryContainer2 = Buffer.from([0x48, 0x68, 0x21]);
console.log(memoryContainer2.toString("utf8"));

// method 3
const memoryContainer3 = Buffer.from("Hh!", "utf8");
console.log(memoryContainer3.toString("utf8"));

// method 4
const memoryContainer4 = Buffer.from("486821", "hex");
console.log(memoryContainer4.toString("utf8"));
