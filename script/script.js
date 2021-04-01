var somaE = document.querySelector(".respE")
var somaD = document.querySelector(".respD")
var somaI = document.querySelector(".respI")
var somaB = document.querySelector(".respB")

    function clica() {
        var per = document.querySelector("#v-real").value
        var calE = per * 0.15
        var calD = per * 0.18
        var calI = per* 19.72
        var calB = per * 0.0000033
        somaE.innerHTML = (`${per}R$ convertido em Euro e €${calE.toFixed(2)}`)
        somaD.innerHTML = (`${per}R$ convertido em Dolar e $${calD.toFixed(2)}`)
        somaI.innerHTML = (`${per}R$ convertido em Iene e ¥${calI.toFixed(2)}`)
        somaB.innerHTML = (`${per}R$ convertido em Bitcoin e ${calB} BITCOINS`)
    }