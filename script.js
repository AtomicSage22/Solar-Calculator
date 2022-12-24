let houseload = 350;
let batteryDcVolt = 12;
let backUpTime = 8;
let chargingTime = batteryCalc(houseload, backUpTime, batteryDcVolt)/10;
let solarCurrent = chargingTime + inverterCalc(houseload);  
let solarPower = solarCurrent * 14;

let optionOne = (power) => {
    return Math.ceil(power/125);
}

let optionTwo = (power) => {
    return Math.ceil(power/180);
}


let inverterCalc = (load) =>{
    return Math.ceil(load / batteryDcVolt);
}

let batteryCalc = (load, time, volt) =>{
    return Math.ceil(((load * time) /volt)/50) * 50;
}  

console.log(inverterCalc(houseload));
console.log(batteryCalc(houseload, backUpTime, batteryDcVolt)); 