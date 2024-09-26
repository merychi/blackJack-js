

/**
 *  Esta función me permite tomar una carta
 * @param {array<string>} deck 
 * @returns  {string} carta
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}