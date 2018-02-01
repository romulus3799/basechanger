setInterval(function(){
    try{
        var num_init = document.getElementById("1").value;
        var base_init = Number(document.getElementById("2").value);
        var base_new = Number(document.getElementById("3").value);
        var num_new = parseInt(num_init,base_init).toString(base_new);
        if(num_new !== "NaN"){
            document.getElementById("num_new").innerHTML = 
            num_init + base_init.toString().sub() + " = " + 
            num_new + base_new.toString().sub();
        }
        else{
            document.getElementById("num_new").innerHTML = 
            num_init + base_init.toString().sub() + " = error";
        }
    } catch(err){
        document.getElementById("num_new").innerHTML = "[result]";
    }
},50);
function setInit(num){
    document.getElementById("2").value = num;
}
function setNew(num){
    document.getElementById("3").value = num;
}