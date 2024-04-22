const fs = require('fs');
const { Transform } = require('stream');
const stream = fs.createReadStream(__dirname + '/run.txt');

const transFormedStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const writestream = process.stdout;

stream.pipe(transFormedStream).pipe(writestream);
