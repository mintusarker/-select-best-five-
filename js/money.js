
// funtion declare---->

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue  = parseFloat(textElementValueString);
    return textElementValue;
    
}

function setTextElementValueById(elementId, newValue){
      const textElement = document.getElementById(elementId);
      textElement.innerText = newValue;
}


// player calculate----->

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerInputField = getInputFieldValueById('player-input');
    const playerTotalNumber = getTextElementValueById('player-total');
    const playerCost = playerInputField * 5;
    setTextElementValueById('player-total', playerCost);
})

// calculate total------>

document.getElementById('btn-total').addEventListener('click', function(){
    const managerInputField = getInputFieldValueById('manager-input');
    const coachInputField = getInputFieldValueById('coach-input');
    const playerTotalNumber = getTextElementValueById('player-total');
    const totalCost = getTextElementValueById('total-cost');

    const final = managerInputField + coachInputField + playerTotalNumber;

    setTextElementValueById('total-cost', final)
})
