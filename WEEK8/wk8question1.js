const add=(a,b)=>{

    setTimeout(()=>{

        print(a+b)

    })

    return 70

}

function print(val){

    console.log(val)

}

console.log(add(5,10));