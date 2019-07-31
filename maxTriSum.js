var http = require('http');  
//create a server object:  
  
http.createServer(function (req, res) {  
    // res.write('Hello World!'); //write a response to the client  
             

    res.end(); //end the response  
}).listen(5000); //the server object listens on port 8080   
  
// Console will print the message  
let tri = [3,2,6,8,2,3]; 
let tri2 =[12,-7,29,-5,0,-7,0,0,29];
function maxTripletSum(tri)
{
// console.log(tri);

 let sum = '-1000000'; 
let n = tri.length; 
        for (let i = 0; i < n; i++) 
            for (let j = i + 1; j < n; j++) 
                for (let k = j + 1; k < n; k++)  
                    if (sum < tri[i] + tri[j] + tri[k])  
                        sum = tri[i] + tri[j] + tri[k];              
        return sum; 
    
}
const sumdata = maxTripletSum(tri);
const sumdata2 = maxTripletSum(tri2);
console.log('max[3,2,6,8,2,3'+sumdata);
console.log('[12,-7,29,-5,0,-7,0,0,29]'+sumdata2);