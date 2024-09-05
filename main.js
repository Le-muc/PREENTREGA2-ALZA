function validarIngreso(ingreso) {
    return !isNaN(ingreso) && ingreso >= 0;
}


function ingresarIngresos() {
    let ingresos;
    do {
        ingresos = parseFloat(prompt("Ingresa tu ingreso mensual total:"));
    } while (!validarIngreso(ingresos));
    return ingresos;
}


function asignarPresupuesto(ingresos) {
    const categorias = ['vivienda', 'alimentacion', 'transporte', 'entretenimiento', 'salud'];
    const presupuesto = {};

    categorias.forEach(categoria => {
        let gasto;
        do {
            gasto = parseFloat(prompt(`Asigna cuánto quieres gastar en ${categoria} (Total ingresos: $${ingresos}):`));
        } while (!validarIngreso(gasto));
        presupuesto[categoria] = gasto;
    });

    return presupuesto;
}


function calcularAhorros(ingresos, presupuesto) {
    const gastosTotales = Object.values(presupuesto).reduce((total, gasto) => total + gasto, 0);
    let ahorros = ingresos - gastosTotales;
    return { ahorros, gastosTotales };
}


function sugerirAjustes(ahorros, presupuesto) {
    if (ahorros < 0) {
        alert("¡Cuidado! Estás gastando más de lo que ingresas.");
        console.log("Sugerencias para reducir gastos:");
        for (let categoria in presupuesto) {
            console.log(`Considera reducir los gastos en ${categoria}.`);
        }
    }
}


function mostrarResumen(ingresos, presupuesto, ahorros, gastosTotales) {
    alert(`Resumen Financiero:\nIngresos: $${ingresos}\nGastos Totales: $${gastosTotales}\nAhorros: $${ahorros}`);
}


function simuladorFinanciero() {
    let ingresos = ingresarIngresos(); 
    let presupuesto = asignarPresupuesto(ingresos); 
    let { ahorros, gastosTotales } = calcularAhorros(ingresos, presupuesto); 
    sugerirAjustes(ahorros, presupuesto); 
    mostrarResumen(ingresos, presupuesto, ahorros, gastosTotales); 
}


simuladorFinanciero();
