const fs=require('fs');
const transFormStream=require('stream').Transform
const stream =fs.createReadStream(__dirname+'/run.txt');

 const transFormedStream=new transFormStream({
    Transform(chunk,enc,cb){
        this.push(chunk.toString().toUppeerCase());
    }
});
const writestream=process.stdout;

stream
.pipe(transFormedStream)
.pipe(writestream);