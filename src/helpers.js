/** Takes in an array and returns a random item
 *  within the array
 */
function choice (arr){
    let randIdx = Math.floor(Math.random()*arr.length);
    return arr[randIdx];
}

export {choice};