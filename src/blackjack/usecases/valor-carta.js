/**
 * Obtiene el valor (los puntos) de la carta recibida.
 * @param {String} carta Una carta.
 * @returns {Number} El valor de la carta para sumar puntos.
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}
