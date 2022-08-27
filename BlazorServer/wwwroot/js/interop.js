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