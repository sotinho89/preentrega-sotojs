const computadora =[
    {
		marca: 'lenovo',
		modelo: 'i7',
		memoria: 6 ,
		precio: 30000,
		discoDuro: 1 ,
		color: 'Blanco',
	},
	{ 
        marca: 'hp', 
        modelo: 'i5', 
        memoria: 8, 
        precio: 40000, 
        discoDuro : 500, 
        color: 'Negro', 
    },
	{
		marca: 'enova',
		modelo: 'i3',
		memoria: 6,
		precio: 20000,
		discoDuro: 1,
		color: 'Blanco',
	},
	{ 
        marca: 'asus', 
        modelo: 'i7', 
        memoria: 4, 
        precio: 35000, 
        discoDuro: 256 , 
        color: 'Negro', 
    },
];
 
const datosBusqueda = {
    marca: marca,
    memoria: memoria,
    minimo: '',
    maximo: '',
    discoDuro: '',
    color: ''
};

function mostrarCompus(computadoras){
  
    computadoras.forEach( compu => {
        console.log(`Marca: ${compu.marca} - ${compu.modelo} - ${compu.memoria} - ${compu.discoDuro} discoDuro - Precio: ${compu.precio} - Color: ${compu.color}`)
    })};

    function filtrarcompu(){
        const resultado = computadora.filter(filtrarMarca).filter(filtrarMemoria).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
        if(resultado.length){
            mostrarCompus(resultado);
        }else {
            console.log("sin resultado");
        }
    };
    function filtrarMarca(compu){
        if(datosBusqueda.marca){
            return compu.marca === datosBusqueda.marca;
        }
        return compu;};
  
        function filtrarMemoria(compu){
            if(datosBusqueda.memoria){compu
                return auto.memoria === datosBusqueda.memoria;
            }
            return compu;
        }
        
        function filtrarMinimo(compu){
            if(datosBusqueda.minimo){
                return compu.precio >= datosBusqueda.minimo;
            }
            return compu;
        }
        
        
        function filtrarMaximo(compu){
            if(datosBusqueda.maximo){
                return compu.precio <= datosBusqueda.maximo;
            }
            return compu;
        }
        
        function filtrarPuertas(compu){
            if(datosBusqueda.discoDuro){
                return compu.discoDuro === datosBusqueda.discoDuro;
            }
            return compu;
        }
        function filtrarColor(compu){
            if(datosBusqueda.color){
                return compu.color === datosBusqueda.color;
            }
            return compu;};
    
