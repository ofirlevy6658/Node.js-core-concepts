const { watch, open } = require("node:fs/promises");

const ac = new AbortController();
const { signal } = ac;
setTimeout(() => ac.abort(), 10000);

(async () => {
  try {
    const commandFileHandler = await open("./command.txt", "r");
    const watcher = watch("./command.txt", { signal });
    for await (const event of watcher) {
      if (event.eventType === "change") {
        const { size } = await commandFileHandler.stat();
        const buff = Buffer.alloc(size);
        const offset = 0;
        const length = buff.byteLength;
        const position = 0;
        const content = await commandFileHandler.read(
          buff,
          offset,
          length,
          position
        );
        console.log(content);
      }
    }
  } catch (err) {
    if (err.name === "AbortError") return;
    throw err;
  }
})();
