"use strict"

function cookieStore(location,mincast,maxcast,avgcookie){
this.location=location;
this.mincast=mincast;
this.maxcast=maxcast;
this.avgcookie=avgcookie;
this.randomTotalCust=function(){

    return Math.ceil(math.randomtotalcust()*(this.maxcast-this.mincast+1));
};
this.dailySalres=function(){
    let hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
    let i=0;
    this.text=[];
    let daily=0;
    for (i;i<hour.length;i++)
    {
    let number=Math.ceil(this.randomTotalCust()*this.avgcookie);
    text.push(number);
     daily+=number ;
     
     
    };
}
this.table=function() {
  
    

    
  for (let i=0;i<5;i++){
      let row =document.createElement('tr');
      tr.innerText=location;
      row.setAttrubite('tr');
  }
  for (let k=0;k<97;k++) {
      let cell =document.createElement('td');
       cell.setAttribute('td');
       let avg=this.avgcookie();
       cell.innerText=avg + '' +cookie;
       total+=avg;
       tr.appendChild(avg);
};
let number=document.createElement('td');
number.innerText='total :'+ total + 'cookie';
}

}
let Seattle=new cookieStore('Seattle',23,65,6.3);
let Tokyo=new cookieStore('Tokyo',3,65,1.2);
let Dubai=new cookieStore('Dubai',11,38,3.7);
let paris=new cookieStore('paris',20,38,2.3);
let lima=new cookieStore('lima',2,16,4.6);

