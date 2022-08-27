function createAlert() {
    alert("Hey this is an alert froj js");
}


function createQuestion(question) {
    return prompt(question);
}


function setElementTextBytId(id, text) {
    document.getElementById(id).innerText = text;
}


function focusOnElement(element) {
    element.focus();
}


function generateRandomNumberFromJ(maxIntSize) {
    console.log('here i am');
    DotNet.invokeMethodAsync('BlazorServer', 'GenerateRandomNumber', maxIntSize).then(res => {
        setElementTextBytId('radnomNumberSpan', res);
    })
}


function giveMeRandomInt(maxIntSize, dotnetInstace) {
    console.log('giveMeRandomInt');
    dotnetInstace.invokeMethodAsync('MethodFromInstantiateClass', maxIntSize).then(res => {
        setElementTextBytId('radnomNumberSpan', res);
    });
   
}