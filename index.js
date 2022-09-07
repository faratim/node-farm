const fs = require('fs');



//////////////////////////////////////
// FILES

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}\nCreated on ${Date.now()}';`

// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

//Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.error(err);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('File has been written.');
//             })
//         })
//     })
// })

//////////////////////////////////////
// SERVER
const http = require('http');

const server = http.createServer((req, res) => { // req is the request details, res is the response from the server
    res.end('Hello from the server.'); //sends response to the user any time a request is sent
});

server.listen(8000, '127.0.0.1', (err, res) => {
    console.log('Server listening on port 8000');
});