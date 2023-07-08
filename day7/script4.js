// e) Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var data = JSON.parse(this.response);
const datas = data.filter((item) => item?.currencies?.USD?.name === "United States dollar").map((value) => value.name);
    console.log('datas', datas);


    }
 
     