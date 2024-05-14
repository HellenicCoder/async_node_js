console.log('start operation!')

function sleep(milliseconds){
    console.log('we start')
    setTimeout(() => {
        console.log('in progress')
    }, milliseconds)
    console.log('done')
}
sleep(1000)
console.log('do somthing else')
//callstack => browser => ===================> Excutation
//callstack => =>web api => task Queue => event loop => browser =>Excutation