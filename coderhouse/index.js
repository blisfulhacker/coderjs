



        let confirmacion = prompt("Usted entiende que esta información no es oficial y es un estimado \n Presione 1 para confirmar" )
            
            while (confirmacion != 1) { 
                    confirmacion = prompt("Confirme su conformidad ingresando el número 1")       
                }
                
                if (confirmacion = 1) {

                    calcularconceptos()
                if (salarioDiarioIntegrado>salarioMinimo) {
                    console.log("La prima por antiguedad es: " + ""+ diasxAntiguedad*(salarioMinimo*2));
                    console.log("El total es: " + total + (diasxAntiguedad*(salarioMinimo*2)))
                }
                
                else {
                    console.log("La prima por antiguedad es: " + diasxAntiguedad*(salarioDiarioIntegrado))
                    console.log("El total es: " + total + (diasxAntiguedad*(salarioDiarioIntegrado)))}
                     }
                
                    
function calcularconceptos
 () {
    let antiguedad = Number(prompt("Ingrese su antiguedad en el trabajo"))
    console.log ("Su antiguedad es de " + (antiguedad) + " años")
    let sd = prompt("Ingrese su salario bruto mensual")
    console.log  ("Su Salario diario es: " + sd/30)
    let primaVacacionalDiaria = prompt("Ingrese sus días de vacaciones hasta la fecha")
    console.log ("Su prima vacacional es: " + ((sd/30)*primaVacacionalDiaria*.25)/365) 
    let aguinaldo = prompt("Ingrese los días de aguinaldo otorgados por la empresa")
    console.log ("Su parte correspondiente de aguinaldo es: " + ((sd/30)*aguinaldo)/365)
    salarioDiarioIntegrado =  (sd/30 + (((sd/30)*primaVacacionalDiaria*.25)/365) + (((sd/30)*aguinaldo)/365))
    console.log ("Su salario diario integrado es "+ salarioDiarioIntegrado )
    diasxano = (20*antiguedad)*salarioDiarioIntegrado
    console.log ("Los dias por año trabajado corresponden a: " + diasxano)
    tresmeses = salarioDiarioIntegrado*30*3
    console.log ("Los tres meses de compensación corresponden a " + tresmeses)
    diasxAntiguedad = antiguedad*12
    total = tresmeses + diasxano + aguinaldo + primaVacacionalDiaria
    
}

let salarioMinimo = 123.22






