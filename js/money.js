  // player calculate----->

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerInputField = getInputFieldValueById('player-input');
    const playerTotalNumber = getTextElementValueById('player-total');
    const playerCost = playerInputField * cartArray.length;
    setTextElementValueById('player-total', playerCost);
});

// calculate total------>

document.getElementById('btn-total').addEventListener('click', function(){
    const managerInputField = getInputFieldValueById('manager-input');
    const coachInputField = getInputFieldValueById('coach-input');
    const playerTotalNumber = getTextElementValueById('player-total');
    const totalCost = getTextElementValueById('total-cost');

    const final = managerInputField + coachInputField + playerTotalNumber;

    setTextElementValueById('total-cost', final)
})

// button disable---->

document.getElementById('btn-disabled1').addEventListener('click', function(){
    buttonDisable('btn-disabled1');})

document.getElementById('btn-disabled2').addEventListener('click', function(){
    buttonDisable('btn-disabled2');
})

document.getElementById('btn-disabled3').addEventListener('click', function(){
    buttonDisable('btn-disabled3');
})

document.getElementById('btn-disabled4').addEventListener('click', function(){
    buttonDisable('btn-disabled4');
})

document.getElementById('btn-disabled5').addEventListener('click', function(){
    buttonDisable('btn-disabled5');
})

document.getElementById('btn-disabled6').addEventListener('click', function(){
    buttonDisable('btn-disabled6');
})