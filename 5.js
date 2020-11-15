const fs=require('fs');


function writeOneMillionTimes(writer, data) {
    let i = 1000000;
    write();
    function write() {
        let ok = true;
        do {
            i--;
            if (i === 0) {
                // Last time!
                writer.write(data);
            } else {
                // See if we should continue, or wait.
                // Don't pass the callback, because we're not done yet.
                ok = writer.write(data);
                if(ok===false){
                    console.log("不让写了")
                }
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // Had to stop early!
            // Write some more once it drains.
            writer.once('drain', write);
            console.log("又让写了，太难了");
        }
    }
}
const writer=fs.createWriteStream('./drainFile.txt');
writeOneMillionTimes(writer,"加油")