// reading files
const fs = require('fs'); // fs = file system
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line')

// writing files

// fs.writeFile('./docs/blog2.txt','hello again', () => {
//     console.log('file was written');
// });

// directories (create and delete)
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder removed');
    });
}


// delete file
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}
