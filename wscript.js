function myFunction() {
    alert("Hello! I am an alert box!");
}

let loc = document.getElementById("location");
let tempIcon = document.getElementById("tempIcon")
let tempValue = document.getElementById("tempValue");
let climate = document.getElementById("climate")
let iconFile = document.querySelector('#tempIcon');

let cityInput = document.getElementById("cityInput");
let btn = document.getElementById("btn");

const apiKey="bfbc7076a0d3bbfe967d17de5ca3c599";

cityInput.addEventListener('input', (e)=>{
    const query = cityInput.value;
    // console.log(query);
    const callApi = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
    console.log(callApi);

    fetch(callApi)
        .then((Response) => {
            return Response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].main;
            const icon = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`


            tempValue.innerHTML = `${temp}`
            climate.innerHTML = `${weather}`
            iconFile.src = iconUrl;

        })
                
})



