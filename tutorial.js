const getTodos = (resourse, callback) => {

    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data )
        }else if(request.readyState === 4){
           callback('could not fetch data', undefined)
        }
    })

    request.open('GET',resourse)
   // https://jsonplaceholder.typicode.com/todos/
    request.send()


}


console.log(1);
console.log(2);

getTodos('todos/luigi.json',(err, data) => {
    console.log(data );
    getTodos('todos/mario.json',(err, data) => {
        console.log(data);
        getTodos('todos/shaun.json',(err,data) => {
            console.log(data);
        })
    })
})

console.log(3);
console.log(4);
