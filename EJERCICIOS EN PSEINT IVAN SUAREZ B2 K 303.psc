//EJERICICIO 1 ENTIDADES PRIMITIVAS FORMULA GENERAL
Funcion ejercicio1()
	Escribir	"EJERICICIO 1 ENTIDADES PRIMITIVAS FORMULA GENERAL";	
definir a, b, c, resultado1 Como Real;

Escribir "Ingrese valor de A:";
Leer a;
Escribir "Ingrese valor de B:";
Leer b;
Escribir "Ingrese valor de C:";
Leer c;

resultado1 <- -b + raiz( b^2 + (4 * a * c )) / 2 * a;
Escribir "El resultado de es: ", resultado1;
FinFuncion

//EJERICICIO 2 ENTIDADES PRIMITIVAS SOLUCION LOGICA
Funcion ejercicio2()
	Escribir	"EJERICICIO 2 ENTIDADES PRIMITIVAS SOLUCION LOGICA";
Definir a Como reales;
Definir b Como reales;
Definir resultado Como logico;

Escribir "Ingrese el valor de a";
Leer a;
Escribir "Ingrese el valor de b";
Leer b;

resultado <-((3+5*8)<3 Y ((-6/3*4)+2<2)) O (a>b);

Escribir "El resultado es:", resultado;
FinFuncion

//EJERICICIO 3 ENTIDADES PRIMITIVAS CAMBIO DE VALORES
Funcion ejercicio3()
	Escribir "EJERICICIO 3 ENTIDADES PRIMITIVAS CAMBIO DE VALORES";
	Definir a, b, aux Como Entero;

Escribir "Ingrese el valor de A:";
leer a;
Escribir "Ingrese el valor de B:";
leer b;

aux <- a;
a <- b;
b <- aux;

Escribir "El nuevo valor de A es:",a;
Escribir "El nuevo valor de B es:",b;
FinFuncion

//EJERICICIO 4 SECUENCIALES HORAS MIN SEG 
Funcion ejercicio4()
	Escribir	"EJERICICIO 4 ENTIDADES PRIMITIVAS TOTAL DE SEGUNDOS EQUIVALENTES";
	Definir horas, min, seg Como Entero;
	Definir horas_seg, min_seg, total Como Entero;
	
	Escribir "Ingrese las horas: ";
	Leer horas;
	Escribir "Ingrese los minutos: ";
	Leer min;
	Escribir "Ingrese los segundos: ";
	Leer seg;
	
	horas_seg <- horas * 3600;
	min_seg <- min * 60;
	total <- horas_seg + min_seg;
	
	Escribir "Los segundos equivalentes son:",total;
FinFuncion

//EJERICICIO 5 SECUENCIALES AREA Y LONGITUD DE UN CIRCULO
Funcion ejercicio5()
	Escribir "EJERICICIO 5 SECUENCIALES AREA Y LONGITUD DE UN CIRCULO";
	definir radio, area, Long Como Real;
	
	Escribir "Ingrese el radio del circulo";
	Leer radio;
	
	area <-  PI*radio^2;
	long <- 2*PI*radio;
	
	Escribir "Area de la circunferencia: ",area;
	Escribir "Longuitud de la circunferencia: ",long;
FinFuncion

//EJERICICIO 6 SECUENCIALES PORCENTAJE DE HOMBRES Y MUJERES 
Funcion ejercicio6()
	Escribir "EJERICICIO 6 SECUENCIALES PORCENTAJE DE HOMBRES Y MUJERES";
	Definir hombres, mujeres Como Entero;
	Definir grupo Como Entero;
	Definir porcentaje_hombres, porcentaje_mujeres Como Real;
	
	Escribir "Ingrese el numero de hombres:";
	Leer hombres;
	
	Escribir "Ingrese el numero de mujeres:";
	Leer mujeres;
	
	grupo <- hombres + mujeres;
	Escribir "Total del grupo:", grupo;
	
	porcentaje_hombres <- trunc(hombres / grupo * 100);
	porcentaje_mujeres <- trunc(mujeres / grupo * 100);
	Escribir "Porcentaje de hombres:", porcentaje_hombres,"%";
	Escribir "Porcentaje de mujeres:", porcentaje_mujeres,"%";
FinFuncion

//EJERICICIO 7 SECUENCIALES HORAS Y MINUTOS EXAMENES
Funcion ejercicio7()
	Escribir "EJERICICIO 7 SECUENCIALES TOTAL DE HORAS Y MINUTOS QUE TARDA EN REVIAR LOS EXAMENES";
	Definir exam_A, exam_B, exam_C Como Entero;
	Definir minA, minB, minC Como Entero;
	Definir total_tiempo, total_min, total_horas Como Entero;
	
	Escribir "Ingrese cantidad de evaluaciones A:";
	Leer exam_A;
	Escribir "Ingrese cantidad de evaluaciones B:";
	Leer exam_B;
	Escribir "Ingrese cantidad de evaluaciones C:";
	Leer exam_C;
	
	minA <- exam_A * 5;
	minB <- exam_B * 8;
	minC <- exam_C * 6;
	
	total_tiempo <- minA + minB + minC;
	
	total_horas <- trunc(total_tiempo / 60) ;
	total_min <- total_tiempo mod 60;
	
	Escribir "Se tardaria ", total_horas, " horas con ", total_min, " minutos";
FinFuncion

//EJERICICIO 8 SECUENCIALES DESCUENTO DEL 15% 
Funcion ejercicio8()
	Escribir "EJERICICIO 8 SECUENCIALES DESCUENTO DEL 15% ";
	Definir total Como Real;
	Definir descuento Como Real;
	Definir precioapagar Como Real;
	
	Escribir "Ingrese monto total:";
	leer total;
	
	descuento <- total * 0.15;
	precioapagar <- total - descuento;
	
	Escribir "Total a pagar con el 15% de descuento es: ", precioapagar," $";
FinFuncion

//EJERICICIO 9 SECUENCIALES CALIFICACIONES DE UN ALUMNO
Funcion ejercicio9()
	Escribir "EJERICICIO 9 SECUENCIALES NOTA FINAL DE UN ALUMNO";
	Definir parcial1, parcial2, parcial3, promedio, examenfinal,trabajofinal Como real;
	Definir porcentaje_calificaciones, porcentaje_examenfinal, porcentaje_trabajofinal Como Real;
	Definir notafinal Como Real;	
	
	Escribir "Ingrese nota de su parcial 1:"; 
	Leer parcial1;
	Escribir "Ingrese nota de su parcial 2:"; 
	Leer parcial2;
	Escribir "Ingrese nota de su parcial 3:"; 
	Leer parcial3;
	
	Escribir "Ingrese nota de examen final:"; 
	Leer examenfinal;
	
	Escribir "Ingrese nota de trabajo final:"; 
	Leer trabajofinal;
	
	promedio <- parcial1 + parcial2 + parcial3;
	porcentaje_calificaciones <- redon(promedio / 3 * 0.55);
	Escribir "55% Promedio de sus tres notas parciales es de: ", porcentaje_calificaciones;
	
	porcentaje_examenfinal <- redon(examenfinal * 0.30);
	Escribir "30% calificacion examen final: ", porcentaje_examenfinal;
	
	porcentaje_trabajofinal <- redon(trabajofinal * 0.15);
	Escribir "15% calificacion trabajo final: ", porcentaje_trabajofinal;
	
	notafinal <- porcentaje_calificaciones + porcentaje_examenfinal + porcentaje_trabajofinal;
	Escribir "Nota final: ", notafinal;
FinFuncion

//EJERICICIO 10 SECUENCIALES NUMERO PAR E IMPAR
Funcion ejercicio10()
	Escribir "EJERICICIO 10 SECUENCIALES NUMERO PAR E IMPAR";
	Definir numero1 Como Entero;
	
	Escribir "Ingrese un numero:";
	leer numero1;
	
	Si numero1 mod 2 = 0 Entonces
		Escribir "el numero ", numero1, " es par";
	SiNo
		Escribir "el numero ", numero1, " es impar";
	FinSi
FinFuncion

//EJERICICIO 11 SECUENCIALES APROBADO O REPROBADO 
Funcion ejercicio11() 
	Escribir "EJERICICIO 11 SECUENCIALES APROBADO O REPROBADO";
	Definir nota1,nota2,nota3 Como Real;
	definir promedio como real;
	Escribir "Iingrese nota 1:";
	Leer nota1;
	Escribir "Ingrese nota 2:";
	Leer nota2;
	Escribir "Ingrese nota 3:";
	Leer nota3;
	promedio <- (nota1 + nota2 + nota3) / 3;
	Si promedio >= 70 Entonces
		Escribir "Aprobado con:", promedio;
	SiNo
		Escribir "Reprobado con:", promedio;
	FinSi	
FinFuncion

//EJERICICIO 12 SECUENCIALES DESCUENTO SI SUPERA LOS 100$
Funcion ejercicio12()
	Escribir "EJERICICIO 12 SECUENCIALES DESCUENTO SI lA COMPRA SUPERA LOS 100$";
	definir total, descuento, totalapagar como real;
	Escribir "Ingrese el total:";
	Leer total;
	Si total > 100 Entonces
		descuento <- total * 0.20;
		totalapagar <- total - descuento ;
		Escribir "Total a pagar con descuento:",totalapagar;
	SiNo
		Escribir "Total a pagar sin descuento es:",total;
	FinSi
FinFuncion

//EJERICICIO 13 SECUENCIALES OPERACIONES CON 2 NUMEROS
Funcion ejercicio13()
	Escribir "EJERICICIO 13 SECUENCIALES OPERACIONES CON 2 NUMEROS";
	Definir num1, num2 Como Real;
	Definir resultado Como Real;
	
	Escribir "Ingrese dos numeros:";
	Leer num1, num2;
	
	Si num1=num2 Entonces
		resultado <- num1*num2;
		Escribir "Como ",num1, " no es igual a ", num2, " en ese caso se multiplica";
	SiNo
		Si num1>num2 Entonces
			resultado <- num1-num2;
			Escribir "Como ",num1, " es mayor a ", num2, " en ese caso se resta";
		SiNo
			resultado <- num1+num2;
			Escribir "Como ",num1, " es menor a ", num2, " en ese caso se suma";
		FinSi
		
	FinSi
	
	Escribir "El resultado es: ", resultado;
FinFuncion

//EJERICICIO 14 SECUENCIALES DETERMINAR EL MAYOR DE LOS 3 NUMEROS
Funcion ejercicio14()
	Escribir "EJERICICIO 14 SECUENCIALES ETERMINAR EL MAYOR DE LOS 3 NUMEROS";
	Definir num1,num2, num3 Como Real;
	Escribir 'Ingrese los 3 numeros: ';
	Leer num1;
	Leer num2;
	Leer num3;
	Si num1>num2 y num1>num3 Entonces
		Escribir "El mayor es",num1;
	SiNo
		Si num2>num1 y num2>num3 Entonces
			Escribir "El mayor es:", num2;
		SiNo
			Escribir "El mayor es:",num3;
		FinSi
	FinSi
FinFuncion

//EJERICICIO 15 SECUENCIALES DESCUENTO SEGUN EL KILO DE MANZANAS
Funcion ejercicio15() 
	Escribir "EJERICICIO 15 SECUENCIALES DESCUENTO SEGUN EL KILO DE MANZANAS";
	Definir peso, total Como Real;
	Definir descuento10, descuento_15, descuento20 Como Real;
	Definir precionormal,precio10,precio15,precio20 Como Real;
	Escribir 'Ingrese los kilos de manzana comprados: ';
	Leer peso;
	Escribir 'Ingrese el precio del kilo de manzanas: ';
	Leer total;
	Si peso>0 Y peso<=2 Entonces
		precionormal <- total;
		Escribir 'Compro 2 kilos o menos no aplica descuento';
		Escribir 'El total a pagar es: ',total,' $';
	SiNo
		Si peso>2.01 Y peso<=5 Entonces
			descuento10 <- total*0.10;
			precio10 <- total-descuento10;
			Escribir 'Compro de 2.01 a 5 kilos de manzanas aplica un descuento del 10%';
			Escribir 'El total a pagar es: ',precio10,' $';
		SiNo
			Si peso>5.01 Y peso<=10 Entonces
				descuento_15 <- total*0.15;
				precio15 <- total- descuento_15;
				Escribir 'Compro de 5.01 a 10 kilos de manzanas aplica un descuento del 15%';
				Escribir 'El total a pagar es: ',precio15,' $';
			SiNo
				descuento20 <- total*0.20;
				precio20 <- total-descuento20;
				Escribir 'Compro 10.01 o mas kilos de manzanas aplica un descuento del 20%';
				Escribir 'El precio a pagar es: ',precio20,' $';
			FinSi
		FinSi
	FinSi
FinFuncion

//EJERICICIO 16 SECUENCIALES DIAS DE LA SEMANA
Funcion ejercicio16()
	Escribir "EJERICICIO 16 SECUENCIALES DIAS DE LA SEMANA";
	Definir dia Como Entero;
	
	Escribir "Ingrese un numero del 1 al 7:";
	Leer dia;
	
	Si dia = 1 Entonces
		Escribir "El dia de la semana es Lunes";
	SiNo
		Si dia = 2 Entonces
			Escribir "El dia de la semana es Martes";
		SiNo
			Si dia = 3 Entonces
				Escribir "El dia de la semana es Miercoles";
			SiNo
				Si dia = 4 Entonces
					Escribir "El dia de la semana es Jueves";
				SiNo
					Si dia = 5 Entonces
						Escribir "El dia de la semana es Viernes";
					SiNo
						Si dia = 6 Entonces
							Escribir "El dia de la semana es Sabado";
						SiNo
							Si dia = 7 Entonces
								Escribir "El dia de la semana es Domingo";
							SiNo
								Escribir "Ingrese solo numeros del 1 al 7:";
							FinSi
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinFuncion

//EJERICICIO 17 SECUENCIALES TEMATICA DE ANIVERSARIO DE BODA SEGUN LA BODA
Funcion ejercicio17()
	Escribir "EJERICICIO 17 SECUENCIALES tEMATICA DE ANIVERSARIO DE BODA SEGUN LA BODA";
	Definir boda Como Entero;
	
	Escribir 'Ingrese la decada:';
	Leer boda;
	
	Si boda>0 y boda<=10 Entonces
		Escribir 'El significado de aniversario es: Boda de Hoja lata';
	SiNo
		Si boda>=11 y boda<=20 Entonces
			Escribir 'El significado de aniversario es: Boda de porcelana';
		SiNo
			Si boda>=21 y boda<=30 Entonces
				Escribir 'El significado de aniversaio es: Boda de perlas';
			SiNo
				Si boda>=31 y boda<=40 Entonces
					Escribir 'El significado de boda es: Boda de Rubi';
				SiNo
					Si boda>=41 y boda<=50 Entonces
						Escribir 'El significado de boda es: Boda de Oro';
					SiNo
						Si boda>=51 y boda<=60 Entonces
							Escribir 'El significado de boda es: Boda de Diamante';
						SiNo
							Escribir 'No existe tematica de esadecada';
						FinSi
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinFuncion

//EJERICICIO 18 SECUENCIALES MENU DE OPCIONES 
Funcion ejercicio18()
	Escribir "EJERICICIO 18 SECUENCIALES MENU DE OPCIONES";
	Definir opcion Como Real;
	Escribir 'Menu de opciones:';
	Escribir '1. Elevar un numero a una potencia';
	Escribir '2. Raiz cuadrada de un numero';
	Escribir '3. Salir';
	Escribir 'Escoger una opcion';
	Leer opcion;
	Segun opcion  Hacer
		1:
			definir num, potencia, resultado como reales;
			Escribir "Ingrese un numero: ";
			Leer num;
			Escribir "Ingrese la potencia: ";
			Leer potencia;
			resultado <- num^potencia;
			Escribir "Resultado es: ",resultado;
		2:
			definir num, resultado como reales;
			Escribir "	Ingrese un numero: ";
			Leer num;
			resultado <- rc(num);
			Escribir "El resultado es: ", resultado;
		3:
		De Otro Modo:
			Escribir "Salir";
	FinSegun
FinFuncion

//EJERICICIO 19 CICLOS SUMA DE N PRIMEROS NUMEROS 
Funcion ejercicio19()
	Escribir "EJERICICIO 19 CICLOS SUMA DE N PRIMEROS NUMEROS"; 
	Definir n, suma, i Como entero;
	
	Escribir "INgrese la cnatidad de numeros a sumar: ";
	leer n;
	
	suma <- 0;
	
	para i <- 1 Hasta n Con Paso 1 Hacer
		suma <- suma + i;
	FinPara
	
	Escribir "La suma es:", suma;
	
FinFuncion

//EJERICICIO 20 CICLOS SUMA DE PARES E IMPARES DENTRO DE UN RANGO
Funcion ejercicio20()
	Escribir "EJERICICIO 20 CICLOS SUMA DE PARES E IMPARES ENTRE 1 Y 50";
	Definir n,suma,par,impar Como Entero;
	par <- 0;
	impar <- 0;
	
	Para n<-2 Hasta 49 Hacer
		Si n mod 2 = 0 Entonces
			par <- par + n;
		SiNo
			impar <- impar + n;
		FinSi
	FinPara
	
	Escribir "Suma de los pares entre 1 y 50 es:", par;
	Escribir "Suma de imparez entre 1 y 50 es:",impar;
FinFuncion

//EJERICICIO 21 CICLOS CANTIDAD DE NUMEROS POSITIVOS, NEGATIVOS Y NEUTROS
Funcion ejercicio21()
	Escribir "EJERICICIO 21 CICLOS CANTIDAD DE NUMEROS POSITIVOS, NEGATIVOS Y NEUTROS";
	Definir num,i Como Entero;
	Definir positivos,negativos,neutros Como Entero;
	positivos <- 0;
	negativos <- 0;
	neutros <- 0;
	Para i<-1 Hasta 10 Hacer
		Escribir i, ". Ingrese un numero: ";
		Leer num;
		Si num=0 Entonces
			neutros <- neutros + 1;
		SiNo
			Si num>0 Entonces
				positivos <- positivos + 1;
			SiNo
				negativos <- negativos + 1;
			FinSi
		FinSi
	FinPara
	Escribir "La cantidad de numeros positivos es: ", positivos;
	Escribir "La cantidad de numeros negativos es: ", negativos;
	Escribir "La cantidad de numeros neutros es: ", neutros;
FinFuncion

//EJERICICIO 22 CICLOS CALIFICACION, PROMEDIO Y NOTA MAS BAJA 
Funcion ejercicio22()
	Escribir "EJERICICIO 22 CICLOS CALIFICACION, PROMEDIO Y NOTA MAS BAJA";
	Definir num, i, suma, promedio, calificacion_baja  Como Real;
	
	suma <- 0;
	calificacion_baja <- 9999;
	
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		Escribir i, ". Ingrese la calificacion: ";
		Leer num;
		
		suma <- suma + num ;
		
		Si num < calificacion_baja Entonces
			calificacion_baja <- num;
		FinSi
		
	FinPara
	
	promedio <- suma / 10;
	Escribir "La promedio de todas las notas es: ", promedio;
	Escribir "La calificacion mas baja es: ", calificacion_baja;
FinFuncion

//EJERICICIO 23 CICLOS FACTORIAL DE UN NUMERO
Funcion ejercicio23()
	Escribir "EJERICICIO 23 CICLOS FACTORIAL DE UN NUMERO";
	Definir n,i,factorial Como Entero;
	
	Repetir
		Escribir 'Ingrese un numero: ';
		Leer n;
	Hasta Que n>=0
	
	i <- 1;
	factorial <- 1;
	
	Mientras i<=n Hacer
		factorial <- factorial*i;
		i <- i+1;
	FinMientras
	Escribir 'El factorial de ',n,' es: ',factorial;
FinFuncion

//EJERICICIO 24 CICLOS SUMA ITERATIVA DE CUADRADOS
Funcion ejercicio24()
	Escribir "EJERICICIO 24 CICLOS SUMA ITERATIVA DE CUADRADOS";
	Definir n, i, suma, resultado como entero;
	
	Escribir "Ingrese el numero de elementos a sumarse: ";
	Leer n;
	
	i <- 1;
	suma <- 0;
	Mientras i <= n  Hacer
		suma <- suma + i^2;
		i <- i + 1 ;
	FinMientras
	
	Escribir "La suma de todos los elementos es: ", suma;
FinFuncion

//EJERICICIO 25 CICLOS SUMA ITERATIVA Y CONTEOS 
Funcion ejercicio25()
	Escribir "EJERICICIO 25 CICLOS SUMA ITERATIVA Y CONTEOS";
	Definir e, n, par, impar, suma, suma2, i Como Entero;
	Definir promedio Como Real;
	
	Escribir "Ingrese la cantidad de elementos: ";
	Leer e;
	
	i <- 1;
	suma <- 0;
	par <- 0;
	
	suma2 <- 0;
	impar <- 0;
	
	Mientras i <= e Hacer
		Escribir i, ". Ingrese un numero: ";
		Leer n;
		
		si n mod 2 = 0 Entonces
			suma <- suma + n;
			par <- par + 1;
			
		SiNo
			suma2 <- suma2 + e;
			impar <- impar + 1;
		FinSi
		
		i <- i + 1;
		
	FinMientras
	
	Si par = 0 Entonces
		Escribir  "No ha ingresado numeros pares";
		
	SiNo
		Escribir "La suma de todos los pares es: ", suma;
		Escribir "La suma de todos los pares es: ", par;
		
	FinSi
	
	Si impar = 0 Entonces
		Escribir  "No ha ingresado numeros impares";
	SiNo
		promedio <- suma2 / impar;
		Escribir  "El promedio de los impares es: ", promedio;
		
	FinSi
FinFuncion

//EJERICICIO 26 CICLOS SUMA DE LOS SALARIOS
Funcion ejercicio26()
	Escribir "EJERCICIO 26 CICLOS SUMA DE LOS SALARIOS";
	Definir i,pagoporhora,salario,horas,personas,suma Como Entero;
	i <- 1;
	suma <- 0;
	
	Escribir "Ingrese el numero de trabajadores: ";
	Leer personas;
	Escribir "Ingrese el pago por hora del trabajador: ";
	Leer pagoporhora;
	
	Repetir
		Escribir 'Ingrese las horas del trabajor numero: ',i ;
		Leer horas;
		salario <- pagoporhora*horas;
		Escribir i,'. Total a pagar al trabajador numero ',i, " es de ", salario, "$" ;
		i <- i + 1;
		suma <- suma+salario;
    Hasta Que i>personas
	
	Escribir 'El pago por ', horas,' horas de trabajo es de: ',salario,'$';
	Escribir 'La suma total de los salarios es: ',suma,'$';
FinFuncion

Algoritmo  selectivos
	
	//ejercicio1();
	//ejercicio2();
	//ejercicio3();
	//ejercicio4();
	//ejercicio5();
	//ejercicio6();
	//ejercicio7();
	//ejercicio8();
	//ejercicio9();
	//ejercicio10();
	//ejercicio11(); 
	//ejercicio12();
	//ejercicio13();
	//ejercicio14();
	//ejercicio15();
	//ejercicio16();
	//ejercicio17();
	//ejercicio18();
	//ejercicio19();
	//ejercicio20();
	//ejercicio21();
	//ejercicio22();
	//ejercicio23();
	//ejercicio24();
	//ejercicio25();
	//ejercicio26();
	
FinAlgoritmo 









