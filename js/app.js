'use strict';

let randomNo = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let locationArr = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
let subTotals = 0;
let totalOfHours = 0;
let totalOfTotal = 0;


const parent = document.getElementById("StoresLocations");
const table = document.createElement("table");
parent.appendChild(table);

function hourHeading() {
    const hoursRaw = document.createElement("tr");
    table.appendChild(hoursRaw);

    for (let i = -1; i < hoursArr.length; i++) {
        const hourName1 = document.createElement("th");
        hoursRaw.appendChild(hourName1);
        hourName1.textContent = (hoursArr[i]);
    }

    const hourName1 = document.createElement("th");
    hoursRaw.appendChild(hourName1);
    hourName1.textContent = ("Daily Location Total");
}
hourHeading();

function Shop(locationName, min, max, avgCookies) {
    this.locationName = locationName;
    this.min = min;
    this.max = max;
    this.avgCookies = avgCookies;
    this.avgCustomers = 0;
    this.cookiesHour = [];
    this.cookiesSum = 0;
}

Shop.prototype.getCookiesNo = function () {
    for (let i = 0; i < hoursArr.length; i++) {
        this.avgCustomers = (randomNo((this.min), (this.max)));
        this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
        this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
    }
}

Shop.prototype.render = function () {
    const dataRaw = document.createElement("tr");
    table.appendChild(dataRaw);

    const locationData = document.createElement("td");
    dataRaw.appendChild(locationData);
    locationData.textContent = this.locationName;


    for (let i = 0; i < hoursArr.length; i++) {
        const saleData = document.createElement("td");
        dataRaw.appendChild(saleData);
        saleData.textContent = this.cookiesHour[i];
    }
    const saleDataTotal = document.createElement("td");
    dataRaw.appendChild(saleDataTotal);
    saleDataTotal.textContent = this.cookiesSum;

}

let seattle = new Shop("Seattle", 23, 65, 6.3);
seattle.getCookiesNo();
// console.log(seattle);
seattle.render();

let tokyo = new Shop("Tokyo", 3, 24, 1.2);
tokyo.getCookiesNo();
tokyo.render();

let dubai = new Shop("Dubai", 11, 38, 3.7);
dubai.getCookiesNo();
dubai.render();

let paris = new Shop("Paris", 20, 38, 2.3);
paris.getCookiesNo();
paris.render();

let lima = new Shop("Lima", 2, 16, 4.6);
lima.getCookiesNo();
lima.render();

let shops = [seattle, tokyo, dubai, paris, lima];

function renderTotal() {
    const dataRaw = document.createElement("tr");
    table.appendChild(dataRaw);

    const hoursTotal = document.createElement("th");
    dataRaw.appendChild(hoursTotal);
    hoursTotal.textContent = "Totals";

    for (let i = 0; i < hoursArr.length; i++) {
        const totalHour1 = document.createElement("th");
        dataRaw.appendChild(totalHour1);

        subTotals = seattle.cookiesHour[i] + tokyo.cookiesHour[i] + dubai.cookiesHour[i] + paris.cookiesHour[i] + lima.cookiesHour[i];
        totalHour1.textContent = (subTotals);
        totalOfHours = totalOfHours + subTotals;
    }
    const totalHour1 = document.createElement("th");
    dataRaw.appendChild(totalHour1);
    totalHour1.textContent = (totalOfHours);
}
renderTotal();

