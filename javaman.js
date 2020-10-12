//Get element

var inputText = document.getElementById('txt'),
    items =  document.querySelectorAll('#list li'),
    tab = [], index;


    for (var i = 0 ; i <items.length ; i++){
        tab.push(items[i].innerHTML)
    }


    //Til að sja í console numer á array
    for (var i = 0; i <items.length ;i++){
        items[i].onclick = function(){
            index = tab.indexOf(this.innerHTML)
            console.log(this.innerHTML + " INDEX = " + index)
            
            //Setja inputið sem notandi skrifar í inputbox á listann
            inputText.value= this.innerHTML;
        }
    }





 function refreshArray()
 {
     //Hreinsa array
    tab.length = 0
    items =  document.querySelectorAll('#list li')

     //Fylla inní array
    for (var i = 0 ; i <items.length ; i++){
        tab.push(items[i].innerHTML)
    }

 }   



//Add to list Function
function addLI(){
    var listNode = document.getElementById('list')
    textNode = document.createTextNode(inputText.value)
    liNode = document.createElement('LI')

    liNode.appendChild(textNode)
    listNode.appendChild(liNode)


    
    refreshArray()
    
    //Event á nýju af list itemin
    liNode.onclick = function(){
        index = tab.indexOf(liNode.innerHTML)
        console.log(liNode.innerHTML + " INDEX = " + index)
        
        //Setja inputið sem notandi skrifar í inputbox á listann
        inputText.value= liNode.innerHTML;
    }

}



//Edit Function
function editLI(){
    items[index].innerHTML = inputText.value
    refreshArray()
}



//Delete function



function deleteLI(){

    refreshArray();

    if(items.length > 0 ){
        items[index].parentNode.removeChild(items[index])
        inputText.value = ""
    }
    


}