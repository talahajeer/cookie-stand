'use strict';

let randomNo = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"];

let parent = document.getElementById("StoresLocations");
let child = document.createElement("ul");
parent.appendChild(child);
let unorderedList = document.createElement("li");
child.appendChild(unorderedList);


unorderedList.textContent = locations[0];
let sales = document.createElement("ul");
unorderedList.appendChild(sales);
let salesList = document.createElement("li");


let Seattle = {
    min: 23,
    max: 65,
    avgCookies: 6.3,
    avgCustomers: 0,
    cookiesHour: [],
    cookiesSum: 0,
    getCookiesNo: function () {
        for (let i = 0; i < hoursArr.length; i++) {
            this.avgCustomers = (randomNo((this.min), (this.max)));
            this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
            console.log(this.cookiesHour);
            
            let salesList = document.createElement("li");
            sales.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
            // console.log(this.cookiesSum);
        }
        sales.appendChild(salesList);
        salesList.textContent = (`Total: ${this.cookiesSum} cookies`);
    }
}
Seattle.getCookiesNo();