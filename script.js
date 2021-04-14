var btntranslate = document.querySelector("#btn-translate");

var textinput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

function getTranslateURL(input){
return serverURL + "?" +"text=" + input
}

function errorHandling(error){
 console.log("error Ocuured" ,error);
 alert("Sorry for inconvenience server is down , try after some time");

}


function clickHandler(){
    
    var inputText = textinput.value;
    console.log("Clicked");

    fetch(getTranslateURL(inputText))
    .then(respone => respone.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandling)

}

btntranslate.addEventListener("click", clickHandler);