const { Buffer } = require("buffer");

const buffer = Buffer.alloc(10000);

const unsafeBuffer = Buffer.allocUnsafe(10000);

const unsafeBufferSlow = Buffer.allocUnsafeSlow(10000); // not make use of the pool

console.log(Buffer.poolSize);

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i]) {
    console.log(unsafeBuffer[i].toString(2));
  }
}

for (let i = 0; i < buffer.length; i++) {
  if (buffer[i]) {
    console.log(buffer[i].toString(2));
  }
}
