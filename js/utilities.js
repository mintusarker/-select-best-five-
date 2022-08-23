// funtion declare---->

function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
};

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue  = parseFloat(textElementValueString);
    return textElementValue;
    
};

function setTextElementValueById(elementId, newValue){
      const textElement = document.getElementById(elementId);
      textElement.innerText = newValue;
};

function buttonDisable(btn){
    const playerBtn = document.getElementById(btn);
    playerBtn.disabled = true;
    playerBtn.style.background = '#777'
};