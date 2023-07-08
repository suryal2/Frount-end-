
// a) Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var  countries = JSON.parse(request.response);
    console.log( countries);
     const asia = countries.filter((element)=>{
        if(element.region ==='Asia'){
            return element. name;
        }
    })
      
    console.log(asia);
     
}