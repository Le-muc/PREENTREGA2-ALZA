// Función para ingresar los ingresos mensuales del usuario
function ingresarIngresos() {
    let ingresos = prompt("Ingresa tu ingreso mensual total:");
    return parseFloat(ingresos);
}

// Función para asignar el presupuesto a diferentes categorías
function asignarPresupuesto(ingresos) {
    let vivienda = prompt(`Asigna cuánto quieres gastar en vivienda (Total ingresos: $${ingresos}):`);
    let alimentacion = prompt("Asigna cuánto quieres gastar en alimentación:");
    let transporte = prompt("Asigna cuánto quieres gastar en transporte:");
    return { 
        vivienda: parseFloat(vivienda), 
        alimentacion: parseFloat(alimentacion), 
        transporte: parseFloat(transporte) 
    };
}

// Función para calcular los ahorros
function calcularAhorros(ingresos, presupuesto) {
    let gastosTotales = presupuesto.vivienda + presupuesto.alimentacion + presupuesto.transporte;
    let ahorros = ingresos - gastosTotales;
    return ahorros;
}

// Función para mostrar un resumen financiero
function mostrarResumen(ingresos, presupuesto, ahorros) {
    alert(`Resumen Financiero:\nIngresos: $${ingresos}\nGastos Totales: $${presupuesto.vivienda + presupuesto.alimentacion + presupuesto.transporte}\nAhorros: $${ahorros}`);
}

// Ejecución del simulador
function simuladorFinanciero() {
    let ingresos = ingresarIngresos(); // Paso 1: Ingresar ingresos
    let presupuesto = asignarPresupuesto(ingresos); // Paso 2: Asignar presupuesto
    let ahorros = calcularAhorros(ingresos, presupuesto); // Paso 3: Calcular ahorros
    mostrarResumen(ingresos, presupuesto, ahorros); // Paso 4: Mostrar resumen
}

// Llamada para iniciar el simulador financiero
simuladorFinanciero();