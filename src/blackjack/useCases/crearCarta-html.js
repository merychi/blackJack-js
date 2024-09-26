
/**
 * Funcion que permite crear carta para plasmarla en pantalla
 * @param {string} carta 
 * @returns {elementoHTLM } imagen
 */

export const CrearCartaHTML = ( carta ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');    

    return imgCarta;
}

