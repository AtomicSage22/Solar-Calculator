let houseload = document.querySelector("#energy-consumption");
let batteryDcVolt = 12;
let backUpTime = 8;

function inverterCalc(load){
    return Math.ceil(load / batteryDcVolt);
}

function batteryCalc(load, time, volt){
    return Math.ceil(((load * time) /volt)/50) * 50;
}  

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!houseload.value) return;
    let chargingTime = batteryCalc(houseload.value, backUpTime, batteryDcVolt)/10;
    let solarCurrent = chargingTime + inverterCalc(houseload.value);  
    let solarPower = solarCurrent * 14;
    document.querySelector(".answer").textContent = Math.ceil(solarPower/document.querySelector('input[name="power"]:checked').value);
})