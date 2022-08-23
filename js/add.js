
const cartArray = [];



function display (cartPlayer){

// console.log(cartPlayer);
const tableBody = document.getElementById('cart-players');
tableBody.innerHTML = '';

for(let i = 0; i < cartPlayer.length; i++){
   const name = cartArray[i].playerName;
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th>${i + 1}</th>
    <th>${name}</th>
    `;
    tableBody.appendChild(tr)  
}

if(cartArray.length > 5){
alert('Please Stop! No More Chance for You, Thanks!');
}

};



function addToCart (element){ 
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(playerName) 
    const playerObj = {
        playerName: playerName
     }  

     cartArray.push(playerObj)
     // console.log(cartArray.length)    
     document.getElementById('total-added-player').innerText = cartArray.length;
     
     display(cartArray);


    };  

