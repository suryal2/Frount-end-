
// d) Print the total population of countries using reduce function


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var country =JSON.parse(this.response);
    const  result=country.reduce((acc,element)=>
          acc+element.population,0)
    console.log( result);
     
    
    
}