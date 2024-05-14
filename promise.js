const promise = new Promise((resolve, reject) => {
  if(true){//switch between them 
    resolve('this is true!')
  } else {
    reject('this false')
  }
})
promise
.then((data) => console.log(data))
.catch((err) => console.log(err))



let p = Promise.resolve('excution is done')
p.then((data) => console.log(data))

let o = Promise.reject('there is somthing there')
o.catch((err) => console.log(err))

const makeApi = (time) => {
    return new Promise((resolve , reject) => {
        setTimeout(() =>{
            resolve('this api work good enough')
        }, time)
    })
}
let multiApiCall = [makeApi(1000), makeApi(2000)]
// makeApi(1000).then((val) => console.log(val))

Promise.all(multiApiCall).then((values) => {
    console.log(values)
})