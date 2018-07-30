function loadCurrencies(){  
 //get base currency
	let  base = document.querySelector("#baseCurrency").value;
    //query URL
  let queryURL = `https://exchangeratesapi.io/api/latest?base=${base}`;
    //make AJAX requestusing fetch API
    fetch (queryURL)
    .then(function(response){
    	//return response
    	return response.json();
    })
    .then(function(result){
      //print the result 
       console.log(result);
       displayCurrencyResult(result);    	
    })
   .catch(function(error){
    //in case of error
    	alert("Something went wrong, check internet connectivity or Invalid currency");
   	  console.log(error.message);
   });
}
function displayCurrencyResult(result){
	//get message div
	let msg=document.querySelector("#message");
  //get rate div
	let d=document.querySelector("#rates");
	if(result.message){
	   //when getting error
    msg.innerHTML='<div class="alert alert-success alert-dismissible" role="alert"><strong>Bad News!!</strong> Something went wrong,Check internet connectivity.</div> ';
      }
     else {
      //empty the div that contains the rate
      ratediv="";
     d.innerHTML=ratediv;
     //iterate in the array  
	 for (i in result.rates){
   ratediv +='<div class="jumbotron" style="text-align:center" ><h1> ' + i + '  </h1><h3 style="color:blue"> '+result.rates[i]+'</h3></div>';
 }
	           
	  $('#rates').append(ratediv);

}
console.log(result);
}




