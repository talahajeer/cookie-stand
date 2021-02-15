'use strict';

let randomNo = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let hoursArr = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];


let seattle = {
    locationName: "Seattle",
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
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
        }
        // console.log(this.cookiesHour);
        // console.log(this.cookiesSum);
    },
    render: function () {
        let parent = document.getElementById("StoresLocations");
        let shopName = document.createElement("h3");
        parent.appendChild(shopName);
        let unorderedList = document.createElement("ul");
        parent.appendChild(unorderedList);
        shopName.textContent = this.locationName;

        for (let i = 0; i < hoursArr.length; i++) {
            let salesList = document.createElement("li");
            unorderedList.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
        }
        let totalList = document.createElement("li");
        unorderedList.appendChild(totalList);
        totalList.textContent=`Total: ${this.cookiesSum} cookies`;
    }
}
seattle.getCookiesNo();
seattle.render();

let tokyo = {
    locationName: "Tokyo",
    min: 3,
    max: 24,
    avgCookies: 1.2,
    avgCustomers: 0,
    cookiesHour: [],
    cookiesSum: 0,
    getCookiesNo: function () {
        for (let i = 0; i < hoursArr.length; i++) {
            this.avgCustomers = (randomNo((this.min), (this.max)));
            this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
        }
        // console.log(this.cookiesHour);
        // console.log(this.cookiesSum);
    },
    render: function () {
        let parent = document.getElementById("StoresLocations");
        let shopName = document.createElement("h3");
        parent.appendChild(shopName);
        let unorderedList = document.createElement("ul");
        parent.appendChild(unorderedList);
        shopName.textContent = this.locationName;

        for (let i = 0; i < hoursArr.length; i++) {
            let salesList = document.createElement("li");
            unorderedList.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
        }
        let totalList = document.createElement("li");
        unorderedList.appendChild(totalList);
        totalList.textContent=`Total: ${this.cookiesSum} cookies`;
    }
}
tokyo.getCookiesNo();
tokyo.render();

let dubai = {
    locationName: "Dubai",
    min: 11,
    max: 38,
    avgCookies: 3.7,
    avgCustomers: 0,
    cookiesHour: [],
    cookiesSum: 0,
    getCookiesNo: function () {
        for (let i = 0; i < hoursArr.length; i++) {
            this.avgCustomers = (randomNo((this.min), (this.max)));
            this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
        }
        // console.log(this.cookiesHour);
        // console.log(this.cookiesSum);
    },
    render: function () {
        let parent = document.getElementById("StoresLocations");
        let shopName = document.createElement("h3");
        parent.appendChild(shopName);
        let unorderedList = document.createElement("ul");
        parent.appendChild(unorderedList);
        shopName.textContent = this.locationName;

        for (let i = 0; i < hoursArr.length; i++) {
            let salesList = document.createElement("li");
            unorderedList.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
        }
        let totalList = document.createElement("li");
        unorderedList.appendChild(totalList);
        totalList.textContent=`Total: ${this.cookiesSum} cookies`;
    }
}
dubai.getCookiesNo();
dubai.render();

let paris = {
    locationName: "Paris",
    min: 20,
    max: 38,
    avgCookies: 2.3,
    avgCustomers: 0,
    cookiesHour: [],
    cookiesSum: 0,
    getCookiesNo: function () {
        for (let i = 0; i < hoursArr.length; i++) {
            this.avgCustomers = (randomNo((this.min), (this.max)));
            this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
        }
        // console.log(this.cookiesHour);
        // console.log(this.cookiesSum);
    },
    render: function () {
        let parent = document.getElementById("StoresLocations");
        let shopName = document.createElement("h3");
        parent.appendChild(shopName);
        let unorderedList = document.createElement("ul");
        parent.appendChild(unorderedList);
        shopName.textContent = this.locationName;

        for (let i = 0; i < hoursArr.length; i++) {
            let salesList = document.createElement("li");
            unorderedList.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
        }
        let totalList = document.createElement("li");
        unorderedList.appendChild(totalList);
        totalList.textContent=`Total: ${this.cookiesSum} cookies`;
    }
}
paris.getCookiesNo();
paris.render();

let lima = {
    locationName: "Lima",
    min: 2,
    max: 16,
    avgCookies: 4.6,
    avgCustomers: 0,
    cookiesHour: [],
    cookiesSum: 0,
    getCookiesNo: function () {
        for (let i = 0; i < hoursArr.length; i++) {
            this.avgCustomers = (randomNo((this.min), (this.max)));
            this.cookiesHour[i] = Math.floor(this.avgCookies * this.avgCustomers);
            this.cookiesSum = this.cookiesSum + this.cookiesHour[i];
        }
        // console.log(this.cookiesHour);
        // console.log(this.cookiesSum);
    },
    render: function () {
        let parent = document.getElementById("StoresLocations");
        let shopName = document.createElement("h3");
        parent.appendChild(shopName);
        let unorderedList = document.createElement("ul");
        parent.appendChild(unorderedList);
        shopName.textContent = this.locationName;

        for (let i = 0; i < hoursArr.length; i++) {
            let salesList = document.createElement("li");
            unorderedList.appendChild(salesList);
            salesList.textContent = (`${hoursArr[i]}: ${this.cookiesHour[i]} cookies`);
        }
        let totalList = document.createElement("li");
        unorderedList.appendChild(totalList);
        totalList.textContent=`Total: ${this.cookiesSum} cookies`;
    }
}
lima.getCookiesNo();
lima.render();