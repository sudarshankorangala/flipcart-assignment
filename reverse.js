var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  
    res.write('Hello World!'); //write a response to the client  
             

    res.end(); //end the response  
}).listen(5000); //the server object listens on port 8080   
  
// Console will print the message  
function StringUtil() {

  
    var result = "";
    var str = "Reverse this String, please!"
    var wordArray = str.split(" ");
    for(var i  =0; i<wordArray.length-1 ;i++) {        
       if(i==1)
       {
         result += reverse(wordArray[i]) + " ";
       }else{
result += wordArray[i] + " ";
       }          
       
    }
     console.log(result);


// console.log(result.trim());

}

function reverse(str) {
var reverseStr = '';
for (var i = str. length - 1; i >= 0; i--)
reverseStr = reverseStr + str[i];
return reverseStr;
}

StringUtil();
// console.log('Server running at 5000'); 