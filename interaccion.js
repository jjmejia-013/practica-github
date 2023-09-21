dineroJuan = prompt("cuanto dinero tienes Juan");
/*dineroJose = prompt("cuanto dinero tienes Jose");
dineroMejia = prompt("cuanto dinero tienes Mejia");*/

/*palitoHeladoAgua = 0.6;
palitoHeladoCrema = 1;
bombonHeladix = 1.6;
bombonHeladoHeladovich = 1.7;
bombonHeladoHelardo = 1.8;
poteHeladoConfites = 2.9;*/





if (dineroJuan >= 0.6 && dineroJuan < 1) {
    alert ("Su helado es de agua"); 
    alert ("y te sobran " + (dineroJuan - 0.6));
}

else if (dineroJuan >= 1 && dineroJuan < 1.6 ){
    alert ("Su helado es de crema"); 
}

else if (dineroJuan >= 1.6 && dineroJuan < 1.7 ){
    alert ("Su helado es de Heladix"); 
}
else if (dineroJuan >= 1.7 && dineroJuan < 1.8 ){
    alert ("Su helado es de Heladovich"); 
}
else if (dineroJuan >= 1.8 && dineroJuan < 2.9 ){
    alert ("Su helado es de Helardo"); 
}
else if (dineroJuan >= 2.9 ){
    alert ("Su helado es de confites");
}

else {
    alert ("no le alcanza")
}

