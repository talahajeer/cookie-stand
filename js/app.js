'use strict';

let randomNo = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const hoursArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
const locationArr = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];
const shops = [];

let totalOfHours = 0;
let totalOfTotal = 0;


const parent = document.getElementById("StoresLocations");
const table = document.createElement("table");
table.setAttribute("id","tableContent");
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
    shops.push(this);
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

let tokyo = new Shop("Tokyo", 3, 24, 1.2);

let dubai = new Shop("Dubai", 11, 38, 3.7);

let paris = new Shop("Paris", 20, 38, 2.3);

let lima = new Shop("Lima", 2, 16, 4.6);



function renderTable() {
    for (let i = 0; i < shops.length; i++) {
        shops[i].getCookiesNo();
        shops[i].render();
    }
}

function renderTotal() {
    const dataRaw = document.createElement("tr");
    table.appendChild(dataRaw);

    const hoursTotal = document.createElement("th");
    dataRaw.appendChild(hoursTotal);
    hoursTotal.textContent = "Totals";

    for (let i = 0; i < hoursArr.length; i++) {
        let subTotals = 0;

        for (let j = 0; j < shops.length; j++) {
            subTotals = subTotals + shops[j].cookiesHour[i];
        }
        totalOfHours = totalOfHours + subTotals;
        const totalHour1 = document.createElement("th");
        dataRaw.appendChild(totalHour1);
        totalHour1.textContent = subTotals;
    }
    const totalHour2 = document.createElement("th");
    dataRaw.appendChild(totalHour2);
    totalHour2.textContent = totalOfHours;
}




let storeForm = document.getElementById("storeForm");
storeForm.addEventListener("submit", submitter);


function submitter(event) {
    event.preventDefault();
    console.log(event);
    let locationName = event.target.storeName.value;
    console.log(locationName);
    let min = event.target.min.value;
    console.log(min);
    let max = event.target.max.value;
    console.log(max);
    let avgCookies = event.target.avgCookies.value;
    console.log(avgCookies);

    let addedStore = new Shop(locationName, min, max, avgCookies);
    console.log(addedStore);
    addedStore.getCookiesNo();
    addedStore.render();

    let container = document.getElementById("tableContent");
    container.textContent = "";
    hourHeading();

    for (let i = 0; i < shops.length; i++) {
        shops[i].getCookiesNo();
        shops[i].render();
    }
    renderTotal();
}
renderTable();
renderTotal();