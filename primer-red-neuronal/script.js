// MACHINE LEARNINR funcion a partir de resultados, le tenes que indicar un monton de colores en este caso
// si son claros u oscuros, asi la entrenamos

//la red neuronal se separa en capas. las entradas son una capa, cada parametro es una neurona
//si vienen 3 parametros, son 3 neuronas. La salida es otra capa, es un valor, otra neurona.
//el cuerpo de la funcion donde esta la logica, se dice capas ocultas. aca esta el procesamiento que convierte
//las de entrada en la de salida. 
//la libreria brain agrega solo 1 capa oculta, con el mismo numero de neuronas que la capa de entrada
//las neuronas de entradas siempre tienen que estar entre 0 y 1. 
// cada neurona de la capa de entrada se conecta con cada neurona de la capa oculta
//la capa de salida se decide que es 1 neurona, podria ser mas.

//Las neuronas no usan numeros solo numeros cerrados como 1 o 0. enrealidad da un numero decimal que va desde el cero al uno
//si regresa un numero cerca del 0 tiene mas confianza de que el color(en este ejemplo) deberia ser negro, si esta cerca de 0.5 no sabe, y si es 1 es blanco
//se entrena con ejemplos la red neuronal. almacena esa info y crea un modelo interno que en base a lo que le diste, hace el mejor
//esfuerzo para predecir correctamente una respuesta nueva. 

//1 no programamos explicitamente, le pasamos ejemplos a la red con las salidas esperadas, y ella hace las predicciones
//2 la calidad del resultado depende de la cantidad y calidad de ejemplos que le demos, mientras mas mejor

// ARTIFICIAL INTELLIGENCE (inteligencia artificial) 
// MACHINE LEARNING (aprendizaje automatico) es una rama de la inteligencia artificial, permite que un sistema aprenda y mejore sin ser progrmaado explicitamente 
// REDES NEURONALES ARTIFICIALES usando una capa oculta, una red neuronal superficial

//por que funciona? son todos IF y ELSE? que hace internamente?






// Necesitamos capturar el evento del icono de menu. EN el segundo modificamos la clase del boton para saber cuando esta activo, entonces lo modificamos en css

document.querySelector('.botonMenu').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta
    document.querySelector('.botonMenu').classList.toggle('clik'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta

});

document.querySelector('.masInfo').addEventListener('click', () =>{
    console.log("ass")
})


//window.onload = iniciar ; 

// function iniciar () { //se ejecuta la funcion cuando se carga el sitio

//     const redNeuronal = new brain.NeuronalNetwork()

//     const datos = [ //este array va a tener datos de colores oscuros y claros
//         {
//             // CELESTE CLARO
//             "input": { "R": 0.78, "G": 0.9, "B": 1}, //cada input es un color. los datos de RGB(red gree blue, no en hexadecimal) se divide por 255 cada valor asi esta entre 0 Y 1.  "R": 199, "G": 232, "B": 255 
//             "output": {"claro": 1 } //aca indicamos si es claro u oscuro. 1 indicando que esta activado
//         },
//         {   
//             // AZUL OSCURO
//             "input": {"R": 0.2, "G": 0.11, "B": 0.2},
//             "output": {"oscuro": 1}
//         },
//         {   
            
//             "input": {"R": 0.1, "G": 0.2, "B": 0.3},
//             "output": {"oscuro": 1}
//         },
//         {   
            
//             "input": {"R": 0.74, "G": 0.78, "B": 0.86},
//             "output": {"claro": 1}
//         }
//     ];

//     redNeuronal.train(datos) //se entrena la inteligencia artificial, la red, con los datos del array

//     let resultado = brain.likely({"R": 0.57, "G": 0.98, "B": 0.61}, redNeuronal)//le pasamos el color que queremos probar para ver si es oscuro o claro, y la redneuronal.    {"R": 146, "G": 251, "B": 156}
//     alert("Hola")
// }




