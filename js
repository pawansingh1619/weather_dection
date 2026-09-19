let searchbox=document.querySelector("#txt input");
let searchbtn=document.querySelector("#head img");

let weathericonimg=document.querySelector("#weathericon");

let apiKey="bc46f82e815b40f72f6282b313f931b5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function weathercheck(cityname){
    const response= await fetch(apiUrl+cityname+`&appid=${apiKey}`);
    var data =await response.json();
    if (data.cod === "404") {
    document.querySelector("#error").innerText = "Invalid city name";
    document.querySelector("#error").style.display = "block";
    document.querySelector("#city").innerText = "Invalid city name";
    document.querySelector("#temp").innerText = "";
    document.querySelector("#humid").innerText = "";
    document.querySelector("#win").innerText = "";
    document.querySelector("#txt input").value = "";
   }else{

    // console.log(data);
    document.querySelector("#error").style.display = "none";
document.querySelector("#city").innerText=data.name;
// document.querySelector("#temp").innerText=data.main.temp+"0C";
document.querySelector("#temp").innerText=Math.round(data.main.temp)+"°C";
document.querySelector("#humid").innerText=data.main.humidity+"%";
document.querySelector("#win").innerText=data.wind.speed+"km/h";

if(data.weather[0].main=="Clouds"){
    weathericonimg.src="clouds.png";
}else if(data.weather[0].main=="Clear"){
    weathericonimg.src="clear.png";
}else if(data.weather[0].main=="Rain"){
    weathericonimg.src="rain.png";
}else if(data.weather[0].main=="Drizzle"){
    weathericonimg.src="drizzle.png";
}else if(data.weather[0].main=="Mist"){
    weathericonimg.src="mist.png";
}
   }
}
searchbtn.addEventListener("click",()=>{
    weathercheck(searchbox.value);

});

