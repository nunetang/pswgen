// Generator functions

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// retrive valid password length 

function getValidPswLength(){
    var pswLength = 0;

    while(pswLength < 8 || pswLength > 128){
        pswLength = prompt("Welcome, your passwords's length must be between 8 and 128 characters");

        if( pswLength < 8 || pswLength > 128){
            alert( "please enter password between 8 and 128 characters");
        }
    }

    return pswLength;
}

function getRandomSymbolArray(hasLower, hasUpper, hasNumber, hasSymbol){
    let symbolArray = [];

    if(hasLower){
        symbolArray.push(getRandomLower());
    }
    
    if(hasUpper){
        symbolArray.push(getRandomUpper());
    }

    if(hasNumber){
        symbolArray.push(getRandomNumber());
    }

    if(hasSymbol){
        symbolArray.push(getRandomSymbol());
    }

    return symbolArray;
}

//Generate Random password

function generatePassword(passwordLength, hasLower, hasUpper, hasNumber, hasSymbol){
    
    password ="";

    //for loop to choose password characters
    for( let i = 0; i < passwordLength; i++){
        let symbolArray = getRandomSymbolArray(hasLower, hasUpper, hasNumber, hasSymbol);
        let randomSelection = Math.floor(Math.random() * symbolArray.length);
        password += symbolArray[randomSelection]; 
    }

    return password;
}

function updatePassword(){
    //interaction with user

    var lengthValue = getValidPswLength();

    var hasLowerCase = false;
    var hasUpperCase = false;
    var hasNumbers = false;
    var hasSymbols = false;
            
    while(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols){
        hasLowerCase = confirm("DO you want include a lower case letter in it?");
        hasUpperCase = confirm("DO you want include an upper case letter in it?");
        hasNumbers = confirm("DO you want include a number in it?");
        hasSymbols = confirm("DO you want include a symbol in it?");
        

        if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbols){
            alert("Please select at least one option!"); 

        }
    }

    var password = generatePassword(lengthValue, hasLowerCase, hasUpperCase, hasNumbers, hasSymbols);
    document.getElementById("display").value = password;
}

// copy to clipboard

function copyPassword(){
    let password = document.getElementById("display").value;
    window.navigator.clipboard.writeText(password);
}

