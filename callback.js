
function asyncTask(cb){
    setTimeout(() => {
      cb(null, 'this data from server')
    }, 0)
}

function makeApiCall(cb){
    setTimeout(() => {
      console.log('this is async task')
    }, 0)
}

asyncTask((err , data ) => {
    if(err){
        throw err
    } else {
        console.log('data', data)
    }
})
