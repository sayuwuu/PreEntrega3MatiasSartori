function Producto(id,nombre,precio){
    this.id = id
    this.nombre = nombre
    this.precio = precio
}

const producto1 = new Producto(1,"Plan Light",250000)
const producto2 = new Producto(2,"Plan Comun",350000)
const producto3 = new Producto(3,"Plan Premium",450000)
const producto4 = new Producto(4,"Plan Pro",550000)

const listaProductos = [producto1,producto2,producto3,producto4]

console.log("Tenemos los siguientes Planes de trabajo:\n1. Plan Light\n2. Plan Comun\n3. Plan Premium\n4. Plan Pro")

function buscarProducto() {    

while(true){

    let consultarProducto = prompt("¿Desea consultar el precio de algun producto?")

    if(consultarProducto === "si"){

        let consultar = parseInt(prompt("Ingresar número del producto que desea consultar"))

        const resultado = listaProductos.find((x) => x.id === consultar)

        if (resultado) {
            console.log(`Usted consulto: ${resultado.nombre}, Precio: ${resultado.precio}`)
        } else {
            alert("No se encontró el producto solicitado")
        }

        let otro = prompt("¿Desea consultar otro producto?")
            
        if(otro === "si"){
            buscarProducto()
        }else if(otro === "no"){
            alert("Continue con su compra")
            break
        }else{
            alert("Dato invalido")
            break
        }        

    }else{
        alert("Continue con su compra")
        break
    }   
}

}

let agregar

function agregarAlCarrito(){

    let carritoCompra = []    

    agregar = parseInt(prompt("Ingresar número del producto que desea agregar al carrito"))

    const agregado = listaProductos.find((x) => x.id === agregar)

    if(agregado){

        carritoCompra.push(agregado)

        console.log(`Usted agrego: ${agregado.nombre} con un valor de: ${agregado.precio}`)

        
    }else if(agregar >= 5 || isNaN(agregar)){
        alert("Agregar producto valido")
        agregarAlCarrito()
    }    

    localStorage.setItem("CarritoCompra", JSON.stringify(carritoCompra))

}





function calcularIva(precio, iva){

    resultado = precio * iva    
    return resultado

}

function calculaIvaCarrito(){    


    if(true){
        switch(agregar) {
            case 1:        
            let precioFinal1 = calcularIva(producto1.precio,1.17)
            console.log("Su precio Final es de " + precioFinal1)
            alert("Gracias por su compra")
            break

            case 2:
            let precioFinal2 = calcularIva(producto2.precio,1.17)
            console.log("Su precio Final es de " + precioFinal2)
            alert("Gracias por su compra")
            break

            case 3:
            let precioFinal3 = calcularIva(producto3.precio,1.17)
            console.log("Su precio Final es de " + precioFinal3)
            alert("Gracias por su compra")
            break

            case 4:
            let precioFinal4 = calcularIva(producto4.precio,1.17)
            console.log("Su precio Final es de " + precioFinal4)
            alert("Gracias por su compra")
            break
            
            default:
            break
        }
    }else{}
    
}


const botonConsultar = document.getElementById("consultar")

botonConsultar.addEventListener("click", buscarProducto)

const botonAgregar = document.getElementById("agregar")

botonAgregar.addEventListener("click", agregarAlCarrito)

const botonCalcular = document.getElementById("calcular")

botonCalcular.addEventListener("click", calculaIvaCarrito)









