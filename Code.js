const eje = (n) => {
    resultado = "";
if (n == 0){
        console.log("error")
} else {  
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++){
        resultado += (j==i || j==n-i-1) ? "x": "_";
        
    }
    resultado+="\n";
}
return resultado;
};
}  
console.log(eje (19));