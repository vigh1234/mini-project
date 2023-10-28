
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}
function incrementVal()
{
    var val = parseInt(document.getElementById('num').value, 10);
    val = isNaN(val) ? 0 : val;
    if(val<10){
        val++;
            document.getElementById('num').value = val;
    }
}
function decrementVal()
{
    var val = parseInt(document.getElementById('num').value, 10);
    val = isNaN(val) ? 0 : val;
    if(val>1){
        val--;
            document.getElementById('num').value = val;
    }

}