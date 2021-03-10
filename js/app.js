"use strict"

let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','total loction'];
function CookieStore(location, mincast, maxcast, avgcookie) {
    
    this.location = location;
    this.mincast = mincast;
    this.maxcast = maxcast;
    this.avgcookie = avgcookie;
    this.randomTotalCust=function () {
        let random =Math.ceil((Math.random() * (this.maxcast - this.mincast + 1)) + this.mincast);
        return random;
        
        
    };

    this.dailySalres= function() {
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
    let Seattle = new CookieStore('Seattle',23,65,6.3); 
    let Tokyo=new CookieStore('Tokyo',3,65,1.2);
    let Dubai=new CookieStore('Dubai',11,38,3.7);
    let paris=new CookieStore('paris',20,38,2.3);
    let lima=new CookieStore('lima',2,16,4.6);

let place =['Seattle','Tokyo','Dubai','paris','lima','total'];
let cookitable = document.getElementById('table');

(function cookieTableHead(){
    
    let thead = document.createElement('thead');
    let empatythead=document.createElement('th');
    thead.appendChild(empatythead);
        
        for (let k = 0; k <15; k++) {
            let th = document.createElement('th');
            th.innerText = hour[k];
            thead.appendChild(th);
            cookitable.appendChild(thead);
         

        }
       
})();
(function cookietablecell(){

    for (let i = 0; i<6 ;i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = place[i];
        tr.appendChild(td);
        cookitable.appendChild(tr)  

    }

}) ();
