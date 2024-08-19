
document.querySelector('#searchBtn').addEventListener('click', callingApi)

async function callingApi (){
    const inputValue = document.querySelector('.searchSection input').value
    const userInput = inputValue.toLowerCase()
    console.log(userInput);
    
    const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=b48cd167f07b16bdb751bf1eaf89b818&units=metric`)
    const res = await weatherApi
    const resjson = await res.json()
    console.log(resjson.wind.speed) 
    document.querySelector('.cityName').textContent = resjson.name
    document.querySelector('#centigrate').textContent = Math.ceil(resjson.main.temp ) 
    document.querySelector('#haps').textContent = resjson.main.humidity
    document.querySelector('#hawa').textContent = resjson.wind.speed
}
