
const cartArray = [];

function display (cartPlayer){

console.log(cartPlayer);
const tableBody = document.getElementById('cart-players');
tableBody.innerHTML = '';
for(let i = 0; i < cartPlayer.length; i++){

    // console.log(cartArray[i].playerName);

    const name = cartArray[i].playerName;
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${i + 1}</th>
    <th>${name}</th>
    `;
    tableBody.appendChild(tr)
}

}




function addToCart (element){
    // console.log(element.parentNode.parentNode.children[0].innerText)

    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName)

    const playerObj = {
        playerName: playerName
     }

    cartArray.push(playerObj)

    // console.log(cartArray.length)

    document.getElementById('total-added-player').innerText = cartArray.length;
    
    display(cartArray);
}