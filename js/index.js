function myfun(){
    var weight=document.querySelector("#bmiCl").value;
    var height= document.querySelector("#bmiCl2").value;
    
    height=height*12;
    height=height*0.025;
    var  newValue=weight/(height*height);
    document.querySelector('#showData').value=newValue;
}
