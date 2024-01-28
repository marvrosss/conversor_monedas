const api1URL = "https://mindicador.cl/api"

//Ubicacion de variables
const valorInput = document.querySelector("#input");
const select = document.querySelector("#opcion");
const usd = document.querySelector(".dolar");
const uf = document.querySelector(".uf");
const mostrarResultado = document.querySelector(".resultado");
const btnConvertir = document.querySelector(".convertir");

async function getData() { //traer la data de las monedas
    try {
        const res = await fetch(api1URL)
        const monedas = await res.json()
        return monedas
    } catch (error) {
        console.log(error.message)
        mostrarResultado.innerHTML = "Ups, lo sentimos! ocurrio un problema con el servidor"
    }
}

async function convertir() {
    try {
        let valorNInput = Number(valorInput.value);
        if (isNaN(valorNInput)) {
            mostrarResultado.innerHTML= "Permitido solo valores numéricos";
            return;
        }
        const arrayMonedas = await getData();
        const valorDolar = arrayMonedas.dolar.valor
        const valorUf = arrayMonedas.uf.valor

        if (select.value === "1") {
            let result = valorNInput / valorDolar
            mostrarResultado.innerHTML = "Resultado: " + result.toFixed(2) + " USD"
        } else if (select.value == "2") {
            let result = valorNInput / valorUf
            mostrarResultado.innerHTML = "Resultado: " + result.toFixed(2) + " UF"
        }
    } catch (error) {
        console.log(error.message)
        mostrarResultado.innerHTML = "Ups, lo sentimos! ocurrio un problema con el servidor"
    }
}

