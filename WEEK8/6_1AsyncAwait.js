var afunctino = async () => {
    try {
        var response  = await fetch ( 'https://jsonplaceholder.typicode.com/todos/1');
        var todo = await response.json();
        console.log(todo);


    } catch ( error) {
        console.log(error.message);
    }

}