const {readFile, writeFile} = require('fs')

console.log('Starting')
readFile('./new/t.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./new/write.txt','utf8',(err,result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './new/result-async.txt',`Here is the result : ${first}, ${second}`,
            (err,result) =>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('Done with  this Multiple read File ')
            }
        )
    })
})
console.log('can start another task')