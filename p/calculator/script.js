function bclick(val)
{
    document.getElementById("scren").value+=val
}
function bclear(){
    document.getElementById("scren").value=""
}
function bdel(){
    var number=document.getElementById("scren");
    var remove=number.value;
    remove=remove.slice(0,-1);
    number.value=remove;
}

function btnEqual(){
    var text=document.getElementById("scren").value
    var result=eval(text)
    document.getElementById("scren").value=result
}
