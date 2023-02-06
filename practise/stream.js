const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'});
const writeStram = fs.createWriteStream('./docs/blog5.txt');

// readStream.on('data',(chunk)=>{
//     console.log('--------NEW CHUNK--------');
//     console.log(chunk);
//     writeStram.write('\n NEW CHUNK \n');
//     writeStram.write(chunk);
// });

// piping 

readStream.pipe(writeStram);
