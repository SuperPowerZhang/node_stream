const fs=require('fs');
const stream =fs.createWriteStream('./big_file.txt');

for(let i=0;i<200000;i++){
    stream.write(`这里是第 ${i} 行内容`)
}
stream.end()
console.log('写完啦~~~')