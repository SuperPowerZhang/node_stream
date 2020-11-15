const fs=require('fs');
const http=require('http');


const server = http.createServer();

server.on('request', (request, response) => {
    const stream=fs.createReadStream('./big_file.txt')
    stream.pipe(response)
    stream.on('data',(chunk)=>{
        console.log('某一次')
        console.log(chunk.toString())
    })
    stream.on('end',()=>{
        console.log('结束啦')
    })
    stream.pipe(response);
})
server.listen(8888)
console.log('pipe 结束')