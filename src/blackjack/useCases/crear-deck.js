import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {array<string>} tiposCartas 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */

export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if(!tiposCartas || !tiposEspeciales.length === 0) throw new Error ('tiposCartas y tiposEspeciales son obligatorios');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    console.log( deck );
    return _.shuffle( deck );
}