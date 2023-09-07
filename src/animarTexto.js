const animarTexto = (elemento) => {

    const numeroDeLetras = elemento.dataset.texto.length;
    const cursor = elemento.querySelector('.hero__cursor')

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
        }else{
            cursor.classList.add('hero__cursor--active');
        }
    }, numeroDeLetras * 100);

    return new Promise((resolve) => setTimeout(resolve, 100 * numeroDeLetras));
};

export default animarTexto;