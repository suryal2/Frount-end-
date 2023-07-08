
// b) Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var country=JSON.parse(this.response);
    const result=country.filter((element)=>element.population<200000);
    console.log(result);
    
    var name = result.map((e)=>e.name.common);
console.log(name)
    
    
}