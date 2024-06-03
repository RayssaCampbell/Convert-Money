const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOne = document.querySelector(".currency-one")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value


    const currencyValueToCovert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect)
    console.log(currencyOne)

    const dolarToday = 4.88
    const euroToday = 5.34
    const libraToday = 6.2
    const bitcoinToday = 228365.84
    

 
    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"        
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"        
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"        
        }).format(inputCurrencyValue / bitcoinToday)
    }


    
    if(currencyOne.value == "dolar"){
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
            }).format(inputCurrencyValue)
    }

    if(currencyOne.value == "euro"){
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
            }).format(inputCurrencyValue)
    }

    if(currencyOne.value == "libra"){
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
            }).format(inputCurrencyValue)
    }

    if(currencyOne.value == "bitcoin"){
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("es-SV", {
            style: "currency",
            currency: "BTC"
            }).format(inputCurrencyValue)
    }

    if(currencyOne.value == "real"){
        currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
            }).format(inputCurrencyValue)
    }


    /* currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
    }).format(inputCurrencyValue)*/
} 

function convertCurrency(){
    const currencyName = document.getElementById("currency-convert")
    const currencyImage = document.querySelector(".currency-img2")

    if(currencyOne.value == "real"){
    currencyName.innerHTML = "Real"
    currencyImage.src = "brasil 2.png"
    }

    if(currencyOne.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "estados-unidos (1) 1.png"
    }
    
    if(currencyOne.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "Design sem nome 3.png"
    }

    if(currencyOne.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "libra 1.png"
    }
        
    if(currencyOne.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "bitcoin 1.png"
    }
        
        convertValues()
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "estados-unidos (1) 1.png"
    }

    if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "Design sem nome 3.png"
    }

    if(currencySelect.value == "libra"){
    currencyName.innerHTML = "Libra"
    currencyImage.src = "libra 1.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "bitcoin 1.png"
        }

    convertValues()
}



currencyOne.addEventListener("change", convertCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)