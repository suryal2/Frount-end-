// c) Print the following details name, capital, flag using forEach function


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var country=JSON.parse(this.response);
    country.forEach((ele )=>{
        console.log(ele .name,ele .capital,ele .flag);
    })
    
    
}