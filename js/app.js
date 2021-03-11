"use strict"
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total loction'];
function CookieStore(location, mincast, maxcast, avgcookie) {

    this.location = location;
    this.mincast = mincast;
    this.maxcast = maxcast;
    this.avgcookie = avgcookie;
    this.randomTotalCust = function () {
        let random = Math.ceil((Math.random() * (this.maxcast - this.mincast + 1)) + this.mincast);
        return random;


    };

    this.dailySalres = function () {
        let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let i = 0;
        this.text = [];
        let daily = 0;
        for (i; i < hour.length; i++) {
            let number = Math.floor(this.randomTotalCust() * this.avgcookie);
            this.text.push(number);
            daily += number;

        };
    }
}
let Seattle = new CookieStore('Seattle', 23, 65, 6.3);
let Tokyo = new CookieStore('Tokyo', 3, 65, 1.2);
let Dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('paris', 20, 38, 2.3);
let lima = new CookieStore('lima', 2, 16, 4.6);

let place = ['Seattle', 'Tokyo', 'Dubai', 'paris', 'lima', 'total'];
let cookitable = document.getElementById('table');

CookieStore.prototype.render = function () {
    this.cookie = 0;
    this.CookiesbyHour();
    const Row = document.createElement('tr');
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.locationName;
    Row.appendChild(tableDataElement);
    for (let i = 0; i < hours.length; i++) {
        tableDataElement = document.createElement('td');
        tableDataElement.textContent = this.cookiesbyHour[i];
        Row.appendChild(tableDataElement);
    }
    const tableHeader = document.createElement('th');
    cookitable.textContent = this.Cookie;
    Row.appendChild(tableHeader);
    cookitable.appendChild(Row);
};
function cookieTableHead() {

    let thead = document.createElement('thead');
    let empatythead = document.createElement('th');
    thead.appendChild(empatythead);

    for (let k = 0; k < 15; k++) {
        let th = document.createElement('th');
        th.innerText = hour[k];
        thead.appendChild(th);
        cookitable.appendChild(thead);


    }

};
(function cookietablecell() {

    for (let i = 0; i < 6; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = place[i];
        tr.appendChild(td);
        cookitable.appendChild(tr)

    }

})();
function cookieFooterRow() {
    const cookitable = document.createElement('tr');
    let Header = document.createElement('th');
    Header.textContent = ' Totals for All Locations';
    cookitable.appendChild(Header);
    let totalOfTotals = 0;
    for (let i = 0; i < hour.length; i++) {
        let hoTotal = 0;
        for (let k = 0; k < place.length; k++) {
            hTotal += place[k].number[i];
            totalOfTotals += hourlyTotal;
        }
        Header = document.createElement('th');
        Header.textContent = hTotal;
        Row.appendChild(Header);
    }
    tableHeader = document.createElement('th');
    tableHeader.textContent = totalOfTotals;
    Row.appendChild(tableHeader);
    cookitable.appendChild(Row);
};


(function renderTable() {
    cookieTableHead();
    for (let i = 0; i < place.length; i++) {
        location[i].render();
    }
    cookieFooterRow();
})();

let form=document.getElementById('cookienewloction');
let mincast=document.getElementById('mincast');
let maxcast=document.getElementById('maxcast');
let avgcookie=document.getElementById('avg');
let sumbit=document.getElementById('sumbit');


let i = 0;
let text = [];
let daily = 0;

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
form.addEventListener('sumbit',function(event){
    event.preventDefault();
    let random = Math.ceil((Math.random() * (maxcast - mincast + 1)) + mincast);

 for (i; i < hour.length; i++) {
            let number = Math.floor(this.randomTotalCust() * this.avgcookie);
            this.text.push(number);
            daily += number;

        };
        return random;
    });
