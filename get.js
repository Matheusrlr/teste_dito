$(document).ready(function (){

    $.ajax({
      type: "GET",
      url: "https://storage.googleapis.com/dito-questions/events.json",
      success: function(data){
        resposta = data.events
        resposta.sort(function(a,b){
            return new Date(b.timestamp) - new Date(a.timestamp);
          });
        
        for(i in resposta){
          product_data = resposta[i].custom_data;

            
          $("#resposta").append(
            `<div id="evento_${i}"> 
              <h3>Evento ${i}</h3> 
              <div>
                <p> ${resposta[i].event} </p>
                <p> ${resposta[i].timestamp.toString().split('T')[0]} </p>
                <div id="produto_${i}"> </div>
              </div>
            </div>`
          )
          

          for(j in product_data){
            $(`#produto_${i}`).append(`
              <p> ${ product_data[j].value } </p>
              
              
            `)
          }  
        }
        var result = product_data.filter(obj => {
            return obj.key === "transaction_id";
          });
          console.log(result[0]);

          for (k in result){
           console.log(result);

          };

        
      } 
    });
  });
 