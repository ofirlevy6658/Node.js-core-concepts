const { Buffer, constants } = require("buffer");

const buffer = Buffer.alloc(1e9); // 1e9 = 1 billion =  bytes 1GB

console.log(constants.MAX_LENGTH);

setInterval(() => {
  console.log(process.memoryUsage());
  buffer.fill(0x22);
}, 3000);
