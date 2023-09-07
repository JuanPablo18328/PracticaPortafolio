'use strict';

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver(
    (entries)=>{
        if(entries[0].isIntersecting){
            const trabajos = document.querySelectorAll('.trabajos__trabajo');

            trabajos.forEach((trabajo, index) =>{
                setTimeout(()=>{
                    trabajo.classList.add('trabajos__trabajo--visible');
                }, 200 * index);
            });
        }
    },
    {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5
    }
);

observer.observe(galeria);

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');

const datos = [
    {
        id: '1',
        titulo: 'Trabajo #1',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
    {
        id: '2',
        titulo: 'Trabajo #2',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
    {
        id: '3',
        titulo: 'Trabajo #3',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
    {
        id: '4',
        titulo: 'Trabajo #4',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
    {
        id: '5',
        titulo: 'Trabajo #5',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
    {
        id: '6',
        titulo: 'Trabajo #6',
        texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        fecha: '1 Enero de 2023'
    },
];

trabajos.addEventListener('click',(e)=>{
    e.preventDefault();

    const trabajoClickeado = e.target.closest('.trabajos__trabajo');
        
    
    if(trabajoClickeado){
        const id = trabajoClickeado.dataset.id;

        const trabajo = datos.filter((trabajo) => {
            if(trabajo.id === id){
                return trabajo;
            }
        });

        const { titulo, fecha, texto } = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;
        ventanaTrabajos.classList.add('ventana--active');
    }
});

ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
    e.preventDefault();

    ventanaTrabajos.classList.remove('ventana--active');
});


ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.matches('.ventana__overlay')){
        ventanaTrabajos.classList.remove('ventana--active');
    }
});

const slider = document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e)=>{
    clickPresionado = true;

    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

const mueve = (e)=>{
    if(!clickPresionado){
        return;
    }
    
    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};

const suelta = (e)=>{
    clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);

slider.addEventListener('mousemove', mueve);

slider.addEventListener('mouseup',suelta);

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');


botonesEmail.forEach((boton) => {

    boton.addEventListener('click', (e) =>{
        e.preventDefault();

        ventanaCorreo.classList.add('ventana--active');
    });

});


botonesCerrar.forEach((boton) => {

    boton.addEventListener('click', (e) =>{
        e.preventDefault();

        ventanaCorreo.classList.remove('ventana--active');
    });

});

const animarTexto = (elemento) => {

    const numeroDeLetras = elemento.dataset.texto.length;
    const cursor = elemento.querySelector('.hero__cursor');

    cursor.classList.add('hero__cursor--visible');

    for(let i = 0; i < numeroDeLetras; i++){

        setTimeout(()=>{
            const letra = document.createElement('span');
            letra.append(elemento.dataset.texto[i]);

            elemento.append(letra);
        }, 100 * i);
        
    }

    setTimeout(()=>{
        const cursores = [...elemento.closest('.hero__header').querySelectorAll('.hero__cursor')];

        const indexCursorActual = cursores.indexOf(cursor);

        if(indexCursorActual < cursores.length - 1){
            cursor.classList.remove('hero__cursor--visible');
        }else {
            cursor.classList.add('hero__cursor--active');
        }
    }, numeroDeLetras * 100);

    return new Promise((resolve) => setTimeout(resolve, 100 * numeroDeLetras));
};

window.addEventListener('load', async (e)=>{

    
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
