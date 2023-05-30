var dist = Number(prompt("Digame la distancia que debe recorrer", "0"));

if (dist <= 1000)
   alert("Usted debe ir a PIE");
else if (dist <= 10000)
   alert("Usted debe ir en BICICLETA");
   else if (dist <= 30000)
   alert("Usted debe ir en COLECTIVO");
   else if (dist <= 100000)
   alert("Usted debe ir en AUTO");
   else if (dist >= "100001")
   alert ("Hey te pedi un numero");
else
   alert("Usted debe ir en AVION");