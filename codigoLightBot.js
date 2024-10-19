Class Juego{

/*
Ademàs del mapa, estos son los elementos con los que cuenta el juego
Una grilla principal que contrendrà hasta 12 instrucciones a las que puede acceder mi Robot  "robo"
*/
//Atributos del juego

// Dos grillas de Funciones Auxiliares de hasta 8 instrucciones cada una.
ArregloDeAcciones[12]MetodoMain;
ArregloDeAcciones[8]F1;
ArregloDeAcciones[8]F2;
//Ademàs el juego consta de un Robot que podrà seguir instrucciones
Robot robo;

//Acciones :Son las acciones que puede realizar el Robot
    a="Avanzar";
    gi="Girar Izquierda";
    gd="Girar Derecha";
    s="Saltar";
    e="Encender";
    
// El juego comienza cuando el Robot ejecuta la primer instrucciòn del Metodo Main:
 robo.iterarYejecutarMetodoMain(Nivel);

//Cuando prende todas las luces del nivel actual, se desbloquea el Nivel y podrà jugar el siguiente
if(todasLasLucesPrendidas=true){
    robo.desbloquearNivel();
    break;
}
/* CAda nivel contiene acciones segùn la capacidad de cada arreglo. 
El robot siempre iterarà sòlo el Metodo Main para ejecutar sus acciones e intentar desbloquear el nivel
*/

Nivel_1={
MetodoMain=[a,a,e];
F1=[];
F2=[];
}

Nivel_2={
MetodoMain=[gd,a,gi,a,a,a,a,gi,a,e];
F1=[];
F2=[];
}

Nivel_3={
MetodoMain=[ a,s,s,a,gi,F1,F1,F1];
F1=[e,a];
F2=[];
}

Nivel_4={
MetodoMain=[a,s,s,a,gd,a,a,a,a,a,e];
F1=[];
F2=[];
}


Nivel_5={
MetodoMain=[s,f1,a,f1,f2,e];
F1=[a,a,gi];
F2=[e,e,e];
}


Nivel_6={
MetodoMain=[a,F1,gd,F1,e,s,gd,F2,gd,gd,F2,F2];
F1=[s,s];
F2=[a,a,a,e];
}


Nivel_7={
MetodoMain=[F1,gd,a,e,gd,F1];
F1=[F2,e,F2];
F2=[a,e,a,e,a,e,a];
}


Nivel_8={
MetodoMain=[s,a,e,F1,F2,F2,gd,F1,gd,F1];
F1=[a,a,e];
F2=[gd,F1,F1];
}

Nivel_9={
MetodoMain=[s,gi,s,F2];
F1=[e,s,e,a,e,s,gd];
F2=[F1];
}
