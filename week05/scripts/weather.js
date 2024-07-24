const meTown = document.querySelector('#town');
const meGraphic = document.querySelector('#graphic');
const meDescription = document.querySelector('#description');
const meTemperature = document.querySelector('#temperature');

const mekey = "0f9a04287bcf13f5683c567659be5fba"
const meLat = "27.753394843049723" 
const melong = "-98.05865386936112"

const meURL =`https://api.openweathermap.org/data/2.5/weather?lat=${meLat}&lon=${melong}&appid=${mekey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(meURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.test());
        }
    } catch (error) {
        console.log(error);
    }
}

    function displayResults(data){
        console.log('Hello there')
        meTown.innerHTML =data.name
        meDescription.innerHTML = data.weather[0].description
        meTemperature.innerHTML = `${data.main.temp}&deg;F`
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        meGraphic.setAttribute('SRC', iconsrc)
        meGraphic.setAttribute('alt', data.weather[0].description)
    }

    apiFetch();