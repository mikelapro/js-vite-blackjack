// import { pedirCarta } from './pedir-carta';
import { crearCartaHTML, pedirCarta, valorCarta } from './';

/**
 * Turno de la computadora.
 * @param {Number} puntosMinimos Puntos minimos que la  computadora necesita ganar.
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos.
 * @param {divCartasComputadora} divCartasComputadora Elemento HTML para mostrar las cartas.  
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios.');
    if(!puntosHTML) throw new Error('Argumento puntosHTML es necesario.');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana >:C')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana :D');
        } else {
            alert('Computadora gana >:C')
        }
    }, 100);
}