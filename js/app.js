"use strict"
let table=document.getElementById('table');
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function CookieStore(location, mincast, maxcast, avgcookie) {
    this.location = location;
    this.mincast = mincast;
    this.maxcast = maxcast;
    this.avgcookie = avgcookie;
    this.text = [];
    
    this.randomTotalCust = function () {
        for (let i=0; i<hour.length;i++){
        let random = Math.ceil((Math.random() * (this.maxcast - this.mincast + 1)) + this.mincast);
        return random;
        }
        

    };

    this.dailySalres = function () {

        for (let i=0; i < hour.length; i++) {
            let daily= 0;
            let number = Math.floor(this.randomTotalCust() * this.avgcookie);
            this.text.push(number);
            daily+=number;
    

        };
    }
}
CookieStore.prototype.render =function () {
    this.dailySalres();
    const Row = document.createElement('tr');
    let tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.location;
    Row.appendChild(tableDataElement);
    for (let i = 0; i < hour.length; i++) {
        tableDataElement = document.createElement('td');
        tableDataElement.textContent = this.text[i];
        Row.appendChild(tableDataElement);
    }
    const tableHeader = document.createElement('th');
    tableHeader.textContent = this.daily;
    Row.appendChild(tableHeader);
    table.appendChild(Row);
};
CookieStore.all=[];
let Seattle = new CookieStore('Seattle', 23, 65, 6.3);
let Tokyo = new CookieStore('Tokyo', 3, 65, 1.2);
let Dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('paris', 20, 38, 2.3);
let lima = new CookieStore('lima', 2, 16, 4.6);
let place = [Seattle, Tokyo,Dubai,paris,lima];


function cookieTableHead(){
    
    const thead = document.createElement('thead');
    let th = document.createElement('th');
    thead.textContent='loction';
    thead.appendChild(th);
    
        
        for (let k=0;k<hour.length; k++) {
             th= document.createElement('th');
            th.textContent = hour[k];
            thead.appendChild(th);
         

        }
        th = document.createElement('th');
        th.textContent='loction totale';
        thead.appendChild(th);
        table.appendChild(thead);

       
}
function cookieFooterRow() {
    const cookitable = document.createElement('tr');
    let Header = document.createElement('th');
    Header.textContent = ' Totals for All Locations';
    cookitable.appendChild(Header);
    let Totals = 0;
    for (let i = 0; i < hour.length; i++) {
        let hoTotal= 0;
        for (let k = 0; k < place.length; k++) {
            hoTotal+= place[k].text[i];
            Totals+= hoTotal;
        }
        Header = document.createElement('th');
        Header.textContent = hoTotal;
        cookitable.appendChild(Header);
    }
    Header = document.createElement('th');
    Header.textContent = Totals;
    cookitable.appendChild(Header);
    table.appendChild(cookitable);
}


(function renderTable() {
    cookieTableHead();
        for (let i = 0; i < place.length; i++) {
        place[i].render();
    }
    cookieFooterRow();
})();



