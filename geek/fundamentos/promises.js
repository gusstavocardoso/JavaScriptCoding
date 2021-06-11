var p = new Promise(function(resolve, reject){  
    var x = 2 + 3;  
    if(x == 5)  
        resolve(" executada e resolvida com sucesso");  
    else  
        reject("rejeitada");  
    });  

     p.then(function(fromResolve){  
     console.log("Promise"+fromResolve);  
     })
     
     .catch(function(fromReject){  
     console.log("Promise"+fromReject);  
     });  