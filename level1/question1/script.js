document.getElementById("submit").addEventListener("click", function(){
    let inputFields = document.getElementsByTagName("input");

    for(var i=0; i < inputFields.length; i++) {
        let theInput = inputFields[i].value;
        let tryPattern = new RegExp(inputFields[i].pattern);
        let tryTest = tryPattern.test(theInput);
        
        if (tryTest === false){
            console.log(inputFields[i].name + " is incorrect");
        }

    }
})