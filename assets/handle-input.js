//oninput = deleteWhitespaceInputLengthZero(this)
function deleteWhitespaceInputLengthZero (items){
    var idName = items.id
        var valueEmail = document.getElementById(idName).value;
        if(valueEmail.length == 0){
            valueEmail = valueEmail.trim();
            document.getElementById(idName).value = valueEmail
        }
}; 