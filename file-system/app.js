const fs = require("fs/promises");

(async () => {
  const createFile = async (filePath) => {
    console.log("file path", filePath);
    await fs.writeFile(filePath, "Hello World");
  };

  const commandFileHandler = await fs.open("./command.txt", "r");
  const COMMANDS = {
    CREATE_FILE: "create a file",
  };

  commandFileHandler.on("change", async () => {
    // get the size of our file
    const size = (await commandFileHandler.stat()).size;
    // allocate our buffer with the size of the file
    const buff = Buffer.alloc(size);
    // the location at which we want to start filling our buffer
    const offset = 0;
    // how many bytes we want to read
    const length = buff.byteLength;
    // the position that we want to start reading the file from
    const position = 0;

    // we always want to read the whole content (from beginning all the way to the end)
    await commandFileHandler.read(buff, offset, length, position);

    const command = buff.toString("utf8");
    if (command.includes(COMMANDS.CREATE_FILE)) {
      const filePath = command.substring(COMMANDS.CREATE_FILE.length + 1);
      await createFile(filePath);
    }
  });

  // watcher...
  const watcher = fs.watch("./command.txt");
  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
})();
