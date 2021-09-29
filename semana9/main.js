function miFuncion()
{
    console.log("Hola desde la funcion timeaout esta sirve para cargar una funcion en un tiempo determinado")
    ;
}
setTimeout(miFuncion,1000)

const  arrowFuncion =() => 

{
    console.log("Hola desde la funcion timeaout esta sirve para cargar una funcion en un tiempo determinado")
    ;
}
setTimeout(arrowFuncion,1000)

setTimeout(()=>
{
    console.log( 'este tardara un segundo y despues carga el otro no al mismo tiempo');

    
}, 2000);