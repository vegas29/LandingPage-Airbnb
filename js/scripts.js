document.addEventListener('DOMContentLoaded', ()=>{

    //Obtener la imagen

    const imagenHero = document.querySelector('.hero');

    //Inicializacion de las variables
    let i = 0;
    let tiempo = 0;

    //Arreglo con imagenes de fondo

    const imagenes = ['arriba2.jpg', 'arriba.jpg'];

    setInterval(()=>{
        imagenHero.style.backgroundPositionY = '-'+tiempo+'px';
        if(tiempo > 40){
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(/img/"+imagenes[i]+")";
            
            if(i === imagenes.length - 1){
                i = 0;
            }else{
                i++;
            }
            console.log(imagenes[i]);
        }

        tiempo++;
        
    },100);
    //Boton flotante en el footer

    const btnFlotante = document.querySelector('.btn-flotante');

    btnFlotante.addEventListener('click', (e)=>{
        e.preventDefault();

        const footer = document.querySelector('#footer');

        if(footer.classList.contains('activo')){
            footer.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Moneda';
            btnFlotante.classList.remove('activo');
        }else{
            footer.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
            btnFlotante.classList.add('activo');
        }

    });

});

