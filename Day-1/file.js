const fs = require('fs');

// File System : Write

// Create a file and write a data (synchronous)
// fs.writeFileSync('./test.txt', 'Hey, rajeev!');

// Create a File and write a data (Asynchronously)
fs.writeFile('./test2.txt', 'Hey there!', (err) => {});

// File System : Read (Sync and async)
const result = fs.readFileSync('./test.txt', 'utf-8');
console.log('Data readed synchronously: ', result);

fs.readFile('./test2.txt', 'utf-8', (err, res) => {
    if(err){
        console.log('Error', err);
    }
    console.log('Data readed asynchronously: ', res);
});


// File System : Append data 
fs.appendFileSync('./test.txt', `${Date.now()} hi there!\n`);


// File System : Remove File
fs.unlink('./test2.txt', (err, res) => {
    if(err){
        console.log('Error.', err);
    }
    console.log("File Deleted.", res);
});