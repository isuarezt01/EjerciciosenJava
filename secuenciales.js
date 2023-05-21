//EJERCICIOS DE PSEINT A JAVA
const Leer = require ("prompt-sync")()
Escribir = console
//class: Contenedor de funciones (metodos)
class secuenial{
//EJERICICIO 1 ENTIDADES PRIMITIVAS FORMULA GENERAL
ejercicio1(){
	console.log	("EJERICICIO 1 ENTIDADES PRIMITIVAS FORMULA GENERAL")	
		//DECLARARMOS LAS VARIABLES
		let a, b, c, resultado1
		a=0, b=0, c=0 
		//INGRESE LOS DATOS
		a=Leer ("Ingrese valor de A:")
		b=Leer ("Ingrese valor de B:")
		c=Leer ("Ingrese valor de C:")
		//PROCESO
		resultado1= (-b + Math.sqrt(b**2+(4*a*c)))/(2*a)
		console.log ("El resultado de es: ", resultado1)
	}

//EJERICICIO 2 ENTIDADES PRIMITIVAS SOLUCION LOGICA
ejercicio2(){
    console.log ("EJERICICIO 2 ENTIDADES PRIMITIVAS SOLUCION LOGICA")
        //DECLARARMOS LAS VARIABLES
        let a, b, resultadol
        a=0, b=0
        //INGRESE LOS DATOS
        a=Leer ("Ingrese valor de A: ")
        b=Leer ("Ingrese valor de B: ")
        //PROCESO
        resultadol= ((3+5*8)<3 && ((-6/3*4)+2<2)) || (a>b)
        console.log ("El resultado es: ", resultadol)
    }  
    
//EJERICICIO 3 ENTIDADES PRIMITIVAS CAMBIO DE VALORES
ejercicio3(){
    console.log ("EJERICICIO 3 ENTIDADES PRIMITIVAS CAMBIO DE VALORES")
        //DECLARARMOS LAS VARIABLES
        let a, b, aux 
        a=0, b=0
        //INGRESE LOS DATOS
        a= Leer ("Ingrese valor de A: ")
        b= Leer ("Ingrese valor de B: ")
        //PROCESO
        aux=a
        a=b
        b=aux
        console.log ("El nuevo valor de A es:",a)
        console.log ("El nuevo valor de B es:",b)
    } 

//EJERICICIO 4 SECUENCIALES HORAS MIN SEG 
ejercicio4(){
    console.log	("EJERICICIO 4 ENTIDADES PRIMITIVAS TOTAL DE SEGUNDOS EQUIVALENTES")
        //DECLARARMOS LAS VARIABLES
        let horas, min, seg
        let horas_seg, min_seg, total
        //INGRESE LOS DATOS
        horas=parseInt(Leer ("Ingrese las horas:"))
        min=parseInt(Leer ("Ingrese los min:"))
        seg=parseInt(Leer ("Ingrese los seg:"))
        //PROCESO
        horas_seg=horas*3600
        min_seg=min*60
        total=horas_seg+min_seg+seg
        console.log  ("Los segundos equivalentes son:",total)
    }  
    
//EJERICICIO 5 SECUENCIALES AREA Y LONGITUD DE UN CIRCULO
ejercicio5(){
    console.log ("EJERICICIO 5 SECUENCIALES AREA Y LONGITUD DE UN CIRCULO")
        //DECLARARMOS LAS VARIABLES
        let radio, area, Long, decimal, decimal2
        //INGRESE LOS DATOS
        radio=Leer ("Ingrese el radio del circulo:")
        //PROCESO
        area=Math.PI*radio**2
        Long=2*Math.PI*radio
        decimal=area.toFixed(2) 
        decimal2=Long.toFixed(2)
        console.log ("Area de la circunferencia: ",decimal)
        console.log ("Longuitud de la circunferencia: ",decimal2)
    }
 
//EJERICICIO 6 SECUENCIALES PORCENTAJE DE HOMBRES Y MUJERES 
ejercicio6(){
    let num_hombres, num_mujeres 
    num_mujeres=0, num_mujeres=0
    let total_estudiantes 
    let porcentajeH , porcentajeM
    num_hombres= Leer (" Digite el numero de hombres:")
    num_hombres=Number(num_hombres)
    num_mujeres= Leer ("Digite el numero de mujeres:")
    num_mujeres=Number(num_mujeres)
    total_estudiantes=num_hombres+num_mujeres
    porcentajeH=num_hombres / total_estudiantes*100
    porcentajeM=num_mujeres / total_estudiantes*100
    console.log (" El porcentaje de Hombres es:",porcentajeH,"%")
    console.log (" El porcentaje de Mujeres es:",porcentajeM,"%")
}

//EJERICICIO 7 SECUENCIALES HORAS Y MINUTOS EXAMENES   
ejercicio7(){
    console.log ("EJERICICIO 7 SECUENCIALES TOTAL DE HORAS Y MINUTOS QUE TARDA EN REVIAR LOS EXAMENES")
        //DECLARARMOS LAS VARIABLES
        let exama, examb, examc
        let mina, minb, minc
        let totaltiempo, totalmin, totalhoras
        exama=0, examb=0, examc=0
        //INGRESE LOS DATOS
        exama=Leer ("Ingrese cantidad de evaluaciones A:")
        examb=Leer ("Ingrese cantidad de evaluaciones B:")
        examc=Leer ("Ingrese cantidad de evaluaciones C:")
        //PROCESO
        mina=exama*5
        minb=examb*8
        minc=examc*6
        totaltiempo=mina+minb+minc
        totalhoras=Math.trunc(totaltiempo/60)
        totalmin=totaltiempo%60
        console.log ("Se tardaria ", totalhoras, " horas con ", totalmin, " minutos")
    }  
  
//EJERICICIO 8 SECUENCIALES DESCUENTO DEL 15% 
ejercicio8(){
    console.log ("EJERICICIO 8 SECUENCIALES DESCUENTO DEL 15% ")
        //DECLARARMOS LAS VARIABLES
	    let total, descuento, precioapagar
        //INGRESE LOS DATOS
	    total=Leer ("Ingrese monto total:")
        //PROCESO
	    descuento=total*0.15
	    precioapagar=total-descuento
	    console.log ("Total a pagar con el 15% de descuento es: ", precioapagar,"$")
    }    

//EJERICICIO 9 SECUENCIALES CALIFICACIONES DE UN ALUMNO 
ejercicio9(){
    console.log ("EJERICICIO 9 SECUENCIALES NOTA FINAL DE UN ALUMNO")
        //DECLARARMOS LAS VARIABLES
        let parcial1, parcial2, parcial3, promedio, examenfinal,trabajofinal
        let porcentaje_calificaciones, porcentaje_examenfinal, porcentaje_trabajofinal, notafinal	
        //INGRESE LOS DATOS 
        parcial1=parseFloat(Leer("Ingrese nota de su parcial 1:"))
        parcial2=parseFloat(Leer("Ingrese nota de su parcial 2:"))
        parcial3=parseFloat(Leer("Ingrese nota de su parcial 3:"))
        examenfinal=parseFloat(Leer("Ingrese nota de examen final:"))
        trabajofinal=parseFloat(Leer("Ingrese nota de trabajo final:"))
        //PROCESO
        promedio=(parcial1+parcial2+parcial3)/3
        porcentaje_calificaciones=Math.round(promedio*0.55)
        console.log ("55% Promedio de sus tres notas parciales es de: ", porcentaje_calificaciones)
        porcentaje_examenfinal=Math.round(examenfinal*0.30)
        console.log ("30% calificacion examen final: ", porcentaje_examenfinal)
        porcentaje_trabajofinal=Math.round(trabajofinal*0.15)
        console.log ("15% calificacion trabajo final: ", porcentaje_trabajofinal)
        notafinal= porcentaje_calificaciones + porcentaje_examenfinal + porcentaje_trabajofinal
        console.log ("Nota final:",notafinal)
    } 
    
//EJERICICIO 10 SECUENCIALES NUMERO PAR E IMPAR
ejercicio10(){
    console.log ("EJERICICIO 10 SECUENCIALES NUMERO PAR E IMPAR")
	    //DECLARARMOS LAS VARIABLES
        let numero1
	    //INGRESE LOS DATOS 
	    numero1= Leer ("Ingrese un numero:")
        //PROCESO
	    if (numero1%2==0) {
            console.log ("El numero", numero1, "es par")
        }else
	    	console.log ("El numero", numero1, "es impar")       
    }

//EJERICICIO 11 SECUENCIALES APROBADO O REPROBADO 
ejercicio11(){
    console.log ("EJERICICIO 11 SECUENCIALES APROBADO O REPROBADO")
        //DECLARARMOS LAS VARIABLES 
        let nota1, nota2, nota3, promedio
        //INGRESE LOS DATOS 
        nota1=0.0, nota2=0.0, nota3=0.0
        nota1=parseFloat(Leer ("Ingrese nota 1:"))
		nota2=parseFloat(Leer ("Ingrese nota 2:"))
		nota3=parseFloat(Leer ("Ingrese nota 3:"))
        //PROCESO
        promedio=(nota1 + nota2 + nota3)/3
	    if (promedio>=70){
            console.log ("Aprobado con:", promedio)
        } else
	        console.log ("Reprobado con:", promedio)
    } 
    
//EJERICICIO 12 SECUENCIALES DESCUENTO MAYOR A 100$ 
ejercicio12(){
    console.log ("EJERICICIO 12 SECUENCIALES DESCUENTO SI lA COMPRA SUPERA LOS 100$")
        //DECLARARMOS LAS VARIABLES 
        let total, descuento, totalapagar
        //INGRESE LOS DATOS
        total=Leer ("Ingrese el total:")
        //PROCESO
        if (total>100){
            descuento= total*0.20
            totalapagar=total-descuento
            console.log ("Total a pagar con descuento:",totalapagar)
        }else
            console.log ("Total a pagar sin descuento es:", total,"$")
	}

//EJERICICIO 13 SECUENCIALES OPERACIONES CON 2 NUMEROS
ejercicio13(){
    console.log ("EJERICICIO 13 SECUENCIALES OPERACIONES CON 2 NUMEROS")
        //DECLARARMOS LAS VARIABLES
        let num1, num2, resultado
        //INGRESE LOS DATOS
        num1=parseInt(Leer ("Ingrese num1:"))
        num2=parseInt(Leer ("Ingrese num2:"))
        //PROCESO
        if (num1==num2){
            resultado=num1*num2
            console.log ("Como",num1, "no es igual a ", num2, " en ese caso se multiplica")
        }else 
            if(num1>num2){
                resultado=num1-num2
                console.log ("Como ",num1, "es mayor a ", num2, " en ese caso se resta")
        }   else
            resultado=num1+num2
            console.log ("Como ",num1, "es menor a ", num2, " en ese caso se suma")
    console.log ("El resultado es: ", resultado)    
    } 
    
//EJERICICIO 14 SECUENCIALES DETERMINAR EL MAYOR DE LOS 3 NUMEROS
ejercicio14(){
    console.log ("EJERICICIO 14 SECUENCIALES ETERMINAR EL MAYOR DE LOS 3 NUMEROS")
        //DECLARARMOS LAS VARIABLES
        let num1,num2, num3
        //INGRESE LOS DATOS
        console.log ('Ingrese 3 numeros:')
        num1=Leer ("Ingrese num1:")
        num2=Leer ("Ingrese num2:")
        num3=Leer ("Ingrese num3:")
        //PROCESO
        if ((num1>num2) && (num1>num3)){
            console.log ("El mayor es",num1)
        }else{
            if ((num2>num1) && (num2>num3)){
                console.log ("El mayor es:", num2)
            }else{
                console.log ("El mayor es:",num3)
            }
        }
    }
    
//EJERICICIO 15 SECUENCIALES DESCUENTO SEGUN EL KILO DE MANZANAS
ejercicio15(){
    console.log ("EJERICICIO 15 SECUENCIALES DESCUENTO SEGUN EL KILO DE MANZANAS")
        //DECLARARMOS LAS VARIABLES
        let peso, total
        let descuento10, descuento_15, descuento20
        let precioinicial, precionormal, precio10, precio15, precio20
        //INGRESE LOS DATOS
        peso=Leer ('Ingrese los kilos de manzana comprados: ')
        total=Leer ('Ingrese el precio del kilo de manzanas: ')
        //PROCESO
        precioinicial=(peso*total)
        if ((peso>0) && (peso<=2)){
            precionormal=precioinicial
            console.log ('Compro 2 kilos o menos no aplica descuento')
            console.log ('El total a pagar es: ',total,'$')
        }else{
            if ((peso>2.01) && (peso<=5)){
                descuento10=(precioinicial*0.10)
                precio10=(precioinicial-descuento10)
                console.log ('Compro de 2.01 a 5 kilos de manzanas aplica un descuento del 10%')
                console.log ('El total a pagar es: ',precio10,'$')
            }else{
                if ((peso>5.01) && (peso<=10)){
                    descuento_15=(precioinicial*0.15)
                    precio15=(precioinicial-descuento_15)
                    console.log ('Compro de 5.01 a 10 kilos de manzanas aplica un descuento del 15%')
                    console.log ('El total a pagar es: ',precio15,'$')
                }else{
                    descuento20=(precioinicial*0.20)
                    precio20=(precioinicial-descuento20)
                    console.log ('Compro 10.01 o mas kilos de manzanas aplica un descuento del 20%')
                    console.log ('El precio a pagar es: ',precio20,'$')
                }
            }
        }
    }	

//EJERICICIO 16 SECUENCIALES DIAS DE LA SEMANA
ejercicio16(){
	console.log ("EJERICICIO 16 SECUENCIALES DIAS DE LA SEMANA")
        //DECLARARMOS LAS VARIABLES
        let dia
        //INGRESE LOS DATOS
        dia=Leer ("Ingrese un numero del 1 al 7:")
        //PROCESO
        if (dia==1){
            console.log ("El dia de la semana es Lunes")
        }else{
            if (dia==2){
                console.log ("El dia de la semana es Martes")
            }else{
                if (dia==3){
                    console.log ("El dia de la semana es Miercoles")
                }else{
                    if (dia==4){
                        console.log ("El dia de la semana es Jueves")
                    }else{
                        if (dia==5){
                            console.log ("El dia de la semana es Viernes")
                        }else{
                            if (dia==6){
                                console.log ("El dia de la semana es Sabado")
                            }else{
                                if (dia==7){
                                    console.log ("El dia de la semana es Domingo")
                                }else{
                                    console.log ("Ingrese solo numeros del 1 al 7")
                                }
                            }
                        }
                    }
                }
            }   
        }
    }
   
//EJERICICIO 17 SECUENCIALES TEMATICA DE ANIVERSARIO DE BODA SEGUN LA BODA
ejercicio17(){
	console.log ("EJERICICIO 17 SECUENCIALES tEMATICA DE ANIVERSARIO DE BODA SEGUN LA BODA")
        //DECLARARMOS LAS VARIABLES
        let boda
        //INGRESE LOS DATOS
        boda=Leer ('Ingrese la decada:')
        //PROCESO
        if ((boda>0) && (boda<=10)){
            console.log ('El significado de aniversario es: Boda de Hoja Lata')
        }else{
            if ((boda>=11) && (boda<=20)){
                console.log ('El significado de aniversario es: Boda de Porcelana')
            }else{
                if ((boda>=21) && (boda<=30)){
                    console.log ('El significado de aniversaio es: Boda de Perlas')
                }else{
                    if ((boda>=31) && (boda<=40)){
                        console.log ('El significado de boda es: Boda de Rubi')
                    }else{
                        if ((boda>=41) && (boda<=50)){
                            console.log ('El significado de boda es: Boda de Oro')
                        }else{
                            if ((boda>=51) && (boda<=60)){
                                console.log ('El significado de boda es: Boda de Diamante')
                            }else{
                                console.log ('No existe tematica de para esa decada')
                            }
                        }
                    }
                }   
            }
        }
    }
    
//EJERICICIO 18 SECUENCIALES MENU DE OPCIONES 
ejercicio18(){
	console.log ("EJERICICIO 18 SECUENCIALES MENU DE OPCIONES")
        console.log ('Menu de opciones')
        console.log ("1. Elevar un numero a una potencia")
        console.log ("2. Raiz cuadrada de un numero")
        console.log ("3. Salir")
        //DECLARARMOS LAS VARIABLES
        //INGRESE LOS DATOS
        let opcion=parseFloat(Leer("Escoga una opcion: "))
        //PROCESO
        switch (opcion){
            case 1:
                let num=parseFloat(Leer ("Ingrese la base: "))
                let pot=parseFloat(Leer ("Ingrese la potencia: "))
                let resultado= Math.pow(num,pot)
                console.log ("Resultado es: ",resultado)
                break
            case 2:
                let num2=parseFloat( Leer ("Ingrese un numero: "))
                let resultado2=Math.sqrt(num2)
                console.log ("El resultado es: ", resultado2)
                break
            case 3:
                console.log ("Salir ")
                break
            default:
                console.log ("Esa opcion no existe")
                break
        }

    } 

//EJERICICIO 19 CICLOS SUMA DE N PRIMEROS NUMEROS 
ejercicio19(){
    console.log ("EJERICICIO 19 CICLOS SUMA DE N PRIMEROS NUMEROS") 
        //DECLARARMOS LAS VARIABLES
        let n, i
        //INGRESE LOS DATOS
        n=Leer ("Ingrese la cnatidad de numeros a sumar: ")
        let suma=0
        //PROCESO
        for (let i=1 ;i<=n ;i++){
            suma=suma + i;
        }
        console.log ("La suma es:", suma) 
    }    

//EJERICICIO 20 CICLOS SUMA DE PARES E IMPARES DENTRO DE UN RANGO
ejercicio20(){
	console.log ("EJERICICIO 20 CICLOS SUMA DE PARES E IMPARES ENTRE 1 Y 50")
        //DECLARARMOS LAS VARIABLES
        let par, impar
        par=0, impar=0
        //INGRESE LOS DATOS
        //PROCESO
        for (let n=2;n<=49;n++){
            if (n%2==0){
                par=par+n;
            }else{
                impar=impar+n;
            }
        }
        console.log ("Suma de los pares entre 1 y 50 es:", par)
        console.log ("Suma de imparez entre 1 y 50 es:",impar)
    }

//EJERICICIO 21 CICLOS CANTIDAD DE NUMEROS POSITIVOS, NEGATIVOS Y NEUTROS
ejercicio21(){
    console.log ("EJERICICIO 21 CICLOS CANTIDAD DE NUMEROS POSITIVOS, NEGATIVOS Y NEUTROS")
        //DECLARARMOS LAS VARIABLES
        let num
        let positivos,negativos,neutros
        positivos=0
        negativos=0
        neutros=0
        //INGRESE LOS DATOS
        //PROCESO
        for (let i=1; i<=10; i++){
            num=parseInt(Leer(". Ingrese un numero: "))
            if (num==0){
                neutros++
            }else{
                if (num>0){
                    positivos++
                }else{
                    negativos++
                }   
            }
        }
    console.log ("La cantidad de numeros positivos es: ", positivos)
    console.log ("La cantidad de numeros negativos es: ", negativos)
    console.log ("La cantidad de numeros neutros es: ", neutros)    
    }	


//EJERICICIO 22 CICLOS CALIFICACION, PROMEDIO Y NOTA MAS BAJA 
ejercicio22(){
    console.log ("22 CICLOS CALIFICACION, PROMEDIO Y NOTA MAS BAJA")
        //DECLARARMOS LAS VARIABLES
        let calificacion_promedio, calificacion_baja
        let calificacion, suma 
        let i 
        suma=0
        calificacion_baja=99999
        //INGRESE LOS DATOS
        //PROCESO
        for(i=1;i<=10;i++<=1){
            calificacion=parseInt(Leer(i+".Digite una calificacion:")) 
            suma=suma+calificacion
            if (calificacion<calificacion_baja){
                calificacion_baja=calificacion;
            }
        }
        calificacion_promedio=(suma/10)
        console.log("El promedio de todas las notas es:", calificacion_promedio)
        console.log("La calificacion mas baja es :" , calificacion_baja)
    }

//EJERICICIO 23 CICLOS FACTORIAL DE UN NUMERO
ejercicio23(){
    console.log ("EJERICICIO 23 CICLOS FACTORIAL DE UN NUMERO")
        //DECLARARMOS LAS VARIABLES
        let factorial, n
        factorial=1
        //INGRESE LOS DATOS
        n=parseInt(Leer ('Ingrese un numero:'))      
        //PROCESO
        for (let i=1; i<=n; i++){
            factorial=factorial*i
        }
        console.log ('El factorial de ',n,' es: ',factorial)
    }	    

//EJERICICIO 24 CICLOS SUMA ITERATIVA DE CUADRADOS
ejercicio24(){
    console.log ("EJERICICIO 24 CICLOS SUMA ITERATIVA DE CUADRADOS")
        //DECLARARMOS LAS VARIABLES
        let n, suma
        suma=0
        //INGRESE LOS DATOS
        n=parseInt(Leer ("Ingrese el numero de elementos a sumarse: ")) 
        //PROCESO
        let i=1
        while (i<=n){
            suma=suma+i**2
            i=i+1 
        }
        console.log ("La suma de todos los elementos es: ", suma)
    }

//EJERICICIO 25 CICLOS SUMA ITERATIVA Y CONTEOS 
ejercicio25(){
    console.log ("EJERICICIO 25 CICLOS SUMA ITERATIVA Y CONTEOS")
        //DECLARARMOS LAS VARIABLES
        let elementos, num, par, impar, suma, suma2
        let promedio
        suma=0, suma2=0 ,par=0, impar=0
        let i=1
        //INGRESE LOS DATOS
        elementos=parseInt(Leer ("Ingrese la cantidad de elementos: "))
        //PROCESO
        while (i<=elementos){
            num=parseInt(Leer (i+ ".Ingrese un numero: "))
            if (num%2==0) {
                suma+=num
                par+=1
            }else{
                suma2+=num
                impar+=1
            } 
            i=i+1
        }

            if (par===0){
                console.log ("No ha ingresado numeros pares")
                
            }else{
                console.log ("La suma de todos los pares es: ", suma)
                console.log ("La suma de todos los pares es: ", par)   
        }

            if (impar===0){
                console.log ("No ha ingresado numeros impares")
            }else{
                promedio=(suma2/impar)
                console.log ("El promedio de los impares es: ", promedio)
        }   
        
    }

//EJERICICIO 26 CICLOS SUMA DE LOS SALARIOS
ejercicio26(){
    console.log ("EJERCICIO 26 CICLOS SUMA DE LOS SALARIOS")  
        //DECLARARMOS LAS VARIABLES
        let i, salario, horas, pagoporhora, suma, personas 
        i=1
        suma=0
        //INGRESE LOS DATOS
        personas=parseInt(Leer ("Ingrese el numero de trabajores: "))
        pagoporhora=parseFloat(Leer("Ingrese el pago por hora: "))
        //PROCESO
        while (i<=personas) {
            horas=parseInt(Leer(i+".Ingrese las horas trabajadas por este trabajador:"));
            salario=(pagoporhora*horas)
            console.log("El valor a pagar de este trabajador es: ",salario)
            i = i+1
            suma = suma+salario
        }
        console.log ("El pago por", horas, "horas de trabajo es de: ",salario, "$")
        console.log ("La suma total de los salarios es: ", suma, "$")
    }
}

const secuen1 = new secuenial()
//secuen1.ejercicio1()
//secuen1.ejercicio2()
//secuen1.ejercicio3()
//secuen1.ejercicio4()
//secuen1.ejercicio5()
//secuen1.ejercicio6()
//secuen1.ejercicio7()
//secuen1.ejercicio8()
//secuen1.ejercicio9()
//secuen1.ejercicio10()
//secuen1.ejercicio11()
//secuen1.ejercicio12()
//secuen1.ejercicio13()
//secuen1.ejercicio14()
//secuen1.ejercicio15()
//secuen1.ejercicio16()
//secuen1.ejercicio17()
//secuen1.ejercicio18()
//secuen1.ejercicio19()
//secuen1.ejercicio20()
//secuen1.ejercicio21()
//secuen1.ejercicio22()
//secuen1.ejercicio23()
//secuen1.ejercicio24()
//secuen1.ejercicio25()
//secuen1.ejercicio26()
