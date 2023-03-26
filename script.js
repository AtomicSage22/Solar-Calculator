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
    let powerVariant = document.querySelector('input[name="power"]:checked').value;
    document.querySelector(".answer").textContent = `Number of solar panels: ${Math.ceil(solarPower/powerVariant)}`;
    if(powerVariant == 125)
    {
        document.querySelector(".area").textContent = `Area required: ${(Math.ceil(solarPower/powerVariant))*0.743}m/sq`;
    }
    else if(powerVariant == 180){
        document.querySelector(".area").textContent = `Area required: ${((Math.ceil(solarPower/powerVariant))*3.23).toFixed(2)}m/sq`;
    }
    document.querySelector(".price").textContent = `Approx price: ${(solarPower*22.2).toFixed(2)}`;
    console.log(solarPower);
})