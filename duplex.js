const { Duplex } = require("stream");

const inoutStream = new Duplex({
    read(size) {
        const char = String.fromCharCode(this.currentCharCode++)
        this.push(char);
        console.log(`推了 ${char}`)
        if (this.currentCharCode > 90) { // Z
            this.push(null);
        }
    },
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
})

inoutStream.currentCharCode = 65 // A

//这个write好像读不出来，怎么read呢
process.stdin.pipe(inoutStream).pipe(process.stdout)