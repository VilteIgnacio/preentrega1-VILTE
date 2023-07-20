const users = [
    {id: 1, nombre: "fede" , rol:"tutor adjunto"},
    {id: 2, nombre: "ivan" , rol:"tutor regular"},
    {id: 3, nombre: "matias" , rol:"tutor regular"},
    {id: 4, nombre: "conrado" , rol:"lider supremo"}
]

/* const resultado = users.find((el) => el.nombre === "matias");
console.log(resultado); */
//         ENCONTRAR / FIND PRIMITIVO
function encontrar(arr,fn) {
    for (var i = 0; i < arr.length; i++){
        var current = arr[i]
            
    if (fn( current ) === true){
        return current
        }
    }
}

/* encontrar(users, console.log)//envia el console.log como parametro del nf */
/* encontrar(users, (users) => console.log(users.nombre)) */

const resultado = encontrar(users, (user) =>user.nombre === "fede")
console.log(resultado);

//           FILTRAR PRIMITIVO
function filtrar(arr, fn){
    let filter = []
    for(var i = 0; i < arr.length; i++){
        var current = arr[i]
        if(fn(current) === true){
            filter.push(current)
        }
    }
    return filter
}

const resultado2 = filtrar(users, (user) => user.rol === "tutor regular")
console.log(resultado2);


//                    PROTOTYPE

Array.prototype.encontrar = function(fn) {
    for (var i = 0; i < this.length; i++) {
        var current = this[i]

        if (fn(current) === true) {
            return current
        }
    }
}

// console.log( users.encontrar((user) => user.id === 2) )

const productos = [
    {
        id: 10,
        nombre: "Coca"
    },
    {
        id: 23,
        nombre: "Pepsi"
    },
]

console.log( productos.encontrar((prod) => prod.nombre === "Pepsi") )