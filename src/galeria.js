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

    const trabajoClickeado = e.target.closest('.trabajos__trabajo')
        
    
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