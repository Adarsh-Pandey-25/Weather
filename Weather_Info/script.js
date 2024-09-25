const apiKey="77dd323a46d23d562ce1b5779e414af0";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";
let inp=document.querySelector(".search input");
let btn=document.querySelector(".search button");
let hum=document.querySelector(".humidity");
let temp=document.querySelector(".temp");
let win=document.querySelector(".wind");
let cityy=document.querySelector(".City");
let img=document.querySelector(".rain");
async function checkWeather(city){
    let response=await fetch(apiURL+`&appid=${apiKey}`+`&q=${city}`);
    let data=await response.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp) + "°C";
    hum.innerHTML=`${data.main.humidity} %`;
    win.innerHTML=`${data.wind.speed} KM/Hr`;
    cityy.innerHTML=city;
    if(data.weather[0].main=="Wind"){
        img.src=("Image/wind1.png")
    }else if(data.weather[0].main=="Clear"){
        img.src=("Image/clear.png")
    }else if(data.weather[0].main=="Cloud"){
        img.src=("Image/clouds.png")
    }else if(data.weather[0].main=="Humidity"){
        img.src=("Image/humidity1.png")
    }else if(data.weather[0].main=="Rain"){
        img.src=("Image/rain.png")
    }else if(data.weather[0].main=="Snow"){
        img.src=("Image/snow.png")
    }else if(data.weather[0].main=="Mist"){
        img.src=("Image/mist.png")
    }else if(data.weather[0].main=="Drizzle"){
        img.src=("Image/drizzle.png")
    }
    inp.value=" ";
}
btn.addEventListener("click",()=>{
    let city=inp.value;
    console.log(city);
    checkWeather(city);
    inp.value=" ";
});