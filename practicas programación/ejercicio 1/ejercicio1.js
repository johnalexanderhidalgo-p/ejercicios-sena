let figura = prompt('Ingrese la figura que desea calcular');
let tipo = prompt("¿que tipo de calculo desea realizar perimetro o area?");


if(figura.toLowerCase() == "triangulo"){
    if(tipo.toLowerCase() == "perimetro"){
        let a = prompt("ingrese el valor del lado A")
        let b = prompt("ingrese el valor del lado B")
        let c = prompt("ingrese el valor del lado C")
        perimetroTriangulo = Number(a) + Number(b) + Number(c);
        document.write("El perimetro del triangulo es: " + perimetroTriangulo);

    }else if(tipo.toLowerCase == "area"){
        let b = prompt("ingrese el valor del lado B")
        let altura = prompt("ingrese la altura")
        areaTriangulo = Number(b) * Number(altura) / 2;
        document.write("<br>El area del triangulo es: " + areaTriangulo);
    }else{
        document.write("el valor ingresado no corresponde a un calculo")
    }
    


} else if(figura.toLowerCase() == "rectangulo"){
    let a = prompt("ingrese el valor del lado A")
    let b = prompt("ingrese el valor del lado B")

    if(tipo.toLowerCase() == "perimetro"){
        perimetroRectangulo = 2 * (Number(a) + Number(b));
        document.write("El perimetro del rectangulo es: " + perimetroRectangulo);

    } else if(tipo.toLowerCase() == "area"){
        areaRectangulo = Number(b) * Number(a);
        document.write("<br>El area del rectangulo es: " + areaRectangulo);
    }else{
        document.write("el valor ingresado no corresponde a un calculo")
    }
    
    

} else if(figura.toLowerCase() == "cuadrado"){
    let a = prompt("Ingrese el valor de los lados del cuadrado")

    if(tipo.toLowerCase() == "perimetro"){
        perimetroCuadrado = 4 * Number(a);
        document.write("El perimetro del cuadrado es: " + perimetroCuadrado);

    } else if(tipo.toLowerCase() == "area"){
        areaCuadrado = Number(a) * Number(a);
        document.write("<br>El area del cuadrado es: " + areaCuadrado);
    }else{
        document.write("el valor ingresado no corresponde a un calculo")
    }
    

} else if(figura.toLowerCase() == "circulo"){

    let radio = prompt("ingresa el radio del circulo")
    const pi = 3.14;

    if(tipo.toLowerCase() == "perimetro"){
        perimetroCirculo = 2 * pi * Number(radio) * Number(radio);
        document.write("El perimetro del circulo es: " + perimetroCirculo);
    }else if(tipo.toLowerCase() == "area"){
        areaCirculo = pi * Number(radio) * Number(radio)
        document.write("<br>El area del circulo es: " + areaCirculo);
    }else{
        document.write("el valor ingresado no corresponde a un calculo")
    }
      

} else{
    document.write("el valor que ingresaste no es un valor permitido")
}