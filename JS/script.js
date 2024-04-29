// Refs
const lengthInput= document.getElementById('length')


document.getElementById('btn').addEventListener('click', function(){
    const length = lengthInput.value;
    console.log("length: ",length);

    const age = document.getElementById('age').value;
    console.log("age: ",age);
    //var priceOverKm = 0.21;
     var fullPrice = length * 0.21 ;
     
     console.log(fullPrice);
    
     if(age <= 18){
         document.getElementById('cost').innerHTML= line1 + ((fullPrice / 100) * 80) + value;
     }
     else if(age>=65){
         document.getElementById('cost').innerHTML= line1+ ((fullPrice/100)*60)+ value;
     }
     else{
         document.getElementById('cost').innerHTML= line1+ fullPrice+ value;
    
     }
     console.log("cost: ",cost);

})


